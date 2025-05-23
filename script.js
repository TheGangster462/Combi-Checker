const substances = [
  "LSD","Alkohol","THC","MDMA","Ritalin","Mirtazapin","Ketamin","CBD","2C-B","1V-LSD","Diazepam",
  "Tramadol","Kokain","Amphetamin","3-MMC","4-MMC","MDA","6-APB","HHC","GHB","Tilidin","DMT","JWH-018","Mescalin"
];

const kombis = {
  "LSD+Alkohol": {level:"danger",description:"LSD und Alkohol können psychische Instabilität und Kontrollverlust auslösen.",tips:["Nie alleine konsumieren.","Alkohol erst nach dem Trip, nie im Peak.","Set & Setting beachten."]},
  "LSD+THC": {level:"danger",description:"THC verstärkt LSD-Trips oft enorm (Angst, Panik, Kontrollverlust möglich).",tips:["THC erst nach dem LSD-Peak (wenn überhaupt).","Dosis vorsichtig wählen.","Bei Unruhe: ablenken, beruhigen, Musik hören."]},
  "LSD+MDMA": {level:"caution",description:"Candyflip: Euphorisch, aber riskant, Kreislauf- und Psychoserisiko.",tips:["Niedrig dosieren.","Nicht alleine nehmen.","Auf Herzbelastung achten."]},
  "LSD+Ketamin": {level:"danger",description:"Sehr intensive Dissoziation möglich. Psychose-Risiko erhöht.",tips:["Nur erfahrene User.","Nicht in unsicherer Umgebung.","Dosis streng kontrollieren."]},
  "LSD+2C-B": {level:"danger",description:"Starke psychedelische Synergie, aber kaum vorhersagbar. Psychosen möglich.",tips:["Niedrig dosieren.","Trip-Sitter dabei haben.","Erholungszeit einplanen."]},
  "LSD+Mirtazapin": {level:"caution",description:"Mirtazapin kann LSD-Wirkung dämpfen oder unberechenbar machen.",tips:["Auf veränderte Wirkung achten.","Kein Nachlegen.","Keine Erwartung an typischen LSD-Trip."]},
  "LSD+Ritalin": {level:"danger",description:"Erhöhtes Risiko für Angst, Herzrasen und Kontrollverlust.",tips:["Niedrig dosieren.","Nicht kombinieren bei Herzproblemen.","Nicht ohne Sitter."]},
  "Alkohol+THC": {level:"danger",description:"Kann starke Übelkeit („Greening Out“), Schwindel und Kontrollverlust auslösen.",tips:["Wenig THC nach Alkohol, nie umgekehrt.","Sicheren Rückzugsort vorbereiten.","Langsam dosieren."]},
  "Alkohol+GHB": {level:"deadly",description:"Höchste Lebensgefahr! Atemstillstand und Tod möglich.",tips:["Kombination absolut meiden.","Notruf wählen bei Atemaussetzern.","Nicht experimentieren!"]},
  "Alkohol+Benzodiazepine": {level:"deadly",description:"Beides wirkt atemdepressiv – Lebensgefahr!",tips:["Niemals mischen.","Notruf wählen bei Bewusstlosigkeit.","Unbedingt Abstand halten!"]},
  "Alkohol+Ketamin": {level:"danger",description:"Kombination verstärkt Koordinationsstörungen, Unfall- und Erstickungsgefahr.",tips:["Nur eine Substanz pro Session.","Nicht bei Vorerkrankungen.","Auf Freunde achten lassen."]},
  "Alkohol+MDMA": {level:"caution",description:"Alkohol entzieht Wasser, MDMA entwässert – starke Belastung für Kreislauf und Organe.",tips:["Sehr viel Wasser trinken.","Nicht exzessiv konsumieren.","Herz/Kreislauf auf Symptome achten."]},
  "Alkohol+Kokain": {level:"danger",description:"Bildet im Körper das besonders toxische „Cocaethylen“ – erhöhtes Herzinfarkt- und Krampfrisiko.",tips:["Kombi möglichst vermeiden.","Kleine Dosen, nicht nachlegen.","Blutdruck überwachen."]},
  "Alkohol+2C-B": {level:"danger",description:"Verstärkte Wahrnehmungsverzerrung, Übelkeit und Kontrollverlust möglich.",tips:["Langsam dosieren.","Nicht in der Öffentlichkeit.","Sichere Umgebung."]},
  "Alkohol+Amphetamin": {level:"danger",description:"Erhöht das Risiko für Herzüberlastung, Aggression und Kontrollverlust.",tips:["Beides nie hoch dosieren.","Nicht nachlegen.","Auf Kreislaufprobleme achten."]},
  "Alkohol+Tramadol": {level:"deadly",description:"Atemdepression, Krampfanfälle, Lebensgefahr.",tips:["Nie kombinieren.","Bei Atemproblemen Notruf wählen.","Nicht experimentieren."]},
  "Alkohol+MDPV": {level:"deadly",description:"Beide Stoffe extrem toxisch für Leber, Herz und Psyche.",tips:["Niemals kombinieren.","Sofort Hilfe holen bei Symptomen.","Kein Nachlegen!"]},
  "THC+CBD": {level:"safe",description:"CBD kann unangenehme Wirkungen von THC dämpfen.",tips:["CBD als „Notbremse“ bei Überdosierung von THC.","Vorsicht: hohe CBD-Dosen können auch müde machen."]},
  "THC+Ritalin": {level:"danger",description:"Herzrasen, Panik und starke Unruhe möglich.",tips:["Nur in sehr niedriger Dosierung testen.","Nicht bei Herzproblemen.","Bei Panik: Ruhe bewahren, Wasser trinken."]},
  "THC+1V-LSD": {level:"danger",description:"Verstärkung und Verlängerung des LSD-Trips möglich, mit Risiken für Psyche.",tips:["Niedrige Dosierung wählen.","Nie zum Trip-Ende nachlegen.","Set & Setting beachten."]},
  "THC+Ketamin": {level:"danger",description:"Kann Dissoziation und Realitätsverlust verstärken.",tips:["Langsam und einzeln dosieren.","Auf sichere Umgebung achten.","Nicht alleine konsumieren."]},
  "THC+MDMA": {level:"caution",description:"Kann Euphorie, aber auch Angst und Herzrasen verstärken.",tips:["Erst MDMA, später optional sehr wenig THC.","Nie bei psychischer Instabilität.","Nicht nachlegen."]},
  "THC+2C-B": {level:"caution",description:"Kann Wirkung intensivieren, manchmal „lustig“, aber schwer vorhersagbar.",tips:["Wenig THC und nicht am Peak.","Ungewohnte Wahrnehmungen möglich.","Nicht in Öffentlichkeit testen."]},
  "THC+Mirtazapin": {level:"caution",description:"Kann starke Müdigkeit, Hunger und Sedierung hervorrufen.",tips:["Nicht bei Antriebslosigkeit kombinieren.","Nicht bei Fahrten/Beruf.","Sicheren Rückzugsort wählen."]},
  "THC+Amphetamin": {level:"danger",description:"Kann Herzrasen, Angst, Paranoia auslösen.",tips:["Niedrige Dosierung, möglichst nicht mischen.","Nicht bei Angstneigung.","Puls kontrollieren."]},
  "THC+Kokain": {level:"danger",description:"Kann Panik, Unruhe und Kreislaufprobleme auslösen.",tips:["Sehr vorsichtig dosieren.","Nicht kombinieren, wenn bereits Herzrasen.","Nüchterne Begleitperson ratsam."]},
  "THC+Tramadol": {level:"caution",description:"Kann Schläfrigkeit und Koordinationsprobleme verstärken.",tips:["Langsam dosieren.","Nicht im Alltag.","Auf Überdosis achten."]},
  "MDMA+Kokain": {level:"deadly",description:"Extreme Belastung für Herz und Kreislauf, Gefahr für Infarkt und Schlaganfall.",tips:["Kombination strikt meiden.","Bei Symptomen sofort Notarzt rufen.","Nicht nachlegen!"]},
  "MDMA+Alkohol": {level:"caution",description:"Erhöhtes Risiko für Dehydration und Kreislaufprobleme.",tips:["Viel Wasser trinken.","Nicht nachlegen.","Auf Kreislaufsymptome achten."]},
  "MDMA+Ritalin": {level:"danger",description:"Kombiniert starke Stimulanzien – Risiko für Herzprobleme und Überhitzung.",tips:["Nicht kombinieren!","Nur eine Substanz pro Session.","Notarzt rufen bei Unwohlsein."]},
  "MDMA+Ketamin": {level:"caution",description:"Kann Wirkung stark verändern und sedieren.",tips:["Sehr vorsichtig dosieren.","Nicht alleine konsumieren.","Erst Ketamin nach MDMA, nie umgekehrt."]},
  "MDMA+2C-B": {level:"danger",description:"Sehr intensive, aber oft chaotische Trips. Herzbelastung, Kontrollverlust.",tips:["Niedrige Dosierung.","Nie nachlegen.","Sitter empfehlenswert."]},
  "MDMA+Mirtazapin": {level:"caution",description:"Mirtazapin schwächt MDMA-Wirkung und kann sie verzerren.",tips:["Nicht spontan absetzen.","Erwarte keine typische MDMA-Wirkung.","Keine zusätzliche Dosis."]},
  "MDMA+Amphetamin": {level:"danger",description:"Erhöht das Risiko für Herz-Kreislauf-Komplikationen.",tips:["Niedrige Dosis, nicht kombinieren.","Nie nachlegen.","Blutdruck kontrollieren."]},
  "MDMA+Tramadol": {level:"danger",description:"Krampfanfall- und Überhitzungsgefahr.",tips:["Nicht kombinieren.","Sofort Notarzt bei Symptomen.","Auf Warnsignale achten."]},
  "MDMA+GHB": {level:"deadly",description:"Lebensgefährlich – Atemstillstand und Koma möglich.",tips:["Nie kombinieren.","Sofort Notruf bei Bewusstlosigkeit.","Vorsicht bei Überdosierung!"]}
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
