/* ============================================================
   Amber Palette — World Whisky Map（全データ復旧・更新版）
============================================================ */

/* ------------------------------------------------------------
   1) Scotland — Speyside（復旧データ 30件）
------------------------------------------------------------ */
const speysideData = [
  { name:"Aberlour Distillery", name_en:"Aberlour Distillery", name_jp:"アベラワー蒸留所", area:"Speyside", lat:57.4704, lng:-3.2290, url:"https://www.aberlour.com" },
  { name:"Allt-A-Bhainne Distillery", name_en:"Allt-A-Bhainne Distillery", name_jp:"オルトナバーン蒸留所", area:"Speyside", lat:57.4245, lng:-3.2739, url:"" },
  { name:"Auchroisk Distillery", name_en:"Auchroisk Distillery", name_jp:"オスロスク蒸留所", area:"Speyside", lat:57.5484, lng:-3.2743, url:"" },
  { name:"Aultmore Distillery", name_en:"Aultmore Distillery", name_jp:"オルトモア蒸留所", area:"Speyside", lat:57.6690, lng:-2.9637, url:"https://www.dewars.com" },
  { name:"Balmenach Distillery", name_en:"Balmenach Distillery", name_jp:"バルメナック蒸留所", area:"Speyside", lat:57.3472, lng:-3.5564, url:"" },
  { name:"Balvenie Distillery", name_en:"Balvenie Distillery", name_jp:"バルヴェニー蒸留所", area:"Speyside", lat:57.4540, lng:-3.1284, url:"https://www.thebalvenie.com" },
  { name:"Benriach Distillery", name_en:"Benriach Distillery", name_jp:"ベンリアック蒸留所", area:"Speyside", lat:57.4506, lng:-3.2491, url:"https://benriachdistillery.com" },
  { name:"Benrinnes Distillery", name_en:"Benrinnes Distillery", name_jp:"ベンリネス蒸留所", area:"Speyside", lat:57.4332, lng:-3.2494, url:"" },
  { name:"Benromach Distillery", name_en:"Benromach Distillery", name_jp:"ベンロマック蒸留所", area:"Speyside", lat:57.6081, lng:-3.6135, url:"https://www.benromach.com" },
  { name:"Cardhu Distillery", name_en:"Cardhu Distillery", name_jp:"カーデュ蒸留所", area:"Speyside", lat:57.4820, lng:-3.3754, url:"https://www.cardhudistillery.com" },
  { name:"Cragganmore Distillery", name_en:"Cragganmore Distillery", name_jp:"クラガンモア蒸留所", area:"Speyside", lat:57.4029, lng:-3.3798, url:"https://www.malts.com" },
  { name:"Craigellachie Distillery", name_en:"Craigellachie Distillery", name_jp:"クライゲラヒ蒸留所", area:"Speyside", lat:57.4901, lng:-3.2047, url:"https://www.dewars.com" },
  { name:"Dailuaine Distillery", name_en:"Dailuaine Distillery", name_jp:"ダルユーイン蒸留所", area:"Speyside", lat:57.3716, lng:-3.3454, url:"" },
  { name:"Glenallachie Distillery", name_en:"Glenallachie Distillery", name_jp:"グレンアラヒー蒸留所", area:"Speyside", lat:57.4764, lng:-3.2083, url:"https://www.theglenallachie.com" },
  { name:"Glen Elgin Distillery", name_en:"Glen Elgin Distillery", name_jp:"グレンエルギン蒸留所", area:"Speyside", lat:57.6300, lng:-3.2913, url:"" },
  { name:"Glenfarclas Distillery", name_en:"Glenfarclas Distillery", name_jp:"グレンファークラス蒸留所", area:"Speyside", lat:57.4277, lng:-3.3167, url:"https://www.glenfarclas.com" },
  { name:"Glenfiddich Distillery", name_en:"Glenfiddich Distillery", name_jp:"グレンフィディック蒸留所", area:"Speyside", lat:57.4540, lng:-3.1280, url:"https://www.glenfiddich.com" },
  { name:"Glengrant Distillery", name_en:"Glengrant Distillery", name_jp:"グレングラント蒸留所", area:"Speyside", lat:57.5250, lng:-3.2132, url:"https://www.glengrant.com" },
  { name:"Glenlivet Distillery", name_en:"Glenlivet Distillery", name_jp:"グレンリベット蒸留所", area:"Speyside", lat:57.3420, lng:-3.2970, url:"https://www.theglenlivet.com" },
  { name:"Glenlossie Distillery", name_en:"Glenlossie Distillery", name_jp:"グレンロッシー蒸留所", area:"Speyside", lat:57.6161, lng:-3.3017, url:"" },
  { name:"Glen Moray Distillery", name_en:"Glen Moray Distillery", name_jp:"グレンマレイ蒸留所", area:"Speyside", lat:57.6501, lng:-3.3025, url:"https://www.glenmoray.com" },
  { name:"Glenrothes Distillery", name_en:"Glenrothes Distillery", name_jp:"グレンロセス蒸留所", area:"Speyside", lat:57.5260, lng:-3.1490, url:"https://www.theglenrothes.com" },
  { name:"Glen Spey Distillery", name_en:"Glen Spey Distillery", name_jp:"グレンスペイ蒸留所", area:"Speyside", lat:57.6115, lng:-3.2285, url:"" },
  { name:"Inchgower Distillery", name_en:"Inchgower Distillery", name_jp:"インチガワー蒸留所", area:"Speyside", lat:57.6864, lng:-2.8975, url:"" },
  { name:"Knockando Distillery", name_en:"Knockando Distillery", name_jp:"ノッカンドゥ蒸留所", area:"Speyside", lat:57.4434, lng:-3.3683, url:"" },
  { name:"Linkwood Distillery", name_en:"Linkwood Distillery", name_jp:"リンクウッド蒸留所", area:"Speyside", lat:57.6356, lng:-3.2920, url:"" },
  { name:"Longmorn Distillery", name_en:"Longmorn Distillery", name_jp:"ロングモーン蒸留所", area:"Speyside", lat:57.6201, lng:-3.2791, url:"" },
  { name:"Macallan Distillery", name_en:"Macallan Distillery", name_jp:"マッカラン蒸留所", area:"Speyside", lat:57.4840, lng:-3.2090, url:"https://www.themacallan.com" },
  { name:"Miltonduff Distillery", name_en:"Miltonduff Distillery", name_jp:"ミルトンダフ蒸留所", area:"Speyside", lat:57.6412, lng:-3.2672, url:"" },
  { name:"Mortlach Distillery", name_en:"Mortlach Distillery", name_jp:"モートラック蒸留所", area:"Speyside", lat:57.4457, lng:-3.1232, url:"" }
];

/* ------------------------------------------------------------
   2) Scotland — Highlands（更新データ 28件）
------------------------------------------------------------ */
const highlandsData = [
  { name:"Aberfeldy Distillery", name_en: "Aberfeldy Distillery", name_jp: "アバフェルディ蒸留所", area: "Highlands", lat:56.6214, lng:-3.8593, url:"https://www.dewars.com" },
  { name:"Aberfeldy (Dewar’s World of Whisky)", name_en: "Aberfeldy (Dewar’s World of Whisky)", name_jp: "デュワーズ ワールド オブ ウイスキー", area: "Highlands", lat:56.6212, lng:-3.8588, url:"https://www.dewars.com" },
  { name:"Ardmore Distillery", name_en: "Ardmore Distillery", name_jp: "アードモア蒸留所", area: "Highlands", lat:57.4458, lng:-2.8626, url:"https://www.theardmore.com" },
  { name:"Ardnamurchan Distillery", name_en: "Ardnamurchan Distillery", name_jp: "アードナムルッカン蒸留所", area: "Highlands", lat:56.7374, lng:-5.9377, url:"https://www.adelphidistillery.com" },
  { name:"Balblair Distillery", name_en: "Balblair Distillery", name_jp: "バルブレア蒸留所", area: "Highlands", lat:57.8153, lng:-4.0404, url:"https://www.balblair.com" },
  { name:"Ben Nevis Distillery", name_en: "Ben Nevis Distillery", name_jp: "ベンネヴィス蒸留所", area: "Highlands", lat:56.8277, lng:-5.1036, url:"https://www.bennevisdistillery.com" },
  { name:"Blair Athol Distillery", name_en: "Blair Athol Distillery", name_jp: "ブレアアソール蒸留所", area: "Highlands", lat:56.6963, lng:-3.7324, url:"https://www.blairatholdistillery.com" },
  { name:"Clynelish Distillery", name_en: "Clynelish Distillery", name_jp: "クライヌリッシュ蒸留所", area: "Highlands", lat:58.0098, lng:-3.8506, url:"https://www.malts.com" },
  { name:"Dalmore Distillery", name_en: "Dalmore Distillery", name_jp: "ダルモア蒸留所", area: "Highlands", lat:57.6882, lng:-4.2508, url:"https://www.thedalmore.com" },
  { name:"Dalwhinnie Distillery", name_en: "Dalwhinnie Distillery", name_jp: "ダルウィニー蒸留所", area: "Highlands", lat:56.9366, lng:-4.2397, url:"https://www.malts.com" },
  { name:"Deanston Distillery", name_en: "Deanston Distillery", name_jp: "ディーンストン蒸留所", area: "Highlands", lat:56.1870, lng:-4.0438, url:"https://www.deanstonmalt.com" },
  { name:"Edradour Distillery", name_en: "Edradour Distillery", name_jp: "エドラダワー蒸留所", area: "Highlands", lat:56.7053, lng:-3.7049, url:"https://www.edradour.com" },
  { name:"Fettercairn Distillery", name_en: "Fettercairn Distillery", name_jp: "フェッターケアン蒸留所", area: "Highlands", lat:56.8450, lng:-2.5551, url:"https://www.fettercairnwhisky.com" },
  { name:"Glencadam Distillery", name_en: "Glencadam Distillery", name_jp: "グレンカダム蒸留所", area: "Highlands", lat:56.7735, lng:-2.6600, url:"https://www.glencadamdistillery.com" },
  { name:"Glencoe Distillery (Craft)", name_en: "Glencoe Distillery (Craft)", name_jp: "グレンコー蒸留所（クラフト）", area: "Highlands", lat:56.6820, lng:-5.1020, url:"" },
  { name:"GlenDronach Distillery", name_en: "GlenDronach Distillery", name_jp: "グレンドロナック蒸留所", area: "Highlands", lat:57.4459, lng:-2.6296, url:"https://www.glendronachdistillery.com" },
  { name:"Glen Garioch Distillery", name_en: "Glen Garioch Distillery", name_jp: "グレンギリー蒸留所", area: "Highlands", lat:57.3397, lng:-2.4119, url:"https://www.glengarioch.com" },
  { name:"Glenmorangie Distillery", name_en: "Glenmorangie Distillery", name_jp: "グレンモーレンジィ蒸留所", area: "Highlands", lat:57.8134, lng:-4.0440, url:"https://www.glenmorangie.com" },
  { name:"Glengyle (Revival) Distillery", name_en: "Glengyle (Revival) Distillery", name_jp: "グレンガイル蒸留所", area: "Highlands", lat:57.1022, lng:-3.7890, url:"" },
  { name:"Inverness Craigduff (closed)", name_en: "Inverness Craigduff (closed)", name_jp: "クレイグダフ（閉鎖）", area: "Highlands", lat:57.4782, lng:-4.2255, url:"" },
  { name:"Loch Lomond Distillery", name_en: "Loch Lomond Distillery", name_jp: "ロッホローモンド蒸留所", area: "Highlands", lat:56.0128, lng:-4.5812, url:"https://www.lochlomondwhiskies.com" },
  { name:"Oban Distillery", name_en: "Oban Distillery", name_jp: "オーバン蒸留所", area: "Highlands", lat:56.4156, lng:-5.4733, url:"https://www.malts.com" },
  { name:"Old Pulteney Distillery", name_en: "Old Pulteney Distillery", name_jp: "オールドプルトニー蒸留所", area: "Highlands", lat:58.4395, lng:-3.0885, url:"https://www.oldpulteney.com" },
  { name:"Royal Brackla Distillery", name_en: "Royal Brackla Distillery", name_jp: "ロイヤルブラックラ蒸留所", area: "Highlands", lat:57.5867, lng:-3.8459, url:"https://www.royalbrackla.com" },
  { name:"Teaninich Distillery", name_en:"Teaninich Distillery", name_jp:"ティーニニック蒸留所", area:"Highlands", lat:57.6995, lng:-4.0441, url:"" },
  { name:"Tomatin Distillery", name_en: "Tomatin Distillery", name_jp: "トマーティン蒸留所", area: "Highlands", lat:57.3343, lng:-4.0339, url:"https://www.tomatin.com" },
  { name:"Tullibardine Distillery", name_en: "Tullibardine Distillery", name_jp: "タリバーディン蒸留所", area: "Highlands", lat:56.2789, lng:-3.7281, url:"https://www.tullibardine.com" },
  { name:"Wolfburn Distillery", name_en: "Wolfburn Distillery", name_jp: "ウルフバーン蒸留所", area: "Highlands", lat:58.6050, lng:-3.5330, url:"https://www.wolfburn.com" }
];

/* ------------------------------------------------------------
   3) Scotland — Islands（更新データ 11件）
------------------------------------------------------------ */
const islandsData = [
  // -------------------------
  // Isle of Skye（スカイ島）
  // -------------------------
  { name:"Talisker Distillery", name_en: "Talisker Distillery", name_jp: "タリスカー蒸留所", area: "Islands", lat:57.3021, lng:-6.3555, url:"https://www.malts.com" },

  // -------------------------
  // Isle of Arran（アラン島）
  // -------------------------
  { name:"Arran Distillery (Lochranza)", name_en: "Arran Distillery (Lochranza)", name_jp: "アラン蒸留所（ロッホランザ）", area: "Islands", lat:55.7045, lng:-5.2784, url:"https://www.arranwhisky.com" },
  { name:"Lagg Distillery", name_en: "Lagg Distillery", name_jp: "ラグ蒸留所", area: "Islands", lat:55.4861, lng:-5.1605, url:"https://www.laggwhisky.com" },

  // -------------------------
  // Isle of Mull（マル島）
  // -------------------------
  { name:"Tobermory Distillery", name_en: "Tobermory Distillery", name_jp: "トバモリー蒸留所", area: "Islands", lat:56.6218, lng:-6.0691, url:"https://tobermorydistillery.com" },
  { name:"Ledaig Distillery (Tobermory)", name_en: "Ledaig Distillery (Tobermory)", name_jp: "レダイグ蒸留所（トバモリー）", area: "Islands", lat:56.6218, lng:-6.0691, url:"https://tobermorydistillery.com" },

  // -------------------------
  // Isle of Jura（ジュラ島）
  // -------------------------
  { name:"Isle of Jura Distillery", name_en: "Isle of Jura Distillery", name_jp: "ジュラ蒸留所", area: "Islands", lat:55.8372, lng:-5.9545, url:"https://www.jurawhisky.com" },

  // -------------------------
  // Orkney（オークニー諸島）
  // -------------------------
  { name:"Highland Park Distillery", name_en: "Highland Park Distillery", name_jp: "ハイランドパーク蒸留所", area: "Islands", lat:58.9840, lng:-2.9580, url:"https://www.highlandparkwhisky.com" },
  { name:"Scapa Distillery", name_en: "Scapa Distillery", name_jp: "スキャパ蒸留所", area: "Islands", lat:58.9376, lng:-2.9586, url:"https://www.scapawhisky.com" },

  // -------------------------
  // Isle of Raasay（ラーゼイ島）
  // -------------------------
  { name:"Isle of Raasay Distillery", name_en: "Isle of Raasay Distillery", name_jp: "ラーゼイ蒸留所", area: "Islands", lat:57.3503, lng:-6.0583, url:"https://raasaydistillery.com" },

  // -------------------------
  // Isle of Harris（ハリス島）
  // -------------------------
  { name:"Harris Distillery", name_en: "Harris Distillery", name_jp: "ハリス蒸留所", area: "Islands", lat:57.8658, lng:-6.7960, url:"https://www.harrisdistillery.com" }
];

/* ------------------------------------------------------------
   4) Scotland — Lowlands（更新データ 12件）
------------------------------------------------------------ */
const lowlandsData = [
  // -------------------------
  // Auchentoshan（オーヘントッシャン）
  // -------------------------
  { name: "Auchentoshan Distillery", name_en: "Auchentoshan Distillery", name_jp: "オーヘントッシャン蒸留所", area: "Lowlands", lat:55.9089, lng:-4.4307, url:"https://www.auchentoshan.com" },

  // -------------------------
  // Bladnoch（ブラッドノック）
  // -------------------------
  { name: "Bladnoch Distillery", name_en: "Bladnoch Distillery", name_jp: "ブラッドノック蒸留所", area: "Lowlands", lat:54.8432, lng:-4.4640, url:"https://bladnoch.com" },

  // -------------------------
  // Glenkinchie（グレンキンチー）
  // -------------------------
  { name: "Glenkinchie Distillery", name_en: "Glenkinchie Distillery", name_jp: "グレンキンチー蒸留所", area: "Lowlands", lat:55.9167, lng:-2.8913, url:"https://www.malts.com" },

  // -------------------------
  // Annandale（アナンデール）
  // -------------------------
  { name: "Annandale Distillery", name_en: "Annandale Distillery", name_jp: "アナンデール蒸留所", area: "Lowlands", lat:54.9988, lng:-3.2605, url:"https://www.annandaledistillery.com" },

  // -------------------------
  // Kingsbarns（キングスバーンズ）
  // -------------------------
  { name: "Kingsbarns Distillery", name_en: "Kingsbarns Distillery", name_jp: "キングスバーンズ蒸留所", area: "Lowlands", lat:56.2734, lng:-2.6408, url:"https://www.kingsbarnsdistillery.com" },

  // -------------------------
  // Lindores Abbey（リンドーズアビー）
  // -------------------------
  { name: "Lindores Abbey Distillery", name_en: "Lindores Abbey Distillery", name_jp: "リンドーズアビー蒸留所", area: "Lowlands", lat:56.3488, lng:-3.2299, url:"https://lindoresabbeydistillery.com" },

  // -------------------------
  // Daftmill（ダフトミル）
  // -------------------------
  { name: "Daftmill Distillery", name_en: "Daftmill Distillery", name_jp: "ダフトミル蒸留所", area: "Lowlands", lat:56.2746, lng:-3.1590, url:"https://daftmill.com" },

  // -------------------------
  // Eden Mill（エデンミル）
  // -------------------------
  { name: "Eden Mill Distillery", name_en: "Eden Mill Distillery", name_jp: "エデンミル蒸留所", area: "Lowlands", lat:56.3416, lng:-2.8760, url:"https://www.edenmill.com" },

  // -------------------------
  // Glasgow Distillery（グラスゴー）
  // -------------------------
  { name: "The Glasgow Distillery", name_en: "The Glasgow Distillery", name_jp: "グラスゴー蒸留所", area: "Lowlands", lat:55.8928, lng:-4.3777, url:"https://www.glasgowdistillery.com" },

  // -------------------------
  // Clydeside（クライドサイド）
  // -------------------------
  { name: "The Clydeside Distillery", name_en: "The Clydeside Distillery", name_jp: "クライドサイド蒸留所", area: "Lowlands", lat:55.8598, lng:-4.2923, url:"https://www.theclydeside.com" },

  // -------------------------
  // Holyrood（ホリルード）
  // -------------------------
  { name: "Holyrood Distillery", name_en: "Holyrood Distillery", name_jp: "ホリルード蒸留所", area: "Lowlands", lat:55.9456, lng:-3.1718, url:"https://www.holyrooddistillery.co.uk" },

  // -------------------------
  // Borders（ボーダーズ）
  // -------------------------
  { name: "The Borders Distillery", name_en: "The Borders Distillery", name_jp: "ボーダーズ蒸留所", area: "Lowlands", lat:55.1784, lng:-2.7863, url:"https://www.thebordersdistillery.com" }
];

/* ------------------------------------------------------------
   5) Scotland — Campbeltown（更新データ 4件）
------------------------------------------------------------ */
const campbeltownData = [
  { name: "Springbank Distillery", name_en: "Springbank Distillery", name_jp: "スプリングバンク蒸留所", area: "Campbeltown", lat: 55.4258, lng: -5.6061, url: "https://springbank.scot" },
  { name: "Glengyle Distillery (Kilkerran)", name_en: "Glengyle Distillery (Kilkerran)", name_jp: "グレンガイル蒸留所（キルケラン）", area: "Campbeltown", lat: 55.4266, lng: -5.6049, url: "https://www.kilkerransinglemalt.com" },
  { name: "Glen Scotia Distillery", name_en: "Glen Scotia Distillery", name_jp: "グレンスコシア蒸留所", area: "Campbeltown", lat: 55.4269, lng: -5.6042, url: "https://www.glenscotia.com" },
  { name: "Dal Riata Distillery (New)", name_en: "Dal Riata Distillery (New)", name_jp: "ダルリアタ蒸留所（新設）", area: "Campbeltown", lat: 55.4247, lng: -5.6039, url: "https://www.dalriatadistillery.com" }
];

/* ------------------------------------------------------------
   6) Scotland — Islay（更新データ 11件）
------------------------------------------------------------ */
const islayData = [
  { name:"Ardbeg Distillery", name_en:"Ardbeg Distillery", name_jp:"アードベッグ蒸留所", area:"Islay", lat:55.6464, lng:-6.1094, url:"https://www.ardbeg.com" },
  { name:"Ardnahoe Distillery", name_en:"Ardnahoe Distillery", name_jp:"アードナホー蒸留所", area:"Islay", lat:55.8592, lng:-6.0584, url:"https://ardnahoedistillery.com" },
  { name:"Bowmore Distillery", name_en:"Bowmore Distillery", name_jp:"ボウモア蒸留所", area:"Islay", lat:55.7567, lng:-6.2895, url:"https://www.bowmore.com" },
  { name:"Bruichladdich Distillery", name_en:"Bruichladdich Distillery", name_jp:"ブルックラディ蒸留所", area:"Islay", lat:55.7550, lng:-6.3600, url:"https://www.bruichladdich.com" },
  { name:"Bunnahabhain Distillery", name_en:"Bunnahabhain Distillery", name_jp:"ブナハーブン蒸留所", area:"Islay", lat:55.8699, lng:-6.1417, url:"https://bunnahabhain.com" },
  { name:"Caol Ila Distillery", name_en:"Caol Ila Distillery", name_jp:"カリラ蒸留所", area:"Islay", lat:55.8483, lng:-6.0931, url:"https://www.malts.com" },
  { name:"Kilchoman Distillery", name_en:"Kilchoman Distillery", name_jp:"キルホーマン蒸留所", area:"Islay", lat:55.8064, lng:-6.4233, url:"https://www.kilchomandistillery.com" },
  { name:"Lagavulin Distillery", name_en:"Lagavulin Distillery", name_jp:"ラガヴーリン蒸留所", area:"Islay", lat:55.6355, lng:-6.1267, url:"https://www.malts.com" },
  { name:"Laphroaig Distillery", name_en:"Laphroaig Distillery", name_jp:"ラフロイグ蒸留所", area:"Islay", lat:55.6240, lng:-6.1520, url:"https://www.laphroaig.com" },
  { name:"Port Ellen Distillery (Revival)", name_en:"Port Ellen Distillery (Revival)", name_jp:"ポートエレン蒸留所（再稼働）", area:"Islay", lat:55.6350, lng:-6.1904, url:"https://www.discoveringportellen.com" },
  { name:"Laggan Bay Distillery (New)", name_en:"Laggan Bay Distillery (New)", name_jp:"ラガンベイ蒸留所（新設）", area:"Islay", lat:55.6813, lng:-6.2517, url:"" }
];
/* ------------------------------------------------------------
   7) Japan（復旧データ 27件 ＋ 追加 5件 = 合計 32件）
------------------------------------------------------------ */
const japanData = [
  { name:"Bar SPEC", name_jp:"Bar SPEC", name_en:"Bar SPEC", area:"Tokyo", lat:35.68101710215845, lng:139.77012528270265, url:"https://www.bar-spec.com" },
  { name:"キリンディスティラリー富士御殿場蒸溜所", name_jp:"キリン富士御殿場蒸溜所", name_en:"Kirin Fuji Gotemba Distillery", area:"Shizuoka", lat:35.33665278478666, lng:138.89680030292513, url:"https://www.kirin.co.jp/experience/factory/gotemba/" },
  { name:"秩父蒸溜所", name_jp:"秩父蒸溜所", name_en:"Chichibu Distillery", area:"Saitama", lat:35.92231278, lng:138.9849527, url:"https://www.ichirosmalt.com/distillery/" },
  { name:"利尻島蒸溜所", name_jp:"利尻島蒸溜所", name_en:"Rishiri Distillery", area:"Hokkaido", lat:45.16421741, lng:141.240992, url:"http://kamuiwhisky.com/ja/home-ja/" },
  { name:"厚岸蒸溜所", name_jp:"厚岸蒸溜所", name_en:"Akkeshi Distillery", area:"Hokkaido", lat:43.07584914, lng:144.9207141, url:"" },
  { name:"ニッカウヰスキー余市蒸溜所", name_jp:"ニッカウヰスキー余市蒸溜所", name_en:"Nikka Whisky Yoichi Distillery", area:"Hokkaido", lat:43.18727948, lng:140.918742, url:"" },
  { name:"ニセコ蒸溜所", name_jp:"ニセコ蒸溜所", name_en:"Niseko Distillery", area:"Hokkaido", lat:42.84849283, lng:140.653982, url:"" },
  { name:"遊佐蒸溜所", name_jp:"遊佐蒸溜所", name_en:"Yuza Distillery", area:"Yamagata", lat:39.02103653, lng:139.9224974, url:"https://yuza-disty.jp/" },
  { name:"吉田酒造丹波蒸留所", name_jp:"吉田酒造丹波蒸留所", name_en:"Yoshida Denzai Distillery", area:"Hyogo", lat:35.15245273, lng:139.4598592, url:"https://yoshidadenzai-distillery.com/" },
  { name:"亀岡蒸留所", name_jp:"亀岡蒸留所", name_en:"Kameoka Distillery", area:"Kyoto", lat:37.87157314, lng:139.085232, url:"" },
  { name:"新潟麦酒株式会社 忍び市", name_jp:"新潟麦酒株式会社 忍び市", name_en:"Niigata Beer Co", area:"Niigata", lat:37.80632791, lng:138.9494225, url:"https://shinobudistillery.com/home/" },
  { name:"天領酒造", name_jp:"天領酒造", name_en:"Tenkyo Distillery (Tenkyo Co)", area:"Gifu", lat:37.57470792, lng:140.01747, url:"https://www.tenkyo.jp/" },
  { name:"安積蒸留所", name_jp:"安積蒸留所", name_en:"Asaka Distillery", area:"Fukushima", lat:37.36237171, lng:140.3714115, url:"" },
  { name:"野沢温泉蒸溜所", name_jp:"野沢温泉蒸溜所", name_en:"Nozawa Onsen Distillery", area:"Nagano", lat:36.92223666, lng:138.4495613, url:"" },
  { name:"飯山ファーム", name_jp:"飯山ファーム", name_en:"Iiyama Mountain Farm Distillery", area:"Nagano", lat:36.92300518, lng:138.8331199, url:"" },
  { name:"北沢蒸留所", name_jp:"北沢蒸留所", name_en:"Kita Karuizawa Distillery", area:"Nagano", lat:36.47069906, lng:138.5757331, url:"" },
  { name:"小諸蒸留所", name_jp:"小諸蒸留所", name_en:"Komoro Distillery", area:"Nagano", lat:36.3455945, lng:138.4451292, url:"https://komorodistillery.com/" },
  { name:"軽井沢ウイスキー株式会社", name_jp:"軽井沢ウイスキー株式会社", name_en:"Karuizawa Whisky Co", area:"Nagano", lat:36.31892021, lng:138.579676, url:"" },
  { name:"秩父蒸溜所", name_jp:"秩父蒸溜所", name_en:"Chichibu Distillery", area:"Saitama", lat:36.0464253, lng:139.0547112, url:"" },
  { name:"羽生蒸溜所", name_jp:"羽生蒸溜所", name_en:"Hanyu Distillery", area:"Saitama", lat:36.17171177, lng:139.5309435, url:"" },
  { name:"日光市大貫山小林酒造", name_jp:"日光市大貫山小林酒造", name_en:"Nikko Kaido Oyama Distillery", area:"Tochigi", lat:36.28601494, lng:139.780659, url:"" },
  { name:"八潮蒸留所", name_jp:"八潮蒸留所", name_en:"Yasato Distillery", area:"Ibaraki", lat:36.22095274, lng:140.1671762, url:"" },
  { name:"須藤本家", name_jp:"須藤本家", name_en:"Sudo Honke", area:"Ibaraki", lat:35.29897071, lng:140.0713252, url:"" },
  { name:"三郎丸蒸留所", name_jp:"三郎丸蒸留所", name_en:"Saburōmaru Distillery", area:"Toyama", lat:36.65566893, lng:136.9694517, url:"" },
  { name:"オリエンタル全沢蒸留所", name_jp:"オリエンタル全沢蒸留所", name_en:"Oriental Kanazawa Distillery", area:"Ishikawa", lat:36.49545203, lng:136.7579945, url:"" },
  { name:"飛騨蒸留所", name_jp:"飛騨蒸留所", name_en:"Hida Distillery", area:"Gifu", lat:36.02970128, lng:137.4597654, url:"" },
  { name:"サントリー白州蒸留所", name_jp:"サントリー白州蒸留所", name_en:"Suntory Hakushu Distillery", area:"Yamanashi", lat:35.82808288, lng:138.3036139, url:"" },
  { name:"井川蒸留所", name_jp:"井川蒸留所", name_en:"Igawa Distillery", area:"Shizuoka", lat:35.43859664, lng:138.2046467, url:"https://juzan.co.jp/contents/ikawadistillery/" },
  { name:"ガイアフロー静岡蒸留所", name_jp:"ガイアフロー静岡蒸留所", name_en:"Gaia Flow Shizuoka Distillery", area:"Shizuoka", lat:35.12005073, lng:138.2303739, url:"" },
  { name:"御勅使蒸留所", name_jp:"御勅使蒸留所", name_en:"Mitsuyoshi Botanical Distillery", area:"Yamanashi", lat:35.28553736, lng:140.2330324, url:"" },
  { name:"長浜蒸留所", name_jp:"長浜蒸留所", name_en:"Nagahama Distillery", area:"Shiga", lat:35.37699156, lng:136.2675849, url:"" },
  { name:"神戸蒸留所", name_jp:"神戸蒸留所", name_en:"Kobe Distillery", area:"Hyogo", lat:34.84792228, lng:135.1923593, url:"" },
  { name:"丹波蒸留所", name_jp:"丹波蒸留所", name_en:"Tanba Distillery", area:"Hyogo", lat:34.99931694, lng:135.0759061, url:"" },
  { name:"海峡蒸留所", name_jp:"海峡蒸留所", name_en:"Kaikyo Distillery", area:"Hyogo", lat:34.64498193, lng:135.012356, url:"" },
  { name:"明石蒸留所", name_jp:"明石蒸留所", name_en:"Akashi Distillery (No longer exists or Akashi Distillery (None))", area:"Hyogo", lat:34.68143953, lng:134.9053798, url:"" },
  { name:"千代むすび酒造境港蒸留所", name_jp:"千代むすび酒造境港蒸留所", name_en:"Chiyomusubi Sakaiminato Distillery", area:"Tottori", lat:35.54519531, lng:133.2246684, url:"https://www.chiyomusubi.co.jp/user_data/whisky" },
  { name:"岡山蒸留所", name_jp:"岡山蒸留所", name_en:"Okayama Distillery", area:"Okayama", lat:34.67897795, lng:133.939554, url:"https://www.doppokan.jp/" },
  { name:"阿波山蒸留所", name_jp:"阿波山蒸留所", name_en:"Awano Distillery", area:"Tokushima", lat:34.09870948, lng:134.3317755, url:"" },
  { name:"梅津酒造株式会社", name_jp:"梅津酒造株式会社", name_en:"Umemijin Shuzo Co", area:"Tottori", lat:33.46532187, lng:132.4258297, url:"https://umebijin.com/" }, // ← 修正点: ここにカンマを追加
{
  name: "宮下酒造 岡山蒸溜所",
  name_jp: "宮下酒造 岡山蒸溜所",
  name_en: "Miyashita Shuzo Okayama Distillery",
  area: "Okayama",
  lat: 34.668997,
  lng: 133.935463,
  url: "https://www.miyashita.co.jp/okayama-whisky/"
},

  {
    name: "嘉之助蒸溜所",
    name_jp: "嘉之助蒸溜所",
    name_en: "Kanosuke Distillery",
    lat: 31.671235,
    lng: 130.294676,
    url: "https://kanosuke.com/"
  },
  {
    name: "信州マルス蒸溜所（駒ヶ根）",
    name_jp: "信州マルス蒸溜所（駒ヶ根）",
    name_en: "Shinshu Mars Distillery (Komagane)",
    lat: 35.718304,
    lng: 137.937374,
    url: "https://www.hombo.co.jp/distillery/shinshu/"
  },
  {
    name: "マルス津貫蒸溜所",
    name_jp: "マルス津貫蒸溜所",
    name_en: "Mars Tsunuki Distillery",
    lat: 31.378657,
    lng: 130.381292,
    url: "https://www.hombo.co.jp/distillery/tsunuki/"
  },
  {
    name: "宮城峡蒸溜所",
    name_jp: "宮城峡蒸溜所",
    name_en: "Miyagikyo Distillery",
    lat: 38.346323,
    lng: 140.755526,
    url: "https://www.nikka.com/distilleries/miyagikyo/"
  }   // ← 最後の要素なのでカンマは不要
];
/* ------------------------------------------------------------
   8) USA（更新データ 61件）
------------------------------------------------------------ */
const usaData = [
  // ---------- TEXAS ----------
  { name:"Ranger Creek", name_en: "Ranger Creek", name_jp: "レンジャー・クリーク", area: "TX", state_en: "TX", state_jp: "テキサス州", lat: 29.52952609, lng: -98.39702277, url: "https://drinkrangercreek.com/" },
  { name:"Rebecca Creek", name_en: "Rebecca Creek", name_jp: "レベッカ・クリーク", area: "TX", state_en: "TX", state_jp: "テキサス州", lat: 29.69428386, lng: -98.45449383, url: "https://rebeccacreekdistillery.com/" },
  { name:"Bone Spirits", name_en: "Bone Spirits", name_jp: "ボーン・スピリッツ", area: "TX", state_en: "TX", state_jp: "テキサス州", lat: 30.0037369, lng: -97.15365958, url: "https://bonespirits.com/default.php" },
  { name:"Real Spirits", name_en: "Real Spirits", name_jp: "リアル・スピリッツ", area: "TX", state_en: "TX", state_jp: "テキサス州", lat: 30.11167876, lng: -98.41120761, url: "https://realalebrewing.com/distilling-process/" },
  { name:"Garrison Brothers", name_en: "Garrison Brothers", name_jp: "ギャリソン・ブラザーズ", area: "TX", state_en: "TX", state_jp: "テキサス州", lat: 30.21752205, lng: -98.56660156, url: "https://www.garrisonbros.com/" },
  { name:"Banner Distilling Co.", name_en: "Banner Distilling Co.", name_jp: "バナー", area: "TX", state_en: "TX", state_jp: "テキサス州", lat: 30.39121875, lng: -97.49003612, url: "" },
  { name:"Spirit of Texas", name_en: "Spirit of Texas", name_jp: "スピリット・オブ・テキサス", area: "TX", state_en: "TX", state_jp: "テキサス州", lat: 30.48016201, lng: -97.58412798, url: "https://spiritoftx.com/" },
  { name:"Andalusia", name_en: "Andalusia", name_jp: "アンダルシア", area: "TX", state_en: "TX", state_jp: "テキサス州", lat: 30.52987612, lng: -98.25508207, url: "https://www.andalusiawhiskey.com/" },
  { name:"Fire Oak", name_en: "Fire Oak", name_jp: "ファイアー・オーク", area: "TX", state_en: "TX", state_jp: "テキサス州", lat: 30.76780559, lng: -97.90483191, url: "https://www.fireoakdistillery.com/" },
  { name:"Front Porch", name_en: "Front Porch", name_jp: "フロント・ポーチ", area: "TX", state_en: "TX", state_jp: "テキサス州", lat: 31.49262122, lng: -94.71541242, url: "https://www.frontporchdistillery.com/" },
  { name:"Balcones", name_en: "Balcones", name_jp: "バルコーンズ", area: "TX", state_en: "TX", state_jp: "テキサス州", lat: 31.55061932, lng: -97.13512539, url: "https://www.balconesdistilling.com/" },
  { name:"Kiepersol Enterprises", name_en: "Kiepersol Enterprises", name_jp: "キーパーソル・エンタープライゼズ", area: "TX", state_en: "TX", state_jp: "テキサス州", lat: 32.16524064, lng: -95.29903331, url: "https://www.kiepersol.com/" },
  { name:"Five Points", name_en: "Five Points", name_jp: "ファイブ・ポインツ", area: "TX", state_en: "TX", state_jp: "テキサス州", lat: 32.68483469, lng: -96.47789607, url: "https://lone-elm.com/" },
  { name:"Firestone & Robertson", name_en: "Firestone & Robertson", name_jp: "ファイアストーン＆ロバートソン", area: "TX", state_en: "TX", state_jp: "テキサス州", lat: 32.70211032, lng: -97.2865846, url: "https://txwhiskey.com/en-us/" },
  { name:"Rocking M Ranch", name_en: "Rocking M Ranch", name_jp: "ロッキング・M・ランチ", area: "TX", state_en: "TX", state_jp: "テキサス州", lat: 33.65998683, lng: -98.31296547, url: "https://www.rockingmranchdistillery.com/" },
  { name:"Ironroot Republic", name_en: "Ironroot Republic", name_jp: "アイアンルート・リパブリック", area: "TX", state_en: "TX", state_jp: "テキサス州", lat: 33.73100095, lng: -96.58366498, url: "https://www.ironrootrepublic.com/" },

  // ---------- TENNESSEE ----------
  { name:"Southern Pride", name_en: "Southern Pride", name_jp: "サザン・プライド", area: "TN", state_en: "TN", state_jp: "テネシー州", lat: 35.03468511, lng: -86.5301669, url: "http://www.southernpridedistillery.com/" },
  { name:"Jack Daniel’s", name_en: "Jack Daniel’s", name_jp: "ジャック・ダニエル", area: "TN", state_en: "TN", state_jp: "テネシー州", lat: 35.29827491, lng: -86.37336312, url: "https://www.jackdaniels.com/ageGate" },
  { name:"George Dickel", name_en: "George Dickel", name_jp: "ジョージ・ディッケル", area: "TN", state_en: "TN", state_jp: "テネシー州", lat: 35.43845743, lng: -86.24612412, url: "https://www.georgedickel.com/visitus" },
  { name:"Sugarlands", name_en: "Sugarlands", name_jp: "シュガーランズ", area: "TN", state_en: "TN", state_jp: "テネシー州", lat: 35.71154802, lng: -83.51867354, url: "https://www.sugarlands.com/" },
  { name:"Old Forge", name_en: "Old Forge", name_jp: "オールド・フォージ", area: "TN", state_en: "TN", state_jp: "テネシー州", lat: 35.78872036, lng: -83.55350945, url: "" },
  { name:"Short Mountain", name_en: "Short Mountain", name_jp: "ショート・マウンテン", area: "TN", state_en: "TN", state_jp: "テネシー州", lat: 35.86656882, lng: -85.93097471, url: "https://www.shortmountaindistillery.com/" },
  { name:"Leiper’s Fork", name_en: "Leiper’s Fork", name_jp: "レイパーズ・フォーク", area: "TN", state_en: "TN", state_jp: "テネシー州", lat: 35.89649985, lng: -86.97856611, url: "https://leipersforkdistillery.com/" },
  { name:"Knox Whiskey Works", name_en: "Knox Whiskey Works", name_jp: "ノックス・ウィスキー・ワークス", area: "TN", state_en: "TN", state_jp: "テネシー州", lat: 35.96730419, lng: -83.92290967, url: "https://www.knoxwhiskeyworks.com/" },
  { name:"Nashville Craft", name_en: "Nashville Craft", name_jp: "ナッシュビル・クラフト", area: "TN", state_en: "TN", state_jp: "テネシー州", lat: 36.14134233, lng: -86.77256382, url: "https://www.nashvillecraft.com/" },
  { name:"Nelson’s Greenbrier", name_en: "Nelson’s Greenbrier", name_jp: "ネルソンズ・グリーンブライアー", area: "TN", state_en: "TN", state_jp: "テネシー州", lat: 36.16361033, lng: -86.79825367, url: "https://greenbrierdistillery.com/" },
  { name:"Corsair", name_en: "Corsair", name_jp: "コルセア", area: "TN", state_en: "TN", state_jp: "テネシー州", lat: 36.16518238, lng: -86.79513401, url: "https://www.corsairdistillery.com/marathon/" },
  { name:"Hook & Ladder", name_en: "Hook & Ladder", name_jp: "フック＆ラダー", area: "TN", state_en: "TN", state_jp: "テネシー州", lat: 36.54800747, lng: -82.55973276, url: "" },
  { name:"Tennessee Hills", name_en: "Tennessee Hills", name_jp: "テネシー・ヒルズ", area: "TN", state_en: "TN", state_jp: "テネシー州", lat: 36.58790165, lng: -82.26491685, url: "https://tennesseehills.com/" },

  // ---------- KENTUCKY ----------
  { name:"MB Roland", name_en: "MB Roland", name_jp: "MB ローランド", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 36.69831873, lng: -87.39278785, url: "https://mbroland.com/" },
  { name:"Dueling Grounds", name_en: "Dueling Grounds", name_jp: "デュエリング・グラウンズ", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 36.70633242, lng: -86.57242679, url: "https://duelinggroundsdistillery.com/" },
  { name:"Limestone Branch", name_en: "Limestone Branch", name_jp: "ライムストーン・ブランチ", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 37.58174606, lng: -85.2719278, url: "" },
  { name:"Maker’s Mark", name_en: "Maker’s Mark", name_jp: "メーカーズ・マーク", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 37.64699621, lng: -85.34886348, url: "https://www.makersmark.com/distillery" },
  { name:"Gleen River", name_en: "Gleen River", name_jp: "グレン・リバー", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 37.77892395, lng: -87.13847226, url: "https://greenriverwhiskey.com/" },
  { name:"Willett", name_en: "Willett", name_jp: "ウィレット", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 37.78478806, lng: -85.46129417, url: "https://www.kentuckybourbonwhiskey.com/" },
  { name:"Heaven Hill", name_en: "Heaven Hill", name_jp: "ヘブン・ヒル", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 37.79329064, lng: -85.46576692, url: "https://heavenhilldistillery.com/heaven-hill-bourbon-experience.php" },
  { name:"Boundary Oak", name_en: "Boundary Oak", name_jp: "バウンダリー・オーク", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 37.79752964, lng: -85.91117673, url: "https://www.boundaryoak.co/" },
  { name:"Barton 1792", name_en: "Barton 1792", name_jp: "バートン 1792", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 37.80775748, lng: -85.47574096, url: "https://www.1792bourbon.com/" },
  { name:"Jim Beam", name_en: "Jim Beam", name_jp: "ジム・ビーム", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 37.9311908, lng: -85.65243261, url: "https://www.beamdistilling.com/" },
  { name:"Four Roses", name_en: "Four Roses", name_jp: "フォア・ローゼズ", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 37.97349621, lng: -84.89758767, url: "https://www.fourrosesbourbon.com/" },
  { name:"Barrel House", name_en: "Barrel House", name_jp: "バレル・ハウス", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 38.05650221, lng: -84.51871515, url: "https://barrelhousedistillery.com/" },
  { name:"Woodford Reserve", name_en: "Woodford Reserve", name_jp: "ウッドフォード・リザーブ", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 38.11321852, lng: -84.81095759, url: "https://www.woodfordreserve.com/our-distillery/" },
  { name:"Glenns Creek", name_en: "Glenns Creek", name_jp: "グレンズ・クリーク", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 38.14804528, lng: -84.84591287, url: "https://glennscreekdistillery.com/" },
  { name:"Bluegrass", name_en: "Bluegrass", name_jp: "ブルーグラス", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 38.16145979, lng: -84.6850918, url: "https://bluegrassdistillers.com/" },
  { name:"Jeptha Creed", name_en: "Jeptha Creed", name_jp: "ジェプサ・クリード", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 38.18959289, lng: -85.2647531, url: "https://jepthacreed.com/" },
  { name:"Brown Forman", name_en: "Brown Forman", name_jp: "ブラウン・フォーマン", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 38.20725436, lng: -85.79459647, url: "https://www.brown-forman.com/" },
  { name:"Buffalo Trace", name_en: "Buffalo Trace", name_jp: "バッファロー・トレース", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 38.2166746, lng: -84.87063068, url: "https://www.buffalotracedistillery.com/" },
  { name:"Kentucky Peerless", name_en: "Kentucky Peerless", name_jp: "ケンタッキー・ピアレス", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 38.25859262, lng: -85.76645432, url: "https://kentuckypeerless.com/" },
  { name:"Old Pogue", name_en: "Old Pogue", name_jp: "オールド・ポーグ", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 38.66240333, lng: -83.780003, url: "https://www.oldpogue.com/" },
  { name:"Neeley Family", name_en: "Neeley Family", name_jp: "ニーリー・ファミリー", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 38.70739356, lng: -84.94551314, url: "https://www.neeleyfamilydistillery.com/" },
  { name:"Second Sight Spirits", name_en: "Second Sight Spirits", name_jp: "セカンド・サイト・スピリッツ", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 39.09357298, lng: -84.5484326, url: "https://www.secondsightspirits.com/" },
  { name:"New Riff", name_en: "New Riff", name_jp: "ニュー・リフ", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 39.10074649, lng: -84.48895465, url: "https://www.newriffdistilling.com/" },
  { name:"Michter’s", name_en: "Michter’s", name_jp: "ミクターズ", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 38.2489, lng: -85.7636, url: "https://michters.com/" },
  { name:"Castle & Key", name_en: "Castle & Key", name_jp: "キャッスル＆キー", area: "KY", state_en: "KY", state_jp: "ケンタッキー州", lat: 38.14717, lng: -84.83253, url: "https://www.skurnik.com/producer/castle-key-distillery/" },
  
  // ---------- VIRGINIA ----------
  { name:"A. Smith Bowman Distillery", name_en: "A. Smith Bowman Distillery", name_jp: "A. スミス・ボウマン・ディスティラリー", area: "VA", state_en: "VA", state_jp: "バージニア州", lat: 38.303, lng: -77.484, url: "https://asmithbowman.com/" },

  // ---------- WYOMING ----------
  { name:"Wyoming Whiskey", name_en: "Wyoming Whiskey", name_jp: "ワイオミング・ウイスキー", area: "WY", state_en: "WY", state_jp: "ワイオミング州", lat: 42.897, lng: -108.181, url: "https://www.wyomingwhiskey.com/" },

  // ---------- ALASKA ----------
  { name:"Alaska Distillery", name_en: "Alaska Distillery", name_jp: "アラスカ・ディスティラリー", area: "AK", state_en: "AK", state_jp: "アラスカ州", lat: 61.582, lng: -149.443, url: "https://alaskadistillery.com/" },

  // ---------- COLORADO ----------
  { name:"Stranahan's Colorado Whiskey", name_en: "Stranahan's Colorado Whiskey", name_jp: "ストラナハンズ・コロラド・ウイスキー", area: "CO", state_en: "CO", state_jp: "コロラド州", lat: 39.728, lng: -105.002, url: "https://www.stranahans.com/" },
  { name:"Garrison Brothers (CO site)", name_en: "Garrison Brothers (CO site)", name_jp: "ギャリソン・ブラザーズ（CO）", area: "CO", state_en: "CO", state_jp: "コロラド州", lat: 30.21752205, lng: -98.56660156, url: "https://www.garrisonbros.com/" },
  { name:"Ironroot Republic (CO site)", name_en: "Ironroot Republic (CO site)", name_jp: "アイアンルート・リパブリック（CO）", area: "CO", state_en: "CO", state_jp: "コロラド州", lat: 33.73100095, lng: -96.58366498, url: "https://www.ironrootrepublic.com/" },
  { name:"Five Points (CO site)", name_en: "Five Points (CO site)", name_jp: "ファイブ・ポインツ（CO）", area: "CO", state_en: "CO", state_jp: "コロラド州", lat: 32.68483469, lng: -96.47789607, url: "https://lone-elm.com/" },

  // ---------- ILLINOIS ----------
  { name:"Koval Distillery", name_en: "Koval Distillery", name_jp: "コヴァル・ディスティラリー", area: "IL", state_en: "IL", state_jp: "イリノイ州", lat: 41.973, lng: -87.688, url: "https://www.koval-distillery.com/" },

  // ---------- OREGON ----------
  { name:"House Spirits Distillery (Westward)", name_en: "House Spirits Distillery (Westward)", name_jp: "ハウス・スピリッツ（ウエストワード）", area: "OR", state_en: "OR", state_jp: "オレゴン州", lat: 45.522, lng: -122.670, url: "https://www.westwardwhiskey.com/" },

  // ---------- WASHINGTON ----------
  { name:"Woodinville Whiskey Co.", name_en: "Woodinville Whiskey Co.", name_jp: "ウーディンビル・ウイスキー", area: "WA", state_en: "WA", state_jp: "ワシントン州", lat: 47.755, lng: -122.157, url: "https://www.woodinvillewhiskeyco.com/" },

  // ---------- MONTANA ----------
  { name:"Whistling Andy Distillery", name_en: "Whistling Andy Distillery", name_jp: "ウィスリング・アンディ", area: "MT", state_en: "MT", state_jp: "モンタナ州", lat: 48.110, lng: -114.082, url: "https://www.whistlingandy.com/" },

  // ---------- MINNESOTA ----------
  { name:"Tattersall Distilling", name_en: "Tattersall Distilling", name_jp: "タッターサル・ディスティリング", area: "MN", state_en: "MN", state_jp: "ミネソタ州", lat: 45.010, lng: -93.246, url: "https://tattersalldistilling.com/" },

  // ---------- OHIO ----------
  { name:"Middle West Spirits", name_en: "Middle West Spirits", name_jp: "ミドル・ウェスト・スピリッツ", area: "OH", state_en: "OH", state_jp: "オハイオ州", lat: 39.987, lng: -83.004, url: "https://middlewestspirits.com/" },

  // ---------- PENNSYLVANIA ----------
  { name:"Wigle Whiskey Distillery", name_en: "Wigle Whiskey Distillery", name_jp: "ウィグル・ウイスキー", area: "PA", state_en: "PA", state_jp: "ペンシルベニア州", lat: 40.450, lng: -80.002, url: "https://www.wiglewhiskey.com/" },

  // ---------- NEW YORK ----------
  { name:"Tuthilltown Spirits", name_en: "Tuthilltown Spirits", name_jp: "トゥーティルタウン・スピリッツ", area: "NY", state_en: "NY", state_jp: "ニューヨーク州", lat: 41.660, lng: -74.070, url: "https://www.hudsonwhiskey.com/" },

  // ---------- NEW HAMPSHIRE ----------
  { name:"Tamworth Distilling", name_en: "Tamworth Distilling", name_jp: "タムワース・ディスティリング", area: "NH", state_en: "NH", state_jp: "ニューハンプシャー州", lat: 43.859, lng: -71.280, url: "https://tamworthdistilling.com/" },

  // ---------- NEW JERSEY ----------
  { name:"Claremont Distilled Spirits", name_en: "Claremont Distilled Spirits", name_jp: "クレアモント・ディスティルド・スピリッツ", area: "NJ", state_en: "NJ", state_jp: "ニュージャージー州", lat: 40.752, lng: -74.087, url: "https://www.claremontdistilledspirits.com/" },

  // ---------- RHODE ISLAND ----------
  { name:"Sons of Liberty Spirits", name_en: "Sons of Liberty Spirits", name_jp: "サンズ・オブ・リバティ", area: "RI", state_en: "RI", state_jp: "ロードアイランド州", lat: 41.457, lng: -71.492, url: "https://solspirits.com/" },

  // ---------- VERMONT ----------
  { name:"WhistlePig Whiskey", name_en: "WhistlePig Whiskey", name_jp: "ホイッスルピッグ・ウイスキー", area: "VT", state_en: "VT", state_jp: "バーモント州", lat: 44.806, lng: -72.574, url: "https://whistlepigwhiskey.com/" },

  // ---------- MAINE ----------
  { name:"Maine Craft Distilling", name_en: "Maine Craft Distilling", name_jp: "メイン・クラフト・ディスティリング", area: "ME", state_en: "ME", state_jp: "メイン州", lat: 43.660, lng: -70.254, url: "https://www.mainecraftdistilling.com/" },

  // ---------- MASSACHUSETTS ----------
  { name:"Boston Harbor Distillery", name_en: "Boston Harbor Distillery", name_jp: "ボストン・ハーバー・ディスティラリー", area: "MA", state_en: "MA", state_jp: "マサチューセッツ州", lat: 42.320, lng: -71.044, url: "https://www.bostonharbordistillery.com/" },

  // ---------- SOUTH CAROLINA ----------
  { name:"Charleston Distilling Co.", name_en: "Charleston Distilling Co.", name_jp: "チャールストン・ディスティリング", area: "SC", state_en: "SC", state_jp: "サウスカロライナ州", lat: 32.776, lng: -79.933, url: "https://charlestondistilling.com/" },

  // ---------- GEORGIA ----------
  { name:"ASW Distillery", name_en: "ASW Distillery", name_jp: "ASW ディスティラリー", area: "GA", state_en: "GA", state_jp: "ジョージア州", lat: 33.803, lng: -84.423, url: "https://www.aswdistillery.com/" },

  // ---------- FLORIDA ----------
  { name:"St. Augustine Distillery", name_en: "St. Augustine Distillery", name_jp: "セント・オーガスティン・ディスティラリー", area: "FL", state_en: "FL", state_jp: "フロリダ州", lat: 29.899, lng: -81.322, url: "https://www.staugustinedistillery.com/" },

  // ---------- NORTH CAROLINA ----------
  { name:"High Wire Distilling Co.", name_en: "High Wire Distilling Co.", name_jp: "ハイ・ワイヤー・ディスティリング", area: "NC", state_en: "NC", state_jp: "ノースカロライナ州", lat: 32.796, lng: -79.940, url: "https://highwiredistilling.com/" },

  // ---------- NORTH DAKOTA ----------
  { name:"Proof Artisan Distillers", name_en: "Proof Artisan Distillers", name_jp: "プルーフ・アーティザン", area: "ND", state_en: "ND", state_jp: "ノースダコタ州", lat: 46.876, lng: -96.789, url: "https://proofdistillers.com/" },

  // ---------- SOUTH DAKOTA ----------
  { name:"Dakota Spirits Distillery", name_en: "Dakota Spirits Distillery", name_jp: "ダコタ・スピリッツ", area: "SD", state_en: "SD", state_jp: "サウスダコタ州", lat: 44.368, lng: -100.350, url: "https://dakotaspiritsdistillery.com/" },

  // ---------- NEBRASKA ----------
  { name:"Cut Spike Distillery", name_en: "Cut Spike Distillery", name_jp: "カット・スパイク", area: "NE", state_en: "NE", state_jp: "ネブラスカ州", lat: 41.138, lng: -96.245, url: "https://cutspike.com/" },

  // ---------- KANSAS ----------
  { name:"Boot Hill Distillery", name_en: "Boot Hill Distillery", name_jp: "ブーツ・ヒル・ディスティラリー", area: "KS", state_en: "KS", state_jp: "カンザス州", lat: 37.750, lng: -100.017, url: "https://boothilldistillery.com/" },

  // ---------- OKLAHOMA ----------
  { name:"Prairie Wolf Spirits", name_en: "Prairie Wolf Spirits", name_jp: "プレーリー・ウルフ", area: "OK", state_en: "OK", state_jp: "オクラホマ州", lat: 35.489, lng: -97.816, url: "https://prairiewolfspirits.com/" },

  // ---------- LOUISIANA ----------
  { name:"Donner-Peltier Distillers", name_en: "Donner-Peltier Distillers", name_jp: "ダナー・ペルティエ", area: "LA", state_en: "LA", state_jp: "ルイジアナ州", lat: 29.795, lng: -90.817, url: "https://www.dpdistillers.com/" },

  // ---------- MISSISSIPPI ----------
  { name:"Cathead Distillery", name_en: "Cathead Distillery", name_jp: "キャットヘッド", area: "MS", state_en: "MS", state_jp: "ミシシッピ州", lat: 32.298, lng: -90.180, url: "https://catheaddistillery.com/" },

  // ---------- ALABAMA ----------
  { name:"Conecuh Ridge Distillery", name_en: "Conecuh Ridge Distillery", name_jp: "コネキュー・リッジ", area: "AL", state_en: "AL", state_jp: "アラバマ州", lat: 31.870, lng: -86.595, url: "https://www.connorspointdistillery.com/" },

  // ---------- ARIZONA ----------
  { name:"Whiskey Del Bac", name_en: "Whiskey Del Bac", name_jp: "ウイスキー・デル・バック", area: "AZ", state_en: "AZ", state_jp: "アリゾナ州", lat: 32.222, lng: -110.974, url: "https://www.whiskeydelbac.com/" },

  // ---------- IDAHO ----------
  { name:"Koenig Distillery", name_en: "Koenig Distillery", name_jp: "ケーニッヒ・ディスティラリー", area: "ID", state_en: "ID", state_jp: "アイダホ州", lat: 43.491, lng: -112.033, url: "https://www.koenigdistillery.com/" },
];

/* ------------------------------------------------------------
   9) Canada（更新データ 26件）
------------------------------------------------------------ */
const canadaData = [
  { name: "Alberta Distillers", name_en: "Alberta Distillers", name_jp: "アルバータ・ディスティラーズ", area: "Canada", lat: 53.5444, lng: -113.4909, url: "https://www.albertadistillers.com/", slug: "alberta-distillers", summary: "100%ライ麦ウイスキー『アルバータ・プレミアム』で有名。" },
  { name: "Wolfhead Distillery (Amherstburg)", name_en: "Wolfhead Distillery (Amherstburg)", name_jp: "ウルフヘッド・ディスティラリー（アマーストバーグ）", area: "Canada", lat: 42.1026, lng: -83.1099, url: "https://amherstburg.ca/", slug: "amherstburg", summary: "エセックス郡初のクラフト蒸留所。" },
  { name: "Bridgeland Distillery", name_en: "Bridgeland Distillery", name_jp: "ブリッジランド・ディスティラリー", area: "Canada", lat: 51.0545, lng: -114.0375, url: "https://www.bridgelanddistillery.com/", slug: "bridgeland", summary: "受賞歴多数のクラフト蒸留所。ブランデーやグラッパも生産。" },
  { name: "Canadian Club", name_en: "Canadian Club", name_jp: "カナディアン・クラブ", area: "Canada", lat: 42.3168, lng: -83.0376, url: "https://www.canadianclub.com/", slug: "canadian-club", summary: "世界的ブランド。ハイラム・ウォーカーによる設立。" },
  { name: "Dillon's Small Batch Distillers", name_en: "Dillon's Small Batch Distillers", name_jp: "ディロンズ・スモールバッチ", area: "Canada", lat: 43.1492, lng: -79.5443, url: "https://dillons.ca/", slug: "dillons", summary: "地元産フルーツやボタニカルを使用したクラフト蒸留所。" },
  { name: "Forty Creek", name_en: "Forty Creek", name_jp: "フォーティークリーク", area: "Canada", lat: 43.1906, lng: -79.6231, url: "https://www.fortycreekwhisky.com/", slug: "forty-creek", summary: "個別熟成後にブレンドする独自手法で知られる。" },
  { name: "Crown Royal (Gimli Distillery)", name_en: "Crown Royal (Gimli Distillery)", name_jp: "ギムリ蒸留所（クラウンローヤル）", area: "Canada", lat: 50.6389, lng: -96.9936, url: "https://www.crownroyal.com/age-gate/", slug: "gimli", summary: "クラウンロイヤル主要生産拠点の大規模蒸留所。" },
  { name: "Glenora Distillery", name_en: "Glenora Distillery", name_jp: "グレノラ蒸留所", area: "Canada", lat: 46.2230, lng: -61.1250, url: "https://www.glenoradistillery.com/", slug: "glenora", summary: "カナダ初のシングルモルト蒸留所。スコットランド様式。" },
  { name: "Goodridge & Williams", name_en: "Goodridge & Williams", name_jp: "グッドリッジ＆ウィリアムズ", area: "Canada", lat: 49.8885, lng: -119.4678, url: "https://www.goodridgeandwilliams.com/", slug: "goodridge-williams", summary: "クラフトスピリッツ製造を行う蒸留所。" },
  { name: "Highwood Distillers", name_en: "Highwood Distillers", name_jp: "ハイウッド・ディスティラーズ", area: "Canada", lat: 50.5828, lng: -113.8732, url: "https://www.highwooddistillers.com/", slug: "highwood", summary: "カナダ最大級の独立系蒸留所の1つ。" },
  { name: "Hiram Walker", name_en: "Hiram Walker", name_jp: "ハイラム・ウォーカー", area: "Canada", lat: 42.3168, lng: -83.0376, url: "https://www.hwdc.ca/", slug: "hiram-walker", summary: "カナディアンクラブを生んだ歴史ある蒸留所。" },
  { name: "Kinsip House of Fine Spirits", name_en: "Kinsip House of Fine Spirits", name_jp: "キンシップ・ハウス", area: "Canada", lat: 43.9575, lng: -77.2530, url: "https://kinsip.ca/", slug: "kinsip", summary: "“Farm to Glass”を掲げる農場蒸留所。" },
  { name: "Last Best Brewing & Distilling", name_en: "Last Best Brewing & Distilling", name_jp: "ラストベスト", area: "Canada", lat: 51.0428, lng: -114.0721, url: "https://lastbestbrewing.com/", slug: "last-best", summary: "醸造と蒸留を行うハイブリッド施設。" },
  { name: "Myriad View Artisan Distillery", name_en: "Myriad View Artisan Distillery", name_jp: "ミリアドビュー・アーティサン", area: "Canada", lat: 46.3056, lng: -62.1932, url: "https://www.myriadview.ca/", slug: "myriad-view", summary: "カナダ唯一の“合法的密造酒（シーン）”で有名。" },
  { name: "Okanagan Spirits", name_en: "Okanagan Spirits", name_jp: "オカナガン・スピリッツ", area: "Canada", lat: 50.2676, lng: -119.2778, url: "https://okanaganspirits.com/", slug: "okanagan-spirits", summary: "西カナダ最古級のクラフト蒸留所。" },
  { name: "Old Order Distilling", name_en: "Old Order Distilling", name_jp: "オールド・オーダー", area: "Canada", lat: 49.1834, lng: -119.5539, url: "https://www.oldorderdistilling.ca/", slug: "old-order", summary: "モルトベースのダッチスタイルジンが人気。" },
  { name: "Park Distillery", name_en: "Park Distillery", name_jp: "パーク・ディスティラリー", area: "Canada", lat: 51.1779, lng: -115.5701, url: "https://parkdistillery.com/", slug: "park", summary: "カナダ国立公園内にあるユニークな蒸留所。" },
  { name: "RAW Distillery", name_en: "RAW Distillery", name_jp: "RAWディスティラリー", area: "Canada", lat: 51.0883, lng: -115.3725, url: "https://www.rawdistillery.com/", slug: "raw", summary: "アルバータ産の素材でジンやライウイスキーを製造。" },
  { name: "Rig Hand Distillery", name_en: "Rig Hand Distillery", name_jp: "リグ・ハンド・ディスティラリー", area: "Canada", lat: 53.3082, lng: -113.5298, url: "https://righanddistillery.com/", slug: "rig-hand", summary: "エドモントン地域の人気クラフト蒸留所。" },
  { name: "Shelter Point Distillery", name_en: "Shelter Point Distillery", name_jp: "シェルターポイント", area: "Canada", lat: 50.0617, lng: -125.2638, url: "https://www.shelterpointdistillery.com/", slug: "shelter-point", summary: "自社大麦で良質なシングルモルトを生産。" },
  { name: "Still Waters Distillery", name_en: "Still Waters Distillery", name_jp: "スティルウォーターズ", area: "Canada", lat: 43.8340, lng: -79.5190, url: "https://stillwatersdistillery.com/", slug: "still-waters", summary: "カナダ初のクラフトウイスキー蒸留所の一つ。" },
  { name: "Strathcona Spirits", name_en: "Strathcona Spirits", name_jp: "ストラスコナ・スピリッツ", area: "Canada", lat: 53.5359, lng: -113.4866, url: "https://strathconaspirits.ca/", slug: "strathcona", summary: "北米最小規模クラスの小さなクラフト蒸留所。" },
  { name: "The Liberty Distillery", name_en: "The Liberty Distillery", name_jp: "ザ・リバティー", area: "Canada", lat: 49.2764, lng: -123.1099, url: "https://thelibertydistillery.com/", slug: "the-liberty", summary: "100%オーガニック穀物を使用する都市型蒸留所。" },
  { name: "Top Shelf Distillers", name_en: "Top Shelf Distillers", name_jp: "トップシェルフ", area: "Canada", lat: 44.9126, lng: -76.2415, url: "https://www.topshelfdistillers.com/", slug: "top-shelf", summary: "オンタリオ伝統のウイスキー製造を復興。" },
  { name: "Two Brewers Whisky", name_en: "Two Brewers Whisky", name_jp: "トゥー・ブリュワーズ", area: "Canada", lat: 60.7135, lng: -135.0560, url: "https://two-brewers.com/", slug: "two-brewers", summary: "ユーコン準州のシングルモルトで有名。" },
  { name: "Urban Distilleries", name_en: "Urban Distilleries", name_jp: "アーバン・ディスティラーズ", area: "Canada", lat: 49.8885, lng: -119.4678, url: "https://www.urbandistilleries.ca/", slug: "urban", summary: "BC州最初期のクラフト蒸留所の一つ。" }
];

/* ------------------------------------------------------------
   10) Ireland（復旧データ 20件）
------------------------------------------------------------ */
const irelandData = [
  { name:"Ballykeefe Distillery", name_en:"Ballykeefe", name_jp:"バリーキーフ", area:"Ireland", lat:52.6186, lng:-7.3197, url:"" },
  { name:"Boann Distillery", name_en:"Boann", name_jp:"ボアン", area:"Ireland", lat:53.7431, lng:-6.3773, url:"" },
  { name:"Clonakilty Distillery", name_en:"Clonakilty", name_jp:"クロナキルティ", area:"Ireland", lat:51.6264, lng:-8.8953, url:"" },
  { name:"Dingle Distillery (Cooley)", name_en:"Cooley", name_jp:"クーリー", area:"Ireland", lat:52.1465, lng:-10.2882, url:"" },
  { name:"Quintessential Brands (Dingle)", name_en:"Dingle", name_jp:"ディングル", area:"Ireland", lat:53.3375, lng:-6.273, url:"" },
  { name:"Glendalough Distillery", name_en:"Dublin Liberties", name_jp:"ダブリンリバティーズ", area:"Ireland", lat:53.0076, lng:-6.3752, url:"" },
  { name:"Lambay Irish Whiskey Co.", name_en:"Glendree", name_jp:"グレンドリー", area:"Ireland", lat:53.4867, lng:-6.0125, url:"" },
  { name:"Diageo (Kilbeggan)", name_en:"Kilbeggan", name_jp:"キルベガン", area:"Ireland", lat:53.3444, lng:-6.2783, url:"" },
  { name:"Lough Gill Distillery", name_en:"Lough Gill", name_jp:"ロッホギル", area:"Ireland", lat:54.275, lng:-8.455, url:"" },
  { name:"Brown-Forman (Midleton)", name_en:"Midleton", name_jp:"ミドルトン", area:"Ireland", lat:53.7088, lng:-6.5501, url:"" },
  { name:"Teeling Whiskey Co.", name_en:"Pearse Lyons", name_jp:"ピアースライオンズ", area:"Ireland", lat:53.3364, lng:-6.2625, url:"" },
  { name:"Tipperary Boutique Distillery", name_en:"Powerscourt", name_jp:"パワーズコート", area:"Ireland", lat:52.5008, lng:-7.7801, url:"" },
  { name:"William Grant & Sons (Roe & Co)", name_en:"Roe & Co", name_jp:"ロー&コー", area:"Ireland", lat:53.2797, lng:-7.5029, url:"" },
  { name:"Renegade Spirits (Royal Oak)", name_en:"Royal Oak", name_jp:"ロイヤルオーク", area:"Ireland", lat:52.2612, lng:-7.1085, url:"" },
  { name:"West Cork Distillers (Shed)", name_en:"Shed", name_jp:"シェッド", area:"Ireland", lat:51.5284, lng:-9.2818, url:"" },
  { name:"Boatyard Distillery (Slane)", name_en:"Slane", name_jp:"スレーン", area:"Ireland", lat:54.3414, lng:-7.6322, url:"" },
  { name:"Copeland Distillery (Teeling)", name_en:"Teeling", name_jp:"ティーリング", area:"Ireland", lat:54.4069, lng:-5.5139, url:"" },
  { name:"Hinch Distillery (Waterford)", name_en:"Waterford", name_jp:"ウォーターフォード", area:"Ireland", lat:54.5167, lng:-5.922, url:"" },
  { name:"Killowen Distillery (West Cork)", name_en:"West Cork", name_jp:"ウエストコーク", area:"Ireland", lat:54.0759, lng:-6.136, url:"" },
  { name:"Pernod Ricard (Great Northern)", name_en:"Great Northern", name_jp:"グレートノーザン", area:"Ireland", lat:51.9079, lng:-8.1706, url:"" }

];
/* ------------------------------------------------------------
   11) Others（更新データ 3件：インド, スウェーデン, 台湾）
------------------------------------------------------------ */
const othersData = [
  { 
    name:"Amrut Distillery", 
    name_en:"Amrut Distillery", 
    name_jp:"アムルット・ディスティラリー", 
    area:"India", 
    lat:13.0142, 
    lng:77.6975, 
    url:"http://www.amrutdistilleries.com/" 
  },
  { 
    name:"High Coast Distillery", 
    name_en:"High Coast Distillery", 
    name_jp:"ハイ・コースト・ディスティラリー", 
    area:"Sweden", 
    lat:63.0019, 
    lng:17.7986, 
    url:"https://www.highcoastwhisky.se/" 
  },
  { 
    name:"Kavalan Distillery", 
    name_en:"Kavalan Distillery", 
    name_jp:"カバラン・ディスティラリー", 
    area:"Taiwan", 
    lat:24.7137, 
    lng:121.6919, 
    url:"https://www.kavalanwhisky.com/" 
  }
];

/* ------------------------------------------------------------
   12) World（全データを結合 → 初期表示/Worldボタンで使用）
------------------------------------------------------------ */
const worldData = [
  ...speysideData,
  ...highlandsData,
  ...lowlandsData,
  ...campbeltownData,
  ...islayData,
  ...islandsData,
  ...japanData,
  ...usaData,
  ...canadaData,
  ...irelandData,
  ...othersData
];
䀀㻂
楴汬湩♧畱瑯ⰻ渠浡彥湥›焦潵㭴慍湩⁥牃晡൴ 䐠獩楴汬湩♧畱瑯ⰻ渠浡彥灪›焦潵㭴菣ꒂ菣뮃苣ꦃ菣袃菣螃苣릂菣ꎂ菣뎃苣⚰畱瑯ⰻ愠敲㩡਍†焦潵㭴䕍焦潵㭴‬瑳瑡彥湥›焦潵㭴䕍焦潵㭴‬瑳瑡彥灪›焦潵㭴菣ꒂ菣麷焦潵㭴‬慬㩴਍†㌴㘮〶‬湬㩧ⴠ〷㈮㐵‬牵㩬☠畱瑯栻瑴獰⼺眯睷洮楡敮牣晡摴獩楴汬湩⹧潣⽭焦潵㭴਍†ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮⼯ⴠⴭⴭⴭⴭ‭䅍卓䍁啈䕓呔⁓ⴭⴭⴭⴭⴭ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭☺畱瑯䈻獯潴⁮慈扲牯䐠獩楴汬牥♹畱瑯ⰻ渠浡彥湥›焦潵㭴潂瑳湯䠠牡潢൲ 䐠獩楴汬牥♹畱瑯ⰻ渠浡彥灪›焦潵㭴菣릂菣뎃菣较菣邃菣뮃菣ꎂ苣蚃苣ꦃ菣벃焦潵㭴‬牡慥ഺ ☠畱瑯䴻♁畱瑯ⰻ猠慴整敟㩮☠畱瑯䴻♁畱瑯ⰻ猠慴整機㩰☠畱瑯麃苣膃菣벃苣莃菣麷焦潵㭴‬慬㩴਍†㈴㌮〲‬湬㩧ⴠㄷ〮㐴‬牵㩬਍†焦潵㭴瑨灴㩳⼯睷⹷潢瑳湯慨扲牯楤瑳汩敬祲挮浯☯畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮⼯ⴠⴭⴭⴭⴭ‭体呕⁈䅃佒䥌䅎ⴠⴭⴭⴭⴭ㰭琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴桃牡敬瑳湯䐠獩楴汬湩⁧潃☮畱瑯ⰻ渠浡彥湥›焦潵㭴桃牡敬瑳湯਍†楄瑳汩楬杮䌠⹯焦潵㭴‬慮敭機㩰☠畱瑯膃菣벃菣릂菣뎃菣螃苣릂菣ꎂ菣뎃苣⚰畱瑯ⰻ愠敲㩡਍†焦潵㭴䍓焦潵㭴‬瑳瑡彥湥›焦潵㭴䍓焦潵㭴‬瑳瑡彥灪›焦潵㭴苣Ꚃ苣ꮂ菣ꦃ苣誃럥⚞畱瑯ⰻ氠瑡ഺ ㌠⸲㜷ⰶ氠杮›㜭⸹㌹ⰳ甠汲›焦潵㭴瑨灴㩳⼯档牡敬瑳湯楤瑳汩楬杮挮浯☯畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮⼯ⴠⴭⴭⴭⴭ‭䕇剏䥇⁁ⴭⴭⴭⴭⴭ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭☺畱瑯䄻坓䐠獩楴汬牥♹畱瑯ⰻ渠浡彥湥›焦潵㭴十⁗楄瑳汩敬祲焦潵㭴ബ 渠浡彥灪›焦潵㭴十⁗菣ꎂ苣蚃苣ꦃ菣벃焦潵㭴‬牡慥›焦潵㭴䅇焦潵㭴‬瑳瑡彥湥ഺ ☠畱瑯䜻♁畱瑯ⰻ猠慴整機㩰☠畱瑯뢂菣벃苣ꊂ럥⚞畱瑯ⰻ氠瑡›㌳㠮㌰‬湬㩧ⴠ㐸㐮㌲‬牵㩬਍†焦潵㭴瑨灴㩳⼯睷⹷獡摷獩楴汬牥⹹潣⽭焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ਍†⼼灳湡⼾ ⴭⴭⴭⴭⴭ䘠佌䥒䅄ⴠⴭⴭⴭⴭ㰭琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴瑓‮畁畧瑳湩⁥楄瑳汩敬祲焦潵㭴‬慮敭敟㩮☠畱瑯医⹴䄠杵獵楴敮਍†楄瑳汩敬祲焦潵㭴‬慮敭機㩰☠畱瑯뮂菣袃菣ꪂ菣겂苣蚃苣뎃菣螃苣릂菣ꎂ菣ꪃ菣⚼畱瑯ⰻ愠敲㩡਍†焦潵㭴䱆焦潵㭴‬瑳瑡彥湥›焦潵㭴䱆焦潵㭴‬瑳瑡彥灪›焦潵㭴菣궃菣肃럥⚞畱瑯ⰻ氠瑡ഺ ㈠⸹㤸ⰹ氠杮›㠭⸱㈳ⰲ甠汲›焦潵㭴瑨灴㩳⼯睷⹷瑳畡畧瑳湩摥獩楴汬牥⹹潣⽭焦潵㭴਍†ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮⼯ⴠⴭⴭⴭⴭ‭低呒⁈䅃佒䥌䅎ⴠⴭⴭⴭⴭ㰭琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴楈桧圠物⁥楄瑳汩楬杮䌠⹯焦潵㭴‬慮敭敟㩮☠畱瑯䠻杩⁨楗敲਍†楄瑳汩楬杮䌠⹯焦潵㭴‬慮敭機㩰☠畱瑯较苣뮃菣ꒂ菣벃菣螃苣릂菣ꎂ菣뎃苣⚰畱瑯ⰻ愠敲㩡਍†焦潵㭴䍎焦潵㭴‬瑳瑡彥湥›焦潵㭴䍎焦潵㭴‬瑳瑡彥灪›焦潵㭴菣벃苣ꮂ菣ꦃ苣誃럥⚞畱瑯ⰻ氠瑡ഺ ㌠⸲㤷ⰶ氠杮›㜭⸹㐹ⰰ甠汲›焦潵㭴瑨灴㩳⼯楨桧楷敲楤瑳汩楬杮挮浯☯畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮⼯ⴠⴭⴭⴭⴭ‭低呒⁈䅄佋䅔ⴠⴭⴭⴭⴭ㰭琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴牐潯⁦牁楴慳⁮楄瑳汩敬獲焦潵㭴‬慮敭敟㩮☠畱瑯倻潲景䄠瑲獩湡਍†楄瑳汩敬獲焦潵㭴‬慮敭機㩰☠畱瑯鞃菣벃菣뮃苣벃菣ꎂ苣뎃焦潵㭴‬牡慥›焦潵㭴䑎焦潵㭴ബ 猠慴整敟㩮☠畱瑯主♄畱瑯ⰻ猠慴整機㩰☠畱瑯躃菣릂菣뎂苣麷焦潵㭴‬慬㩴㐠⸶㜸ⰶ氠杮ഺ ⴠ㘹㜮㤸‬牵㩬☠畱瑯栻瑴獰⼺瀯潲景楤瑳汩敬獲挮浯☯畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮⼯ⴠⴭⴭⴭⴭ‭体呕⁈䅄佋䅔ⴠⴭⴭⴭⴭ㰭琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴慄潫慴匠楰楲獴䐠獩楴汬牥♹畱瑯ⰻ渠浡彥湥›焦潵㭴慄潫慴匠楰楲獴਍†楄瑳汩敬祲焦潵㭴‬慮敭機㩰☠畱瑯肃苣뾂菣릂菣ꪃ菣蒃焦潵㭴‬牡慥›焦潵㭴䑓焦潵㭴ബ 猠慴整敟㩮☠畱瑯医♄畱瑯ⰻ猠慴整機㩰☠畱瑯떂苣릂菣뎂苣麷焦潵㭴‬慬㩴㐠⸴㘳ⰸ氠杮ഺ ⴠ〱⸰㔳ⰰ甠汲›焦潵㭴瑨灴㩳⼯慤潫慴灳物瑩摳獩楴汬牥⹹潣⽭焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ਍†⼼灳湡⼾ ⴭⴭⴭⴭⴭ丠䉅䅒䭓⁁ⴭⴭⴭⴭⴭ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭☺畱瑯䌻瑵匠楰敫䐠獩楴汬牥♹畱瑯ⰻ渠浡彥湥›焦潵㭴畃⁴灓歩൥ 䐠獩楴汬牥♹畱瑯ⰻ渠浡彥灪›焦潵㭴苣莃菣뮃苣醃苣꾂焦潵㭴‬牡慥›焦潵㭴䕎焦潵㭴ബ 猠慴整敟㩮☠畱瑯主♅畱瑯ⰻ猠慴整機㩰☠畱瑯趃菣ꦃ苣ꮂ럥⚞畱瑯ⰻ氠瑡›ㄴㄮ㠳‬湬㩧ⴠ㘹㈮㔴ബ 甠汲›焦潵㭴瑨灴㩳⼯畣獴楰敫挮浯☯畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮⼯ⴠⴭⴭⴭⴭ‭䅋华十ⴠⴭⴭⴭⴭ㰭琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴潂瑯䠠汩⁬楄瑳汩敬祲焦潵㭴‬慮敭敟㩮☠畱瑯䈻潯⁴楈汬਍†楄瑳汩敬祲焦潵㭴‬慮敭機㩰☠畱瑯隃菣蒃菣銃菣뮃菣ꎂ苣蚃苣ꦃ菣벃焦潵㭴‬牡慥›焦潵㭴卋焦潵㭴ബ 猠慴整敟㩮☠畱瑯䬻♓畱瑯ⰻ猠慴整機㩰☠畱瑯ꮂ菣뚂苣麷焦潵㭴‬慬㩴㌠⸷㔷ⰰ氠杮ഺ ⴠ〱⸰㄰ⰷ甠汲›焦潵㭴瑨灴㩳⼯潢瑯楨汬楤瑳汩敬祲挮浯☯畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮⼯ⴠⴭⴭⴭⴭ‭䭏䅌佈䅍ⴠⴭⴭⴭⴭ㰭琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴牐楡楲⁥潗晬匠楰楲獴焦潵㭴‬慮敭敟㩮☠畱瑯倻慲物敩圠汯൦ 匠楰楲獴焦潵㭴‬慮敭機㩰☠畱瑯鞃菣벃菣벃菣Ꚃ菣閃焦潵㭴‬牡慥›焦潵㭴䭏焦潵㭴ബ 猠慴整敟㩮☠畱瑯伻♋畱瑯ⰻ猠慴整機㩰☠畱瑯ꪂ苣ꦃ菣麃럥⚞畱瑯ⰻ氠瑡›㔳㐮㤸‬湬㩧ⴠ㜹㠮㘱ബ 甠汲›焦潵㭴瑨灴㩳⼯牰楡楲睥汯獦楰楲獴挮浯☯畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮⼯ⴠⴭⴭⴭⴭ‭佌䥕䥓乁⁁ⴭⴭⴭⴭⴭ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭☺畱瑯䐻湯敮⵲敐瑬敩⁲楄瑳汩敬獲焦潵㭴‬慮敭敟㩮☠畱瑯䐻湯敮⵲敐瑬敩൲ 䐠獩楴汬牥♳畱瑯ⰻ渠浡彥灪›焦潵㭴菣誃菣뮃菣ꮃ菣ꎂ苣⚨畱瑯ⰻ愠敲㩡☠畱瑯䰻♁畱瑯ⰻ਍†瑳瑡彥湥›焦潵㭴䅌焦潵㭴‬瑳瑡彥灪›焦潵㭴菣ꒂ苣ꊂ菣麷焦潵㭴‬慬㩴㈠⸹㤷ⰵ氠杮ഺ ⴠ〹㠮㜱‬牵㩬☠畱瑯栻瑴獰⼺眯睷搮摰獩楴汬牥⹳潣⽭焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ਍†⼼灳湡⼾ ⴭⴭⴭⴭⴭ䴠卉䥓卓偉䥐ⴠⴭⴭⴭⴭ㰭琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴慃桴慥⁤楄瑳汩敬祲焦潵㭴‬慮敭敟㩮☠畱瑯䌻瑡敨摡䐠獩楴汬牥♹畱瑯ⰻ਍†慮敭機㩰☠畱瑯궂菣莃菣颃菣覃焦潵㭴‬牡慥›焦潵㭴卍焦潵㭴‬瑳瑡彥湥›焦潵㭴卍焦潵㭴ബ 猠慴整機㩰☠畱瑯龃苣랂菣钃럥⚞畱瑯ⰻ氠瑡›㈳㈮㠹‬湬㩧ⴠ〹ㄮ〸‬牵㩬਍†焦潵㭴瑨灴㩳⼯慣桴慥摤獩楴汬牥⹹潣⽭焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ਍†⼼灳湡⼾ ⴭⴭⴭⴭⴭ䄠䅌䅂䅍ⴠⴭⴭⴭⴭ㰭琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴潃敮畣⁨楒杤⁥楄瑳汩敬祲焦潵㭴‬慮敭敟㩮☠畱瑯䌻湯捥桵删摩敧਍†楄瑳汩敬祲焦潵㭴‬慮敭機㩰☠畱瑯뎂菣궂菣벃菣ꪃ菣뢂焦潵㭴‬牡慥›焦潵㭴䱁焦潵㭴ബ 猠慴整敟㩮☠畱瑯䄻♌畱瑯ⰻ猠慴整機㩰☠畱瑯ꊂ菣邃菣麷焦潵㭴‬慬㩴㌠⸱㜸ⰰ氠杮ഺ ⴠ㘸㔮㔹‬牵㩬☠畱瑯栻瑴獰⼺眯睷挮湯潮獲潰湩摴獩楴汬牥⹹潣⽭焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ਍†⼼灳湡⼾ ⴭⴭⴭⴭⴭ䄠䥒佚䅎ⴠⴭⴭⴭⴭ㰭琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴桗獩敫⁹敄⁬慂♣畱瑯ⰻ渠浡彥湥›焦潵㭴桗獩敫⁹敄⁬慂♣畱瑯ⰻ਍†慮敭機㩰☠畱瑯Ꚃ苣릂苣벃菣螃菣뮃菣莃苣⚯畱瑯ⰻ愠敲㩡☠畱瑯䄻♚畱瑯ⰻ猠慴整敟㩮਍†焦潵㭴婁焦潵㭴‬瑳瑡彥灪›焦潵㭴苣ꪃ苣誃럥⚞畱瑯ⰻ氠瑡›㈳㈮㈲‬湬㩧ⴠㄱ⸰㜹ⰴ甠汲ഺ ☠畱瑯栻瑴獰⼺眯睷眮楨歳祥敤扬捡挮浯☯畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮⼯ⴠⴭⴭⴭⴭ‭䑉䡁⁏ⴭⴭⴭⴭⴭ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭☺畱瑯䬻敯楮⁧楄瑳汩敬祲焦潵㭴‬慮敭敟㩮☠畱瑯䬻敯楮⁧楄瑳汩敬祲焦潵㭴ബ 渠浡彥灪›焦潵㭴苣벃菣莃菣뮃菣ꎂ苣蚃苣ꦃ菣벃焦潵㭴‬牡慥›焦潵㭴䑉焦潵㭴‬瑳瑡彥湥ഺ ☠畱瑯䤻♄畱瑯ⰻ猠慴整機㩰☠畱瑯ꊂ苣肃菣麷焦潵㭴‬慬㩴㐠⸳㤴ⰱ氠杮›ㄭ㈱〮㌳‬牵㩬਍†焦潵㭴瑨灴㩳⼯睷⹷潫湥杩楤瑳汩敬祲挮浯☯畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧㭝⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧⨯਍†ⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾슠ච 㰠猯慰㹮⤹䌠湡摡袼鯦낖菣벃苣₿㘲믤覼⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧ⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭ਍†⼪⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧潣獮⁴慣慮慤慄慴㴠嬠⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭›焦潵㭴汁敢瑲⁡楄瑳汩敬獲焦潵㭴‬慮敭敟㩮☠畱瑯䄻扬牥慴਍†楄瑳汩敬獲焦潵㭴‬慮敭機㩰☠畱瑯ꊂ菣邃菣뾂菣螃苣릂菣ꎂ菣벃苣⚺畱瑯ⰻ愠敲㩡਍†焦潵㭴慃慮慤焦潵㭴‬慬㩴㔠⸳㐵㐴‬湬㩧ⴠㄱ⸳㤴㤰‬牵㩬਍†焦潵㭴瑨灴㩳⼯睷⹷污敢瑲摡獩楴汬牥⹳潣⽭焦潵㭴‬汳杵ഺ ☠畱瑯愻扬牥慴搭獩楴汬牥♳畱瑯ⰻ猠浵慭祲ഺ ☠畱瑯ㄻ〰ꦃ苣ꚺ苣ꒂ苣궂菣躀苣ꮃ菣벃苣뮃菣것菣ꊂ菣辀臣覜郥芀焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥☠畱瑯圻汯桦慥⁤楄瑳汩敬祲⠠流敨獲扴牵⥧焦潵㭴‬慮敭敟㩮☠畱瑯圻汯桦慥൤ 䐠獩楴汬牥⁹䄨桭牥瑳畢杲☩畱瑯ⰻ渠浡彥灪ഺ ☠畱瑯Ꚃ菣閃菣莃菣뮃菣ꎂ苣蚃苣ꦃ菣벃볯ꊂ菣벃苣袃菣벃苣覼焦潵㭴‬牡慥›焦潵㭴慃慮慤焦潵㭴‬慬㩴਍†㈴ㄮ㈰ⰶ氠杮›㠭⸳〱㤹‬牵㩬☠畱瑯栻瑴獰⼺愯桭牥瑳畢杲挮⽡焦潵㭴‬汳杵ഺ ☠畱瑯愻桭牥瑳畢杲焦潵㭴‬畳浭牡㩹☠畱瑯ꢂ苣莃苣릂菩鶈臣꾂菣閃菣뢒闧肉胣⚂畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭›焦潵㭴牂摩敧慬摮䐠獩楴汬牥♹畱瑯ⰻ渠浡彥湥›焦潵㭴牂摩敧慬摮਍†楄瑳汩敬祲焦潵㭴‬慮敭機㩰☠畱瑯隃菣莃苣ꦃ菣覃菣螃苣릂菣ꎂ菣ꪃ菣⚼畱瑯ⰻ愠敲㩡਍†焦潵㭴慃慮慤焦潵㭴‬慬㩴㔠⸱㔰㔴‬湬㩧ⴠㄱ⸴㌰㔷‬牵㩬਍†焦潵㭴瑨灴㩳⼯睷⹷牢摩敧慬摮楤瑳汩敬祲挮浯☯畱瑯ⰻ猠畬㩧਍†焦潵㭴牢摩敧慬摮焦潵㭴‬畳浭牡㩹☠畱瑯鞏돨뒭ꓥ낕臣꾂菣閃菣뢒闧肉胣隃菣뎃菣벃苣낂菣莃菣节铧ꎔ胣⚂畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭›焦潵㭴慃慮楤湡䌠畬♢畱瑯ⰻ渠浡彥湥›焦潵㭴慃慮楤湡䌠畬♢畱瑯ⰻ渠浡彥灪ഺ ☠畱瑯ꮂ菣螃苣ꊂ菣뮃苣ꦃ菣⚖畱瑯ⰻ愠敲㩡☠畱瑯䌻湡摡♡畱瑯ⰻ氠瑡›㈴㌮㘱ⰸ氠杮ഺ ⴠ㌸〮㜳ⰶ甠汲›焦潵㭴瑨灴㩳⼯睷⹷慣慮楤湡汣扵挮浯☯畱瑯ⰻ猠畬㩧☠畱瑯挻湡摡慩⵮汣扵焦潵㭴ബ 猠浵慭祲›焦潵㭴룤貕髧隃菣뎃菣芀菣ꒂ菣ꂃ菣Ꚃ苣벃苣벃臣袂苣궨ꯧ芀焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥☠畱瑯䐻汩潬❮⁳浓污⁬慂捴⁨楄瑳汩敬獲焦潵㭴‬慮敭敟㩮☠畱瑯䐻汩潬❮൳ 匠慭汬䈠瑡档䐠獩楴汬牥♳畱瑯ⰻ渠浡彥灪›焦潵㭴菣ꎂ菣뎃苣뮃苣ꊃ菣ꮃ菣莃菣⚁畱瑯ⰻ愠敲㩡਍†焦潵㭴慃慮慤焦潵㭴‬慬㩴㐠⸳㐱㈹‬湬㩧ⴠ㤷㔮㐴ⰳ甠汲›焦潵㭴瑨灴㩳⼯楤汬湯⹳慣☯畱瑯ⰻ਍†汳杵›焦潵㭴楤汬湯♳畱瑯ⰻ猠浵慭祲›焦潵㭴鳥莅铧閃菣벃菣蒂菣뾂菣ꮂ菣銂뷤ꢔ臣龁苣ꦃ菣袃鋨馕触芀焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥☠畱瑯䘻牯祴䌠敲步焦潵㭴‬慮敭敟㩮☠畱瑯䘻牯祴䌠敲步焦潵㭴‬慮敭機㩰਍†焦潵㭴菣ꦂ菣蚃苣벃苣ꪃ菣꾂焦潵㭴‬牡慥›焦潵㭴慃慮慤焦潵㭴‬慬㩴㐠⸳㤱㘰‬湬㩧਍†㜭⸹㈶ㄳ‬牵㩬☠畱瑯栻瑴獰⼺眯睷昮牯祴牣敥睫楨歳⹹潣⽭焦潵㭴‬汳杵›焦潵㭴潦瑲⵹牣敥♫畱瑯ⰻ਍†畳浭牡㩹☠畱瑯讀裥龆裦貾臣隃菣뎃菣馁苣겋蟨讉돦ꞁ鿧覂苣讂胣⚂畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭›焦潵㭴牃睯⁮潒慹⁬䜨浩楬䐠獩楴汬牥⥹焦潵㭴‬慮敭敟㩮☠畱瑯䌻潲湷删祯污਍†䜨浩楬䐠獩楴汬牥⥹焦潵㭴‬慮敭機㩰☠畱瑯꺂菣ꪃ鋨馕触袼苣ꦃ苣뎃菣벃菣ꮃ볯⚉畱瑯ⰻ愠敲㩡਍†焦潵㭴慃慮慤焦潵㭴‬慬㩴㔠⸰㌶㤸‬湬㩧ⴠ㘹㤮㌹ⰶ甠汲›焦潵㭴瑨灴㩳⼯睷⹷牣睯牮祯污挮浯愯敧札瑡⽥焦潵㭴ബ 猠畬㩧☠畱瑯朻浩楬焦潵㭴‬畳浭牡㩹☠畱瑯꾂菣Ꚃ菣궃苣ꒃ菣뮸ꛨ龔铧ꂋ苧꺁ꓥ辦꣦뢒闧肉胣⚂畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭›焦潵㭴汇湥牯⁡楄瑳汩敬祲焦潵㭴‬慮敭敟㩮☠畱瑯䜻敬潮慲਍†楄瑳汩敬祲焦潵㭴‬慮敭機㩰☠畱瑯낂菣躃菣뢒闧肉焦潵㭴‬牡慥›焦潵㭴慃慮慤焦潵㭴ബ 氠瑡›㘴㈮㌲ⰰ氠杮›㘭⸱㈱〵‬牵㩬☠畱瑯栻瑴獰⼺眯睷朮敬潮慲楤瑳汩敬祲挮浯☯畱瑯ⰻ਍†汳杵›焦潵㭴汧湥牯♡畱瑯ⰻ猠浵慭祲›焦潵㭴苣誃菣鶈臣랂菣낂菣ꊃ菣袃鋨馕触芀苣뎂菣袃菣뎃菣颧볥芀焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥☠畱瑯䜻潯牤摩敧☠浡㭰圠汩楬浡♳畱瑯ⰻ渠浡彥湥›焦潵㭴潇摯楲杤⁥愦灭഻ 圠汩楬浡♳畱瑯ⰻ渠浡彥灪›焦潵㭴苣莃菣ꪃ菣뢂볯Ꚃ苣ꪃ苣ꂃ苣⚺畱瑯ⰻ愠敲㩡☠畱瑯䌻湡摡♡畱瑯ⰻ਍†慬㩴㐠⸹㠸㔸‬湬㩧ⴠㄱ⸹㘴㠷‬牵㩬☠畱瑯栻瑴獰⼺眯睷朮潯牤摩敧湡睤汩楬浡⹳潣⽭焦潵㭴ബ 猠畬㩧☠畱瑯朻潯牤摩敧眭汩楬浡♳畱瑯ⰻ猠浵慭祲›焦潵㭴苣ꦃ菣袃苣钃菣莃菣붣胩銂ꇨ蚁鋨馕触芀焦潵㭴਍†ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭›焦潵㭴楈桧潷摯䐠獩楴汬牥♳畱瑯ⰻ渠浡彥湥›焦潵㭴楈桧潷摯਍†楄瑳汩敬獲焦潵㭴‬慮敭機㩰☠畱瑯较苣Ꚃ菣覃菣螃苣릂菣ꎂ菣벃苣⚺畱瑯ⰻ愠敲㩡਍†焦潵㭴慃慮慤焦潵㭴‬慬㩴㔠⸰㠵㠲‬湬㩧ⴠㄱ⸳㜸㈳‬牵㩬਍†焦潵㭴瑨灴㩳⼯睷⹷楨桧潷摯楤瑳汩敬獲挮浯☯畱瑯ⰻ猠畬㩧☠畱瑯栻杩睨潯♤畱瑯ⰻ਍†畳浭牡㩹☠畱瑯ꮂ菣肃鳦Ꞥ듧꺁诧讫돧뢒闧肉臣ㆮ臣芀焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥☠畱瑯䠻物浡圠污敫♲畱瑯ⰻ渠浡彥湥›焦潵㭴楈慲⁭慗歬牥焦潵㭴‬慮敭機㩰਍†焦潵㭴菣ꒂ菣ꂃ菣Ꚃ苣벃苣벃焦潵㭴‬牡慥›焦潵㭴慃慮慤焦潵㭴‬慬㩴㐠⸲ㄳ㠶‬湬㩧਍†㠭⸳㌰㘷‬牵㩬☠畱瑯栻瑴獰⼺眯睷栮摷⹣慣☯畱瑯ⰻ猠畬㩧☠畱瑯栻物浡眭污敫♲畱瑯ⰻ਍†畳浭牡㩹☠畱瑯ꮂ菣螃苣ꊂ菣꾂菣隃苣龔苣ꂁ귦늏臣讂鋨馕触芀焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥☠畱瑯䬻湩楳⁰潈獵⁥景䘠湩⁥灓物瑩♳畱瑯ⰻ渠浡彥湥›焦潵㭴楋獮灩䠠畯敳਍†景䘠湩⁥灓物瑩♳畱瑯ⰻ渠浡彥灪›焦潵㭴苣뎃苣莃菣뮃菣Ꚃ苣⚹畱瑯ⰻ愠敲㩡਍†焦潵㭴慃慮慤焦潵㭴‬慬㩴㐠⸳㔹㔷‬湬㩧ⴠ㜷㈮㌵ⰰ甠汲›焦潵㭴瑨灴㩳⼯楫獮灩挮⽡焦潵㭴ബ 猠畬㩧☠畱瑯欻湩楳♰畱瑯ⰻ猠浵慭祲›焦潵㭴胢䚜牡⁭潴䜠慬獳胢銂軦銁苣늾ꃥ뢒闧肉胣⚂畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭›焦潵㭴慌瑳䈠獥⁴牂睥湩⁧愦灭※楄瑳汩楬杮焦潵㭴‬慮敭敟㩮☠畱瑯䰻獡൴ 䈠獥⁴牂睥湩⁧愦灭※楄瑳汩楬杮焦潵㭴‬慮敭機㩰☠畱瑯ꦃ苣袃菣릂菣⚈畱瑯ⰻ愠敲㩡਍†焦潵㭴慃慮慤焦潵㭴‬慬㩴㔠⸱㐰㠲‬湬㩧ⴠㄱ⸴㜰ㄲ‬牵㩬☠畱瑯栻瑴獰⼺氯獡扴獥扴敲楷杮挮浯☯畱瑯ⰻ਍†汳杵›焦潵㭴慬瑳戭獥♴畱瑯ⰻ猠浵慭祲›焦潵㭴蛩ꂀ臣뢒闧銂ꇨ蚁菣ꒂ菣ꪃ菣覃雦궨胣⚂畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭›焦潵㭴祍楲摡嘠敩⁷牁楴慳⁮楄瑳汩敬祲焦潵㭴‬慮敭敟㩮☠畱瑯䴻特慩⁤楖睥਍†牁楴慳⁮楄瑳汩敬祲焦潵㭴‬慮敭機㩰☠畱瑯龃菣ꊂ菣鎃菣벃菣ꊂ菣蚃苣떂菣⚳畱瑯ⰻ愠敲㩡਍†焦潵㭴慃慮慤焦潵㭴‬慬㩴㐠⸶〳㘵‬湬㩧ⴠ㈶ㄮ㌹ⰲ甠汲›焦潵㭴瑨灴㩳⼯睷⹷祭楲摡楶睥挮⽡焦潵㭴ബ 猠畬㩧☠畱瑯活特慩ⵤ楶睥焦潵㭴‬畳浭牡㩹☠畱瑯ꮂ菣肃铥肸臣鲀郥閳髧蚯胩銅볯랂菣뎃볯鶀臣覜郥芀焦潵㭴਍†ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭›焦潵㭴歏湡条湡匠楰楲獴焦潵㭴‬慮敭敟㩮☠畱瑯伻慫慮慧⁮灓物瑩♳畱瑯ⰻ਍†慮敭機㩰☠畱瑯ꪂ苣誃苣뎃菣릂菣ꪃ菣蒃焦潵㭴‬牡慥›焦潵㭴慃慮慤焦潵㭴‬慬㩴㔠⸰㘲㘷ബ 氠杮›ㄭ㤱㈮㜷ⰸ甠汲›焦潵㭴瑨灴㩳⼯歯湡条湡灳物瑩⹳潣⽭焦潵㭴‬汳杵ഺ ☠畱瑯漻慫慮慧⵮灳物瑩♳畱瑯ⰻ猠浵慭祲›焦潵㭴ꗨꮂ菣肃鳦꒏듧꺁苣ꦃ菣袃鋨馕触芀焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥☠畱瑯伻摬传摲牥䐠獩楴汬湩♧畱瑯ⰻ渠浡彥湥›焦潵㭴汏⁤牏敤൲ 䐠獩楴汬湩♧畱瑯ⰻ渠浡彥灪›焦潵㭴苣벃菣覃菣ꪂ菣肃菣⚼畱瑯ⰻ愠敲㩡☠畱瑯䌻湡摡♡畱瑯ⰻ਍†慬㩴㐠⸹㠱㐳‬湬㩧ⴠㄱ⸹㔵㤳‬牵㩬☠畱瑯栻瑴獰⼺眯睷漮摬牯敤摲獩楴汬湩⹧慣☯畱瑯ⰻ਍†汳杵›焦潵㭴汯ⵤ牯敤♲畱瑯ⰻ猠浵慭祲›焦潵㭴菣ꮃ菣馃菣릂臣肃菣膃苣뾂苣ꮃ苣뎃臣몺냦芀焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥☠畱瑯倻牡⁫楄瑳汩敬祲焦潵㭴‬慮敭敟㩮☠畱瑯倻牡⁫楄瑳汩敬祲焦潵㭴ബ 渠浡彥灪›焦潵㭴菣벃苣뮃菣ꎂ苣蚃苣ꦃ菣벃焦潵㭴‬牡慥›焦潵㭴慃慮慤焦潵㭴‬慬㩴㔠⸱㜱㤷ബ 氠杮›ㄭ㔱㔮〷ⰱ甠汲›焦潵㭴瑨灴㩳⼯慰歲楤瑳汩敬祲挮浯☯畱瑯ⰻ猠畬㩧਍†焦潵㭴慰歲焦潵㭴‬畳浭牡㩹☠畱瑯ꮂ菣肃鯥讫藥銜蛥ꮁ臣讂菣讃菣꾂臣뢒闧肉胣⚂畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭›焦潵㭴䅒⁗楄瑳汩敬祲焦潵㭴‬慮敭敟㩮☠畱瑯刻坁䐠獩楴汬牥♹畱瑯ⰻ਍†慮敭機㩰☠畱瑯刻坁菣ꎂ苣蚃苣ꦃ菣벃焦潵㭴‬牡慥›焦潵㭴慃慮慤焦潵㭴‬慬㩴㔠⸱㠰㌸ബ 氠杮›ㄭ㔱㌮㈷ⰵ甠汲›焦潵㭴瑨灴㩳⼯睷⹷慲摷獩楴汬牥⹹潣⽭焦潵㭴‬汳杵ഺ ☠畱瑯爻睡焦潵㭴‬畳浭牡㩹☠畱瑯ꊂ菣邃菣뾂铧꺁듧邝臣뢂菣蒂菣ꒂ苣ꒂ苣궂菣銂ꏨꂀ胣⚂畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭›焦潵㭴楒⁧慈摮䐠獩楴汬牥♹畱瑯ⰻ渠浡彥湥›焦潵㭴楒⁧慈摮਍†楄瑳汩敬祲焦潵㭴‬慮敭機㩰☠畱瑯ꪃ苣뮃菣뎃菣뮃菣ꎂ苣蚃苣ꦃ菣벃焦潵㭴‬牡慥ഺ ☠畱瑯䌻湡摡♡畱瑯ⰻ氠瑡›㌵㌮㠰ⰲ氠杮›ㄭ㌱㔮㤲ⰸ甠汲ഺ ☠畱瑯栻瑴獰⼺爯杩慨摮楤瑳汩敬祲挮浯☯畱瑯ⰻ猠畬㩧☠畱瑯爻杩栭湡♤畱瑯ⰻ਍†畳浭牡㩹☠畱瑯ꢂ菣ꊃ菣袃菣난鿥꺁뫤鞰苣ꦃ菣袃鋨馕触芀焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥☠畱瑯医敨瑬牥倠楯瑮䐠獩楴汬牥♹畱瑯ⰻ渠浡彥湥›焦潵㭴桓汥整⁲潐湩൴ 䐠獩楴汬牥♹畱瑯ⰻ渠浡彥灪›焦潵㭴苣Ꞃ菣뾂菣鶃苣뎃菣⚈畱瑯ⰻ愠敲㩡☠畱瑯䌻湡摡♡畱瑯ⰻ਍†慬㩴㔠⸰㘰㜱‬湬㩧ⴠ㈱⸵㘲㠳‬牵㩬☠畱瑯栻瑴獰⼺眯睷献敨瑬牥潰湩摴獩楴汬牥⹹潣⽭焦潵㭴ബ 猠畬㩧☠畱瑯猻敨瑬牥瀭楯瑮焦潵㭴‬畳浭牡㩹☠畱瑯ꪇꓧꞤ뫩ꞁ觨ꪳ臣랂菣낂菣ꊃ菣袃苣龔铧芀焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥☠畱瑯医楴汬圠瑡牥⁳楄瑳汩敬祲焦潵㭴‬慮敭敟㩮☠畱瑯医楴汬圠瑡牥൳ 䐠獩楴汬牥♹畱瑯ⰻ渠浡彥灪›焦潵㭴苣蚃苣ꮃ苣ꦂ菣뾂菣몂焦潵㭴‬牡慥›焦潵㭴慃慮慤焦潵㭴ബ 氠瑡›㌴㠮㐳ⰰ氠杮›㜭⸹ㄵ〹‬牵㩬☠畱瑯栻瑴獰⼺猯楴汬慷整獲楤瑳汩敬祲挮浯☯畱瑯ⰻ਍†汳杵›焦潵㭴瑳汩⵬慷整獲焦潵㭴‬畳浭牡㩹☠畱瑯ꮂ菣肃裥꺁苣ꦃ菣袃苣ꒂ苣궂菣뢒闧肉臣肸臣芀焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥☠畱瑯医牴瑡捨湯⁡灓物瑩♳畱瑯ⰻ渠浡彥湥›焦潵㭴瑓慲桴潣慮਍†灓物瑩♳畱瑯ⰻ渠浡彥灪›焦潵㭴苣袃菣릂苣誃菣릂菣ꪃ菣蒃焦潵㭴‬牡慥›焦潵㭴慃慮慤焦潵㭴ബ 氠瑡›㌵㔮㔳ⰹ氠杮›ㄭ㌱㐮㘸ⰶ甠汲›焦潵㭴瑨灴㩳⼯瑳慲桴潣慮灳物瑩⹳慣☯畱瑯ⰻ਍†汳杵›焦潵㭴瑳慲桴潣慮焦潵㭴‬畳浭牡㩹☠畱瑯鞌뇧肜냥辦꣦꾂菣릂臣辰臣ꪁ苣ꦃ菣袃鋨馕触芀焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥☠畱瑯吻敨䰠扩牥祴䐠獩楴汬牥♹畱瑯ⰻ渠浡彥湥›焦潵㭴桔⁥楌敢瑲൹ 䐠獩楴汬牥♹畱瑯ⰻ渠浡彥灪›焦潵㭴苣뮃菣邃菣ꎂ菣⚼畱瑯ⰻ愠敲㩡☠畱瑯䌻湡摡♡畱瑯ⰻ਍†慬㩴㐠⸹㜲㐶‬湬㩧ⴠ㈱⸳〱㤹‬牵㩬☠畱瑯栻瑴獰⼺琯敨楬敢瑲摹獩楴汬牥⹹潣⽭焦潵㭴ബ 猠畬㩧☠畱瑯琻敨氭扩牥祴焦潵㭴‬畳浭牡㩹☠畱瑯ㄻ〰ꪂ菣겂菣莃苣肩觧銂뷤ꢔ臣讂菩芸黥뢒闧肉胣⚂畱瑯഻ 素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥☠畱瑯吻灯匠敨晬䐠獩楴汬牥♳畱瑯ⰻ渠浡彥湥›焦潵㭴潔⁰桓汥൦ 䐠獩楴汬牥♳畱瑯ⰻ渠浡彥灪›焦潵㭴菣莃菣랂苣ꮃ菣⚕畱瑯ⰻ愠敲㩡☠畱瑯䌻湡摡♡畱瑯ⰻ਍†慬㩴㐠⸴ㄹ㘲‬湬㩧ⴠ㘷㈮ㄴⰵ甠汲›焦潵㭴瑨灴㩳⼯睷⹷潴獰敨晬楤瑳汩敬獲挮浯☯畱瑯ⰻ਍†汳杵›焦潵㭴潴⵰桳汥♦畱瑯ⰻ猠浵慭祲›焦潵㭴苣뎃苣ꪃ苣鶼뗧꺁苣ꒂ苣궂菣붣胩銂뻥袈胣⚂畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭›焦潵㭴睔⁯牂睥牥⁳桗獩祫焦潵㭴‬慮敭敟㩮☠畱瑯吻潷䈠敲敷獲਍†桗獩祫焦潵㭴‬慮敭機㩰☠畱瑯袃苣벃菣隃菣ꖃ菣벃苣⚺畱瑯ⰻ愠敲㩡☠畱瑯䌻湡摡♡畱瑯ⰻ氠瑡ഺ 㘠⸰ㄷ㔳‬湬㩧ⴠ㌱⸵㔰〶‬牵㩬☠畱瑯栻瑴獰⼺琯潷戭敲敷獲挮浯☯畱瑯ⰻ猠畬㩧਍†焦潵㭴睴ⵯ牢睥牥♳畱瑯ⰻ猠浵慭祲›焦潵㭴菣벃苣뎃뫦麷臣랂菣낂菣ꊃ菣袃臣覜郥芀焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥☠畱瑯唻扲湡䐠獩楴汬牥敩♳畱瑯ⰻ渠浡彥湥›焦潵㭴牕慢൮ 䐠獩楴汬牥敩♳畱瑯ⰻ渠浡彥灪›焦潵㭴苣벃菣뎃菣螃苣릂菣ꎂ菣벃苣⚺畱瑯ⰻ愠敲㩡਍†焦潵㭴慃慮慤焦潵㭴‬慬㩴㐠⸹㠸㔸‬湬㩧ⴠㄱ⸹㘴㠷‬牵㩬਍†焦潵㭴瑨灴㩳⼯睷⹷牵慢摮獩楴汬牥敩⹳慣☯畱瑯ⰻ猠畬㩧☠畱瑯画扲湡焦潵㭴ബ 猠浵慭祲›焦潵㭴䍂럥肜裥龜臣꾂菣閃菣뢒闧肉臣肸臣芀焦潵㭴素⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧㭝⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧⨯਍†ⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾슠ච 㰠猯慰㹮〱 牉汥湡袼뻥ꞗ菣벃苣₿〲믤覼⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧ⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭ਍†⼪⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧潣獮⁴物汥湡䑤瑡⁡‽㱛琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴慂汬歹敥敦䐠獩楴汬牥♹畱瑯ⰻ渠浡彥湥☺畱瑯䈻污祬敫晥♥畱瑯ⰻ਍†慮敭機㩰焦潵㭴菣ꪃ菣궂菣閃焦潵㭴‬牡慥☺畱瑯䤻敲慬摮焦潵㭴‬慬㩴㈵㘮㠱ⰶ਍†湬㩧㜭㌮㤱ⰷ甠汲☺畱瑯☻畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭☺畱瑯䈻慯湮䐠獩楴汬牥♹畱瑯ⰻ渠浡彥湥☺畱瑯䈻慯湮焦潵㭴ബ 渠浡彥灪☺畱瑯鲃苣뎃焦潵㭴‬牡慥☺畱瑯䤻敲慬摮焦潵㭴‬慬㩴㌵㜮㌴ⰱ氠杮ⴺ⸶㜳㌷ബ 甠汲☺畱瑯☻畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭☺畱瑯䌻潬慮楫瑬⁹楄瑳汩敬祲焦潵㭴‬慮敭敟㩮焦潵㭴汃湯歡汩祴焦潵㭴ബ 渠浡彥灪☺畱瑯꾂菣誃苣ꮃ菣ꎂ焦潵㭴‬牡慥☺畱瑯䤻敲慬摮焦潵㭴‬慬㩴ㄵ㘮㘲ⰴ਍†湬㩧㠭㠮㔹ⰳ甠汲☺畱瑯☻畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭☺畱瑯䐻湩汧⁥楄瑳汩敬祲⠠潃汯祥☩畱瑯ⰻ渠浡彥湥☺畱瑯䌻潯敬♹畱瑯ⰻ਍†慮敭機㩰焦潵㭴苣벃菣벃焦潵㭴‬牡慥☺畱瑯䤻敲慬摮焦潵㭴‬慬㩴㈵ㄮ㘴ⰵ਍†湬㩧ㄭ⸰㠲㈸‬牵㩬焦潵㭴焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴畑湩整獳湥楴污䈠慲摮⁳䐨湩汧⥥焦潵㭴‬慮敭敟㩮焦潵㭴楄杮敬焦潵㭴ബ 渠浡彥灪☺畱瑯螃苣뎃苣ꮃ焦潵㭴‬牡慥☺畱瑯䤻敲慬摮焦潵㭴‬慬㩴㌵㌮㜳ⰵ氠杮ⴺ⸶㜲ⰳ਍†牵㩬焦潵㭴焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴汇湥慤潬杵⁨楄瑳汩敬祲焦潵㭴‬慮敭敟㩮焦潵㭴畄汢湩਍†楌敢瑲敩♳畱瑯ⰻ渠浡彥灪☺畱瑯肃菣ꪃ菣ꪃ菣蚃苣벃苣⚺畱瑯ⰻ愠敲㩡焦潵㭴牉汥湡♤畱瑯ⰻ਍†慬㩴㌵〮㜰ⰶ氠杮ⴺ⸶㜳㈵‬牵㩬焦潵㭴焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴慌扭祡䤠楲桳圠楨歳祥䌠⹯焦潵㭴‬慮敭敟㩮焦潵㭴汇湥牤敥焦潵㭴ബ 渠浡彥灪☺畱瑯낂菣뎃菣ꪃ菣⚼畱瑯ⰻ愠敲㩡焦潵㭴牉汥湡♤畱瑯ⰻ氠瑡㔺⸳㠴㜶ബ 氠杮ⴺ⸶㄰㔲‬牵㩬焦潵㭴焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴楄条潥⠠楋扬来慧⥮焦潵㭴‬慮敭敟㩮焦潵㭴楋扬来慧♮畱瑯ⰻ਍†慮敭機㩰焦潵㭴苣ꮃ菣겂菣⚳畱瑯ⰻ愠敲㩡焦潵㭴牉汥湡♤畱瑯ⰻ氠瑡㔺⸳㐳㐴ബ 氠杮ⴺ⸶㜲㌸‬牵㩬焦潵㭴焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴潌杵⁨楇汬䐠獩楴汬牥♹畱瑯ⰻ渠浡彥湥☺畱瑯䰻畯桧䜠汩♬畱瑯ⰻ਍†慮敭機㩰焦潵㭴菣莃菣꺂菣⚫畱瑯ⰻ愠敲㩡焦潵㭴牉汥湡♤畱瑯ⰻ氠瑡㔺⸴㜲ⰵ氠杮ⴺ⸸㔴ⰵ਍†牵㩬焦潵㭴焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴牂睯⵮潆浲湡⠠楍汤瑥湯☩畱瑯ⰻ渠浡彥湥☺畱瑯䴻摩敬潴♮畱瑯ⰻ਍†慮敭機㩰焦潵㭴菣覃菣袃菣⚳畱瑯ⰻ愠敲㩡焦潵㭴牉汥湡♤畱瑯ⰻ氠瑡㔺⸳〷㠸ബ 氠杮ⴺ⸶㔵㄰‬牵㩬焦潵㭴焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴敔汥湩⁧桗獩敫⁹潃☮畱瑯ⰻ渠浡彥湥☺畱瑯倻慥獲⁥祌湯♳畱瑯ⰻ਍†慮敭機㩰焦潵㭴菣ꊂ菣릂菣ꒂ苣뎃苣⚺畱瑯ⰻ愠敲㩡焦潵㭴牉汥湡♤畱瑯ⰻ氠瑡㔺⸳㌳㐶ബ 氠杮ⴺ⸶㘲㔲‬牵㩬焦潵㭴焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴楔灰牥牡⁹潂瑵煩敵䐠獩楴汬牥♹畱瑯ⰻ਍†慮敭敟㩮焦潵㭴潐敷獲潣牵♴畱瑯ⰻ渠浡彥灪☺畱瑯醃菣벃苣뎂菣袃焦潵㭴ബ 愠敲㩡焦潵㭴牉汥湡♤畱瑯ⰻ氠瑡㔺⸲〵㠰‬湬㩧㜭㜮〸ⰱ甠汲☺畱瑯☻畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭☺畱瑯圻汩楬浡䜠慲瑮☠浡㭰匠湯⁳刨敯☠浡㭰䌠⥯焦潵㭴‬慮敭敟㩮焦潵㭴潒൥ ☠浡㭰䌠♯畱瑯ⰻ渠浡彥灪☺畱瑯궃菣⚼浡㭰苣벃焦潵㭴‬牡慥☺畱瑯䤻敲慬摮焦潵㭴ബ 氠瑡㔺⸳㜲㜹‬湬㩧㜭㔮㈰ⰹ甠汲☺畱瑯☻畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭☺畱瑯刻湥来摡⁥灓物瑩⁳刨祯污传歡☩畱瑯ⰻ渠浡彥湥☺畱瑯刻祯污传歡焦潵㭴ബ 渠浡彥灪☺畱瑯궃苣ꒃ菣ꪂ菣꾂焦潵㭴‬牡慥☺畱瑯䤻敲慬摮焦潵㭴‬慬㩴㈵㈮ㄶⰲ਍†湬㩧㜭ㄮ㠰ⰵ甠汲☺畱瑯☻畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭☺畱瑯圻獥⁴潃歲䐠獩楴汬牥⁳匨敨⥤焦潵㭴‬慮敭敟㩮焦潵㭴桓摥焦潵㭴ബ 渠浡彥灪☺畱瑯랂苣莃菣⚉畱瑯ⰻ愠敲㩡焦潵㭴牉汥湡♤畱瑯ⰻ氠瑡㔺⸱㈵㐸‬湬㩧㤭㈮ㄸⰸ਍†牵㩬焦潵㭴焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴潂瑡慹摲䐠獩楴汬牥⁹匨慬敮☩畱瑯ⰻ渠浡彥湥☺畱瑯医慬敮焦潵㭴ബ 渠浡彥灪☺畱瑯릂菣벃菣⚳畱瑯ⰻ愠敲㩡焦潵㭴牉汥湡♤畱瑯ⰻ氠瑡㔺⸴㐳㐱‬湬㩧㜭㘮㈳ⰲ਍†牵㩬焦潵㭴焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴潃数慬摮䐠獩楴汬牥⁹吨敥楬杮☩畱瑯ⰻ渠浡彥湥☺畱瑯吻敥楬杮焦潵㭴ബ 渠浡彥灪☺畱瑯蚃苣벃菣뎃苣⚰畱瑯ⰻ愠敲㩡焦潵㭴牉汥湡♤畱瑯ⰻ氠瑡㔺⸴〴㤶ബ 氠杮ⴺ⸵ㄵ㤳‬牵㩬焦潵㭴焦潵㭴素㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮ൻ 渠浡㩥焦潵㭴楈据⁨楄瑳汩敬祲⠠慗整晲牯⥤焦潵㭴‬慮敭敟㩮焦潵㭴慗整晲牯♤畱瑯ⰻ਍†慮敭機㩰焦潵㭴苣ꦂ菣뾂菣閃苣벃菣⚉畱瑯ⰻ愠敲㩡焦潵㭴牉汥湡♤畱瑯ⰻ氠瑡㔺⸴ㄵ㜶ബ 氠杮ⴺ⸵㈹ⰲ甠汲☺畱瑯☻畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭☺畱瑯䬻汩潬敷⁮楄瑳汩敬祲⠠敗瑳䌠牯⥫焦潵㭴‬慮敭敟㩮焦潵㭴敗瑳਍†潃歲焦潵㭴‬慮敭機㩰焦潵㭴苣ꢂ苣袃苣벃苣⚯畱瑯ⰻ愠敲㩡焦潵㭴牉汥湡♤畱瑯ⰻ਍†慬㩴㐵〮㔷ⰹ氠杮ⴺ⸶㌱ⰶ甠汲☺畱瑯☻畱瑯※ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾₠⼼灳湡笾਍†慮敭☺畱瑯倻牥潮⁤楒慣摲⠠片慥⁴潎瑲敨湲☩畱瑯ⰻ渠浡彥湥☺畱瑯䜻敲瑡਍†潎瑲敨湲焦潵㭴‬慮敭機㩰焦潵㭴苣것菣袃菣벃苣뎃焦潵㭴‬牡慥☺畱瑯䤻敲慬摮焦潵㭴ബ 氠瑡㔺⸱〹㤷‬湬㩧㠭ㄮ〷ⰶ甠汲☺畱瑯☻畱瑯※㱽琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴崾㰻琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴⼾പ ⴠⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭ㰭琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂꃂ਍†⼼灳湡ㄾ⤱传桴牥袼鯦낖菣벃苣₿뚻볯ꒂ菣覃‬苣Ꚃ苣벃菣뎃‬迥뺹볯㲉琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ⴾⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭഭ ⨠㰯琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴挾湯瑳漠桴牥䑳瑡⁡‽㱛琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ਍†⼼灳湡笾猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾㲠猯慰㹮⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾슠슠ච 㰠猯慰㹮慮敭☺畱瑯䄻牭瑵䐠獩楴汬牥♹畱瑯ⰻ猼慰൮ 猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ⼼灳湡㰾琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂꃂꃂ਍†⼼灳湡渾浡彥湥☺畱瑯䄻牭瑵䐠獩楴汬牥♹畱瑯ⰻ猼慰൮ 猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ⼼灳湡㰾琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂꃂꃂ਍†⼼灳湡渾浡彥灪☺畱瑯ꊂ菣ꮃ菣袃菣螃苣릂菣ꎂ菣ꪃ菣⚼畱瑯ⰻ猼慰൮ 猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ⼼灳湡㰾琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂꃂꃂ਍†⼼灳湡愾敲㩡焦潵㭴湉楤♡畱瑯ⰻ猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾㲠猯慰㹮⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾슠슠ච 㰠猯慰㹮慬㩴㌱〮㐱ⰲ猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾㲠猯慰㹮⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾슠슠ච 㰠猯慰㹮湬㩧㜷㘮㜹ⰵ猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾㲠猯慰㹮⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾슠슠ච 㰠猯慰㹮牵㩬焦潵㭴瑨灴⼺眯睷愮牭瑵楤瑳汩敬楲獥挮浯☯畱瑯㰻灳湡਍†瑳汹㵥洧潳猭慰散畲㩮敹❳숾㲠猯慰㹮⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮㱻灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ⼼灳湡㰾琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂꃂꃂ਍†⼼灳湡渾浡㩥焦潵㭴楈桧䌠慯瑳䐠獩楴汬牥♹畱瑯ⰻ猼慰൮ 猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ⼼灳湡㰾琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂꃂꃂ਍†⼼灳湡渾浡彥湥☺畱瑯䠻杩⁨潃獡⁴楄瑳汩敬祲焦潵㭴㰬灳湡਍†瑳汹㵥洧潳猭慰散畲㩮敹❳숾㲠猯慰㹮⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾슠슠ච 㰠猯慰㹮慮敭機㩰焦潵㭴菣ꒂ菣뎂菣릂菣뮃菣ꎂ苣蚃苣ꦃ菣벃焦潵㭴㰬灳湡਍†瑳汹㵥洧潳猭慰散畲㩮敹❳숾㲠猯慰㹮⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾슠슠ච 㰠猯慰㹮牡慥☺畱瑯医敷敤♮畱瑯ⰻ猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾㲠猯慰㹮⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾슠슠ච 㰠猯慰㹮慬㩴㌶〮㄰ⰹ猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾㲠猯慰㹮⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾슠슠ච 㰠猯慰㹮湬㩧㜱㜮㠹ⰶ猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾㲠猯慰㹮⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾슠슠ච 㰠猯慰㹮牵㩬焦潵㭴瑨灴㩳⼯睷⹷楨桧潣獡睴楨歳⹹敳☯畱瑯㰻灳湡਍†瑳汹㵥洧潳猭慰散畲㩮敹❳숾㲠猯慰㹮⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮ⱽ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮㱻灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ⼼灳湡㰾琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂꃂꃂ਍†⼼灳湡渾浡㩥焦潵㭴態慶慬⁮楄瑳汩敬祲焦潵㭴㰬灳湡਍†瑳汹㵥洧潳猭慰散畲㩮敹❳숾㲠猯慰㹮⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾슠슠ච 㰠猯慰㹮慮敭敟㩮焦潵㭴態慶慬⁮楄瑳汩敬祲焦潵㭴㰬灳湡਍†瑳汹㵥洧潳猭慰散畲㩮敹❳숾㲠猯慰㹮⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾슠슠ච 㰠猯慰㹮慮敭機㩰焦潵㭴苣邃菣뎃菣螃苣릂菣ꎂ菣ꪃ菣⚼畱瑯ⰻ猼慰൮ 猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ⼼灳湡㰾琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂꃂꃂ਍†⼼灳湡愾敲㩡焦潵㭴慔睩湡焦潵㭴㰬灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ⼼灳湡㰾琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂꃂꃂ਍†⼼灳湡氾瑡㈺⸴ㄷ㜳㰬灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ⼼灳湡㰾琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂꃂꃂ਍†⼼灳湡氾杮ㄺㄲ㘮ㄹⰹ猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾㲠猯慰㹮⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾슠슠ච 㰠猯慰㹮牵㩬焦潵㭴瑨灴㩳⼯睷⹷慫慶慬睮楨歳⹹潣⽭焦潵㭴猼慰൮ 猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ⼼灳湡㰾琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ㰠猯慰㹮㱽琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴崾㰻琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴⼾പ ⴠⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭ㰭琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂꃂ਍†⼼灳湡ㄾ⤲圠牯摬볯ꢅ菣벃苣銂뗧袐銆鶈鳦ꢡꓧ⾺潗汲鲃苣뎃臣뾽铧覼⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧ⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭⴭ਍†⼪⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧潣獮⁴潷汲䑤瑡⁡‽㱛琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ਍†⼼灳湡⸾⸮灳祥楳敤慄慴㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ਍†⼼灳湡⸾⸮楨桧慬摮䑳瑡ⱡ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮⸮氮睯慬摮䑳瑡ⱡ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮⸮挮浡扰汥潴湷慄慴㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ਍†⼼灳湡⸾⸮獩慬䑹瑡ⱡ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮⸮椮汳湡獤慄慴㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ਍†⼼灳湡⸾⸮慪慰䑮瑡ⱡ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮⸮甮慳慄慴㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ਍†⼼灳湡⸾⸮慣慮慤慄慴㰬琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴㰾灳湡猠祴敬✽獭ⵯ灳捡牥湵示獥㸧ꃂ਍†⼼灳湡⸾⸮物汥湡䑤瑡ⱡ⼼摴ാ ⼼牴ാ 琼⁲敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧਍†琼⁤敨杩瑨㈽‴瑳汹㵥栧楥桧㩴㠱〮瑰㸧猼慰⁮瑳汹㵥洧潳猭慰散畲㩮敹❳숾ච 㰠猯慰㹮⸮漮桴牥䑳瑡㱡琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴崾㰻琯㹤਍㰠琯㹲਍㰠牴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴ാ 㰠摴栠楥桧㵴㐲猠祴敬✽敨杩瑨ㄺ⸸瀰❴肀믣㲂琯㹤਍㰠琯㹲਍ℼⴭ湅䙤慲浧湥⵴㸭਍⼼慴汢㹥਍਍⼼潢祤ാഊ㰊栯浴㹬਍