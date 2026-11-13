import urllib.request
import re
import json
import csv
import io
import concurrent.futures

data = """No,Playlist Name,Playlist URL
1,"English Made Simple by G V Rao sir","https://www.youtube.com/playlist?list=PLswCVWtC7kMR1gH2nFA1wmk3MNMjWGkq-"
2,"IAS Prelims 2020 Revision - Quick Wrap-Up","https://www.youtube.com/playlist?list=PLswCVWtC7kMRZVluP9cH2hR5ByofRuGLJ"
3,"Dreams to Reality","https://www.youtube.com/playlist?list=PLswCVWtC7kMRfxuGTTE-J2YS3Sfldey0T"
4,"Art & Culture","https://www.youtube.com/playlist?list=PLswCVWtC7kMQ8JmqYoNNgneyEX8UOs_4f"
5,"UPSC Mains - Answer Writing","https://www.youtube.com/playlist?list=PLswCVWtC7kMRLa_4xq2PI07BSAK19FX8I"
6,"Snippets","https://www.youtube.com/playlist?list=PLswCVWtC7kMTo_7k-Qsn0D37PE8rKye4e"
7,"S&T,Health,Environment&Ecology","https://www.youtube.com/playlist?list=PLswCVWtC7kMShk_SlQimTvtPiry8hOSS8"
8,"Geography Map Based MCQs (The World)","https://www.youtube.com/playlist?list=PLswCVWtC7kMQuEZ-d0IBkM46xTvKSBcMk"
9,"Capsules - Week 36/2017","https://www.youtube.com/playlist?list=PLswCVWtC7kMRGprKTioGLWHFa-t0QXTBc"
10,"Capsules- Week 35/2017","https://www.youtube.com/playlist?list=PLswCVWtC7kMR6-yCVg--TJSmb8cA3UC5S"
11,"SBI PO Interviews","https://www.youtube.com/playlist?list=PLswCVWtC7kMTP-b5CaWDaJCQ6jh4ju-FZ"
12,"Capsules- Week 33/2017","https://www.youtube.com/playlist?list=PLswCVWtC7kMSWRcepbAjRDInZY_lDYun5"
13,"Capsules - Week 34/2017","https://www.youtube.com/playlist?list=PLswCVWtC7kMRmybAfGaPyGApTDgb1LJgJ"
14,"Capsules - Week 32/2017","https://www.youtube.com/playlist?list=PLswCVWtC7kMQ2nrrrmOd8LLarLE-K1cwW"
15,"Capsules - Week 25/2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMSurkKX6cBmnSTm7JU0IqM_"
16,"Capsules - Week 24/2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQfF3CynopXFIrh5ANIE4ir"
17,"Capsules - Week 23/2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQKuZcFkE7nFg29VgHJOcDI"
18,"Capsules - Week 22/2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQhXYNWfpkPmvyNmilZBCPW"
19,"Capsules - Week 21/2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMT-iBJSvWtj0cJabGBSG3Ih"
20,"Capsules - Week 20/2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQ1zfyBY2FLtHdSdMw-xvUQ"
21,"Capsules - Week 19 / 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMSlj7ffG_s692ijSGH6mo0A"
22,"Capsules 17 / 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMS8WVk_n2zwCMLqHvSv28C2"
23,"UPSC Civil Services Prelims-2017 (Q&A-Discussion)","https://www.youtube.com/playlist?list=PLswCVWtC7kMRxSp4uVSJEBkd71k0EPQsD"
24,"UPSC Civil Services Prelims-2017 (Revision)","https://www.youtube.com/playlist?list=PLswCVWtC7kMQDuc4Nvc5U8El6iiV6eXc3"
25,"Capsules - Week 18/2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMSaGYTd_TNJl94L1vfLIeYZ"
26,"Capsules - Week 16/2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMRomPnZQ_YjvDB-jwCaRs-p"
27,"Editorial Discussions - Week 17 of 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMTmZ8jH79OI6sfciijEmVZ4"
28,"Capsules - Week 15/2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMTxWum0iSnvKrT0N-fv1ZSk"
29,"Banking Awareness Current Affairs","https://www.youtube.com/playlist?list=PLswCVWtC7kMRTEBSITYxqM2P5q3CxzorF"
30,"Policies & Programmes 2017","https://www.youtube.com/playlist?list=PLswCVWtC7kMRAnAWIM5kXkNlaijqgoTVv"
31,"Editorial Discussions - Week 16 of 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQa1GJ7ZuQSiemHi5-A6-fz"
32,"Capsules - Week 14/2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMT88QLuGLMF4M_4aWA9nOt2"
33,"Editorial Discussions - Week 15 of 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMS3wvYhEnXHFizkVuJM29Tt"
34,"Capsules - Week 13/2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQ87pjVNQOYVpNL9Qavhha8"
35,"Learn English .... In A Simple Way","https://www.youtube.com/playlist?list=PLswCVWtC7kMQzYAMizm88V96cCTL-BtS4"
36,"Editorial Discussions - Week 14 of 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMRIvCo860KWKwwDVQP-VNvS"
37,"Capsules - Week 12 / 2017","https://www.youtube.com/playlist?list=PLswCVWtC7kMSVWRQWWe08YR2VYhP4SRsj"
38,"Editorial Discussions - Week 13 of 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMR6nc3NUNvp28HGSHJZ_ayA"
39,"Capsules - Week 11 / 2017","https://www.youtube.com/playlist?list=PLswCVWtC7kMRVpKkd2DarsTe5YhwHV2z6"
40,"Editorial Discussions - Week 12 of 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQcYoH5IEpZGOkS6QDIvtFV"
41,"Editorial Discussions - Week 11 of 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQvQYzhDOFFyF-LKeODHYTJ"
42,"Capsules - Week 10 / 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQbfTgGYFKlxvvOyNcZFRF2"
43,"Editorial Discussions - Week 10 of 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQxpguvmZkIkt8G67eDvom5"
44,"Capsules - Week 9 / 2017","https://www.youtube.com/playlist?list=PLswCVWtC7kMTJHRble4G7CkdCsDftI6d3"
45,"Editorial Discussions - Week 9 of 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMT0qp8CYzF3YFHNzkha_0-B"
46,"Capsules - Week 8 / 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQRBNI1LdeUMYygVk_BzQVY"
47,"Editorial Discussions - Week 8 of 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMSyaBbBGP_Xc3EEUL9tWPe4"
48,"Union Budget 2017-18","https://www.youtube.com/playlist?list=PLswCVWtC7kMS2imrglfg5QKli1MPIHClh"
49,"Capsules - Week 7 / 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMS7z_QcR2EOGAXe20lUAn3P"
50,"Capsules - Week 6 / 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMROKQ7tk834QmlTYzLqzIoM"
51,"Capsules - Week 5 / 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMR3r0x71HByTjdvP9fWzO6e"
52,"Capsules - Week 4 / 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMTcXyD-dH7jRE0UKT7T4ACQ"
53,"Editorial Discussions - Week 7 of 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMRawabNeisWJFySNgy6eROs"
54,"Editorial Discussions - Week 4 of 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMTAVwauP3RCgckLOVHF86UA"
55,"Capsules - Week 3 / 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMRChGFZvMxLN8xXW_LG2IAh"
56,"Editorial Discussions - Week 3 of 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMTiQpfIMKXeLI-CzVCK-iwj"
57,"Capsules - Week 2 / 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQj8a2i18XrblnrDHX9xAZP"
58,"English comprehension / vocabulary.","https://www.youtube.com/playlist?list=PLswCVWtC7kMTttFwBVnxneXujDEapufhz"
59,"Editorial Discussions - Week 2 of 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMSU_ZpL4moZgCFejP5kpKrW"
60,"Editorial Discussions - Week 1 of 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQcRjeVDyE_3tb5vWq2SWvc"
61,"Capsules - Week 1 / 2017.","https://www.youtube.com/playlist?list=PLswCVWtC7kMS5ibPi4PoIppcyuWYxls7e"
62,"Current Affairs Modules Week 52/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMSqw6DEfys5oTUDDd6hcO6x"
63,"Current Affairs Modules Week 51/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMRUVmGCaAVMj1Cf-88H-iO1"
64,"Current Affairs Modules Week 50/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQG9q9hkVsQujZY9dzE_LhZ"
65,"Current Affairs Modules Week 49/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMS14q_7YAjcphi-R8uLkVRo"
66,"Current Affairs Modules Week 48/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMTS4AROWxPgavafCSvT7pRq"
67,"Current Affairs Modules Week 47/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMT4qcm2n8MmkDuJvyQiug3T"
68,"Current Affairs Modules Week 46/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMSO44bDD07mb3MRNtaubmxw"
69,"Current Affairs Modules Week 40/2016","https://www.youtube.com/playlist?list=PLswCVWtC7kMRt4sO-SBVenrhVokWjsQXz"
70,"Banking Awareness - Hindi","https://www.youtube.com/playlist?list=PLswCVWtC7kMSqUuAuHGgaWugF5y9hjUWD"
71,"Current Affairs Modules Week 39/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMSF8HGeja47sqzFze5mm6Bt"
72,"Current Affairs Modules Week 38/2016","https://www.youtube.com/playlist?list=PLswCVWtC7kMRCgoQYM3gUTKgwr-klspGL"
73,"Economy","https://www.youtube.com/playlist?list=PLswCVWtC7kMTcfLkviSpn1bLFiJsUstWr"
74,"Current Affairs Modules Week 37/2016","https://www.youtube.com/playlist?list=PLswCVWtC7kMRvnI9LR-Hko6BMWiszr20z"
75,"Current Affairs Modules Week 36/2016","https://www.youtube.com/playlist?list=PLswCVWtC7kMQ0Au5vGEXdnsT_f9MKGcLs"
76,"Quiz","https://www.youtube.com/playlist?list=PLswCVWtC7kMQ0VpWvSiHAxJ2mY_9YaoHC"
77,"Current Affairs Modules Week 35/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMR_SP-4b0AOju9qlRjejIe9"
78,"Current Affairs Modules Week 34/2016","https://www.youtube.com/playlist?list=PLswCVWtC7kMTwXjQv0LSkmZzX6lr0FbHA"
79,"Current Affairs Modules Week 33/2016","https://www.youtube.com/playlist?list=PLswCVWtC7kMRhOXEpz6hefxjIJyyVxAte"
80,"Current Affairs Modules Week 32/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMSlOxFTJNV9ytFvL9RPWz-u"
81,"Current Affairs Modules Week 31/16","https://www.youtube.com/playlist?list=PLswCVWtC7kMSgrw_Rb1uKE9zjuj0n_IEN"
82,"Current Affairs Modules Week 30/16","https://www.youtube.com/playlist?list=PLswCVWtC7kMT296xkMp-_JlCn6f3H4R8j"
83,"Current Affairs Modules Week 29/2016","https://www.youtube.com/playlist?list=PLswCVWtC7kMS5jrIOuET-eR6f3DD3qQaR"
84,"Current Affairs Modules Week 25/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMSkKZsMKia16lVFnCcRtkY1"
85,"Current Affairs Modules Week 28/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMS83z4pbY3poVk2imzub5dd"
86,"Current Affairs Modules Week 27/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMSD8dXKLMF60YN1c0rGetb0"
87,"Current Affairs Modules Week 24/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMT5XAbk7WAQvG6O49NaohLK"
88,"Current Affairs Modules Week 26/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMTIznVzdC2vF4hoAehLcY5o"
89,"Current Affairs Modules Week 23/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMRdaBPQFzQZTR5pfeWPi-LR"
90,"Current Affairs Modules Week 22/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMScIOERIPOyk-Xc46FXL4vd"
91,"Current Affairs Modules Week 21/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMR3qn2ytZQPXudIPOIXyGuO"
92,"Current Affairs Modules Week 20/2016","https://www.youtube.com/playlist?list=PLswCVWtC7kMS1Vyuy2A8AB2QETlBmfQ7h"
93,"Current Affairs Modules Week 19/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMSAGi2B9vsUIbM9DUN8gMja"
94,"Current Affairs Modules Week 18/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMTQmYxyo38a6cCfmDroxEnn"
95,"Current Affairs Modules Week 17/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMRQI7p-HEh3klZNIcJNEOSo"
96,"Current Affairs Modules Week 16/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMS6nn54qyriLFhOq--rPlQV"
97,"Current Affairs Modules Week 15/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMTG-aoMEqjviyWV8EHd3bnl"
98,"Current Affairs Modules Week 14/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMS6vtg1gGMVzASbC3VSwzr7"
99,"Current Affairs Modules Week 13/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMS2GwtZcK46a7OnjESPnorA"
100,"Current Affairs Modules Week 12/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMT-cYynWdUfqZX6WzcoSPfF"
101,"Current Affairs Modules Week 11/2016","https://www.youtube.com/playlist?list=PLswCVWtC7kMTvsx2_le832EPWkHfZfOrF"
102,"Current Affairs Modules Week 10/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMTGW-eMfqI1yw3EbEOdgjI_"
103,"Current Affairs Modules Week 9/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMTJpi4Yn-akeGSOFg9_S5Fz"
104,"Union Budget 2016-17","https://www.youtube.com/playlist?list=PLswCVWtC7kMSTqX3pyizYOj8nAaz15VQZ"
105,"Current Affairs Modules Week 8/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQQkHAuz_fP04peWoKQjtSx"
106,"Current Affairs Modules Week 7/2016","https://www.youtube.com/playlist?list=PLswCVWtC7kMRtdqN3P3S-HdfVm4LBX7Ni"
107,"Know About Insurance","https://www.youtube.com/playlist?list=PLswCVWtC7kMT1YSxxgPprfBOA_RFQNoE_"
108,"Current Affairs Modules Week 6/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMT2KwyUX2hT2sI2ag0-nPSr"
109,"Current Affairs Modules Week 5/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQZgfB6kobWGn4JiLFSVqI9"
110,"Current Affairs Modules Week 4/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQMbYewDIop_ODDcS5a-WPM"
111,"Current Affairs Modules Week 3/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMRRV39eI0h2isPPnOYcDCuJ"
112,"Current Affairs Modules Week 2/2016","https://www.youtube.com/playlist?list=PLswCVWtC7kMRebfeXYUKbeUGzyHoResSW"
113,"Current Affairs Modules Week 1/2016.","https://www.youtube.com/playlist?list=PLswCVWtC7kMQIUW7LZwo9b3snXVWELv9x"
114,"Current Affairs Lecture 53rd Week (28th Dec, 2015 to 3rd Jan, 2016)","https://www.youtube.com/playlist?list=PLswCVWtC7kMThiI_C5QmlLRL_rwxvXBfF"
115,"IBPS PO Interview... How to Face Banking Questions?","https://www.youtube.com/playlist?list=PLswCVWtC7kMQNRh9C2B9lvJwDazWixAwC"
116,"Current Affairs Lecture 52nd Week (21st Dec to 27th Dec) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMTCNZi5K9QGhRKfL4G3t6tC"
117,"Current Affairs Lecture 51st Week (14th Dec to 20th Dec) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMRAf3iI853bX1xl6oOeIk35"
118,"Current Affairs Lecture 50th Week (7th Dec to 13th Dec) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMR2wbkyZGBFVhD9Aw-EgAft"
119,"Current Affairs Lecture 49th Week (30th Nov to 6th Dec) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMQwFX0gOqRYOssiwx1YtJQk"
120,"Current Affairs Lecture 48th Week (23rd Nov to 29th Nov) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMTSYuU2jAMXIDlezfVlvXQ1"
121,"Current Affairs Lecture 47th Week (16th Nov to 22nd Nov) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMQhvLf307-h5IV0Ix-eXQ6i"
122,"Current Affairs Lecture 46th Week (9th Nov to 15th Nov) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMRfT8bPn7buubJ5hswBQHBG"
123,"Current Affairs Lecture 45th Week (2nd Nov to 8th Nov) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMSeZI2bzf8E8GZA-yBkMArd"
124,"Current Affairs Lecture 44th Week (26th Oct to 1st Nov) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMRFJW39BceigIoRmxCD9BdA"
125,"Current Affairs Lecture 43rd Week (19th Oct to 25th Oct) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMQsVH1qRJBsPwWPSWsS2PfC"
126,"A Recap on Current Affairs, Banking & Economy for IBPS PO Exam","https://www.youtube.com/playlist?list=PLswCVWtC7kMR_4qcZ3HIHU1vpeWcEVNsQ"
127,"A Recap on Banking Awareness for IBPS PO Exam","https://www.youtube.com/playlist?list=PLswCVWtC7kMS-a30pmzd8I_HnW4iEjdmQ"
128,"Current Affairs Lecture 42nd Week (12th Oct to 18th Oct) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMTSYE-MCv_7thfwyAvTs5OV"
129,"Current Affairs Lecture 41st Week (5th Oct to 11th Oct) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMRB2lAGr0hpzAd42SHRbKH4"
130,"Current Affairs Lecture 40th Week (28th Sep to 4th Oct) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMR6HqPyF2Dh3QI0vSXA8p2S"
131,"Current Affairs Lecture 39th Week (21st Sep to 27th Sep) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMRzLChy_6O9GzROASxJODgU"
132,"Current Affairs Lecture 38th Week (14th Sep to 20th Sep) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMRmw3R2TO9VC8Z6hiiVEzx2"
133,"Current Affairs Lecture 37th Week (07th Sep to 13th Sep) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMRI9MHbjFjpY8tR0P9TqDyC"
134,"Current Affairs Lecture 36th Week (31st Aug to 06th Sep) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMQNsKf_YYyFbMuKNH_VaF_g"
135,"Current Affairs Lecture 35th Week (24th Aug to 30 Aug) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMTJqnQBRk5gB_MAFiq_Uhyk"
136,"Banking Awareness Abbreviations","https://www.youtube.com/playlist?list=PLswCVWtC7kMQxE8S3RjtWW6dXTpg24DK1"
137,"Banking Awareness True/False","https://www.youtube.com/playlist?list=PLswCVWtC7kMQlBosVf-Y_EOMGWbBzVGK9"
138,"Current Affairs Lecture 34th Week (17th Aug to 23rd Aug) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMRSJugWVS33xDIIvXwYjbkQ"
139,"Current Affairs Lecture 33rd Week (10th Aug to 16th Aug) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMRY2gXP1XDwTy_4roAFqPcl"
140,"Current Affairs Lecture 32nd Week (3rd Aug to 9th Aug) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMRsBoTxVeb07uWiBy3arXIO"
141,"Current Affairs Lecture 31st Week (27th July to 2nd Aug) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMT55Pe_t_qpTsYdWTRVhU1P"
142,"Current Affairs Lecture 30th Week (20th July to 26th July) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMQBF9-bQy4PKrwXA1nXmp8e"
143,"Current Affairs Lecture 29th Week (13th July to 19th July) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMSmRgMIpRiike_rhDOjxiH3"
144,"Current Affairs Lecture 28th Week (6th July to 12th July) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMTi2aWHsHnRt9AY_SiV9XcR"
145,"Banking Awareness Q&A","https://www.youtube.com/playlist?list=PLswCVWtC7kMR6NdgFTfCiSDHQ8YycnrIo"
146,"Current Affairs Lecture 27th Week (29th Jun to 5th July) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMQO5DVLPKwjq2W_aWzkojP5"
147,"Current Affairs Lecture 26th Week (22nd Jun to 28th Jun) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMTv34oZK3nRMU_2lLq__fOi"
148,"Current Affairs Lecture 25th Week ( 15th Jun to 21th Jun ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMQplL0oqhhXrs1_E8C4jXvA"
149,"Current Affairs Lecture 24th Week ( 8th Jun to 14th Jun ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMSsiYfS5vQ4muXVj9hxZBEw"
150,"Current Affairs Lecture 23rd Week ( 1st Jun to 7th Jun ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMQif9vlHzl_mNuYZbFTNB7c"
151,"Current Affairs Lecture 22nd Week ( 25th May to 31st May) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMQJkx7PbiLGcmtfSOzLyGrY"
152,"Current Affairs Lecture 21st Week ( 18th May to 24th May) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMQzgXUBYWnHATfWmrqP2itl"
153,"Banking Awareness Lectures","https://www.youtube.com/playlist?list=PLswCVWtC7kMT6Q-ZCjsJcHomJzgXQbCez"
154,"Current Affairs Lecture 20th Week ( 11th May to 17th May) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMQFVzMvdXDuy7zvrEmgPrJQ"
155,"Current Affairs Lecture 19th Week ( 4th May to 10th May) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMRSRTb7a2T84q0aTGcOzS81"
156,"Policies and Programmes of Government of India","https://www.youtube.com/playlist?list=PLswCVWtC7kMQdVoRnsjUhgdGG0rqe5Han"
157,"Current Affairs Lecture 18th Week ( 27th Apr to 3rd May) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMRDb02Vy8HIWtz7sHds993f"
158,"Current Affairs Lecture 17th Week ( 20th Apr to 26th Apr) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMS8D6P5UknOsasGuArNzoC_"
159,"Current Affairs Lecture 16th Week ( 13th Apr to 19th Apr) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMTnjOWTXBxK2oWfIybisSbe"
160,"Current Affairs Lecture 15th Week ( 6th Apr to 12th Apr ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMSKu1qcsKA9XKyvCtGf5kJp"
161,"Current Affairs Lecture 14th Week ( 30th Mar to 5th Apr ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMQd-okQVuJYoZXP2DP_AgzX"
162,"Railway Budget 2015 - 16","https://www.youtube.com/playlist?list=PLswCVWtC7kMT0qNhIMPwUxacP3kgj_VDr"
163,"Current Affairs Lecture 13th Week ( 23rd Mar to 29th Mar ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMSl54FQFvKh33fRWKZjV7Tr"
164,"Current Affairs Lecture 12th Week ( 16th Mar to 22nd Mar ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMR3Okt5tAQaS0Jd_1iyaSr4"
165,"Current Affairs Lecture 11th Week ( 9th Mar to 15th Mar ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMRKnNG_-n8j38rWXj0eNPXN"
166,"Current Affairs Lecture 10th Week ( 2nd Mar to 8th Mar ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMSrRMKX8YNMyS4MpeyIAz4S"
167,"Union Budget 2015 - 16","https://www.youtube.com/playlist?list=PLswCVWtC7kMQtFY7xoMxxxUvwBcwCxsl1"
168,"Current Affairs Lecture 9th Week ( 23rd Feb to 1st Mar ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMRpkm4uux5RIatH9r27_1Uk"
169,"Current Affairs Lecture 8th Week ( 16th Feb to 22nd Feb ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMRxMBKVvWqZUWtReAWzyd2J"
170,"Current Affairs Lecture 7th Week ( 9th Feb to 15th Feb ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMSZCZClhIfCOygrBlamG-2T"
171,"Current Affairs Lecture 6th Week ( 2nd Feb to 8th Feb ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMS4mfjKu381BHlHODBjjDct"
172,"Current Affairs Lecture 5th Week ( 26th Jan to 1st Feb ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMTYDmtb_s_dA9Z8qDtKwu_r"
173,"Current Affairs Lecture 4th Week ( 19th to 25th January ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMRLwoOOcVeClq9A6NQChsoS"
174,"Current Affairs Lecture 3rd Week ( 12th to 18th January ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMTeDjsm2Z0M9jNlC34yifAW"
175,"Current Affairs Lecture 2nd Week ( 5th to 11h January ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMQpoDp9qqOqkkV5PzO5QHWp"
176,"Current Affairs Lecture 1st Week ( Ending 4th January ) of 2015","https://www.youtube.com/playlist?list=PLswCVWtC7kMRQQrzKkYI2Xq8vM9j44797"
"""

def extract_videos_from_html(html):
    videos = []
    match = re.search(r'ytInitialData\s*=\s*({.+?});</script>', html)
    if not match: return videos
    try:
        j = json.loads(match.group(1))
        # Navigate through the JSON structure to find the playlist items
        contents = j.get("contents", {}).get("twoColumnBrowseResultsRenderer", {}).get("tabs", [{}])[0].get("tabRenderer", {}).get("content", {}).get("sectionListRenderer", {}).get("contents", [{}])[0].get("itemSectionRenderer", {}).get("contents", [{}])[0].get("playlistVideoListRenderer", {}).get("contents", [])
        
        for item in contents:
            if "playlistVideoRenderer" in item:
                vid = item["playlistVideoRenderer"]
                video_id = vid.get("videoId")
                title = vid.get("title", {}).get("runs", [{}])[0].get("text", "Unknown Title")
                videos.append({"videoId": video_id, "title": title})
    except Exception as e:
        pass
    return videos

def fetch_playlist_data(row):
    list_id = row[2].split("list=")[1] if "list=" in row[2] else ""
    playlist_obj = {
        "id": row[0],
        "name": row[1],
        "url": row[2],
        "playlistId": list_id,
        "videos": []
    }
    
    if not list_id:
        return playlist_obj
        
    try:
        req = urllib.request.Request(row[2], headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')
        playlist_obj["videos"] = extract_videos_from_html(html)
    except Exception as e:
        pass
        
    return playlist_obj

f = io.StringIO(data)
reader = csv.reader(f)
next(reader) # skip header

rows = list(reader)
playlists = []

with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
    results = executor.map(fetch_playlist_data, rows)
    for res in results:
        playlists.append(res)

js_file = "const playlists = " + json.dumps(playlists, indent=2) + ";"

with open("youtube-playlists/playlists-data.js", "w") as out:
    out.write(js_file)

print(f"Scraped {len(playlists)} playlists.")
