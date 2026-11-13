// NOTE: `topics` must be defined as a global const BEFORE this script loads.

const PDFJS_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';
pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_CDN + 'pdf.worker.min.js';

// One worker shared by every document. Without this PDF.js spins up (and
// downloads/parses) a brand new Web Worker for each PDF that gets opened or prefetched.
const sharedPdfWorker = new pdfjsLib.PDFWorker({ name: 'clsp-pdf-worker' });

let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
let scale = 1.0;
let zoomFactor = 1.0; // user-controlled multiplier on top of the auto-fit scale
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3.0;
const LOW_RES_SCALE = 0.4;
// Rendering above 2x is visually indistinguishable but costs 2.25x the memory/time at 3x DPR.
const DEVICE_PIXEL_RATIO = Math.min(Math.max(window.devicePixelRatio || 1, 1), 2);
let currentPdfUrl = '';
let loadGeneration = 0;
let currentTopicIndex = -1;

const STORAGE_KEY = 'clsp_last_read:' + location.pathname;
const baseTitle = document.title;
const scheduleIdle = window.requestIdleCallback
    ? (cb) => window.requestIdleCallback(cb, { timeout: 1500 })
    : (cb) => setTimeout(cb, 80);

// === PDF Document LRU Cache (keeps N parsed documents warm) ===
const MAX_PDF_DOCS = 8;
const pdfCache = {};        // url -> pdfDoc
const pdfCacheOrder = [];   // LRU order, most-recently-used at the end
const pdfLoadPromises = {}; // url -> in-flight Promise<pdfDoc>, de-dupes concurrent loads

function pdfCacheTouch(url) {
    const idx = pdfCacheOrder.indexOf(url);
    if (idx !== -1) pdfCacheOrder.splice(idx, 1);
    pdfCacheOrder.push(url);
}

function pdfCacheSet(url, doc) {
    pdfCache[url] = doc;
    pdfCacheTouch(url);
    let guard = 0;
    while (pdfCacheOrder.length > MAX_PDF_DOCS && guard < pdfCacheOrder.length) {
        const oldUrl = pdfCacheOrder[0];
        // Never evict the document currently on screen
        if (oldUrl === currentPdfUrl) {
            pdfCacheOrder.shift();
            pdfCacheOrder.push(oldUrl);
            guard++;
            continue;
        }
        pdfCacheOrder.shift();
        const oldDoc = pdfCache[oldUrl];
        delete pdfCache[oldUrl];
        dropRenderedPagesFor(oldUrl);
        // With a shared worker the document's data lives on in the worker until
        // destroy() is called. Defer it so any in-flight prefetch render finishes
        // (or rejects into its own catch) instead of racing the teardown.
        if (oldDoc) {
            setTimeout(() => {
                if (oldDoc !== pdfDoc) oldDoc.destroy().catch(() => { });
            }, 4000);
        }
    }
}

function pdfCacheGet(url) {
    const doc = pdfCache[url];
    if (doc) pdfCacheTouch(url);
    return doc || null;
}

// Loads (or returns an already-loading / already-loaded) PDF document.
// Shared by both the "user clicked a topic" path and the background prefetch path.
function getOrLoadDocument(url, onProgress) {
    if (!url || typeof url !== 'string') {
        return Promise.reject(new Error('getOrLoadDocument called with invalid url: ' + url));
    }

    const cached = pdfCacheGet(url);
    if (cached) return Promise.resolve(cached);

    if (pdfLoadPromises[url]) {
        if (onProgress) pdfLoadPromises[url].progressListeners.push(onProgress);
        return pdfLoadPromises[url];
    }

    const progressListeners = onProgress ? [onProgress] : [];
    const loadingTask = pdfjsLib.getDocument({
        url,
        worker: sharedPdfWorker,
        disableRange: false,
        disableStream: false,
        // Only fetch the byte ranges needed for pages actually being rendered,
        // instead of streaming every prefetched PDF in full in the background.
        disableAutoFetch: true,
        rangeChunkSize: 262144,
        disableFontFace: true,
        cMapPacked: true,
        cMapUrl: PDFJS_CDN + 'cmaps/',
        standardFontDataUrl: PDFJS_CDN + 'standard_fonts/'
    });
    loadingTask.onProgress = (progress) => progressListeners.forEach(fn => fn(progress));

    const promise = loadingTask.promise.then(doc => {
        pdfCacheSet(url, doc);
        delete pdfLoadPromises[url];
        return doc;
    }).catch(err => {
        delete pdfLoadPromises[url];
        throw err;
    });
    promise.progressListeners = progressListeners;

    pdfLoadPromises[url] = promise;
    return promise;
}

// === Canvas Pool (reuse offscreen canvases) ===
const canvasPool = [];
function getPooledCanvas() {
    return canvasPool.pop() || document.createElement('canvas');
}
function returnCanvas(c) {
    if (!c) return;
    if (canvasPool.length < 6) {
        canvasPool.push(c);
    } else {
        // Shrinking to 0 releases the backing store immediately instead of waiting for GC.
        c.width = 0;
        c.height = 0;
    }
}

// === LRU Rendered-Page Cache ===
// Each entry is a full-resolution bitmap (often 10+ MB), so keep this small.
const LRU_MAX = 14;
const lruKeys = [];
const renderedPageCache = {};
function lruSet(key, value) {
    const idx = lruKeys.indexOf(key);
    if (idx !== -1) {
        lruKeys.splice(idx, 1);
        const prev = renderedPageCache[key];
        if (prev && prev !== value) returnCanvas(prev.canvas);
    }
    lruKeys.push(key);
    renderedPageCache[key] = value;
    while (lruKeys.length > LRU_MAX) {
        const old = lruKeys.shift();
        const entry = renderedPageCache[old];
        delete renderedPageCache[old];
        if (entry) returnCanvas(entry.canvas);
    }
}
function lruGet(key) {
    const idx = lruKeys.indexOf(key);
    if (idx === -1) return null;
    lruKeys.splice(idx, 1);
    lruKeys.push(key);
    return renderedPageCache[key];
}
function lruHas(key) {
    return Object.prototype.hasOwnProperty.call(renderedPageCache, key);
}
function dropRenderedPagesFor(url) {
    const prefix = url + ':';
    for (let i = lruKeys.length - 1; i >= 0; i--) {
        const key = lruKeys[i];
        if (key.startsWith(prefix)) {
            lruKeys.splice(i, 1);
            const entry = renderedPageCache[key];
            delete renderedPageCache[key];
            if (entry) returnCanvas(entry.canvas);
        }
    }
}

const canvas = document.getElementById('pdfCanvas');
const ctx = canvas.getContext('2d');
canvas.style.imageRendering = 'auto';

// DOM Elements
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageInfo = document.getElementById('pageInfo');
const topicList = document.getElementById('topicList');
const currentTopicLabel = document.getElementById('currentTopic');
const welcomeMsg = document.getElementById('welcomeMessage');
const loadingMsg = document.getElementById('loadingMessage');
const loadingText = document.getElementById('loadingText');
const progressBar = document.getElementById('progressBar');
const pageWrapper = document.getElementById('pageWrapper');
const skeleton = document.getElementById('skeletonShimmer');
const sidebar = document.getElementById('sidebar');
const viewerContainer = document.getElementById('viewerContainer');

// === Topic display names ===
// Topic names in the data files are often raw paths such as
// "12_North_Korea…/NorthKorea-1544.pdf" or "28_Infrastructure - ECONOMYLECTURE-014-1495887081.pdf".
function prettifyTopicName(raw) {
    let s = String(raw || '').trim();
    if (/\.pdf$/i.test(s)) {
        s = s.replace(/\.pdf$/i, '');
        const parts = s.split('/').filter(Boolean);
        s = parts.length > 1 ? parts[parts.length - 2] : parts[0] || s;
    }
    const underscorePrefixed = /^\d+_/.test(s);
    if (underscorePrefixed) {
        // "NN_Title - FileNameToken" → drop the trailing file-name token
        s = s.replace(/\s+-\s+[^\s]+$/, '');
        s = s.replace(/^\d+_/, '');
    }
    s = s.replace(/-\d{9,}$/, '');
    const doubleUnderscores = (s.match(/__/g) || []).length;
    s = s.replace(/__/g, doubleUnderscores >= 2 ? ', ' : ' ');
    s = s.replace(/_/g, ' ');
    if (!underscorePrefixed) s = s.replace(/^\d{1,3}(?:\s*[-.]\s*|\s+)(?=\D)/, '');
    s = s.replace(/\s+/g, ' ').replace(/\s+([!,.)])/g, '$1').trim();
    s = s.charAt(0).toUpperCase() + s.slice(1);
    return s || String(raw || '');
}

function friendlyError(error) {
    const name = error && error.name;
    if (name === 'MissingPDFException') return 'This PDF could not be found.';
    if (name === 'InvalidPDFException') return 'This file is not a valid PDF.';
    if (!navigator.onLine) return 'You appear to be offline.';
    return 'Something went wrong while loading this PDF.';
}

// === Responsive: Auto-scale PDF to container width ===
function getAutoScale(page) {
    const defaultVP = page.getViewport({ scale: 1.0 });
    const style = getComputedStyle(viewerContainer);
    const padX = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const padY = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    const containerW = Math.max(viewerContainer.clientWidth - padX, 120);
    const containerH = Math.max(viewerContainer.clientHeight - padY, 120);
    const fitWidth = containerW / defaultVP.width;
    const fitHeight = containerH / defaultVP.height;
    const isMobile = window.innerWidth <= 900;
    const targetScale = isMobile ? Math.min(fitWidth, fitHeight) : fitWidth;
    return Math.min(targetScale, 2.0);
}

// === Hover-to-prefetch: start warming a PDF as soon as the pointer
// rests on its sidebar entry, so a click lands on an already-loaded doc ===
const HOVER_PREFETCH_DELAY = 130; // ms
const hoverTimers = new WeakMap();

function markPrefetched(btn) {
    if (btn) btn.classList.add('prefetched');
}

function prefetchTopicDocument(topic, btn) {
    if (!topic) return Promise.resolve();
    // Respect data-saver / very slow connections
    const conn = navigator.connection;
    if (conn && (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || ''))) return Promise.resolve();
    const url = encodeURI(topic.pdf);
    if (pdfCacheGet(url)) { markPrefetched(btn); return Promise.resolve(); }
    return getOrLoadDocument(url).then(doc => {
        markPrefetched(btn);
        // Warm the first page too so opening the topic feels instant.
        return prefetchFirstPage(doc, url);
    }).catch(() => { });
}

async function prefetchFirstPage(doc, url) {
    try {
        const page = await doc.getPage(1);
        const predictedScale = getAutoScale(page) * zoomFactor;
        const key = pageCacheKey(url, 1, predictedScale);
        if (lruHas(key)) return;
        const result = await renderToCanvas(doc, 1, predictedScale);
        lruSet(key, result);
    } catch (e) { /* best-effort */ }
}

// Warm the topics immediately before/after the one just opened.
function prefetchNeighbors(index) {
    [index + 1, index - 1].forEach(i => {
        if (i < 0 || i >= topics.length) return;
        scheduleIdle(() => prefetchTopicDocument(topics[i], topicButtons[i]));
    });
}

// === Sidebar: topic list + search ===
const topicButtons = [];
const topicItems = [];
const topicDisplayNames = topics.map(t => prettifyTopicName(t.name));

(function buildSidebar() {
    const fragment = document.createDocumentFragment();
    topics.forEach((topic, index) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'topic-btn';
        btn.title = topicDisplayNames[index];

        const num = document.createElement('span');
        num.className = 'topic-num';
        num.textContent = index + 1;
        const label = document.createElement('span');
        label.className = 'topic-label';
        label.textContent = topicDisplayNames[index];
        btn.append(num, label);

        btn.addEventListener('click', () => {
            loadPDF(topic.pdf, btn, topic.name, topic.spotify_link, index);
            viewerShell.closeSidebar();
        });
        btn.addEventListener('mouseenter', () => {
            const timer = setTimeout(() => prefetchTopicDocument(topic, btn), HOVER_PREFETCH_DELAY);
            hoverTimers.set(btn, timer);
        });
        btn.addEventListener('mouseleave', () => {
            const timer = hoverTimers.get(btn);
            if (timer) clearTimeout(timer);
        });
        btn.addEventListener('focus', () => prefetchTopicDocument(topic, btn));

        li.appendChild(btn);
        fragment.appendChild(li);
        topicButtons.push(btn);
        topicItems.push(li);
    });
    topicList.appendChild(fragment);

    const header = sidebar.querySelector('.sidebar-header');
    if (!header) return;
    const count = document.createElement('span');
    count.className = 'topic-count';
    count.textContent = topics.length;
    header.appendChild(count);

    const searchWrap = document.createElement('div');
    searchWrap.className = 'topic-search';
    searchWrap.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input type="search" placeholder="Search topics…" aria-label="Search topics" autocomplete="off" spellcheck="false">
    `;
    header.appendChild(searchWrap);

    const empty = document.createElement('li');
    empty.className = 'topic-empty';
    empty.textContent = 'No topics match your search.';
    empty.hidden = true;
    topicList.appendChild(empty);

    const input = searchWrap.querySelector('input');
    const haystacks = topicDisplayNames.map((n, i) => `${i + 1} ${n}`.toLowerCase());
    let searchTimer;
    input.addEventListener('input', () => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            const terms = input.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
            let visible = 0;
            topicItems.forEach((li, i) => {
                const match = terms.every(t => haystacks[i].includes(t));
                li.hidden = !match;
                if (match) visible++;
            });
            empty.hidden = visible !== 0;
        }, 60);
    });
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const first = topicItems.find(li => !li.hidden);
            if (first) first.querySelector('button').click();
        }
        if (e.key !== 'Escape') e.stopPropagation();
    });
    sidebar.addEventListener('sidebar:open', () => {
        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            setTimeout(() => input.focus({ preventScroll: true }), 50);
        }
    });
})();

function pageCacheKey(url, num, s) {
    return `${url}:${num}:${s.toFixed(2)}`;
}

function buildSpotifyEmbedUrl(spotifyLink) {
    if (!spotifyLink || typeof spotifyLink !== 'string') return '';

    try {
        const url = new URL(spotifyLink);
        if (!url.hostname.includes('spotify.com')) return '';

        const parts = url.pathname.split('/').filter(Boolean);
        if (parts.length < 2) return '';

        const [resourceType, resourceId] = parts;
        if (!resourceType || !resourceId) return '';

        return `https://open.spotify.com/embed/${resourceType}/${resourceId}?utm_source=generator&theme=0`;
    } catch (error) {
        return '';
    }
}

function buildSpotifyOpenUrl(spotifyLink) {
    if (!spotifyLink || typeof spotifyLink !== 'string') return '';
    try {
        const url = new URL(spotifyLink);
        if (!url.hostname.includes('spotify.com')) return '';
        return `${url.origin}${url.pathname}`;
    } catch (error) {
        return '';
    }
}

function updateSpotify(spotifyLink) {
    const spotifyPlayer = document.getElementById('spotifyPlayer');
    const spotifyLinkFallback = document.getElementById('spotifyLinkFallback');
    if (!spotifyPlayer) return;
    const embedUrl = buildSpotifyEmbedUrl(spotifyLink);
    const openUrl = buildSpotifyOpenUrl(spotifyLink);
    // An empty topic link must not fall back to the default playlist, or the
    // player keeps speaking a different module.
    spotifyPlayer.dataset.src = embedUrl;
    spotifyPlayer.title = embedUrl ? 'Spotify player for the selected topic' : 'No episode for this topic';
    spotifyPlayer.dataset.spotifyFallbackUrl = openUrl;
    viewerShell.syncSpotifySource();
    if (spotifyLinkFallback) {
        if (openUrl) {
            spotifyLinkFallback.href = openUrl;
            spotifyLinkFallback.textContent = 'Open';
            spotifyLinkFallback.setAttribute('aria-label', 'Open in Spotify');
            spotifyLinkFallback.hidden = false;
        } else {
            spotifyLinkFallback.hidden = true;
            spotifyLinkFallback.removeAttribute('href');
        }
    }
}

// === Reading progress (resume where you left off) ===
function saveProgress() {
    if (currentTopicIndex < 0 || !topics[currentTopicIndex]) return;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ pdf: topics[currentTopicIndex].pdf, page: pageNum }));
    } catch (e) { /* storage unavailable */ }
}

function readProgress() {
    try {
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
        if (!data || !data.pdf) return null;
        const index = topics.findIndex(t => t.pdf === data.pdf);
        if (index === -1) return null;
        return { index, page: Math.max(1, parseInt(data.page, 10) || 1) };
    } catch (e) {
        return null;
    }
}

function setLoadingState(state, message) {
    loadingMsg.classList.remove('is-error', 'is-indeterminate');
    if (state === 'hidden') {
        loadingMsg.style.display = 'none';
        return;
    }
    loadingMsg.style.display = 'block';
    loadingText.textContent = message || '';
    if (state === 'error') loadingMsg.classList.add('is-error');
    if (state === 'indeterminate') loadingMsg.classList.add('is-indeterminate');
}

function showPage() {
    pageWrapper.classList.add('active');
}

async function loadPDF(url, btnElement, topicName, spotifyLink, topicIndex, startPage) {
    const myGeneration = ++loadGeneration;

    topicButtons.forEach(b => {
        b.classList.remove('active');
        b.removeAttribute('aria-current');
    });
    if (btnElement) {
        btnElement.classList.add('active');
        btnElement.setAttribute('aria-current', 'true');
    }
    currentTopicIndex = typeof topicIndex === 'number' ? topicIndex : topics.findIndex(t => t.pdf === url);
    const displayName = topicDisplayNames[currentTopicIndex] || prettifyTopicName(topicName);
    currentTopicLabel.textContent = displayName;
    currentTopicLabel.title = displayName;
    document.title = `${displayName} · ${baseTitle}`;

    welcomeMsg.style.display = 'none';

    pageNum = Math.max(1, startPage || 1);
    pageRendering = false;
    pageNumPending = null;
    zoomFactor = 1.0;
    updateZoomButtons();
    updateSpotify(spotifyLink);

    const encodedUrl = encodeURI(url);
    currentPdfUrl = encodedUrl;

    // Already warm (hover-prefetched or previously viewed) — practically instant
    const cachedDoc = pdfCacheGet(encodedUrl);
    if (cachedDoc) {
        pdfDoc = cachedDoc;
        pageNum = Math.min(pageNum, pdfDoc.numPages);
        setLoadingState('hidden');
        skeleton.classList.remove('active');
        showPage();
        renderPage(pageNum);
        prefetchNeighbors(currentTopicIndex);
        return;
    }

    pageWrapper.classList.remove('active');
    skeleton.classList.remove('active');
    setLoadingState('indeterminate', `Opening “${displayName}”`);
    progressBar.style.width = '0%';

    try {
        const doc = await getOrLoadDocument(encodedUrl, (progress) => {
            if (myGeneration !== loadGeneration) return;
            if (progress.total > 0) {
                loadingMsg.classList.remove('is-indeterminate');
                const pct = Math.min(100, Math.round((progress.loaded / progress.total) * 100));
                progressBar.style.width = pct + '%';
            }
        });
        if (myGeneration !== loadGeneration) return;

        pdfDoc = doc;
        pageNum = Math.min(pageNum, pdfDoc.numPages);
        setLoadingState('hidden');
        showPage();
        renderPage(pageNum);
        prefetchNeighbors(currentTopicIndex);
    } catch (error) {
        if (myGeneration !== loadGeneration) return;
        console.error('Error loading PDF:', error);
        setLoadingState('error', friendlyError(error));
        progressBar.style.width = '0%';
        let retry = loadingMsg.querySelector('.retry-btn');
        if (!retry) {
            retry = document.createElement('button');
            retry.type = 'button';
            retry.className = 'nav-btn retry-btn';
            retry.textContent = 'Try again';
            loadingMsg.appendChild(retry);
        }
        retry.onclick = () => loadPDF(url, btnElement, topicName, spotifyLink, topicIndex, startPage);
    }
}

// Render page to pooled offscreen canvas
async function renderToCanvas(doc, num, renderScale, pixelRatio = DEVICE_PIXEL_RATIO) {
    const page = await doc.getPage(num);
    const viewport = page.getViewport({ scale: renderScale * pixelRatio });
    const offscreen = getPooledCanvas();
    offscreen.width = Math.floor(viewport.width);
    offscreen.height = Math.floor(viewport.height);
    const offCtx = offscreen.getContext('2d', { alpha: false });
    offCtx.setTransform(1, 0, 0, 1, 0, 0);
    try {
        await page.render({ canvasContext: offCtx, viewport, background: 'white' }).promise;
    } catch (err) {
        returnCanvas(offscreen);
        throw err;
    }
    return {
        canvas: offscreen,
        width: viewport.width / pixelRatio,
        height: viewport.height / pixelRatio,
        pixelRatio
    };
}

function displayOnCanvas(result, displayWidth, displayHeight) {
    const pixelRatio = result.pixelRatio || DEVICE_PIXEL_RATIO;
    canvas.width = Math.round(displayWidth * pixelRatio);
    canvas.height = Math.round(displayHeight * pixelRatio);
    canvas.style.width = `${displayWidth}px`;
    canvas.style.height = `${displayHeight}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(result.canvas, 0, 0, canvas.width, canvas.height);
}

// Prefetch adjacent pages during idle time
function prefetchPages(num, doc, url, gen) {
    const pages = [num + 1, num + 2, num - 1].filter(p => p >= 1 && p <= doc.numPages);
    const renderScale = scale;

    // Sequential so idle prefetch never competes with itself for the worker.
    (function next() {
        if (!pages.length || gen !== loadGeneration) return;
        const p = pages.shift();
        const key = pageCacheKey(url, p, renderScale);
        if (lruHas(key)) { next(); return; }
        scheduleIdle(() => {
            if (gen !== loadGeneration || lruHas(key)) { next(); return; }
            renderToCanvas(doc, p, renderScale).then(result => {
                if (gen === loadGeneration) lruSet(key, result);
                else returnCanvas(result.canvas);
            }).catch(() => { }).then(next);
        });
    })();
}

function updatePageUi(num, total) {
    pageInfo.textContent = `Page ${num} of ${total}`;
    prevBtn.disabled = num <= 1;
    nextBtn.disabled = num >= total;
    document.documentElement.style.setProperty('--read-progress', `${(num / total) * 100}%`);
}

function finishRender() {
    pageRendering = false;
    if (pageNumPending !== null) {
        const p = pageNumPending; pageNumPending = null;
        renderPage(p);
    }
}

async function renderPage(num) {
    pageRendering = true;
    const myGeneration = loadGeneration;
    const myDoc = pdfDoc;
    const myUrl = currentPdfUrl;

    try {
        const firstPage = await myDoc.getPage(num);
        if (myGeneration !== loadGeneration) { pageRendering = false; return; }
        scale = getAutoScale(firstPage) * zoomFactor;

        const fullKey = pageCacheKey(myUrl, num, scale);
        updatePageUi(num, myDoc.numPages);
        saveProgress();

        // CASE 1: Cached — instant display, no skeleton flash at all
        const cached = lruGet(fullKey);
        if (cached) {
            skeleton.classList.remove('active');
            displayOnCanvas(cached, cached.width, cached.height);
            canvas.style.opacity = '1';
            finishRender();
            prefetchPages(num, myDoc, myUrl, myGeneration);
            return;
        }

        // Show skeleton shimmer at the final page size
        const fullViewport = firstPage.getViewport({ scale });
        canvas.width = Math.round(fullViewport.width * DEVICE_PIXEL_RATIO);
        canvas.height = Math.round(fullViewport.height * DEVICE_PIXEL_RATIO);
        canvas.style.width = `${fullViewport.width}px`;
        canvas.style.height = `${fullViewport.height}px`;
        skeleton.classList.add('active');

        // CASE 2: Progressive rendering — blurry preview first, then full quality
        const lowRes = await renderToCanvas(myDoc, num, LOW_RES_SCALE, 1);
        if (myGeneration !== loadGeneration) { returnCanvas(lowRes.canvas); pageRendering = false; return; }
        displayOnCanvas({ ...lowRes, pixelRatio: DEVICE_PIXEL_RATIO }, fullViewport.width, fullViewport.height);
        returnCanvas(lowRes.canvas);
        canvas.style.opacity = '1';
        canvas.classList.add('is-preview');
        skeleton.classList.remove('active');

        const fullRes = await renderToCanvas(myDoc, num, scale);
        if (myGeneration !== loadGeneration) { returnCanvas(fullRes.canvas); pageRendering = false; return; }
        lruSet(fullKey, fullRes);
        displayOnCanvas(fullRes, fullRes.width, fullRes.height);
        canvas.classList.remove('is-preview');

        finishRender();
    } catch (err) {
        if (myGeneration === loadGeneration) console.error('Render error:', err);
        skeleton.classList.remove('active');
        canvas.classList.remove('is-preview');
        pageRendering = false;
        return;
    }

    if (myGeneration === loadGeneration) {
        prefetchPages(num, myDoc, myUrl, myGeneration);
    }
}

function queueRenderPage(num) {
    if (pageRendering) { pageNumPending = num; } else { renderPage(num); }
}

function goToPage(num) {
    if (!pdfDoc) return;
    const target = Math.min(Math.max(1, num), pdfDoc.numPages);
    if (target === pageNum) return;
    pageNum = target;
    viewerContainer.scrollTo({ top: 0, left: viewerContainer.scrollLeft });
    queueRenderPage(pageNum);
}

function onPrevPage() { goToPage(pageNum - 1); }
function onNextPage() { goToPage(pageNum + 1); }
const zoomInBtn = document.getElementById('zoomIn');
const zoomOutBtn = document.getElementById('zoomOut');
const zoomLevelLabel = document.getElementById('zoomLevel');

function updateZoomButtons() {
    if (zoomInBtn) zoomInBtn.disabled = zoomFactor >= MAX_ZOOM - 0.001;
    if (zoomOutBtn) zoomOutBtn.disabled = zoomFactor <= MIN_ZOOM + 0.001;
    if (zoomLevelLabel) zoomLevelLabel.textContent = Math.round(zoomFactor * 100) + '%';
}

function setZoom(next) {
    if (!pdfDoc) return;
    const clamped = Math.min(Math.max(next, MIN_ZOOM), MAX_ZOOM);
    if (Math.abs(clamped - zoomFactor) < 0.001) return;
    zoomFactor = clamped;
    updateZoomButtons();
    queueRenderPage(pageNum);
}
function zoomIn() { setZoom(zoomFactor * 1.2); }
function zoomOut() { setZoom(zoomFactor / 1.2); }
function zoomReset() { setZoom(1); }

prevBtn.addEventListener('click', onPrevPage);
nextBtn.addEventListener('click', onNextPage);
if (zoomInBtn) zoomInBtn.addEventListener('click', zoomIn);
if (zoomOutBtn) zoomOutBtn.addEventListener('click', zoomOut);
if (zoomLevelLabel) {
    zoomLevelLabel.title = 'Reset zoom';
    zoomLevelLabel.addEventListener('click', zoomReset);
}
updateZoomButtons();

// === Touch Swipe Navigation ===
let touchStartX = 0;
let touchStartY = 0;
viewerContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });
viewerContainer.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) onNextPage();
        else onPrevPage();
    }
}, { passive: true });

// === Resize: re-fit when the viewer's size actually changes ===
let resizeTimer;
let lastViewerWidth = viewerContainer.clientWidth;
let lastViewerHeight = viewerContainer.clientHeight;
function onViewerResize() {
    const w = viewerContainer.clientWidth;
    const h = viewerContainer.clientHeight;
    if (w === lastViewerWidth && h === lastViewerHeight) return;
    lastViewerWidth = w;
    lastViewerHeight = h;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (pdfDoc) queueRenderPage(pageNum);
    }, 200);
}
if (window.ResizeObserver) new ResizeObserver(onViewerResize).observe(viewerContainer);
else window.addEventListener('resize', onViewerResize);

// Keyboard navigation + download prevention
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && ['s', 'p', 'u'].includes(e.key.toLowerCase())) {
        e.preventDefault(); e.stopPropagation(); return false;
    }
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'j'].includes(e.key.toLowerCase())) {
        e.preventDefault(); e.stopPropagation(); return false;
    }
    if (e.key === 'F12') { e.preventDefault(); e.stopPropagation(); return false; }
    if (e.key === 'PrintScreen') { e.preventDefault(); return false; }
    if (e.target && e.target.matches && e.target.matches('input, textarea')) return;
    if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        viewerShell.openSidebar();
        const input = sidebar.querySelector('.topic-search input');
        if (input) input.focus();
        return;
    }
    if (!pdfDoc) return;
    switch (e.key) {
        case 'ArrowLeft': case 'PageUp': e.preventDefault(); onPrevPage(); break;
        case 'ArrowRight': case 'PageDown': e.preventDefault(); onNextPage(); break;
        case 'Home': e.preventDefault(); goToPage(1); break;
        case 'End': e.preventDefault(); goToPage(pdfDoc.numPages); break;
        case '+': case '=': e.preventDefault(); zoomIn(); break;
        case '-': e.preventDefault(); zoomOut(); break;
        case '0': e.preventDefault(); zoomReset(); break;
    }
});

document.addEventListener('dragstart', (e) => e.preventDefault());
document.addEventListener('drop', (e) => e.preventDefault());

// === Welcome screen: resume card + idle-time warm-up ===
viewerShell.whenUnlocked(() => {
    const progress = readProgress();
    if (progress && welcomeMsg) {
        const topic = topics[progress.index];
        const resume = document.createElement('button');
        resume.type = 'button';
        resume.className = 'resume-btn';
        const label = document.createElement('span');
        label.className = 'resume-label';
        label.textContent = 'Continue reading';
        const name = document.createElement('span');
        name.className = 'resume-name';
        name.textContent = topicDisplayNames[progress.index];
        const meta = document.createElement('span');
        meta.className = 'resume-meta';
        meta.textContent = `Page ${progress.page}`;
        resume.append(label, name, meta);
        resume.addEventListener('click', () => {
            loadPDF(topic.pdf, topicButtons[progress.index], topic.name, topic.spotify_link, progress.index, progress.page);
        });
        resume.addEventListener('mouseenter', () => prefetchTopicDocument(topic, topicButtons[progress.index]), { once: true });
        welcomeMsg.appendChild(resume);
    }

    const browse = document.createElement('button');
    browse.type = 'button';
    browse.className = 'nav-btn browse-btn';
    browse.textContent = 'Browse topics';
    browse.addEventListener('click', () => viewerShell.openSidebar());
    welcomeMsg.appendChild(browse);

    // Quietly parse the most likely next topic so the first click is fast too
    scheduleIdle(() => {
        const i = progress ? progress.index : 0;
        prefetchTopicDocument(topics[i], topicButtons[i]);
    });
});
