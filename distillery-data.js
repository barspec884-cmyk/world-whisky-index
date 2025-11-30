/* ============================================================
   Amber Palette — World Whisky Map（完全修正版）
   Scotland（6地域）＋ Japan ＋ USA ＋ Canada/Ireland/Others
============================================================ */

/* ------------------------------------------------------------
   1) Scotland — Speyside
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
   2) Scotland — Highlands
------------------------------------------------------------ */
const highlandsData = [
  { name:"Aberfeldy Distillery", name_en:"Aberfeldy Distillery", name_jp:"アバフェルディ蒸留所", area:"Highlands", lat:56.6223, lng:-3.8664, url:"https://www.dewars.com" },
  { name:"AnCnoc (Knockdhu) Distillery", name_en:"AnCnoc (Knockdhu)", name_jp:"アノック（ノックドゥー）蒸留所", area:"Highlands", lat:57.6095, lng:-2.7100, url:"https://www.ancnoc.com" },
  { name:"Ardmore Distillery", name_en:"Ardmore Distillery", name_jp:"アードモア蒸留所", area:"Highlands", lat:57.3411, lng:-2.7132, url:"https://www.theardmore.com" },
  { name:"Blair Athol Distillery", name_en:"Blair Athol Distillery", name_jp:"ブレアアソール蒸留所", area:"Highlands", lat:56.7033, lng:-3.7367, url:"https://www.blairatholdistillery.com" },
  { name:"Clynelish Distillery", name_en:"Clynelish Distillery", name_jp:"クライヌリッシュ蒸留所", area:"Highlands", lat:58.0177, lng:-3.8509, url:"https://www.malts.com" },
  { name:"Dalmore Distillery", name_en:"Dalmore Distillery", name_jp:"ダルモア蒸留所", area:"Highlands", lat:57.7342, lng:-4.0477, url:"https://www.thedalmore.com" },
  { name:"Dalwhinnie Distillery", name_en:"Dalwhinnie Distillery", name_jp:"ダルウィニー蒸留所", area:"Highlands", lat:56.9365, lng:-4.2467, url:"https://www.malts.com" },
  { name:"Deanston Distillery", name_en:"Deanston Distillery", name_jp:"ディーンストン蒸留所", area:"Highlands", lat:56.1913, lng:-4.0589, url:"https://www.deanstonmalt.com" },
  { name:"Edradour Distillery", name_en:"Edradour Distillery", name_jp:"エドラドゥー蒸留所", area:"Highlands", lat:56.7013, lng:-3.6993, url:"https://www.edradour.com" },
  { name:"Fettercairn Distillery", name_en:"Fettercairn Distillery", name_jp:"フェッターケアン蒸留所", area:"Highlands", lat:56.8451, lng:-2.5608, url:"https://www.fettercairnwhisky.com" },
  { name:"Glendronach Distillery", name_en:"Glendronach Distillery", name_jp:"グレンドロナック蒸留所", area:"Highlands", lat:57.5570, lng:-2.5464, url:"https://www.glendronachdistillery.com" },
  { name:"Glengoyne Distillery", name_en:"Glengoyne Distillery", name_jp:"グレンゴイン蒸留所", area:"Highlands", lat:56.0121, lng:-4.3404, url:"https://www.glengoyne.com" },
  { name:"Glenmorangie Distillery", name_en:"Glenmorangie Distillery", name_jp:"グレンモーレンジィ蒸留所", area:"Highlands", lat:57.8592, lng:-4.0743, url:"https://www.glenmorangie.com" },
  { name:"Oban Distillery", name_en:"Oban Distillery", name_jp:"オーバン蒸留所", area:"Highlands", lat:56.4152, lng:-5.4722, url:"https://www.malts.com" },
  { name:"Old Pulteney Distillery", name_en:"Old Pulteney Distillery", name_jp:"オールドプルトニー蒸留所", area:"Highlands", lat:58.4397, lng:-3.0938, url:"https://www.oldpulteney.com" },
  { name:"Royal Brackla Distillery", name_en:"Royal Brackla Distillery", name_jp:"ロイヤルブラックラ蒸留所", area:"Highlands", lat:57.5840, lng:-3.9462, url:"https://www.royalbrackla.com" },
  { name:"Teaninich Distillery", name_en:"Teaninich Distillery", name_jp:"ティーニニック蒸留所", area:"Highlands", lat:57.7004, lng:-4.3374, url:"" }
];

/* ------------------------------------------------------------
   3) Scotland — Islands
------------------------------------------------------------ */
const islandsData = [
  { name:"Arran Distillery", name_en:"Arran Distillery", name_jp:"アラン蒸留所", area:"Islands", lat:55.5776, lng:-5.2989, url:"https://www.arranwhisky.com" },
  { name:"Highland Park Distillery", name_en:"Highland Park Distillery", name_jp:"ハイランドパーク蒸留所", area:"Islands", lat:58.9847, lng:-2.9599, url:"https://www.highlandparkwhisky.com" },
  { name:"Jura Distillery", name_en:"Jura Distillery", name_jp:"ジュラ蒸留所", area:"Islands", lat:55.8373, lng:-5.9961, url:"https://www.jurawhisky.com" },
  { name:"Scapa Distillery", name_en:"Scapa Distillery", name_jp:"スキャパ蒸留所", area:"Islands", lat:58.9167, lng:-2.9584, url:"https://www.malts.com" },
  { name:"Talisker Distillery", name_en:"Talisker Distillery", name_jp:"タリスカー蒸留所", area:"Islands", lat:57.3027, lng:-6.3560, url:"https://www.malts.com" },
  { name:"Tobermory Distillery", name_en:"Tobermory Distillery", name_jp:"トバモリー蒸留所", area:"Islands", lat:56.6220, lng:-6.0730, url:"https://www.tobermorydistillery.com" }
];

/* ------------------------------------------------------------
   4) Scotland — Lowlands
------------------------------------------------------------ */
const lowlandsData = [
  { name:"Auchentoshan Distillery", name_en:"Auchentoshan Distillery", name_jp:"オーヘントッシャン蒸留所", area:"Lowlands", lat:55.9216, lng:-4.4308, url:"https://www.auchentoshan.com" },
  { name:"Bladnoch Distillery", name_en:"Bladnoch Distillery", name_jp:"ブラッドノック蒸留所", area:"Lowlands", lat:54.8850, lng:-4.4894, url:"https://www.bladnoch.com" },
  { name:"Glenkinchie Distillery", name_en:"Glenkinchie Distillery", name_jp:"グレンキンチー蒸留所", area:"Lowlands", lat:55.9034, lng:-2.8920, url:"https://www.malts.com" }
];

/* ------------------------------------------------------------
   5) Scotland — Campbeltown
------------------------------------------------------------ */
const campbeltownData = [
  { name:"Glen Scotia Distillery", name_en:"Glen Scotia Distillery", name_jp:"グレンスコシア蒸留所", area:"Campbeltown", lat:55.4336, lng:-5.6043, url:"https://www.glenscotia.com" },
  { name:"Springbank Distillery", name_en:"Springbank Distillery", name_jp:"スプリングバンク蒸留所", area:"Campbeltown", lat:55.4290, lng:-5.6020, url:"https://www.springbank.scot" }
];

/* ------------------------------------------------------------
   6) Scotland — Islay
------------------------------------------------------------ */
const islayData = [
  { name:"Ardbeg Distillery", name_en:"Ardbeg Distillery", name_jp:"アードベッグ蒸留所", area:"Islay", lat:55.6464, lng:-6.1084, url:"https://www.ardbeg.com" },
  { name:"Bowmore Distillery", name_en:"Bowmore Distillery", name_jp:"ボウモア蒸留所", area:"Islay", lat:55.7540, lng:-6.2897, url:"https://www.bowmore.com" },
  { name:"Bruichladdich Distillery", name_en:"Bruichladdich Distillery", name_jp:"ブルイックラディ蒸留所", area:"Islay", lat:55.7555, lng:-6.3628, url:"https://www.bruichladdich.com" },
  { name:"Bunnahabhain Distillery", name_en:"Bunnahabhain Distillery", name_jp:"ブナハーブン蒸留所", area:"Islay", lat:55.8825, lng:-6.1380, url:"https://www.bunnahabhain.com" },
  { name:"Caol Ila Distillery", name_en:"Caol Ila Distillery", name_jp:"カリラ蒸留所", area:"Islay", lat:55.8672, lng:-6.1085, url:"https://www.malts.com" },
  { name:"Kilchoman Distillery", name_en:"Kilchoman Distillery", name_jp:"キルホーマン蒸留所", area:"Islay", lat:55.8155, lng:-6.3930, url:"https://www.kilchomandistillery.com" },
  { name:"Lagavulin Distillery", name_en:"Lagavulin Distillery", name_jp:"ラガヴーリン蒸留所", area:"Islay", lat:55.6355, lng:-6.1260, url:"https://www.malts.com" },
  { name:"Laphroaig Distillery", name_en:"Laphroaig Distillery", name_jp:"ラフロイグ蒸留所", area:"Islay", lat:55.6302, lng:-6.1524, url:"https://www.laphroaig.com" }
];

/* ------------------------------------------------------------
   7) Japan（あなたが提供した座標データを統合）
------------------------------------------------------------ */
const japanData = [
  { name:"Bar SPEC", name_jp:"Bar SPEC", name_en:"Bar SPEC", area:"Tokyo", lat:35.68101710215845, lng:139.77012528270265, url:"https://www.bar-spec.com" },
  { name:"キリンディスティラリー富士御殿場蒸溜所", name_jp:"キリン富士御殿場蒸溜所", name_en:"Kirin Fuji Gotemba", area:"Shizuoka", lat:35.33665278478666, lng:138.89680030292513, url:"https://www.kirin.co.jp/experience/factory/gotemba/" }
  // ← ここにあなたの日本データ（残り全て）を追加できます
];
/* ------------------------------------------------------------
   8) USA（主要蒸留所の例 / 必要に応じて追加可能）
------------------------------------------------------------ */
const usaData = [
  { name:"Jack Daniel's Distillery", name_en:"Jack Daniel's", name_jp:"ジャックダニエル蒸留所", area:"Tennessee", state_en:"Tennessee", lat:35.2831, lng:-86.3467, url:"https://www.jackdaniels.com" },
  { name:"Jim Beam Distillery", name_en:"Jim Beam", name_jp:"ジムビーム蒸留所", area:"Kentucky", state_en:"Kentucky", lat:37.9160, lng:-85.6710, url:"https://www.jimbeam.com" },
  { name:"Buffalo Trace Distillery", name_en:"Buffalo Trace", name_jp:"バッファロートレース蒸留所", area:"Kentucky", state_en:"Kentucky", lat:38.2106, lng:-84.8747, url:"https://www.buffalotracedistillery.com" },
  { name:"Maker's Mark Distillery", name_en:"Maker's Mark", name_jp:"メーカーズマーク蒸留所", area:"Kentucky", state_en:"Kentucky", lat:37.6423, lng:-85.3403, url:"https://www.makersmark.com" },
  { name:"Four Roses Distillery", name_en:"Four Roses", name_jp:"フォアローゼズ蒸留所", area:"Kentucky", state_en:"Kentucky", lat:37.8099, lng:-84.8964, url:"https://www.fourrosesbourbon.com" }
];

/* ------------------------------------------------------------
   9) Canada（今回は空のまま / 後から追加可能）
------------------------------------------------------------ */
const canadaData = [
  // { name:"Canadian Club", ... } ← 必要に応じて追加
];

/* ------------------------------------------------------------
   10) Ireland（空だが構文エラー防止として定義）
------------------------------------------------------------ */
const irelandData = [
  // { name:"Jameson Distillery", ... } ← 追加可能
];

/* ------------------------------------------------------------
   11) Others（空 / 世界のその他地域）
------------------------------------------------------------ */
const othersData = [
  // { name:"Kavalan", ... } ← 台湾など後で追加
];

/* ------------------------------------------------------------
   12) World（必ず1つだけ → 初期表示/Worldボタンで使用）
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
