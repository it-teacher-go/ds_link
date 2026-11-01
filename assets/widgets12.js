// 12차시 인터랙티브 위젯 — 슬라이드(teacher/slides/lesson12.html)와 교재(lesson12.html)가 공유한다.
// 각 위젯: <div class="widget" data-w="이름"> 조각 + function initW_이름(root, D). D = window.LESSON_DATA.
// 계약: system/widgets/WIDGET_BRIEF_TEMPLATE.md. <body> 끝에서 로드한다.
  window.LESSON_DATA = {"n":184,"dates":["20251106","20251107","20251110","20251111","20251117","20251118","20251119","20251120","20251121","20251124","20251125","20251126","20251127","20251128","20251201","20251202","20251203","20251204","20251205","20251208","20251209","20251210","20251211","20251212","20251215","20251216","20251217","20251218","20251219","20251222","20251223","20251224","20251226","20251229","20251230","20251231","20260102","20260105","20260106","20260107","20260108","20260303","20260304","20260305","20260306","20260309","20260310","20260311","20260312","20260313","20260316","20260317","20260318","20260319","20260320","20260323","20260324","20260325","20260326","20260327","20260330","20260331","20260401","20260402","20260403","20260406","20260407","20260408","20260409","20260410","20260413","20260414","20260415","20260416","20260417","20260420","20260421","20260422","20260423","20260424","20260427","20260428","20260429","20260506","20260507","20260508","20260511","20260512","20260513","20260514","20260515","20260518","20260519","20260520","20260521","20260522","20260526","20260527","20260528","20260529","20260601","20260602","20260604","20260605","20260608","20260609","20260610","20260611","20260612","20260615","20260616","20260617","20260618","20260619","20260622","20260623","20260624","20260625","20260626","20260629","20260630","20260701","20260702","20260703","20260706","20260707","20260708","20260709","20260710","20260713","20260714","20260715","20260716","20260720","20260818","20260819","20260820","20260821","20260824","20260825","20260826","20260827","20260828","20260831","20260901","20260902","20260903","20260904","20260907","20260908","20260909","20260910","20260911","20260914","20260915","20260916","20260917","20260918","20260921","20260922","20260923","20260928","20260929","20260930","20261001","20261002","20261006","20261007","20261008","20261012","20261013","20261014","20261015","20261016","20261019","20261020","20261021","20261022","20261023","20261026","20261027","20261028","20261029","20261030"],"names":["LA돼지갈비구이","가쓰오유부장국","가쓰오장국","가지볶음","간장오리불고기","갈비만두찜","갈치구이","갈치무조림","갈치카레구이","감귤젤리","감자빵","감자수제비국","감자어묵볶음","감자채볶음","감자채전","감자튀김/케첩","감자핫도그/케첩","건파래무침","겉절이김치","게살크림우동","계란말이","계란볶음밥","계란야채볶음밥","계란찜","고갈비","고구마치즈롤까스/소스","고기메밀전병","고등어구이","고등어김치조림","고등어무조림","고추마요치킨","고추잡채","고추장닭조림","고추장삼겹구이","고추장오리불고기","골드키위","골드키위배주스","골뱅이야채무침","공심채볶음","과일음료","과일화채","국물닭갈비","굴림만두국","귀리밥","귤","그린야채황도샐러드","근대된장국","기장밥","김말이강정","김말이튀김","김밥볶음밥","김치볶음밥","김치전","김치제육덮밥","김치제육볶음","김치찐만두","김치콩나물국","깍두기","깨순나물볶음","깻잎쌈/날치알마요소스","깻잎전","꼬들단무지오이무침","꼬치어묵국","꽃게탕","꽃맛살샐러드","꽈리고추찜","꿀떡","꿔바로우/소스","나가사키짬뽕국","낙지볶음/소면","낙지연포탕","날치알크림파스타","납작만두/비빔야채","냉메밀소바","냉쫄면","누들떡볶이","누들떡볶이/삶은달걀","느타리버섯볶음","단무지","단무지무침","단배추나물무침","단배추된장국","단호박견과샐러드","단호박크림스프","닭가슴살김치필라프","닭가슴살카레라이스","닭갈비","닭갈비야채덮밥","닭개장","닭곰탕","닭곰탕/당면","닭다리장각삼계탕","닭떡볶이","대패삼겹비빔밥/고추장","데리야끼윙봉구이","도라지오이무침","도토리묵냉국","도토리묵야채무침","돈육간장불고기","돈육갈비탕","돈육갈비탕/당면","돈육김치짜글이","돈육김치찌개","돈코츠라멘","동그랑땡","돼지갈비찜","된장찌개","두부김치국","두부빈대떡","두부빈대떡/양념장","두부샐러드","두쫀쿠","들기름막국수","들깨무채국","들깨미역국","등갈비구이","등심돈까스/소스","딸기","딸기우유","떠먹는고구마피자","떡갈비강정","떡갈비샐러드","떡갈비야채볶음","떡만두국","떡볶이","레몬에이드","레몬크림새우","레몬크림새우/양상추","로제떡볶이","로제순살찜닭","마늘빵","마라탕","마라탕/소면","마파두부","마파두부덮밥","만두탕수","맑은감자국","맑은콩나물국","맛살팽이전","매운갈비찜","매콤어묵볶음","매콤오리훈제볶음/무쌈","머스타드소스/무쌈","메론","메이플피칸파이","메추리알장조림","멕시코치킨타코","멘보샤/칠리소스","멸치고추장조림","모듬겉절이","모듬캠핑구이/쌈장","모듬피클","목살큐브스테이크","목살필라프","몽글복숭아에이드","몽실탕수육/소스","무말랭이김치","무생채","무쌈","무채장아찌무침","묵은지갈비찜","묵은지쌈/쌈장","물비빔냉국수","미나리오이무침","미니글레이즈도넛","미니김가루밥","미니김치우동","미니날치알밥","미니돈코츠라멘","미니밀크샌드쿠키","미니초코글레이즈도넛","미니크로칸슈","미소된장국","미역줄기볶음","바나나","바나나모찌","바나나우유","바닐라브륄레","바람떡","바베큐닭구이/또띠아","바베큐폭찹스테이크","바지락살미역국","바지락수제비국","밥버거","방울토마토","배추김치","배추된장국","백김치","백미밥","백순대볶음","버터갈릭감자튀김","버터떡","베리믹스견과샐러드","베리주스","베리파인주스","베이컨야채볶음밥","베이컨치즈알감자","보리밥","보쌈","보쌈김치","봄동겉절이","봉골레파스타","부대찌개","부대찌개/라면사리","부추겉절이","부추계란국","부추무생채","부추양파무침","북어미역국","불고기김치볶음밥","불고기버거","불닭치즈덮밥","브로콜리오징어초회","블랙갈릭킹치킨","비름나물무침","비빔막국수","비빔밥/약고추장","비빔칼국수","사과","사과요구르트","사과유산균음료","사과음료","삼겹김치찜","삼색나물무침","삼치마요구이","삼치무조림","상추쌈/쌈장","상추파채무침","새우까스/콘샐러드소스","새우딤섬","새우또띠아피자","새우튀김","새콤무생채","샐러드파스타","생선까스/타르소스","샤오롱바오","샤인애플주스","석박지","설렁탕/당면","세발나물무침","소고기무국","소고기미역국","소고기콩나물밥/양념장","소떡소떡","소불고기밥버거","소세지야채볶음","소시지카레볶음밥","수박","수제딸기라떼","수제레몬에이드","수제마늘간장치킨","수제망고에이드","수제미숫가루라떼","수제블루베리에이드","수제양념닭다리구이","수제치킨스테이크","수제키위에이드","숙주나물무침","숙주미나리무침","순대국","순대낙지볶음","순두부찌개","순살간장찜닭","순살간장찜닭/납작당면","순살감자탕","순살닭볶음탕","순살양념치킨","순살중화풍치킨","순살카레닭볶음탕","스트로베리치즈쌀케익","시금치나물무침","시금치된장국","시금치프리타타","시리얼/우유","식혜","실곤약야채무침","십원빵","쌀국수","아몬드멸치볶음","아오리사과","아이스블루베리요거트","아이스요구르트","알리오올리오파스타","애호박새송이볶음","야끼만두","야채튀김","야채필라프","얇무지","양념파닭꼬치","양배추깻잎생채","양배추샐러드/케요네즈","양상추샐러드/오리엔탈D","양상추샐러드/흑임자D","양송이크림스프","어니언크리미치킨","어두부전/머스타드","어두부전/머스터드","어묵국","어묵잡채","언양식불고기","언양식불고기/파채무침","얼큰어묵국","에그타르트","열대과일샐러드","열무김치","오꼬노미야끼","오꼬노미야끼온더치킨","오렌지","오리훈제","오므라이스/소스","오븐삼겹데리야끼구이","오삼불고기","오이고추된장무침","오이김치","오이냉국","오이달래무침","오이무침","오이지무침","오이피클","오징어김치전","오징어덮밥","오징어링튀김","오징어무국","오징어볶음","오징어초무침","옥수수빵","옥수수콘스프/크루통","온두부","왕만두국","왕만두전골","요거과일샐러드","요구르트","우렁강된장/상추쌈","유채나물무침","육개장","임연수어구이","자두레몬에이드","자두주스","자메이카닭다리","자몽주스","잔치국수","잡곡밥","잡채","장조림버터볶음밥","제육볶음","조랭이떡국","주꾸미오징어볶음","주꾸미치즈떡볶음","중화풍게살볶음밥","진미채땅콩버터볶음","짜장떡볶이","짜장밥","짬뽕수제비국","쫄면","찐만두","차슈덮밥","차조밥","참나물유자샐러드","참치김치찌개","참치두부찌개","참치마요덮밥","참치채소비빔밥/양념장","찹쌀김부각","찹쌀팥꽈배기","천사채무침","청경채나물무침","청귤에이드","청사과에이드","청사과청귤에이드","청포도","청포도에이드","청포도주스","청포묵탕평채","초코구슬아이스크림","초코스모어쿠키","초코츄러스","초코칩쿠키","초코칩트위스트","초코크레이프케익","초코프로틴바","총각김치","추가밥","취나물무침","치즈닭갈비","치즈돈까스/소스","치즈볼","치즈크러스트피자","치커리사과무침","치커리사과샐러드","치커리사과유자샐러드","치킨마요덮밥","치킨스낵랩","치킨스테이크","칠리새우","카레감자채볶음","카레라이스","카프레제샐러드","케이준치킨샐러드","코다리땡초강정","코다리양념구이","콘소메치킨","콘치즈함박스테이크","콜슬로샐러드","콩나물맛살냉채","콩나물무침","콩나물잡채","콩비지찌개","크레이프케익","크림떡볶이","크림스프","키위샐러드/소스","타코야끼","탕수육/소스","탕수육강정","토마토미트스파게티","토마토푸실리냉파스타","톳두부무침","통새우꼬치","통새우만두찜","티라미슈케익","파인애플","파프리카초무침","패션후르츠주스","포도","포도주스","플레인바움쿠헨","피자토스트","한우불고기","한우샤브샤브국","한우함박스테이크","함박스테이크/청양크림S","핫윙오븐구이","해물볶음우동","해물순두부찌개","해물짜장볶음우동","해물짬뽕국","해물파전","햄김치찌개","햄마요덮밥","햄야채볶음밥","현미밥","황도흑임자샐러드","회오리감자","후라이드닭꼬치","후라이드오징어","후리가케김가루밥","훈제오리야채무침","흑미밥","흑임자연근무침"],"b":[[47,329,257,399,185,337],[360,2,402,78,76,284],[43,215,106,198,226,199,9],[447,100,149,60,6,375],[43,437,105,364,304,44],[341,81,129,421,321,185],[51,297,192,430,313,422],[47,89,225,110,363,185],[21,131,387,280,126,185],[43,217,334,98,313,236],[341,264,446,120,57,158],[309,172,410,254,185,377],[320,137,270,26,185,420],[447,208,0,298,18,177],[440,68,344,305,185,176],[47,271,258,266,296,185],[395,166,292,78,384,371],[341,259,29,204,138,57],[439,136,324,180,185,218],[440,241,105,316,185,391],[47,186,223,34,189,380],[153,293,330,392,185,130],[341,345,291,398,119,18],[183,205,275,268,185,236],[440,182,80,54,313,385],[47,328,333,265,13,185],[390,434,325,56,200,339],[341,264,64,8,57,44],[216,406,283,104,18,362],[440,261,353,416,98,380],[47,63,206,86,408,185],[326,402,318,414,94,381],[134,426,137,389,185,219],[440,46,139,272,239,185],[47,358,446,82,436,57],[351,435,78,155,18,366],[50,62,45,75,321,331],[440,88,290,415,116,57],[167,168,289,254,185,424],[341,202,29,294,304,117],[343,172,97,230,18,367],[197,123,32,3,126,18,373],[21,131,292,67,185,35],[447,259,225,204,57,302],[85,172,185,212,336,16],[341,208,105,405,185,425],[197,182,275,12,267,380],[340,354,149,165,319,154],[447,264,121,27,237,184],[216,271,232,26,185,66],[341,215,106,198,226,199],[197,203,446,380,170,158],[286,2,397,152,185,218],[447,113,387,323,185,385,251],[351,435,78,31,412,185],[341,297,257,278,344,185],[197,238,312,265,295,57],[71,318,110,386,381,368],[447,428,315,398,144,57],[343,56,448,243,18,174],[341,89,160,223,305,185],[128,197,261,94,185,220],[167,168,289,411,288,307],[341,99,7,58,57,178],[93,271,317,185,442,370],[47,181,72,115,185,407],[356,136,372,34,104,185],[246,297,79,75,444,118],[341,68,257,285,24,57],[87,42,232,417,313,218],[47,437,364,116,185,9],[356,322,263,272,387,185],[195,282,83,318,410,152],[341,90,260,60,380,369],[53,345,149,316,228,366],[47,46,139,17,436,185],[356,359,80,4,393,380],[51,2,330,255,57,111],[341,202,97,234,185,194],[134,81,229,67,185,336],[47,137,344,20,18,332],[356,334,291,122,400,57],[434,205,78,412,185,381,331],[188,101,23,149,382,234],[183,185,221,379],[361,46,55,159,185,191],[356,186,227,150,185,154],[43,70,257,135,431,380],[355,314,396,231,185],[197,123,28,121,57,420],[395,56,306,185,212,269],[356,215,106,198,226,199,331],[43,435,141,138,185,207],[348,107,303,213,185],[197,137,346,119,185,35],[50,1,275,268,185,171],[43,62,64,349,179,185],[277,235,38,185,381,374],[197,259,204,8,237,174],[84,409,190,180,151,253],[341,208,0,298,185,419],[47,81,388,34,196,185],[244,185,379,339],[197,68,23,173,398,185],[341,88,290,384,185,336],[47,112,240,32,324,185],[390,297,441,124,185],[440,102,149,122,224,276],[216,113,283,109,304,218],[440,238,257,344,237,247],[47,264,312,4,147,380],[22,132,67,185,287],[43,259,204,72,57,377],[309,233,401,185,256],[341,261,80,98,48,185],[47,435,262,357,394,185],[73,140,443,185,381,302],[197,329,29,163,57,143],[343,1,206,185,193,16],[341,46,327,222,3,304],[47,203,308,142,421,185],[162,37,60,304,381,35],[341,137,29,436,185,281],[195,201,293,318,254,169],[341,264,95,303,8,237],[197,145,404,266,185,40],[153,185,221,146],[440,114,105,342,185,425],[246,1,128,294,185,279],[440,172,353,25,185,9],[197,11,80,265,295,185],[447,91,312,300,57,247],[341,96,347,285,185,274],[103,291,338,185,381,251],[197,365,122,30,185,40],[438,79,92,49,185,154],[341,203,421,335,185,369],[211,172,233,318,429,376],[440,68,344,104,185,332],[197,240,214,34,385,313],[74,5,232,304,381,164],[341,259,204,72,57,247],[395,102,148,397,185,36],[440,19,81,33,185,252],[47,68,157,140,250,185],[209,187,391,39],[197,137,23,316,398,185],[360,350,322,410,185,423],[341,181,324,427,185,407],[47,264,446,237,35,158],[22,132,67,185,287],[197,41,403,14,380,236],[183,1,275,268,185],[341,433,161,310,156,307],[47,113,387,119,431,185],[93,205,418,159,304],[197,101,128,234,185,111],[242,46,58,267,304,125],[341,172,353,116,185,366],[47,352,365,4,52,313],[390,301,192,432,185,218],[341,215,106,198,226,199],[47,328,383,77,380,248],[340,149,321,288,381,10],[341,113,330,133,8,185],[246,81,270,413,185,420],[197,297,257,141,26,185],[348,2,233,431,185,143],[341,136,69,127,380,370],[440,261,257,98,245,185],[197,112,86,185,212,249],[205,290,124,445,116,57],[341,137,108,399,185,175],[216,70,448,299,185,218],[440,68,344,104,185,332],[343,266,185,221],[355,172,61,411,185,35],[341,328,59,404,311,185],[210,397,318,15,273],[440,208,105,432,185,378],[197,345,65,34,305,185],[277,235,38,185,381,174],[341,259,312,204,335,57],[351,435,78,412,185,331]],"paren":[[31,381,"추가밥(미니밥)"],[39,202,"부대찌개(사골)"],[47,354,"찐만두(고기)"],[47,165,"미니김가루밥(추가)"],[52,152,"목살큐브스테이크(데리야끼)"],[57,71,"날치알크림파스타(국)"],[57,381,"추가밥(미니밥)"],[62,167,"미니날치알밥(추가)"],[72,152,"목살큐브스테이크(데리야끼)"],[78,202,"부대찌개(사골)"],[82,434,"해물짜장볶음우동(대)"],[82,381,"추가밥(미니밥)"],[97,381,"추가밥(미니밥)"],[102,339,"자몽주스(대)"],[106,124,"떡볶이(밀떡)"],[116,381,"추가밥(미니밥)"],[121,381,"추가밥(미니밥)"],[132,285,"야채튀김(오븐)"],[133,381,"추가밥(미니밥)"],[135,92,"닭떡볶이(밀)"],[140,381,"추가밥(미니밥)"],[143,19,"게살크림우동(반찬)"],[144,157,"무생채(하얀)"],[145,39,"과일음료(200ml/카프리썬)"],[163,381,"추가밥(미니밥)"],[171,124,"떡볶이(밀)"],[181,381,"추가밥(미니밥)"]]};
function initW_basket(root, D) {
  // ── 좌표 상수 ────────────────────────────────────────────────
  // 왼쪽 칩 영역 x 24~350, 오른쪽 곡선 x 396~700
  var CX = 24, CLIMIT = 350, CH = 26, CGAP = 31, CTOP = 54, CMAX = 8;
  var PX0 = 396, PX1 = 700, PY0 = 66, PY1 = 250, VMAX = 520;
  var N = D.n, NAMES = D.names, B = D.b, DATES = D.dates;
  var GRAY = '#b9b3a5', SOFT = '#6b7385', INK = '#1c2230';

  var sx = function (i) { return PX0 + i * (PX1 - PX0) / (N - 1); };
  var sy = function (v) { return PY1 - v * (PY1 - PY0) / VMAX; };

  // 글자 폭 어림(한글 1.0em, 숫자·영문 0.58em, 괄호·쉼표 0.35em)
  function tw(s, size) {
    var w = 0;
    for (var i = 0; i < s.length; i++) {
      var c = s.charCodeAt(i);
      if ((c >= 0xAC00 && c <= 0xD7A3) || (c >= 0x3130 && c <= 0x318F) || (c >= 0x4E00 && c <= 0x9FFF) || c === 0x2192) w += 1;
      else if (c === 0x28 || c === 0x29 || c === 0x2C || c === 0x2E || c === 0xB7 || c === 0x3A) w += 0.35;
      else if (c === 0x20) w += 0.3;
      else if (c === 0x2F || c === 0x26 || c === 0x2B || c === 0x2D) w += 0.5;
      else w += 0.58;
    }
    return w * size;
  }
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function ymd(s) { return s.slice(0, 4) + '-' + s.slice(4, 6) + '-' + s.slice(6, 8); }

  // ── 괄호 대응표: 날짜 → (메뉴 인덱스 → 정리 전 이름) ─────────
  var pmap = {};
  for (var p = 0; p < D.paren.length; p++) {
    var e = D.paren[p];
    if (!pmap[e[0]]) pmap[e[0]] = {};
    pmap[e[0]][e[1]] = e[2];
  }
  function rawOf(d, i) { var m = pmap[d]; return (m && m[i] !== undefined) ? m[i] : null; }

  // ── 누적 메뉴 종류 곡선 두 벌(초기화 때 한 번만 계산) ────────
  function buildCum(rawMode) {
    var seen = {}, k = 0, out = [];
    for (var d = 0; d < N; d++) {
      var row = B[d];
      for (var j = 0; j < row.length; j++) {
        var i = row[j], r = rawMode ? rawOf(d, i) : null;
        var key = r === null ? 'c' + i : 'r' + r;
        if (seen[key] !== 1) { seen[key] = 1; k++; }
      }
      out.push(k);
    }
    return out;
  }
  var CUM = { clean: buildCum(false), raw: buildCum(true) };
  function poly(arr) {
    var s = [];
    for (var i = 0; i < N; i++) s.push(sx(i).toFixed(1) + ',' + sy(arr[i]).toFixed(1));
    return s.join(' ');
  }

  // ── 요소 ─────────────────────────────────────────────────────
  var q = function (s) { return root.querySelector(s); };
  var chips = q('.chips'), sumT = q('.sum');
  var cClean = q('.cclean'), cRaw = q('.craw'), curves = cClean.parentNode;
  var vline = q('.vline'), dot = q('.cdot'), dval = q('.cval');
  var l1 = q('.foot1'), l2 = q('.foot2');
  var out = q('.wout'), slider = q('input[type="range"]');
  var btns = Array.prototype.slice.call(root.querySelectorAll('.wbtn'));

  cClean.setAttribute('points', poly(CUM.clean));
  cRaw.setAttribute('points', poly(CUM.raw));

  var mode = 'clean', day = Math.max(0, Math.min(N - 1, +slider.value || 0));

  // ── 왼쪽: 하루 메뉴 칩 ───────────────────────────────────────
  function drawChips() {
    var row = B[day], buf = [], fold = row.length > CMAX;
    var show = fold ? CMAX - 1 : row.length;
    for (var k = 0; k < show; k++) {
      var i = row[k], top = CTOP + CGAP * k, base = top + 18;
      var raw = rawOf(day, i);
      var label = (mode === 'raw' && raw !== null) ? raw : NAMES[i];
      var cw = Math.min(300, label.length * 15 + 20);
      var cx = CX;
      if (mode === 'clean' && raw !== null) {
        var gw = tw(raw, 14);
        var avail = Math.max(40, CLIMIT - CX - 28 - cw);   // 병기에 쓸 수 있는 폭
        var gwUse = Math.min(gw, avail);
        var adj = gw > avail ? ' textLength="' + gwUse.toFixed(1) + '" lengthAdjust="spacingAndGlyphs"' : '';
        buf.push('<text x="' + CX + '" y="' + base + '" font-size="14" fill="' + GRAY + '"' + adj + '>' + esc(raw) + '</text>');
        buf.push('<text x="' + (CX + gwUse + 6).toFixed(1) + '" y="' + base + '" font-size="14" fill="' + GRAY + '">&#8594;</text>');
        cx = CX + gwUse + 28;
      }
      buf.push('<rect x="' + cx.toFixed(1) + '" y="' + top + '" width="' + cw + '" height="' + CH + '" rx="6" fill="#ffffff" stroke="#e3ddcf"/>');
      buf.push('<text x="' + (cx + 10).toFixed(1) + '" y="' + base + '" font-size="15" fill="' + INK + '">' + esc(label) + '</text>');
    }
    if (fold) {
      var t2 = CTOP + CGAP * (CMAX - 1), lab = '외 ' + (row.length - show) + '개';
      buf.push('<rect x="' + CX + '" y="' + t2 + '" width="' + (lab.length * 15 + 20) + '" height="' + CH + '" rx="6" fill="#ffffff" stroke="#e3ddcf"/>');
      buf.push('<text x="' + (CX + 10) + '" y="' + (t2 + 18) + '" font-size="15" fill="' + SOFT + '">' + lab + '</text>');
    }
    chips.innerHTML = buf.join('');
  }

  // ── 오른쪽: 현재 위치 표시 ───────────────────────────────────
  function drawMark() {
    var v = CUM[mode][day], x = sx(day), y = sy(v);
    vline.setAttribute('x1', x.toFixed(1)); vline.setAttribute('x2', x.toFixed(1));
    dot.setAttribute('cx', x.toFixed(1)); dot.setAttribute('cy', y.toFixed(1));
    var right = x <= 640;
    dval.setAttribute('x', (right ? x + 10 : x - 10).toFixed(1));
    dval.setAttribute('y', Math.max(78, Math.min(244, y + 6)).toFixed(1));
    dval.setAttribute('text-anchor', right ? 'start' : 'end');
    dval.textContent = v + (mode === 'clean' ? '종' : '개');
  }

  function drawFoot() {
    if (mode === 'clean') {
      l1.textContent = '184일 · 449종'; l2.textContent = '괄호 그대로면 454개';
    } else {
      l1.textContent = '184일 · 454개'; l2.textContent = '괄호 제거하면 449종';
    }
  }

  function drawHead() {
    var n = B[day].length, pr = n * (n - 1) / 2;
    sumT.textContent = ymd(DATES[day]) + ' · 메뉴 ' + n + '개 · 만들어지는 쌍 ' + pr + '개';
    out.textContent = ymd(DATES[day]) + ' (' + (day + 1) + '일차)';
  }

  function redraw() { drawHead(); drawChips(); drawMark(); }

  // ── 곡선 색 전환(200ms) ──────────────────────────────────────
  var C1 = [43, 127, 214], C2 = [185, 179, 165], seq = 0, raf = 0;
  function hex(c) {
    return '#' + c.map(function (v) { var s = Math.round(v).toString(16); return s.length < 2 ? '0' + s : s; }).join('');
  }
  function setCurves(k) {           // k 0→1, 현재 기준 곡선이 파랑이 되는 진행률
    var cur = mode === 'clean' ? cClean : cRaw, oth = mode === 'clean' ? cRaw : cClean;
    var a = [], b = [];
    for (var i = 0; i < 3; i++) { a.push(C2[i] + (C1[i] - C2[i]) * k); b.push(C1[i] + (C2[i] - C1[i]) * k); }
    cur.setAttribute('stroke', hex(a)); oth.setAttribute('stroke', hex(b));
  }
  function applyMode(anim) {
    var cur = mode === 'clean' ? cClean : cRaw, oth = mode === 'clean' ? cRaw : cClean;
    cur.setAttribute('stroke-width', '2'); cur.setAttribute('opacity', '1');
    oth.setAttribute('stroke-width', '1.5'); oth.setAttribute('opacity', '.6');
    curves.appendChild(oth); curves.appendChild(cur);   // 현재 기준 곡선을 앞으로
    if (!anim) { setCurves(1); return; }
    var my = ++seq, t0 = -1;
    if (raf) cancelAnimationFrame(raf);
    var step = function (ts) {
      if (my !== seq) return;
      if (t0 < 0) t0 = ts;
      var k = Math.min(1, (ts - t0) / 200);
      setCurves(k);
      if (k < 1) raf = requestAnimationFrame(step); else raf = 0;
    };
    setCurves(0);
    raf = requestAnimationFrame(step);
  }

  // ── 리스너 ───────────────────────────────────────────────────
  slider.addEventListener('input', function () {
    day = Math.max(0, Math.min(N - 1, +slider.value || 0));
    redraw();
  });
  btns.forEach(function (bt) {
    bt.addEventListener('click', function () {
      var m = bt.getAttribute('data-m');
      if (m === mode) return;
      mode = m;
      btns.forEach(function (o) { o.classList.toggle('on', o.getAttribute('data-m') === mode); });
      drawFoot(); drawChips(); drawMark(); applyMode(true);
    });
  });

  drawFoot(); redraw(); applyMode(false);
}

function initW_baseline(root, D) {
  // ── 파생값 — 조립할 때 이 derive 블록을 파일 스코프로 올려 minco와 공유한다 ──
  // single 메뉴별 등장 일수 · dayOf 메뉴별 등장 날짜 · pair 쌍별 동시 일수 2,291개 · rules 양방향 4,582개
  function derive(D) {
    const N = D.n, M = D.names.length;
    const single = new Array(M).fill(0), dayOf = new Array(M);
    for (let i = 0; i < M; i++) dayOf[i] = new Set();
    const pair = new Map();
    for (let d = 0; d < N; d++) {
      const row = D.b[d];
      for (let j = 0; j < row.length; j++) { single[row[j]]++; dayOf[row[j]].add(d); }
      for (let j = 0; j < row.length; j++) for (let k = j + 1; k < row.length; k++) {
        const u = row[j], v = row[k], key = (u < v ? u : v) * 100000 + (u < v ? v : u);
        pair.set(key, (pair.get(key) || 0) + 1);
      }
    }
    function rule(ai, bi, co) {
      const na = single[ai], nb = single[bi], conf = na ? co / na : 0, base = nb / N;
      return { ai: ai, bi: bi, an: D.names[ai], bn: D.names[bi], co: co, na: na, nb: nb, N: N,
        conf: conf, base: base, lift: base ? conf / base : 0, tag: '' };
    }
    const rules = [];
    pair.forEach(function (co, key) {
      const a = Math.floor(key / 100000), b = key % 100000;
      rules.push(rule(a, b, co), rule(b, a, co));
    });
    // 동점 처리: 이름은 글자 코드 순서로 비교해 어느 브라우저에서나 같은 순위가 나오게 한다
    const S = (x, y) => (x < y ? -1 : x > y ? 1 : 0);
    const NC = (p, r) => S(p.an, r.an) || S(p.bn, r.bn);
    const CMP = {
      lift: (p, r) => r.lift - p.lift || r.co - p.co || r.conf - p.conf || NC(p, r),
      conf: (p, r) => r.conf - p.conf || r.co - p.co || r.lift - p.lift || NC(p, r),
      co: (p, r) => r.co - p.co || r.lift - p.lift || r.conf - p.conf || NC(p, r)
    };
    return { N: N, single: single, dayOf: dayOf, pair: pair, rules: rules, rule: rule, CMP: CMP };
  }
  const G = derive(D), CMP = G.CMP, dayOf = G.dayOf;

  // ── 좌표 상수: 자 x 214~700(길이 486), 왼쪽 라벨 폭 180, 수치판 안쪽 392~688 ──
  const X0 = 214, LEN = 486, LABW = 180, CARDX = 392, CARDW = 296;

  // ── 간이 표시(root의 data-simple="1"): 격자를 그리지 않고 계산 카드를 전체 폭으로 넓혀 세로 분수로 적는다 ──
  const SIMPLE = !!(root.dataset && root.dataset.simple === '1');

  // ── 세트 ① 급식 184일 — 동시 5일 이상 13쌍 × 양방향 = 26개 ──
  const mealList = G.rules.filter(r => r.co >= 5).sort(CMP.lift);

  // ── 세트 ② 표 밖 조합 — 이름만 지정하고 값은 같은 데이터에서 계산 ──
  const idxOf = new Map();
  for (let i = 0; i < D.names.length; i++) if (!idxOf.has(D.names[i])) idxOf.set(D.names[i], i);
  const OUT = [['제육볶음', '배추김치'], ['순대국', '부추겉절이'], ['배추김치', '깍두기'], ['보쌈', '보쌈김치']];
  const outList = [];
  for (let i = 0; i < OUT.length; i++) {
    const a = idxOf.get(OUT[i][0]), b = idxOf.get(OUT[i][1]);
    if (a === undefined || b === undefined) continue;
    const key = (a < b ? a : b) * 100000 + (a < b ? b : a);
    const r = G.rule(a, b, G.pair.get(key) || 0);
    r.tag = r.co === 0 ? '동시 0일 · 규칙 후보 아님' : '동시 5일 미만 · 표 밖';
    outList.push(r);
  }

  // ── 세트 ③ 손계산 100일 — 활동지 설계값 ──
  function raw(an, bn, co, na, nb, N) {
    const conf = na ? co / na : 0, base = nb / N;
    return { ai: -1, bi: -1, an: an, bn: bn, co: co, na: na, nb: nb, N: N,
      conf: conf, base: base, lift: base ? conf / base : 0, tag: '' };
  }
  const handList = [raw('제육볶음', '배추김치', 6, 10, 60, 100), raw('순대국', '깍두기', 5, 5, 20, 100)];

  const SETS = {
    meal: { list: mealList, sortable: true },
    out: { list: outList, sortable: false },
    hand: { list: handList, sortable: false }
  };
  function flipOf(r) {
    const f = r.ai >= 0 ? G.rule(r.bi, r.ai, r.co) : raw(r.bn, r.an, r.co, r.nb, r.na, r.N);
    f.tag = r.tag;
    return f;
  }

  // ── 표시용 반올림(계산은 원래 값으로 한다) ──
  const f2 = v => v.toFixed(2);
  const fBase = v => (v < 0.01 ? v.toFixed(3) : v.toFixed(2));
  const fLift = v => (v < 10 ? v.toFixed(2) : v.toFixed(1));

  // 글자 폭: 실제 렌더 길이를 우선 쓰고, 잴 수 없으면 한글 1.0 · 공백 0.3 · 그 밖 0.55로 어림한다
  function guess(s, size) {
    let w = 0;
    for (let i = 0; i < s.length; i++) {
      const c = s.charCodeAt(i);
      if (c === 32) w += size * 0.3;
      else if ((c >= 0xAC00 && c <= 0xD7A3) || (c >= 0x3130 && c <= 0x318F) || (c >= 0x4E00 && c <= 0x9FFF) || c === 0x2192) w += size;
      else w += size * 0.55;
    }
    return w;
  }
  function put(el, s, size) {
    el.textContent = s;
    const m = el.getComputedTextLength ? el.getComputedTextLength() : 0;
    return m > 0 ? m : guess(s, size);
  }

  // ── 요소 ──
  const q = s => root.querySelector(s);
  const ttl = q('.ttl'), bdg = q('.bdg'), bdgBox = q('.bdgbox'), bdgTxt = q('.bdgtxt');
  const bar1 = q('.bar1'), ov1 = q('.ov1'), cap1 = q('.cap1'), val1 = q('.val1'), lead1 = q('.lead1');
  const bar2 = q('.bar2'), val2 = q('.val2'), lead2 = q('.lead2'), baseL = q('.baseL');
  const l1a = q('.l1a'), l1b = q('.l1b'), l2a = q('.l2a'), l2b = q('.l2b');
  const gridG = q('.grid'), gnote = q('.gnote');
  const c1a = q('.c1a'), c1b = q('.c1b'), c2 = q('.c2'), c3 = q('.c3');
  const c4a = q('.c4a'), c4b = q('.c4b'), c5 = q('.c5');
  const rng = q('.rng'), wout = q('.wout'), dirBtn = q('.dir');

  // ── 간이 표시 배치: 카드를 전체 폭으로 넓히고 분수 세 줄을 만들어 둔다 ──
  const SVGNS = 'http://www.w3.org/2000/svg';
  const svgEl = root.querySelector('svg'), cardRect = q('.card');
  const SLX = 56, SFX = 214, SFW = 80, SFC = SFX + SFW / 2, SEQ = 310, SVX = 332;
  let rowConf = null, rowBase = null, rowLift = null;
  function svgNode(tag, at) {
    const el = document.createElementNS(SVGNS, tag);
    for (const k in at) el.setAttribute(k, at[k]);
    return el;
  }
  // 분수 한 줄: 라벨 · 분자 · 가로선 · 분모 · 등호 · 값
  function makeRow(g, cy, vsize) {
    const o = {
      cy: cy,
      lab: svgNode('text', { x: SLX, y: cy + 5, 'font-size': 17, fill: '#1c2230' }),
      num: svgNode('text', { x: SFC, y: cy - 6, 'font-size': 16, fill: '#1c2230', 'text-anchor': 'middle' }),
      den: svgNode('text', { x: SFC, y: cy + 16, 'font-size': 16, fill: '#1c2230', 'text-anchor': 'middle' }),
      bar: svgNode('line', { y1: cy, y2: cy, stroke: '#1c2230', 'stroke-width': 1.4 }),
      eq: svgNode('text', { x: SEQ, y: cy + 5, 'font-size': 17, fill: '#1c2230' }),
      val: svgNode('text', { x: SVX, y: cy + 7, 'font-size': vsize, 'font-weight': 800, fill: '#1c2230' })
    };
    o.eq.textContent = '=';
    g.appendChild(o.lab); g.appendChild(o.num); g.appendChild(o.den);
    g.appendChild(o.bar); g.appendChild(o.eq); g.appendChild(o.val);
    return o;
  }
  function setRow(o, label, num, den, val, color) {
    o.lab.textContent = label;
    const w = Math.max(put(o.num, num, 16), put(o.den, den, 16)) + 16;
    o.bar.setAttribute('x1', (SFC - w / 2).toFixed(1));
    o.bar.setAttribute('x2', (SFC + w / 2).toFixed(1));
    o.val.textContent = val;
    o.lab.setAttribute('fill', color); o.num.setAttribute('fill', color);
    o.den.setAttribute('fill', color); o.eq.setAttribute('fill', color);
    o.val.setAttribute('fill', color); o.bar.setAttribute('stroke', color);
  }
  if (SIMPLE) {
    if (svgEl) svgEl.setAttribute('viewBox', '0 0 720 380');
    if (gnote) { gnote.textContent = ''; gnote.setAttribute('opacity', '0'); }
    if (cardRect) {
      cardRect.setAttribute('x', '24'); cardRect.setAttribute('y', '182');
      cardRect.setAttribute('width', '676'); cardRect.setAttribute('height', '186');
    }
    c1a.setAttribute('x', String(SLX)); c1b.setAttribute('x', String(SLX));
    [c2, c3, c4a, c4b, c5].forEach(function (t) { t.textContent = ''; t.setAttribute('opacity', '0'); });
    const g = svgNode('g', {});
    if (svgEl) svgEl.appendChild(g);
    rowConf = makeRow(g, 252, 21);
    rowBase = makeRow(g, 298, 21);
    rowLift = makeRow(g, 344, 26);
  }
  const setBtns = Array.prototype.slice.call(root.querySelectorAll('.wbtn[data-set]'));
  const sortBtns = Array.prototype.slice.call(root.querySelectorAll('.wbtn[data-sort]'));

  // ── 격자: 칸 13×13 · 간격 2 · 좌상단 (24, 196) ──
  const CELL = { free: ['#e3ddcf', '1'], a: ['#2b7fd6', '0.35'], b: ['#b07a00', '0.35'], both: ['#d64545', '1'] };
  function tone(r, d) {
    let a, b;
    if (r.ai >= 0) { a = dayOf[r.ai].has(d); b = dayOf[r.bi].has(d); }
    else { a = d < r.na; b = d < r.co || (d >= r.na && d < r.na + r.nb - r.co); }   // 겹침 → 조건만 → 결과만 → 빈 칸
    return a && b ? CELL.both : a ? CELL.a : b ? CELL.b : CELL.free;
  }
  let layoutKey = '', cells = null;
  function grid(r) {
    const N = r.N, cols = Math.min(23, N), key = N + '/' + cols;
    if (key !== layoutKey) {                       // 행·열이 바뀌면 색을 박아 넣고 다시 그린다(전환 없음)
      layoutKey = key;
      let s = '';
      for (let i = 0; i < N; i++) {
        const t = tone(r, i);
        s += '<rect x="' + (24 + (i % cols) * 15) + '" y="' + (196 + Math.floor(i / cols) * 15) +
          '" width="13" height="13" rx="2" fill="' + t[0] + '" fill-opacity="' + t[1] +
          '" style="transition:fill .18s linear,fill-opacity .18s linear"/>';
      }
      gridG.innerHTML = s;
      cells = gridG.children;
      return true;
    }
    for (let d = 0; d < N; d++) {
      const t = tone(r, d), el = cells[d];
      el.style.fill = t[0];
      el.style.fillOpacity = t[1];
    }
    return false;
  }

  // ── 막대 그리기 ──
  const width = v => { const w = LEN * v; return w <= 0.01 ? 0 : Math.max(w, 3); };   // 최소 폭 3px
  function label(txt, lead, d, ym, s, color) {
    const end = X0 + d;
    if (end > 630) {                               // 자 끝에 닿으면 막대 안쪽 흰 글자
      txt.setAttribute('x', (end - 8).toFixed(1));
      txt.setAttribute('text-anchor', 'end');
      txt.setAttribute('fill', '#ffffff');
      lead.setAttribute('stroke-opacity', '0');
    } else if (d > 0 && d < 26) {                  // 막대가 짧으면 값을 띄우고 가로 지시선으로 잇는다
      txt.setAttribute('x', String(X0 + 32));
      txt.setAttribute('text-anchor', 'start');
      txt.setAttribute('fill', color);
      lead.setAttribute('x1', end.toFixed(1));
      lead.setAttribute('x2', String(X0 + 27));
      lead.setAttribute('y1', String(ym));
      lead.setAttribute('y2', String(ym));
      lead.setAttribute('stroke-opacity', '1');
    } else {
      txt.setAttribute('x', (end + (d === 0 ? 8 : 6)).toFixed(1));
      txt.setAttribute('text-anchor', 'start');
      txt.setAttribute('fill', color);
      lead.setAttribute('stroke-opacity', '0');
    }
    txt.textContent = s;
  }
  function paint(c, b) {
    const d1 = width(c), d2 = width(b), e1 = X0 + d1, bx = X0 + d2;
    bar1.setAttribute('width', d1.toFixed(1));
    bar2.setAttribute('width', d2.toFixed(1));
    cap1.setAttribute('stroke-opacity', d1 === 0 ? '1' : '0');   // 신뢰도 0이면 세로 마감선만
    baseL.setAttribute('x1', bx.toFixed(1));
    baseL.setAttribute('x2', bx.toFixed(1));
    if (e1 >= bx) {
      ov1.setAttribute('x', bx.toFixed(1));
      ov1.setAttribute('width', (e1 - bx).toFixed(1));
      ov1.setAttribute('fill-opacity', '0.55');
    } else {
      ov1.setAttribute('x', e1.toFixed(1));
      ov1.setAttribute('width', (bx - e1).toFixed(1));
      ov1.setAttribute('fill-opacity', '0.25');
    }
    label(val1, lead1, d1, 71, f2(c), '#2b7fd6');
    label(val2, lead2, d2, 119, fBase(b), '#6b7385');
  }

  // ── 애니메이션: rAF 1개로 두 막대와 기준 점선을 함께 굴린다 ──
  let disp = null, raf = 0;
  function roll(c, b, instant) {
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
    if (instant || !disp) { disp = { c: c, b: b }; paint(c, b); return; }
    const s = { c: disp.c, b: disp.b };
    let t0 = -1;
    const step = ts => {
      if (t0 < 0) t0 = ts;
      const t = Math.min(1, (ts - t0) / 300), k = 1 - (1 - t) * (1 - t);
      disp = { c: s.c + (c - s.c) * k, b: s.b + (b - s.b) * k };
      paint(disp.c, disp.b);
      if (t < 1) raf = requestAnimationFrame(step);
      else { raf = 0; disp = { c: c, b: b }; }
    };
    raf = requestAnimationFrame(step);
  }

  // ── 두 줄 접기: 한 줄이 한도를 넘으면 조건과 결과를 나누어 적는다 ──
  function fold(a, b, full, head, tail, y1, y2, ym) {
    if (put(a, full, 14) <= LABW) { a.setAttribute('y', String(ym)); b.textContent = ''; return; }
    a.setAttribute('y', String(y1)); put(a, head, 14);
    b.setAttribute('y', String(y2)); b.textContent = tail;
  }
  function badge(r) {
    const t = r.tag || (r.lift >= 0.9 && r.lift <= 1.1 ? '기본 등장률과 비슷함' : '');
    if (!t) { bdg.setAttribute('opacity', '0'); bdgTxt.textContent = ''; return; }
    bdg.setAttribute('opacity', '1');
    const w = put(bdgTxt, t, 14) + 24, x = 700 - w;
    bdgBox.setAttribute('x', x.toFixed(1));
    bdgBox.setAttribute('width', w.toFixed(1));
    bdgBox.setAttribute('stroke', r.tag ? '#e3ddcf' : '#b07a00');
    bdgTxt.setAttribute('x', (x + 12).toFixed(1));
    bdgTxt.setAttribute('fill', r.tag ? '#6b7385' : '#b07a00');
  }

  // ── 상태 ──
  let setKey = 'meal', sortKey = 'lift', idx = 40, flip = false;
  const view = () => (flip ? flipOf(SETS[setKey].list[idx]) : SETS[setKey].list[idx]);

  function draw(instant) {
    const r = view();
    ttl.textContent = r.an + ' → ' + r.bn;
    badge(r);
    fold(l1a, l1b, r.an + ' 나온 날 중 ' + r.bn, r.an + ' 나온 날 중', r.bn, 70, 88, 76);
    fold(l2a, l2b, r.N + '일 전체 중 ' + r.bn, r.N + '일 전체 중', r.bn, 118, 136, 124);
    gnote.setAttribute('opacity', (!SIMPLE && setKey === 'hand') ? '1' : '0');

    const band = r.lift >= 0.9 && r.lift <= 1.1;
    if (SIMPLE) {
      c1a.setAttribute('y', '206');
      c1a.textContent = '동시 ' + r.co + '일 · 전체 ' + r.N + '일';
      c1b.setAttribute('y', '224');
      c1b.textContent = r.an + ' ' + r.na + '일 · ' + r.bn + ' ' + r.nb + '일';
      setRow(rowConf, '신뢰도 =', String(r.co), String(r.na), f2(r.conf), '#1c2230');
      setRow(rowBase, '기본 등장률 =', String(r.nb), String(r.N), fBase(r.base), '#1c2230');
      setRow(rowLift, '향상도 =', f2(r.conf), fBase(r.base), fLift(r.lift), band ? '#b07a00' : '#1c2230');
    } else {
      const one = '동시 ' + r.co + '칸 · ' + r.an + ' ' + r.na + '칸 · ' + r.bn + ' ' + r.nb + '칸 · 전체 ' + r.N + '칸';
      if (put(c1a, one, 14) <= CARDW) { c1a.setAttribute('y', '212'); c1b.textContent = ''; }
      else {
        c1a.setAttribute('y', '204');
        c1a.textContent = '동시 ' + r.co + '칸 · 전체 ' + r.N + '칸';
        c1b.setAttribute('y', '222');
        c1b.textContent = r.an + ' ' + r.na + '칸 · ' + r.bn + ' ' + r.nb + '칸';
      }
      c2.textContent = '신뢰도 = ' + r.co + ' ÷ ' + r.na + ' = ' + f2(r.conf);
      c3.textContent = '기본 등장률 = ' + r.nb + ' ÷ ' + r.N + ' = ' + fBase(r.base);
      const pre = '향상도 = ' + f2(r.conf) + ' ÷ ' + fBase(r.base) + ' =';
      const pw = put(c4a, pre, 15);
      c4b.setAttribute('x', (CARDX + pw + 8).toFixed(1));
      c4b.textContent = fLift(r.lift);
      c4a.setAttribute('fill', band ? '#b07a00' : '#1c2230');
      c4b.setAttribute('fill', band ? '#b07a00' : '#1c2230');
      c5.textContent = r.co === 0 ? '독립을 가정한 기대 동시 일수 ≈ ' + (r.na * r.nb / r.N).toFixed(1) + '일' : '';
    }

    const fresh = SIMPLE ? false : grid(r);
    wout.textContent = (idx + 1) + ' / ' + SETS[setKey].list.length;
    roll(r.conf, r.base, instant || fresh);
  }
  function go(i, instant) {
    const n = SETS[setKey].list.length;
    idx = i < 0 ? 0 : i > n - 1 ? n - 1 : i;
    flip = false;                                  // 규칙을 옮기면 조건·결과는 사양의 방향으로 돌아온다
    rng.value = String(idx);
    draw(instant);
  }

  for (let i = 0; i < setBtns.length; i++) (function (btn) {
    btn.addEventListener('click', function () {
      const k = btn.getAttribute('data-set');
      if (k === setKey) return;
      setKey = k;
      for (let j = 0; j < setBtns.length; j++) setBtns[j].classList.toggle('on', setBtns[j] === btn);
      const on = SETS[setKey].sortable;
      for (let j = 0; j < sortBtns.length; j++) sortBtns[j].disabled = !on;
      rng.max = String(SETS[setKey].list.length - 1);
      go(0, true);
    });
  })(setBtns[i]);

  for (let i = 0; i < sortBtns.length; i++) (function (btn) {
    btn.addEventListener('click', function () {
      const k = btn.getAttribute('data-sort');
      if (k === sortKey || !SETS[setKey].sortable) return;
      sortKey = k;
      for (let j = 0; j < sortBtns.length; j++) sortBtns[j].classList.toggle('on', sortBtns[j] === btn);
      const keep = SETS.meal.list[idx];
      SETS.meal.list = SETS.meal.list.slice().sort(CMP[k]);   // 보던 규칙을 새 순위에서 다시 찾는다
      const L = SETS.meal.list;
      let at = 0;
      for (let j = 0; j < L.length; j++) if (L[j].ai === keep.ai && L[j].bi === keep.bi) { at = j; break; }
      go(at, false);
    });
  })(sortBtns[i]);

  rng.addEventListener('input', function () { go(Number(rng.value), false); });

  dirBtn.addEventListener('click', function () {
    const S = SETS[setKey], r = view();
    if (S.sortable) {                              // 급식 세트는 뒤집은 규칙도 목록에 있다
      const L = S.list;
      for (let j = 0; j < L.length; j++) if (L[j].ai === r.bi && L[j].bi === r.ai) { go(j, false); return; }
      draw(false);
    } else { flip = !flip; draw(false); }
  });

  rng.max = String(SETS.meal.list.length - 1);
  go(40, true);
}

function initW_minco(root, D) {
  // ── 파생값: baseline과 같은 derive(D) ── 메뉴별 등장 일수 → 쌍별 동시 일수 → 양방향 규칙 4,582개
  // widgets12.js에 공용 derive(D)를 두면 이 블록을 그대로 옮기고 G = derive(D)만 남긴다.
  function derive(src) {
    var NM = src.names.length, single = new Array(NM), i, x, y, d;
    for (i = 0; i < NM; i++) single[i] = 0;
    var pairMap = new Map();
    for (d = 0; d < src.b.length; d++) {
      var row = src.b[d];
      for (x = 0; x < row.length; x++) single[row[x]]++;
      for (x = 0; x < row.length; x++)
        for (y = x + 1; y < row.length; y++) {
          var k = row[x] * 100000 + row[y];
          pairMap.set(k, (pairMap.get(k) || 0) + 1);
        }
    }
    var N = src.n, rules = [], hist = {};
    function mk(ai, bi, co) {
      var na = single[ai], nb = single[bi], conf = na ? co / na : 0, base = nb / N;
      return { ai: ai, bi: bi, an: src.names[ai], bn: src.names[bi], co: co, conf: conf, lift: base ? conf / base : 0 };
    }
    pairMap.forEach(function (co, k) {
      var a = Math.floor(k / 100000), b = k % 100000;
      hist[co] = (hist[co] || 0) + 1;
      rules.push(mk(a, b, co));
      rules.push(mk(b, a, co));
    });
    // 동점 처리: 이름은 글자 코드 순서로 비교해 어느 브라우저에서나 같은 순위가 나오게 한다(baseline과 동일)
    var S = function (p, r) { return p < r ? -1 : p > r ? 1 : 0; };
    rules.sort(function (p, r) {
      return r.lift - p.lift || r.co - p.co || r.conf - p.conf || S(p.an, r.an) || S(p.bn, r.bn);
    });
    return { rules: rules, hist: hist, single: single };
  }

  var G = derive(D), rules = G.rules, hist = G.hist, i, p;

  var cos = [];
  for (var h in hist) cos.push(Number(h));
  cos.sort(function (a, b) { return a - b; });
  var TOTAL = 0, TAIL = 0;
  for (i = 0; i < cos.length; i++) { TOTAL += hist[cos[i]]; if (cos[i] >= 2) TAIL += hist[cos[i]]; }

  var TMIN = 1, TMAX = 10;
  // 기준별 값은 한 번만 계산한다 — 슬라이더는 co >= 기준 필터만 건다
  var byT = {};
  for (var t = TMIN; t <= TMAX; t++) {
    var cnt = 0, top = [], best = 0, tie = 0;
    for (p = 0; p < rules.length; p++) {
      if (rules[p].co < t) continue;
      if (!cnt) best = rules[p].lift;
      cnt++;
      if (top.length < 2) top.push(rules[p]);
      if (Math.abs(rules[p].lift - best) <= 1e-9) tie++;
    }
    byT[t] = { cnt: cnt, top: top, best: best, tie: tie };
  }

  var FA = D.names.indexOf('제육볶음'), FB = D.names.indexOf('배추김치'), fixed = null;
  for (p = 0; p < rules.length; p++) if (rules[p].ai === FA && rules[p].bi === FB) { fixed = rules[p]; break; }

  // ── 띠 구간 좌표: 폭 = 쌍 수 비율 × 676 ──
  var X0 = 24, W = 676, X1 = X0 + W, LIM = 712;
  var seg1 = [], seg2 = [], a1 = X0, a2 = X0, w;
  for (i = 0; i < cos.length; i++) {
    w = hist[cos[i]] / TOTAL * W;
    seg1.push({ co: cos[i], x: a1, w: w }); a1 += w;
    if (cos[i] >= 2) { w = hist[cos[i]] / TAIL * W; seg2.push({ co: cos[i], x: a2, w: w }); a2 += w; }
  }
  function cutX(list, th) {
    for (var j = 0; j < list.length; j++) if (list[j].co >= th) return list[j].x;
    return X1;
  }

  function comma(v) { return String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  function shortLift(v) { var s = v.toFixed(2); return s.charAt(s.length - 1) === '0' ? s.slice(0, -1) : s; }
  // 글자 폭: 실제 렌더 길이를 우선 쓰고, 잴 수 없으면 한글 1.0 · 공백 0.3 · 그 밖 0.55로 어림한다
  function guess(s, size) {
    var v = 0, c;
    for (var j = 0; j < s.length; j++) {
      c = s.charCodeAt(j);
      v += c === 32 ? size * 0.3 : (c > 0x1100 ? size : size * 0.55);
    }
    return v;
  }
  function put(el, s, size) {
    el.textContent = s;
    var m = el.getComputedTextLength ? el.getComputedTextLength() : 0;
    return m > 0 ? m : guess(s, size);
  }

  // ── 요소 ──
  var q = function (s) { return root.querySelector(s); };
  var rc1 = root.querySelectorAll('.b1r'), rc2 = root.querySelectorAll('.b2r'), tks = root.querySelectorAll('.tkl');
  var cg1 = q('.cg1'), cg2 = q('.cg2'), cutlab = q('.cutlab'), lk1 = q('.lk1');
  var sum = q('.sum'), sum2 = q('.sum2'), b1in = q('.b1in');
  var slider = q('.thr'), wout = q('.wout'), bdg = q('.bdg');
  var rows = [], s;
  for (i = 1; i <= 3; i++) {
    s = '.r' + i;
    rows.push({ g: q(s), c0: q(s + ' .c0'), c1: q(s + ' .c1'), c2: q(s + ' .c2'), c3: q(s + ' .c3') });
  }

  function lay(nodes, list, y, hh) {
    for (var j = 0; j < nodes.length; j++) {
      if (j >= list.length) { nodes[j].setAttribute('display', 'none'); continue; }
      nodes[j].setAttribute('x', list[j].x.toFixed(2));
      nodes[j].setAttribute('y', String(y));
      nodes[j].setAttribute('width', Math.max(list[j].w, 0.8).toFixed(2));  // 0.8 아래로는 줄이지 않는다(구간을 지우지 않기 위해)
      nodes[j].setAttribute('height', String(hh));
    }
  }
  lay(rc1, seg1, 52, 26);
  lay(rc2, seg2, 112, 22);
  lk1.setAttribute('x1', cutX(seg1, 2).toFixed(2));   // 확대 대상(동시 2일 이상)의 왼쪽 끝

  // 띠 ② 아래 동시 일수 숫자 — 폭 2px대인 9·16·17일은 왼쪽 안내 문구로 대신한다
  (function () {
    var prev = -1e9, j, sg, lab, wd, pos;
    for (j = 0; j < tks.length; j++) {
      sg = seg2[j];
      if (!sg || sg.co > 7) { tks[j].setAttribute('display', 'none'); continue; }
      lab = String(sg.co);
      wd = guess(lab, 14);
      pos = sg.x + sg.w / 2;
      if (pos - wd / 2 < prev + 6) pos = prev + 6 + wd / 2;
      if (pos + wd / 2 > LIM) { tks[j].setAttribute('display', 'none'); continue; }
      tks[j].setAttribute('display', '');
      tks[j].setAttribute('x', pos.toFixed(2));
      tks[j].textContent = lab;
      prev = pos + wd / 2;
    }
  })();

  // ── 조작 ──
  function paint(th) {
    var j, on;
    for (j = 0; j < rc1.length && j < seg1.length; j++) {
      on = seg1[j].co >= th;
      rc1[j].setAttribute('fill', on ? '#2b7fd6' : '#b9b3a5');
      rc1[j].setAttribute('fill-opacity', on ? '1' : '0.45');
    }
    for (j = 0; j < rc2.length && j < seg2.length; j++) {
      on = seg2[j].co >= th;
      rc2[j].setAttribute('fill', on ? '#2b7fd6' : '#b9b3a5');
      rc2[j].setAttribute('fill-opacity', on ? '1' : '0.45');
    }
    b1in.setAttribute('fill', th <= 1 ? '#ffffff' : '#1c2230');
  }

  // 자르는 선은 transform 전환으로 옮긴다 — 화면이 멈춰 있어도 끝 위치에 그대로 놓인다
  function placeCut(xa, xb, th) {
    cg1.style.transform = 'translate(' + xa.toFixed(2) + 'px,0)';
    cg2.style.transform = 'translate(' + xb.toFixed(2) + 'px,0)';
    var lab = '기준 ' + th + '일', wd = put(cutlab, lab, 14);
    if (xa + 6 + wd <= LIM) { cutlab.setAttribute('x', (xa + 6).toFixed(2)); cutlab.setAttribute('text-anchor', 'start'); }
    else { cutlab.setAttribute('x', (xa - 6).toFixed(2)); cutlab.setAttribute('text-anchor', 'end'); }
  }

  function fillRow(slot, r, color) {
    if (!r) { slot.g.setAttribute('display', 'none'); return; }
    slot.g.setAttribute('display', '');
    slot.c0.textContent = r.an + ' → ' + r.bn;
    slot.c1.textContent = String(r.co);
    slot.c2.textContent = r.conf.toFixed(2);
    slot.c3.textContent = r.lift.toFixed(2);
    slot.c0.setAttribute('fill', color); slot.c1.setAttribute('fill', color);
    slot.c2.setAttribute('fill', color); slot.c3.setAttribute('fill', color);
  }

  function table(th) {
    var d = byT[th];
    var head = '기준 ' + th + '일 · 규칙 ' + comma(d.cnt) + '개 · 최고 향상도 ' + shortLift(d.best);
    var hw = put(sum, head, 17), note = '';
    if (th === TMIN) note = '향상도 ' + shortLift(d.best) + '인 규칙 ' + comma(d.tie) + '개';
    else if (th >= 8) note = '남은 규칙은 자주 나오는 메뉴끼리의 겹침';
    sum2.setAttribute('fill', th === TMIN ? '#b07a00' : '#6b7385');
    if (!note) { sum2.textContent = ''; }
    else {
      var nw = put(sum2, note, 14), nx = X0 + hw + 12;   // 요약 줄 바로 뒤에 붙이고, 넘칠 때만 오른쪽으로 물러난다
      if (nx + nw > LIM) { sum2.setAttribute('x', String(LIM)); sum2.setAttribute('text-anchor', 'end'); }
      else { sum2.setAttribute('x', nx.toFixed(2)); sum2.setAttribute('text-anchor', 'start'); }
    }

    fillRow(rows[0], d.top[0], '#1c2230');
    fillRow(rows[1], d.top[1], '#1c2230');
    var alive = fixed.co >= th;                    // 고정 행: 기준에 걸리면 회색 + 배지
    fillRow(rows[2], fixed, alive ? '#2b7fd6' : '#b9b3a5');
    bdg.setAttribute('display', alive ? 'none' : '');
  }

  function set(th, instant) {
    wout.textContent = th + '일';
    paint(th);                                     // 구간 색 250ms 전환
    table(th);                                     // 표는 즉시 교체
    placeCut(cutX(seg1, th), cutX(seg2, th), th);  // 자르는 선 250ms 전환
    if (instant) {                                 // 첫 그림은 전환 없이 놓고, 그 뒤부터 전환을 켠다
      cg1.style.transition = 'transform .25s ease-out';
      cg2.style.transition = 'transform .25s ease-out';
      var tr = 'fill .25s linear,fill-opacity .25s linear', j;
      for (j = 0; j < rc1.length; j++) rc1[j].style.transition = tr;
      for (j = 0; j < rc2.length; j++) rc2[j].style.transition = tr;
    }
  }

  slider.addEventListener('input', function () { set(Number(slider.value), false); });
  set(5, true);
}
  const WIDGET_INIT = {basket: initW_basket, baseline: initW_baseline, minco: initW_minco};
  function initWidgets(scope) { (scope || document).querySelectorAll('.widget[data-w]').forEach(el => { if (el.dataset.ready) return; const f = WIDGET_INIT[el.dataset.w]; if (f) { f(el, window.LESSON_DATA); el.dataset.ready = '1'; } }); }
  window.initWidgets = initWidgets;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initWidgets()); else initWidgets();
