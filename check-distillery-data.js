// J/* ============================================================
   Distillery Data Checker — for distillery-data.js
   作者：Bar SPEC プロジェクト専用
   ============================================================ */

(function() {
  console.log("%c🔍 Distillery Data Checker — Start", "color: #c7a97a; font-size:14px;");

  if (!Array.isArray(distilleryData)) {
    console.error("❌ distilleryData が見つからないか、配列ではありません。");
    return;
  }

  const data = distilleryData;

  let missingArea = [];
  let missingLatLng = [];
  let invalidLatLng = [];
  let missingName = [];
  let missingURL = [];
  let duplicateNames = [];
  let nameSet = new Set();

  data.forEach((item, index) => {
    const id = `#${index + 1} ${item.name || item.name_jp || "NO-NAME"}`;

    // ---- NAME ----
    if (!item.name && !item.name_jp && !item.name_en) {
      missingName.push(id);
    }
    if (nameSet.has(item.name)) {
      duplicateNames.push(item.name);
    } else {
      nameSet.add(item.name);
    }

    // ---- AREA ----
    if (!item.area) {
      missingArea.push(id);
    }

    // ---- LAT/LNG ----
    if (item.lat == null || item.lng == null) {
      missingLatLng.push(id);
    } else {
      if (typeof item.lat !== "number" || typeof item.lng !== "number") {
        invalidLatLng.push(id);
      }
    }

    // ---- URL ----（URLは任意だが無いものをレポート）
    if (!item.url || item.url.trim() === "") {
      missingURL.push(id);
    }
  });

  // =============================
  // 📊 結果表示
  // =============================
  const section = (title, arr, color = "#fff") => {
    if (arr.length === 0) {
      console.log(`%c✔ ${title} — OK`, "color: #6fcf97;");
    } else {
      console.group(`%c❌ ${title}（${arr.length}件）`, `color: ${color};`);
      arr.forEach(x => console.log(" - " + x));
      console.groupEnd();
    }
  };

  section("AREA が無いデータ", missingArea, "#f2c94c");
  section("NAME が無いデータ", missingName, "#eb5757");
  section("緯度 / 経度が無いデータ", missingLatLng, "#bb6bd9");
  section("緯度 / 経度が数値でないデータ", invalidLatLng, "#bb6bd9");
  section("名前が重複しているデータ", duplicateNames, "#eb5757");
  section("URL が無いデータ（任意）", missingURL, "#2d9cdb");

  console.log("%c🔍 Distillery Data Checker — Complete", "color: #c7a97a; font-size:14px;");
})();
avaScript Document