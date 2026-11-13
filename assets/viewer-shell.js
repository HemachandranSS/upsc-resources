const viewerShell = (() => {
    const AUTH_STORAGE_KEY = 'clsp_auth_ok_date';
    const AUTH_PASSWORD_SUFFIX = '-hema';
    const unlockCallbacks = [];

    function getElement(id) {
        return document.getElementById(id);
    }

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function expectedPassword() {
        // return `${formatDate(new Date())}${AUTH_PASSWORD_SUFFIX}`;
        return "hema"
    }

    function isAuthenticated() {
        try {
            return localStorage.getItem(AUTH_STORAGE_KEY) === formatDate(new Date());
        } catch (e) {
            return false;
        }
    }

    function setAuthenticated(value) {
        try {
            if (value) localStorage.setItem(AUTH_STORAGE_KEY, formatDate(new Date()));
            else localStorage.removeItem(AUTH_STORAGE_KEY);
        } catch (e) { /* storage unavailable (private mode) */ }
    }

    // Runs while <head> is still parsing, so protected content never flashes before the overlay.
    function injectShellStyles() {
        if (document.getElementById('viewerShellStyles')) return;
        const style = document.createElement('style');
        style.id = 'viewerShellStyles';
        style.textContent = `
            html.auth-locked body > :not(#authOverlay) { display: none !important; }
            html.auth-locked body { overflow: hidden; }
            #authOverlay {
                position: fixed; inset: 0; z-index: 9999;
                display: flex; align-items: center; justify-content: center;
                padding: 24px;
                background: radial-gradient(1200px 600px at 10% 0%, rgba(132,250,176,0.18), transparent 60%),
                            radial-gradient(900px 500px at 100% 100%, rgba(143,211,244,0.18), transparent 60%),
                            linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
                font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Tahoma, sans-serif;
                animation: clspFadeIn .35s ease both;
            }
            .auth-card {
                width: min(100%, 420px);
                background: rgba(255,255,255,0.08);
                border: 1px solid rgba(255,255,255,0.16);
                border-radius: 22px;
                padding: 32px 28px 28px;
                box-shadow: 0 30px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08);
                color: #fff;
                backdrop-filter: blur(18px);
                -webkit-backdrop-filter: blur(18px);
                animation: clspRise .45s cubic-bezier(.2,.8,.2,1) both;
            }
            .auth-icon {
                width: 52px; height: 52px; border-radius: 16px;
                display: grid; place-items: center; margin-bottom: 18px;
                background: linear-gradient(135deg, #84fab0, #8fd3f4);
                color: #0f2027; box-shadow: 0 10px 30px rgba(143,211,244,0.35);
            }
            .auth-title { font-size: 1.5rem; font-weight: 700; margin-bottom: 6px; letter-spacing: -0.01em; }
            .auth-subtitle { color: rgba(255,255,255,0.72); margin-bottom: 20px; line-height: 1.5; font-size: .95rem; }
            .auth-input {
                width: 100%; padding: 13px 15px; border-radius: 12px;
                border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.22);
                color: #fff; outline: none; font-size: 1rem;
                transition: border-color .2s ease, box-shadow .2s ease;
            }
            .auth-input::placeholder { color: rgba(255,255,255,0.45); }
            .auth-input:focus { border-color: #8fd3f4; box-shadow: 0 0 0 4px rgba(143,211,244,0.18); }
            .auth-error { min-height: 20px; margin-top: 10px; color: #ffb4b4; font-size: .9rem; line-height: 1.4; }
            .auth-submit {
                width: 100%; margin-top: 10px; padding: 13px 15px; border: none; border-radius: 12px;
                background: linear-gradient(135deg, #84fab0, #8fd3f4); color: #0f2027;
                font-weight: 700; font-size: 1rem; cursor: pointer;
                transition: transform .15s ease, box-shadow .2s ease, filter .2s ease;
                box-shadow: 0 10px 24px rgba(143,211,244,0.25);
            }
            .auth-submit:hover { transform: translateY(-1px); filter: brightness(1.05); }
            .auth-submit:active { transform: translateY(0); }
            .auth-submit:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
            .auth-card.shake { animation: clspShake .4s ease; }
            @keyframes clspFadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes clspRise { from { opacity: 0; transform: translateY(14px) scale(.98); } to { opacity: 1; transform: none; } }
            @keyframes clspShake {
                0%, 100% { transform: translateX(0); }
                20%, 60% { transform: translateX(-8px); }
                40%, 80% { transform: translateX(8px); }
            }
            @media (prefers-reduced-motion: reduce) {
                #authOverlay, .auth-card, .auth-card.shake { animation: none; }
            }
        `;
        (document.head || document.documentElement).appendChild(style);
    }

    function unlock() {
        document.documentElement.classList.remove('auth-locked');
        while (unlockCallbacks.length) {
            const cb = unlockCallbacks.shift();
            try { cb(); } catch (e) { console.error(e); }
        }
    }

    function whenUnlocked(cb) {
        if (!document.documentElement.classList.contains('auth-locked')) cb();
        else unlockCallbacks.push(cb);
    }

    function showAuthOverlay(onSuccess) {
        if (document.getElementById('authOverlay')) return;

        const overlay = document.createElement('div');
        overlay.id = 'authOverlay';
        overlay.innerHTML = `
            <div class="auth-card" role="dialog" aria-modal="true" aria-labelledby="authTitle">
                <div class="auth-icon" aria-hidden="true">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <div class="auth-title" id="authTitle">Protected Access</div>
                <div class="auth-subtitle">Enter the password to continue to your learning space.</div>
                <form id="authForm" autocomplete="off">
                    <input id="authInput" class="auth-input" type="password" placeholder="Password" aria-label="Password" />
                    <div id="authError" class="auth-error" role="alert"></div>
                    <button type="submit" class="auth-submit">Unlock</button>
                </form>
            </div>
        `;

        document.body.appendChild(overlay);

        const card = overlay.querySelector('.auth-card');
        const form = overlay.querySelector('#authForm');
        const input = overlay.querySelector('#authInput');
        const error = overlay.querySelector('#authError');
        input.focus();

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (input.value.trim() === expectedPassword()) {
                setAuthenticated(true);
                overlay.remove();
                unlock();
                onSuccess();
            } else {
                error.textContent = "Incorrect password. Try contact the site admin (hchandranss@gmail.com)";
                input.value = '';
                input.focus();
                card.classList.remove('shake');
                void card.offsetWidth;
                card.classList.add('shake');
            }
        });
    }

    function openSidebar() {
        const sidebar = getElement('sidebar');
        const backdrop = getElement('sidebarBackdrop');
        if (!sidebar || !backdrop) return;
        sidebar.classList.add('open');
        backdrop.classList.add('active');
        const hamburgerBtn = getElement('hamburgerBtn');
        if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'true');
        const active = sidebar.querySelector('.topic-btn.active');
        if (active) active.scrollIntoView({ block: 'center' });
        sidebar.dispatchEvent(new CustomEvent('sidebar:open'));
    }

    function closeSidebar() {
        const sidebar = getElement('sidebar');
        const backdrop = getElement('sidebarBackdrop');
        if (!sidebar || !backdrop) return;
        sidebar.classList.remove('open');
        backdrop.classList.remove('active');
        const hamburgerBtn = getElement('hamburgerBtn');
        if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
    }

    function toggleSidebar() {
        const sidebar = getElement('sidebar');
        if (!sidebar) return;
        if (sidebar.classList.contains('open')) closeSidebar();
        else openSidebar();
    }

    // The Spotify iframe is heavy (~1 MB of scripts), so nothing is fetched
    // until the player is actually opened. Playback itself is driven by
    // Spotify's iFrame API so skip / seek can be large buttons of our own —
    // the controls baked into the compact embed are too small to use reliably.
    let spotifyController = null;
    let spotifyControllerUrl = '';
    let spotifyWantedUrl = '';
    let spotifyStarting = false;
    let spotifyApiPromise = null;
    let spotifyPlayback = { position: 0, duration: 0, isPaused: true };
    let spotifySeeking = false;
    let resumeEpisodeId = '';

    function toSpotifyUri(embedOrOpenUrl) {
        try {
            const url = new URL(embedOrOpenUrl);
            const parts = url.pathname.split('/').filter(Boolean);
            if (parts[0] === 'embed') parts.shift();
            const [type, id] = parts;
            if (type && id) return `spotify:${type}:${id}`;
        } catch (e) { /* fall through */ }
        return '';
    }

    function toSpotifyEntityUrl(embedUrl) {
        try {
            const url = new URL(embedUrl);
            url.pathname = url.pathname.replace(/^\/embed\//, '/');
            url.search = 'theme=0';
            return url.toString();
        } catch (e) {
            return embedUrl;
        }
    }

    function formatPlaybackTime(ms) {
        const total = Math.max(0, Math.round((ms || 0) / 1000));
        const hours = Math.floor(total / 3600);
        const minutes = Math.floor((total % 3600) / 60);
        const seconds = total % 60;
        const mm = String(minutes).padStart(hours ? 2 : 1, '0');
        const ss = String(seconds).padStart(2, '0');
        return hours ? `${hours}:${mm}:${ss}` : `${mm}:${ss}`;
    }

    function spotifyTransport() {
        return getElement('spotifyTransport');
    }

    function paintTransport() {
        const transport = spotifyTransport();
        if (!transport) return;
        const playBtn = transport.querySelector('.spotify-play');
        const seek = transport.querySelector('.spotify-seek');
        const current = transport.querySelector('.spotify-time-current');
        const total = transport.querySelector('.spotify-time-total');
        const { position, duration, isPaused } = spotifyPlayback;

        if (playBtn) {
            playBtn.classList.toggle('is-playing', !isPaused);
            playBtn.setAttribute('aria-label', isPaused ? 'Play' : 'Pause');
        }
        if (current) current.textContent = formatPlaybackTime(spotifySeeking && seek ? (seek.value / 1000) * duration : position);
        if (total) total.textContent = duration ? formatPlaybackTime(duration) : '–:––';
        if (seek && !spotifySeeking) {
            const ratio = duration ? position / duration : 0;
            seek.value = String(Math.round(ratio * 1000));
            seek.style.setProperty('--p', `${ratio * 100}%`);
            seek.disabled = !duration;
        }
        transport.querySelectorAll('.spotify-skip').forEach((btn) => {
            btn.disabled = !spotifyController || !duration;
        });
        if (playBtn) playBtn.disabled = !spotifyController;
        const note = getElement('spotifyPreviewNote');
        if (note) {
            const seconds = position / 1000;
            const length = duration / 1000;
            // Spotify's public preview file for these episodes is 60 seconds.
            // The full episode keeps going; the preview pauses by itself here.
            const stoppedAtPreview = isPaused && seconds >= 55 && seconds <= 75 && (length > 180 || (length >= 55 && length <= 75));
            note.hidden = !stoppedAtPreview;
        }
    }

    function onPlaybackUpdate(event) {
        const data = (event && event.data) || event || {};
        spotifyPlayback = {
            position: data.position || 0,
            duration: data.duration || 0,
            isPaused: data.isPaused !== false
        };
        if (resumeEpisodeId && data.playingURI && String(data.playingURI).endsWith(resumeEpisodeId)) {
            const shouldPlay = data.isPaused !== false;
            resumeEpisodeId = '';
            if (shouldPlay && spotifyController) spotifyController.play();
        }
        paintTransport();
    }

    function loadSpotifyApi() {
        if (spotifyApiPromise) return spotifyApiPromise;
        spotifyApiPromise = new Promise((resolve, reject) => {
            const timer = setTimeout(() => reject(new Error('Spotify iframe API timed out')), 12000);
            const previous = window.onSpotifyIframeApiReady;
            window.onSpotifyIframeApiReady = (api) => {
                clearTimeout(timer);
                if (typeof previous === 'function') previous(api);
                resolve(api);
            };
            const script = document.createElement('script');
            script.src = 'https://open.spotify.com/embed/iframe-api/v1';
            script.async = true;
            script.onerror = () => {
                clearTimeout(timer);
                reject(new Error('Spotify iframe API failed to load'));
            };
            document.head.appendChild(script);
        });
        return spotifyApiPromise;
    }

    function showSpotifyFallback(embedUrl) {
        const player = getElement('spotifyPlayer');
        const mount = getElement('spotifyMount');
        if (mount) mount.hidden = true;
        if (!player) return;
        player.hidden = false;
        player.classList.add('is-fallback');
        if (embedUrl && player.getAttribute('src') !== embedUrl) player.setAttribute('src', embedUrl);
    }

    function ensureSpotifyController(embedUrl) {
        const mount = getElement('spotifyMount');
        const status = getElement('spotifyStatus');
        if (embedUrl) spotifyWantedUrl = embedUrl;
        if (!mount) {
            showSpotifyFallback(spotifyWantedUrl);
            return;
        }
        if (spotifyController) {
            if (spotifyWantedUrl && spotifyWantedUrl !== spotifyControllerUrl) {
                const wasPlaying = !spotifyPlayback.isPaused;
                spotifyControllerUrl = spotifyWantedUrl;
                spotifyPlayback = { position: 0, duration: 0, isPaused: true };
                paintTransport();
                const uri = toSpotifyUri(spotifyWantedUrl) || toSpotifyEntityUrl(spotifyWantedUrl);
                resumeEpisodeId = wasPlaying ? (uri.split(':')[2] || '') : '';
                spotifyController.loadEntity(uri);
            }
            return;
        }
        if (spotifyStarting) return;
        spotifyStarting = true;
        if (status) status.hidden = false;
            const entityUrl = toSpotifyUri(spotifyWantedUrl) || toSpotifyEntityUrl(spotifyWantedUrl);
        loadSpotifyApi().then((api) => {
            if (spotifyController || !getElement('audioSection').classList.contains('visible')) return;
            const slot = document.createElement('div');
            mount.appendChild(slot);
            const width = Math.max(Math.round(mount.clientWidth) || 360, 300);
            const options = { width, height: 152 };
            if (entityUrl.startsWith('spotify:')) options.uri = entityUrl;
            else options.url = entityUrl;
            api.createController(slot, options, (controller) => {
                spotifyController = controller;
                spotifyControllerUrl = spotifyWantedUrl;
                const player = getElement('spotifyPlayer');
                if (player) player.hidden = true;
                if (status) status.hidden = true;
                controller.addListener('playback_update', onPlaybackUpdate);
                controller.addListener('ready', () => paintTransport());
                const latest = toSpotifyUri(spotifyWantedUrl) || toSpotifyEntityUrl(spotifyWantedUrl);
                if (latest !== entityUrl) controller.loadEntity(latest);
                paintTransport();
            });
        }).catch(() => {
            spotifyStarting = false;
            showSpotifyFallback(spotifyWantedUrl);
        });
    }

    function syncSpotifySource() {
        const player = getElement('spotifyPlayer');
        const audioSection = getElement('audioSection');
        if (!player || !audioSection || !audioSection.classList.contains('visible')) return;
        const pending = player.dataset.src;
        if (!pending) {
            resumeEpisodeId = '';
            if (spotifyController) spotifyController.pause();
            spotifyControllerUrl = '';
            return;
        }
        const fallback = getElement('spotifyLinkFallback');
        if (fallback && fallback.hidden) {
            fallback.href = toSpotifyEntityUrl(pending).replace(/\?.*$/, '');
            fallback.hidden = false;
        }
        ensureSpotifyController(pending);
    }

    function skipSpotify(seconds) {
        if (!spotifyController || !spotifyPlayback.duration) return;
        const max = Math.round(spotifyPlayback.duration / 1000);
        const next = Math.round(spotifyPlayback.position / 1000) + seconds;
        spotifyController.seek(Math.min(max, Math.max(0, next)));
    }

    function setSpotifyExpanded(expanded) {
        const audioSection = getElement('audioSection');
        const spotifyToggle = getElement('spotifyToggle');
        if (!audioSection) return;
        audioSection.classList.toggle('visible', expanded);
        if (expanded) syncSpotifySource();
        if (spotifyToggle) {
            spotifyToggle.setAttribute('aria-expanded', String(expanded));
            spotifyToggle.classList.toggle('expanded', expanded);
            spotifyToggle.innerHTML = expanded
                ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg><span class="spotify-toggle-label">Hide Player</span>'
                : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg><span class="spotify-toggle-label">Show Spotify</span>';
        }
    }

    function toggleSpotify() {
        const audioSection = getElement('audioSection');
        if (!audioSection) return;
        setSpotifyExpanded(!audioSection.classList.contains('visible'));
    }

    function bindSidebar() {
        const hamburgerBtn = getElement('hamburgerBtn');
        const backdrop = getElement('sidebarBackdrop');
        if (hamburgerBtn) {
            hamburgerBtn.setAttribute('aria-controls', 'sidebar');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            hamburgerBtn.addEventListener('click', toggleSidebar);
        }
        if (backdrop) backdrop.addEventListener('click', closeSidebar);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeSidebar();
        });
    }

    function bindSpotify() {
        const audioSection = getElement('audioSection');
        if (!audioSection) return;

        const player = getElement('spotifyPlayer');
        if (player && !player.dataset.src && player.getAttribute('src')) {
            player.dataset.src = player.getAttribute('src');
        }

        if (!getElement('spotifyBar')) {
            const bar = document.createElement('div');
            bar.id = 'spotifyBar';
            bar.className = 'spotify-bar';
            bar.innerHTML = `
                <span class="spotify-brand">
                    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 .01 20.01A10 10 0 0 0 12 2zm4.59 14.42a.62.62 0 0 1-.86.21c-2.35-1.44-5.3-1.76-8.78-.97a.62.62 0 0 1-.28-1.22c3.8-.87 7.06-.5 9.7 1.12.3.18.39.57.22.86zm1.22-2.72a.78.78 0 0 1-1.07.26c-2.69-1.65-6.79-2.13-9.97-1.17a.78.78 0 1 1-.45-1.49c3.64-1.1 8.16-.57 11.24 1.34.37.22.49.7.25 1.06zm.1-2.83C14.9 8.95 9.4 8.78 6.82 9.56a.93.93 0 1 1-.54-1.79c2.97-.9 9.16-.73 12.78 1.31a.93.93 0 0 1-.96 1.6z"/></svg>
                    Listening
                </span>
            `;

            let spotifyLinkFallback = getElement('spotifyLinkFallback');
            if (!spotifyLinkFallback) {
                spotifyLinkFallback = document.createElement('a');
                spotifyLinkFallback.id = 'spotifyLinkFallback';
                spotifyLinkFallback.target = '_blank';
                spotifyLinkFallback.rel = 'noopener noreferrer';
                spotifyLinkFallback.hidden = true;
            }
            spotifyLinkFallback.className = 'spotify-fallback';
            spotifyLinkFallback.textContent = 'Open';
            spotifyLinkFallback.setAttribute('aria-label', 'Open in Spotify');

            const closeBtn = document.createElement('button');
            closeBtn.type = 'button';
            closeBtn.className = 'spotify-close';
            closeBtn.setAttribute('aria-label', 'Hide player');
            closeBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
            closeBtn.addEventListener('click', () => setSpotifyExpanded(false));

            bar.append(spotifyLinkFallback, closeBtn);

            const stage = document.createElement('div');
            stage.className = 'spotify-stage';
            const mount = document.createElement('div');
            mount.id = 'spotifyMount';
            mount.className = 'spotify-mount';
            const status = document.createElement('p');
            status.id = 'spotifyStatus';
            status.className = 'spotify-status';
            status.textContent = 'Loading player…';
            status.hidden = true;
            stage.append(mount, status);

            const transport = document.createElement('div');
            transport.id = 'spotifyTransport';
            transport.className = 'spotify-transport';
            transport.innerHTML = `
                <div class="spotify-buttons">
                    <button type="button" class="spotify-skip" data-skip="-15" aria-label="Back 15 seconds" disabled>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 19V5L3 12l8 7z"/><path d="M21 19V5l-8 7 8 7z"/></svg>
                        <span>15</span>
                    </button>
                    <button type="button" class="spotify-play" aria-label="Play" disabled>
                        <svg class="icon-play" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11-6.86a1 1 0 0 0 0-1.7l-11-6.86A1 1 0 0 0 8 5.14z"/></svg>
                        <svg class="icon-pause" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
                    </button>
                    <button type="button" class="spotify-skip" data-skip="15" aria-label="Forward 15 seconds" disabled>
                        <span>15</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 5v14l8-7-8-7z"/><path d="M3 5v14l8-7-8-7z"/></svg>
                    </button>
                </div>
                <p id="spotifyPreviewNote" class="spotify-preview-note" hidden>Playback stopped on Spotify’s 1-minute preview. Use Open for the full episode.</p>
                <div class="spotify-scrub">
                    <span class="spotify-time spotify-time-current">0:00</span>
                    <input type="range" class="spotify-seek" min="0" max="1000" value="0" step="1" aria-label="Seek" disabled>
                    <span class="spotify-time spotify-time-total">–:––</span>
                </div>
            `;

            const playBtn = transport.querySelector('.spotify-play');
            playBtn.addEventListener('click', () => {
                if (spotifyController) spotifyController.togglePlay();
            });
            transport.querySelectorAll('.spotify-skip').forEach((btn) => {
                btn.addEventListener('click', () => skipSpotify(Number(btn.dataset.skip)));
            });
            const seek = transport.querySelector('.spotify-seek');
            seek.addEventListener('pointerdown', () => { spotifySeeking = true; });
            seek.addEventListener('input', () => {
                spotifySeeking = true;
                seek.style.setProperty('--p', `${seek.value / 10}%`);
                const current = transport.querySelector('.spotify-time-current');
                if (current) current.textContent = formatPlaybackTime((seek.value / 1000) * spotifyPlayback.duration);
            });
            const commitSeek = () => {
                spotifySeeking = false;
                if (spotifyController && spotifyPlayback.duration) {
                    spotifyController.seek(Math.round((seek.value / 1000) * spotifyPlayback.duration / 1000));
                }
            };
            seek.addEventListener('change', commitSeek);
            seek.addEventListener('keyup', (e) => {
                if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') commitSeek();
            });

            const player = getElement('spotifyPlayer');
            audioSection.prepend(bar, stage);
            if (player) {
                player.hidden = true;
                stage.insertBefore(player, status);
            }
            audioSection.appendChild(transport);
        }

        let spotifyToggle = getElement('spotifyToggle');
        if (!spotifyToggle) {
            spotifyToggle = document.createElement('button');
            spotifyToggle.id = 'spotifyToggle';
            spotifyToggle.className = 'spotify-toggle';
            spotifyToggle.type = 'button';
            spotifyToggle.setAttribute('aria-expanded', 'false');
            spotifyToggle.setAttribute('aria-controls', 'audioSection');

            // Append to main layout so it acts as a floating action button
            const container = document.querySelector('.main-content') || document.body;
            container.appendChild(spotifyToggle);
        }

        spotifyToggle.addEventListener('click', toggleSpotify);
    }

    function start() {
        bindSidebar();
        bindSpotify();
        closeSidebar();
        setSpotifyExpanded(false);
    }

    function init() {
        if (document.documentElement.classList.contains('auth-locked')) {
            showAuthOverlay(start);
            return;
        }
        start();
    }

    injectShellStyles();
    if (!isAuthenticated()) document.documentElement.classList.add('auth-locked');

    return {
        init, openSidebar, closeSidebar, toggleSidebar, setSpotifyExpanded, toggleSpotify,
        syncSpotifySource, whenUnlocked
    };
})();

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => viewerShell.init());
} else {
    viewerShell.init();
}
