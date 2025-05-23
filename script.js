const substances = [
  "LSD","Alkohol","THC","MDMA","Ritalin","Mirtazapin","Ketamin","CBD","2C-B","1V-LSD","Diazepam","Tramadol","Kokain","Amphetamin","3-MMC","4-MMC","MDA","6-APB","HHC","GHB","Tilidin","DMT","JWH-018","Mescalin"
];

// Beispiel-Kombis (Du kannst nach dem gleichen Schema beliebig viele ergänzen!)
const kombis = {
  "LSD+Alkohol": {
    level: "danger",
    description: "LSD und Alkohol können psychische Instabilität und Kontrollverlust auslösen.",
    tips: [
      "Nie alleine konsumieren.",
      "Alkohol erst nach dem Trip, nie im Peak.",
      "Set & Setting beachten."
    ]
  },
  "THC+CBD": {
    level: "safe",
    description: "CBD kann unangenehme Wirkungen von THC dämpfen.",
    tips: [
      "CBD als 'Notbremse' bei Überdosierung von THC.",
      "Vorsicht: hohe CBD-Dosen können auch müde machen."
    ]
  },
  "MDMA+Mirtazapin": {
    level: "caution",
    description: "Mirtazapin schwächt die Wirkung von MDMA und kann sie verzerren.",
    tips: [
      "Mirtazapin nicht einfach absetzen.",
      "Erwarte keine typische MDMA-Wirkung.",
      "Keine zusätzliche Dosis nachlegen."
    ]
  },
  "Alkohol+GHB": {
    level: "deadly",
    description: "Höchste Lebensgefahr! Atemstillstand und Tod möglich.",
    tips: [
      "Kombination absolut meiden.",
      "Notruf wählen bei Atemaussetzern.",
      "Nicht experimentieren!"
    ]
  },
  "MDMA+LSD": {
    level: "caution",
    description: "Candyflip: Euphorisch, aber riskant, Kreislauf- und Psychoserisiko.",
    tips: [
      "Niedrig dosieren.",
      "Nicht alleine nehmen.",
      "Auf Herzbelastung achten."
    ]
  },
  "Alkohol+Kokain": {
    level: "danger",
    description: "Bildet im Körper giftiges Cocaethylen, erhöht Herzinfarktrisiko.",
    tips: [
      "Kombi möglichst vermeiden.",
      "Nie hoch dosieren.",
      "Blutdruck überwachen."
    ]
  }
  // Ergänze hier beliebig viele weitere Kombinationen nach dem selben Schema!
};

function fillSelects() {
  const s1 = document.getElementById("sub1");
  const s2 = document.getElementById("sub2");
  s1.innerHTML = s2.innerHTML = "";
  substances.forEach(sub => {
    let o1 = document.createElement("option");
    let o2 = document.createElement("option");
    o1.value = o2.value = sub;
    o1.innerText = o2.innerText = sub;
    s1.appendChild(o1);
    s2.appendChild(o2);
  });
}
function showResult() {
  const s1 = document.getElementById("sub1").value;
  const s2 = document.getElementById("sub2").value;
  const key = s1 + "+" + s2;
  const keyRev = s2 + "+" + s1;
  const r = document.getElementById("result");
  const entry = kombis[key] || kombis[keyRev];
  if (entry) {
    r.className = "info-box " + entry.level;
    r.innerHTML = `<strong>${warnSymbol(entry.level)} ${capitalize(entry.level)}</strong><br>
      <b>${s1}</b> und <b>${s2}</b>:<br>
      ${entry.description}<br>
      <ul>${entry.tips.map(tip => `<li>${tip}</li>`).join('')}</ul>`;
  } else {
    r.className = "info-box caution";
    r.innerHTML = `<strong>🔶 Achtung</strong><br>
      Keine Erfahrungswerte – ungewöhnliche Kombination.<ul>
        <li>Wirkungen schwer vorhersehbar</li>
        <li>Niedrig dosieren!</li>
        <li>Nie alleine – immer auf Notfall vorbereitet sein.</li>
      </ul>`;
  }
}
function warnSymbol(level) {
  return { safe: "🟩", caution: "🟨", danger: "❗", deadly: "☠️" }[level] || "🔶";
}
function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }
window.onload = () => {
  fillSelects();
  document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("light");
  };
  document.getElementById("checkBtn").onclick = showResult;
  // Sofortige Anzeige ohne Neuladen:
  document.getElementById("sub1").onchange = showResult;
  document.getElementById("sub2").onchange = showResult;
};
