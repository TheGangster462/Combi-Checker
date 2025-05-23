const substances = [
  "LSD","Alkohol","THC","MDMA","Ritalin","Mirtazapin","Ketamin","CBD","2C-B","1V-LSD","Diazepam",
  "Tramadol","Kokain","Amphetamin","3-MMC","4-MMC","MDA","6-APB","HHC","GHB","Tilidin","DMT","JWH-018","Mescalin"
];

const kombis = {
  "LSD+MDMA": {
    level: "caution",
    description: "🌈 'Candyflip': Intensiv, aber riskant. Kann zu Herzrasen, Kreislaufproblemen und Überforderung führen.",
    tips: [
      "⭐ Immer niedrige Dosierungen wählen.",
      "👀 Niemals alleine konsumieren.",
      "💧 Viel Wasser trinken und Pausen machen."
    ]
  },
  "LSD+Alkohol": {
    level: "danger",
    description: "🍻 Alkohol schwächt die Kontrolle beim Trip. Erhöhtes Risiko für Blackouts und gefährliches Verhalten.",
    tips: [
      "❗ Kein Alkohol im LSD-Peak.",
      "👫 Niemals alleine konsumieren.",
      "🚑 Bei Bewusstlosigkeit: Notruf wählen."
    ]
  },
  "LSD+THC": {
    level: "danger",
    description: "🍁 THC verstärkt LSD-Trips enorm. Kann Angst, Panik und Kontrollverlust auslösen.",
    tips: [
      "🥦 THC erst nach dem LSD-Peak (wenn überhaupt).",
      "😌 Dosis vorsichtig wählen.",
      "🎧 Musik oder ruhige Umgebung hilft bei Unruhe."
    ]
  },
  "LSD+Ketamin": {
    level: "danger",
    description: "🌀 Sehr intensive Dissoziation möglich, erhöhtes Psychose-Risiko.",
    tips: [
      "🔬 Nur für sehr erfahrene User.",
      "🏡 Sichere Umgebung!",
      "📅 Viel Erholungszeit einplanen."
    ]
  },
  "LSD+2C-B": {
    level: "danger",
    description: "🧠 Sehr intensive psychedelische Synergie. Wirkung kaum vorhersehbar.",
    tips: [
      "⚖️ Niedrige Dosierungen verwenden.",
      "🧑‍🤝‍🧑 Trip-Sitter unbedingt erforderlich.",
      "⏳ Viel Zeit zur Erholung."
    ]
  },
  "LSD+Mirtazapin": {
    level: "caution",
    description: "💤 Mirtazapin kann LSD-Wirkung stark dämpfen oder unberechenbar machen.",
    tips: [
      "❓ Rechne nicht mit 'normalem' LSD-Trip.",
      "⛔ Kein Nachlegen.",
      "😴 Möglich, dass der Trip plötzlich endet."
    ]
  },
  "LSD+Ritalin": {
    level: "danger",
    description: "⚡ Sehr nervös machend, Risiko für Panik und Herzrasen.",
    tips: [
      "🚫 Nicht bei Herzproblemen!",
      "🧑‍🤝‍🧑 Immer mit nüchternem Sitter.",
      "🌬️ Atmen nicht vergessen."
    ]
  },
  "Alkohol+THC": {
    level: "danger",
    description: "🤢 Führt oft zu Übelkeit ('Greening Out'), Schwindel und Kontrollverlust.",
    tips: [
      "🍃 THC nur nach Alkohol, nie vorher.",
      "🏡 Nur in sicherer Umgebung.",
      "💧 Viel Wasser trinken."
    ]
  },
  "Alkohol+GHB": {
    level: "deadly",
    description: "☠️ Lebensgefahr! Beide wirken atemdepressiv – Atemstillstand und Koma möglich.",
    tips: [
      "❌ Niemals kombinieren!",
      "🚑 Notruf bei Bewusstlosigkeit.",
      "⚰️ Lebensgefahr auch bei niedrigen Dosen."
    ]
  },
  "Alkohol+Benzodiazepine": {
    level: "deadly",
    description: "💀 Beide wirken atemdepressiv. Lebensgefahr durch Atemstillstand!",
    tips: [
      "❌ Niemals zusammen konsumieren!",
      "🛌 Bei Bewusstlosigkeit sofort Notarzt rufen.",
      "🚷 Auch kleine Mengen vermeiden."
    ]
  },
  "Alkohol+Ketamin": {
    level: "danger",
    description: "🚨 Verstärkte Koordinationsstörung, hohe Unfallgefahr.",
    tips: [
      "🔒 Nur eine Substanz pro Session.",
      "🧑‍🤝‍🧑 Begleitperson erforderlich.",
      "🚑 Unbedingt auf Sturzgefahr achten."
    ]
  },
  "Alkohol+MDMA": {
    level: "caution",
    description: "💧 Alkohol + MDMA entwässern stark – Kreislaufbelastung!",
    tips: [
      "💦 Viel Wasser trinken.",
      "🚫 Nicht nachlegen.",
      "🧑‍⚕️ Auf Herz/Kreislauf achten."
    ]
  },
  "Alkohol+Kokain": {
    level: "danger",
    description: "❗ Im Körper entsteht das giftige Cocaethylen – erhöht Herzinfarkt- und Krampfrisiko.",
    tips: [
      "❌ Kombination möglichst vermeiden.",
      "🩺 Blutdruck kontrollieren.",
      "🏥 Im Zweifel Notaufnahme."
    ]
  },
  "Alkohol+2C-B": {
    level: "danger",
    description: "🌪️ Verstärkte Wahrnehmungsverzerrung, Übelkeit, Kontrollverlust.",
    tips: [
      "⚠️ Langsam dosieren.",
      "🏡 Nicht in der Öffentlichkeit.",
      "💤 Rückzugsort vorbereiten."
    ]
  },
  "Alkohol+Amphetamin": {
    level: "danger",
    description: "💓 Hohe Belastung für Herz/Kreislauf, Aggressions- und Kontrollverlust-Risiko.",
    tips: [
      "🧑‍⚕️ Puls/Kreislauf beobachten.",
      "🚫 Nicht nachlegen.",
      "🧑‍🤝‍🧑 Begleitperson empfehlenswert."
    ]
  },
  "Alkohol+Tramadol": {
    level: "deadly",
    description: "☠️ Krampfanfälle und Atemstillstand möglich.",
    tips: [
      "❌ Nie kombinieren.",
      "🚑 Notarzt rufen bei Problemen.",
      "🛑 Sofort Konsum stoppen bei Symptomen."
    ]
  },
  "THC+CBD": {
    level: "safe",
    description: "🌿 CBD kann negative Effekte von THC abmildern (Paranoia, Herzrasen).",
    tips: [
      "🔄 CBD als 'Notbremse' bei zu starkem THC-High.",
      "😴 Kann auch müde machen.",
      "🥤 Viel trinken."
    ]
  },
  "THC+Ritalin": {
    level: "danger",
    description: "😰 Herzrasen, Unruhe und Panik möglich.",
    tips: [
      "⏳ Sehr langsam dosieren.",
      "🧑‍🤝‍🧑 Sitter empfehlenswert.",
      "❤️ Bei Herzproblemen meiden."
    ]
  },
  "THC+1V-LSD": {
    level: "danger",
    description: "🔀 Verstärkung und Verlängerung des LSD-Trips. Mehr optische Effekte, aber auch mehr Angst/Panik möglich.",
    tips: [
      "🔎 Kleine Dosierungen wählen.",
      "🎵 Ruhige Musik/Umgebung.",
      "🧑‍🤝‍🧑 Mit erfahrenem Sitter."
    ]
  },
  "THC+Ketamin": {
    level: "danger",
    description: "🌫️ Verstärkte Dissoziation und Realitätsverlust.",
    tips: [
      "💡 Licht gedimmt, ruhige Umgebung.",
      "🚨 Nicht alleine konsumieren.",
      "📉 Niedrige Dosierung."
    ]
  },
  "THC+MDMA": {
    level: "caution",
    description: "😊 Kann Euphorie, aber auch Angst/Herzrasen verstärken.",
    tips: [
      "🧊 Erst MDMA, dann wenig THC.",
      "🌬️ Bei Unruhe: tief atmen.",
      "🧑‍🤝‍🧑 Nicht alleine."
    ]
  },
  "THC+2C-B": {
    level: "caution",
    description: "🤹‍♂️ Wirkung schwer vorhersehbar – teils 'lustig', teils unangenehm.",
    tips: [
      "🧑‍🤝‍🧑 Nur mit Vertrauten.",
      "🎢 Kleine Dosierung.",
      "🚫 Nicht am Peak kombinieren."
    ]
  },
  "THC+Mirtazapin": {
    level: "caution",
    description: "😪 Kann starke Müdigkeit und Fressflash auslösen.",
    tips: [
      "🛌 Auf Müdigkeit vorbereiten.",
      "🍽️ Vorräte bereithalten.",
      "😴 Nicht bei Arbeit/Fahrten."
    ]
  },
  "THC+Amphetamin": {
    level: "danger",
    description: "💥 Herzrasen, Paranoia und Panik möglich.",
    tips: [
      "❤️ Nicht bei Angsterkrankung.",
      "😌 Nicht allein konsumieren.",
      "🧑‍⚕️ Puls kontrollieren."
    ]
  },
  "THC+Kokain": {
    level: "danger",
    description: "🩺 Kann zu Herzrasen, Unruhe, Kreislaufproblemen führen.",
    tips: [
      "🚨 Nur winzige Dosen.",
      "🧑‍🤝‍🧑 Sitter ratsam.",
      "❌ Bei Unwohlsein abbrechen."
    ]
  },
  "THC+Tramadol": {
    level: "caution",
    description: "😴 Koordinationsprobleme, starke Müdigkeit möglich.",
    tips: [
      "🛏️ Ruhiger Rückzugsort.",
      "🧑‍🤝‍🧑 Nicht allein.",
      "🚗 Kein Fahren/Bedienen von Maschinen."
    ]
  },
  "MDMA+Kokain": {
    level: "deadly",
    description: "☠️ Extrem gefährlich! Herzinfarkt, Überhitzung, Krampfanfall möglich.",
    tips: [
      "❌ Nie kombinieren.",
      "🚑 Notruf bei Symptomen.",
      "🧑‍🤝‍🧑 Sitter, kalte Getränke bereit."
    ]
  },
  "MDMA+Alkohol": {
    level: "caution",
    description: "💦 Beide entwässern stark – Gefahr von Kreislaufkollaps.",
    tips: [
      "💧 Viel Wasser trinken.",
      "🧑‍⚕️ Auf Schwindel/Kopfschmerz achten.",
      "🛑 Kein Nachlegen."
    ]
  },
  "MDMA+Ritalin": {
    level: "danger",
    description: "🔥 Extreme Kreislaufbelastung, Überhitzungs- und Infarktrisiko.",
    tips: [
      "❌ Nicht kombinieren.",
      "🩺 Puls/Körpertemperatur beobachten.",
      "🚑 Bei Beschwerden sofort Hilfe."
    ]
  },
  "MDMA+Ketamin": {
    level: "caution",
    description: "🌀 Wirkt stark sedierend, kann Trip verändern.",
    tips: [
      "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
      "⏳ Dosis gering halten.",
      "🛌 Ruhige Umgebung."
    ]
  },
  "MDMA+2C-B": {
    level: "danger",
    description: "🎢 Sehr intensiver, chaotischer Trip möglich – Herzbelastung, Kontrollverlust.",
    tips: [
      "🔎 Kleine Dosierungen.",
      "🧑‍🤝‍🧑 Sitter ratsam.",
      "🚫 Nicht nachlegen."
    ]
  },
  "MDMA+Mirtazapin": {
    level: "caution",
    description: "⬇️ Mirtazapin schwächt MDMA stark ab.",
    tips: [
      "🧑‍⚕️ Kein Nachlegen.",
      "😶 Trip kann ganz anders ausfallen.",
      "🛑 Keine Erwartung an typisches MDMA-Feeling."
    ]
  },
  "MDMA+Amphetamin": {
    level: "danger",
    description: "❤️ Herzrasen, Überhitzung und Krampfanfälle möglich.",
    tips: [
      "🧑‍⚕️ Nicht kombinieren!",
      "💧 Viel trinken.",
      "🚑 Notruf bei Symptomen."
    ]
  },
  "MDMA+Tramadol": {
    level: "danger",
    description: "⚡ Krampfanfall- und Überhitzungsgefahr.",
    tips: [
      "❌ Nicht kombinieren.",
      "🧑‍⚕️ Sofort Hilfe bei Symptomen.",
      "🛑 Auf Warnsignale achten."
    ]
  },
  "MDMA+GHB": {
    level: "deadly",
    description: "☠️ Atemstillstand und Koma möglich.",
    tips: [
      "🚫 Nie kombinieren.",
      "🚑 Notruf bei Bewusstlosigkeit.",
      "🛑 Lebensgefahr auch bei kleinen Mengen."
    ]
  }
  // Du kannst hier beliebig viele weitere Paare nach dem selben Schema ergänzen!
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
  // Sofortige Anzeige ohne Reload:
  document.getElementById("sub1").onchange = showResult;
  document.getElementById("sub2").onchange = showResult;
};
