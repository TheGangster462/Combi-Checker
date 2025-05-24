const substances = [
  "LSD","Alkohol","THC","MDMA","Ritalin","Mirtazapin","Ketamin","CBD","2C-B","1V-LSD","Diazepam",
  "Tramadol","Kokain","Amphetamin","3-MMC","4-MMC","MDA","6-APB","HHC","GHB","Tilidin","DMT","JWH-018","Mescalin","Benzodiazepine"
];

function kombiKey(a, b) {
  return [a, b].sort().join("+");
}

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
  },
  "LSD+GHB": {
    level: "danger",
    description: "💀 GHB kann LSD-Trips abrupt abbrechen oder zu gefährlichem Kontrollverlust führen.",
    tips: [
      "🚫 Keine Mischung empfohlen.",
      "😵 Überdosierungsgefahr bei beiden Substanzen.",
      "🧑‍🤝‍🧑 Sitter erforderlich."
    ]
  },
  "LSD+Tramadol": {
    level: "danger",
    description: "⚡ Tramadol kann LSD-Wirkung abschwächen, aber auch zu Krampfanfällen beitragen.",
    tips: [
      "❌ Bei Krampfanfällen Notruf wählen.",
      "🧑‍⚕️ Nicht kombinieren bei Epilepsie.",
      "😴 Beide einzeln konsumieren."
    ]
  },
  "LSD+Amphetamin": {
    level: "danger",
    description: "💣 Sehr starke Überstimulation – Angst/Panik, Kreislaufgefahr.",
    tips: [
      "😬 Nicht bei psychischer Instabilität.",
      "🧑‍🤝‍🧑 Sitter dringend empfohlen.",
      "⏳ Besser nicht kombinieren!"
    ]
  },
  "LSD+Kokain": {
    level: "danger",
    description: "⚠️ Unberechenbare Wirkung – erhöhtes Psychoserisiko, Kreislaufprobleme.",
    tips: [
      "🧑‍⚕️ Kein Nachlegen!",
      "💤 Ausreichend Ruhe einplanen.",
      "🚫 Nicht für Einsteiger."
    ]
  },
  "LSD+Tilidin": {
    level: "danger",
    description: "😵 Kann zu starker Sedierung und Kontrollverlust führen.",
    tips: [
      "🛑 Nicht in Kombination konsumieren.",
      "🛏️ Ruhige Umgebung wichtig.",
      "🧑‍🤝‍🧑 Sitter ratsam."
    ]
  },
  "LSD+DMT": {
    level: "danger",
    description: "🚀 Sehr intensive, extrem kurze, aber heftige Erfahrung.",
    tips: [
      "⚠️ Nur für Profis.",
      "🧑‍🤝‍🧑 Nie alleine.",
      "⏳ Viel Zeit zur Erholung."
    ]
  },
  "LSD+Mescalin": {
    level: "danger",
    description: "🌈 Massive psychedelische Synergie. Überwältigend und schwer steuerbar.",
    tips: [
      "👀 Sehr niedrige Dosierung.",
      "🧑‍🤝‍🧑 Trip-Sitter unerlässlich.",
      "🛑 Viel Erholungszeit einkalkulieren."
    ]
  },
  "MDMA+GHB": {
    level: "deadly",
    description: "☠️ Risiko für Atemdepression, Koma und Tod.",
    tips: [
      "❌ Nie gemeinsam konsumieren.",
      "🚑 Sofort Notruf bei Bewusstlosigkeit.",
      "🧑‍🤝‍🧑 Sitter muss nüchtern sein."
    ]
  },
  "MDMA+Tramadol": {
    level: "danger",
    description: "⚡ Krampfanfall- und Überhitzungsgefahr.",
    tips: [
      "❌ Kombination meiden.",
      "🧑‍⚕️ Sofort Hilfe bei Symptomen.",
      "🛑 Auf Warnsignale achten."
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
    description: "💓 Herzrasen, Überhitzung und Krampfanfälle möglich.",
    tips: [
      "🧑‍⚕️ Nicht kombinieren!",
      "💧 Viel trinken.",
      "🚑 Notruf bei Symptomen."
    ]
  },
  "MDMA+1V-LSD": {
    level: "caution",
    description: "🌈 'Candyflip' Feeling. Kann sehr euphorisch, aber auch überfordernd sein.",
    tips: [
      "⭐ Immer niedrige Dosierungen.",
      "🧑‍🤝‍🧑 Niemals alleine nehmen.",
      "💧 Viel Wasser trinken."
    ]
  },
  "MDMA+HHC": {
    level: "caution",
    description: "🌱 Kann Euphorie, aber auch Angst/Herzrasen verstärken. Risiko ähnlich wie THC.",
    tips: [
      "🧊 Erst MDMA, dann wenig HHC.",
      "🧑‍🤝‍🧑 Nicht alleine.",
      "😌 Bei Unruhe: entspannen."
    ]
  },
  "MDMA+Diazepam": {
    level: "caution",
    description: "😴 Kann MDMA-Trip abrupt beenden, aber auch Atemdepression verursachen.",
    tips: [
      "🧑‍⚕️ Diazepam nur bei extremem Bad Trip und unter Aufsicht.",
      "❌ Nicht zur Party kombinieren.",
      "💤 Wirkung stark dämpfend."
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
  "MDMA+Ketamin": {
    level: "caution",
    description: "🌀 Wirkt stark sedierend, kann Trip verändern.",
    tips: [
      "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
      "⏳ Dosis gering halten.",
      "🛌 Ruhige Umgebung."
    ]
  },
  "MDMA+4-MMC": {
    level: "danger",
    description: "⚡ Extreme Stimulation, Herz- und Kreislaufgefahr.",
    tips: [
      "❌ Nicht gemeinsam konsumieren.",
      "🧑‍⚕️ Pulskontrolle.",
      "🚑 Hilfe holen bei Symptomen."
    ]
  },
  "THC+GHB": {
    level: "danger",
    description: "😵 Kann zu sehr starker Sedierung führen, Übelkeit & Blackouts möglich.",
    tips: [
      "🛑 Keine gemeinsame Einnahme.",
      "🧑‍🤝‍🧑 Begleitperson empfehlenswert.",
      "🛏️ Liegenbleiben im Notfall."
    ]
  },
  "THC+Diazepam": {
    level: "caution",
    description: "💤 Wirkt stark beruhigend, aber auch gefährlich sedierend.",
    tips: [
      "🛏️ Nur in ruhiger Umgebung.",
      "🧑‍🤝‍🧑 Sitter ratsam.",
      "❌ Nicht bei Aktivitäten."
    ]
  },
  "THC+4-MMC": {
    level: "caution",
    description: "🌪️ Wirkung kaum vorhersagbar, teils stimulierend, teils sedierend.",
    tips: [
      "⏳ Langsam vorantasten.",
      "🧑‍🤝‍🧑 Nicht alleine.",
      "😌 Sofort bei Unwohlsein abbrechen."
    ]
  },
  "THC+JWH-018": {
    level: "danger",
    description: "⚠️ Synthetisches Cannabinoid (JWH-018) kann mit THC zusammen zu extremen Psychosen führen.",
    tips: [
      "❌ Kombination meiden.",
      "🧑‍🤝‍🧑 Sitter erforderlich.",
      "🚑 Bei starken Nebenwirkungen Hilfe holen."
    ]
  },
  "Ritalin+Alkohol": {
    level: "danger",
    description: "💊🍻 Erhöhtes Risiko für Herzrasen, Kontrollverlust und Suchtverhalten.",
    tips: [
      "⏳ Zeitlich trennen!",
      "🧑‍🤝‍🧑 Sitter ratsam.",
      "🚑 Bei Herzbeschwerden sofort Hilfe."
    ]
  },
  "Ritalin+GHB": {
    level: "danger",
    description: "❗️ Entgegengesetzte Wirkung, starke Belastung für das zentrale Nervensystem.",
    tips: [
      "🧑‍🤝‍🧑 Niemals alleine.",
      "💧 Sehr niedrig dosieren (am besten nicht kombinieren).",
      "🚑 Bei Atemproblemen sofort Notruf."
    ]
  },
  "Ritalin+MDMA": {
    level: "danger",
    description: "🔥 Extreme Kreislaufbelastung, Überhitzungs- und Infarktrisiko.",
    tips: [
      "❌ Nicht kombinieren.",
      "🩺 Puls/Körpertemperatur beobachten.",
      "🚑 Bei Beschwerden sofort Hilfe."
    ]
  },
  "Ritalin+Amphetamin": {
    level: "danger",
    description: "💊💥 Zwei Stimulanzien – sehr hohe Herz- und Suchtgefahr.",
    tips: [
      "⏳ Einzelkonsum bevorzugen.",
      "🧑‍🤝‍🧑 Sitter empfohlen.",
      "🚑 Bei Überhitzung/Kollaps Notruf."
    ]
  },
  "Ritalin+THC": {
    level: "danger",
    description: "😰 Herzrasen, Unruhe und Panik möglich.",
    tips: [
      "⏳ Sehr langsam dosieren.",
      "🧑‍🤝‍🧑 Sitter empfehlenswert.",
      "❤️ Bei Herzproblemen meiden."
    ]
  },

  "3-MMC+Alkohol": {
    level: "danger",
    description: "🍸 Erhöhtes Risiko für Herzrasen, Dehydration und Kontrollverlust.",
    tips: [
      "💧 Viel trinken, aber kein Alkohol nachlegen.",
      "🧑‍🤝‍🧑 Sitter empfehlenswert.",
      "🚑 Bei Unruhe oder Herzproblemen Notruf."
    ]
  },
  "3-MMC+THC": {
    level: "caution",
    description: "😬 Kann Nervosität, Paranoia oder Herzrasen verstärken.",
    tips: [
      "🌬️ Sehr langsam dosieren.",
      "🧑‍🤝‍🧑 Nicht allein konsumieren.",
      "😌 Bei Unruhe: Ruhe bewahren, ablenken."
    ]
  },
  "3-MMC+MDMA": {
    level: "danger",
    description: "💥 Extreme Stimulation, hohe Belastung für Herz und Psyche.",
    tips: [
      "🚫 Nicht gemeinsam konsumieren.",
      "🧑‍🤝‍🧑 Immer Sitter dabei.",
      "🚑 Sofort Hilfe bei Symptomen."
    ]
  },
  "3-MMC+Ketamin": {
    level: "danger",
    description: "🌀 Kann Wirkung sehr verändern – Gefahr von Verwirrtheit, Kreislaufproblemen.",
    tips: [
      "⏳ Nur mit Pausen.",
      "🧑‍🤝‍🧑 Nicht alleine.",
      "🛏️ Ruhiger Rückzugsort."
    ]
  },
  "3-MMC+GHB": {
    level: "deadly",
    description: "☠️ Extreme Belastung für das zentrale Nervensystem, Atemstillstand möglich.",
    tips: [
      "🚫 Niemals kombinieren!",
      "🚑 Notruf bei Bewusstlosigkeit.",
      "🧑‍🤝‍🧑 Sitter MUSS nüchtern sein."
    ]
  },
  "4-MMC+Alkohol": {
    level: "danger",
    description: "🍷 Erhöht Enthemmung und Herzbelastung, Gefahr von Überhitzung und Kontrollverlust.",
    tips: [
      "💧 Viel Wasser trinken.",
      "🧑‍🤝‍🧑 Sitter ratsam.",
      "🚑 Bei Symptomen sofort Hilfe holen."
    ]
  },
  "4-MMC+THC": {
    level: "caution",
    description: "😳 Kann Paranoia oder starke Euphorie verstärken, individuell sehr unterschiedlich.",
    tips: [
      "⚖️ Kleine Dosen.",
      "🧑‍🤝‍🧑 Nie alleine.",
      "🚫 Nicht während Peak kombinieren."
    ]
  },
  "4-MMC+MDMA": {
    level: "danger",
    description: "⚡️ Beide wirken sehr stark stimulierend – hohe Überhitzungs- und Krampfgefahr.",
    tips: [
      "❌ Nie kombinieren.",
      "🧑‍⚕️ Puls und Temperatur überwachen.",
      "🚑 Bei Krämpfen/Herzrasen sofort Notruf."
    ]
  },
  "4-MMC+Ketamin": {
    level: "danger",
    description: "😵 Dissoziation und Überstimulation möglich, Verwirrtheit.",
    tips: [
      "🛏️ Ruhige Umgebung.",
      "🧑‍🤝‍🧑 Nicht allein konsumieren.",
      "⏳ Erst Wirkung einer Substanz abwarten."
    ]
  },
  "4-MMC+GHB": {
    level: "deadly",
    description: "☠️ Lebensgefährliche Kombination – Atemdepression möglich.",
    tips: [
      "🚫 Nie gemeinsam konsumieren.",
      "🚑 Notruf bei Bewusstlosigkeit.",
      "🧑‍🤝‍🧑 Sitter MUSS nüchtern bleiben."
    ]
  },
  "JWH-018+THC": {
    level: "danger",
    description: "🚩 Synthetische Cannabinoide können mit THC zu Psychosen und Kontrollverlust führen.",
    tips: [
      "⚖️ Winzige Dosierung.",
      "🧑‍🤝‍🧑 Niemals alleine.",
      "🚑 Bei Herzrasen, Angst: Hilfe holen."
    ]
  },
  "JWH-018+Alkohol": {
    level: "danger",
    description: "🍶 Gefahr von Blackouts, extremer Übelkeit und Psychosen.",
    tips: [
      "🛏️ Nur zu Hause, nie unterwegs.",
      "🧑‍🤝‍🧑 Sitter ratsam.",
      "🚑 Bei Kollaps oder Atemproblemen sofort Notruf."
    ]
  },
  "JWH-018+CBD": {
    level: "caution",
    description: "🌱 CBD kann die Wirkung von JWH-018 leicht abmildern, aber nicht aufheben.",
    tips: [
      "🧑‍🤝‍🧑 Nicht zu viel konsumieren.",
      "😌 Bei Überdosierung versuchen, zu entspannen.",
      "📞 Hilfe rufen bei starken Symptomen."
    ]
  },
  "JWH-018+MDMA": {
    level: "danger",
    description: "⚠️ Sehr unberechenbar, Gefahr für Kreislauf und Psyche.",
    tips: [
      "🧑‍🤝‍🧑 Sitter unbedingt erforderlich.",
      "🔬 Nie hohe Dosierungen.",
      "🚑 Bei Psychosezeichen Notruf."
    ]
  },
  "HHC+THC": {
    level: "caution",
    description: "🍃 Beide wirken ähnlich, können sich verstärken. Stärkere Sedierung und Verwirrtheit möglich.",
    tips: [
      "⚖️ Kleine Mengen probieren.",
      "🧑‍🤝‍🧑 Nie alleine.",
      "🚑 Hilfe holen bei Kontrollverlust."
    ]
  },
  "HHC+Alkohol": {
    level: "danger",
    description: "🍸 Gesteigerte Müdigkeit, Kontrollverlust, Blackout möglich.",
    tips: [
      "🛏️ Liegenbleiben.",
      "🧑‍🤝‍🧑 Sitter ratsam.",
      "🚑 Bei Atemproblemen sofort Hilfe."
    ]
  },
  "HHC+MDMA": {
    level: "caution",
    description: "😊 Kann Euphorie, aber auch starke Müdigkeit, Übelkeit und Herzrasen auslösen.",
    tips: [
      "🧑‍🤝‍🧑 Nicht alleine.",
      "⚖️ Niedrige Dosis.",
      "🚑 Hilfe bei Problemen."
    ]
  },
  "HHC+CBD": {
    level: "safe",
    description: "🌱 Kann beruhigend wirken, eignet sich zum Herunterkommen.",
    tips: [
      "💤 Nicht zu viel – sonst müde.",
      "🧑‍🤝‍🧑 Sitter hilfreich bei Unsicherheit.",
      "🚗 Kein Auto fahren."
    ]
  },
  "MDA+MDMA": {
    level: "danger",
    description: "🔥 Extreme Stimulation, Gefahr für Herz und Psyche.",
    tips: [
      "🧑‍⚕️ Beide Substanzen einzeln bevorzugen.",
      "💧 Viel trinken.",
      "🚑 Hilfe holen bei Beschwerden."
    ]
  },
  "MDA+2C-B": {
    level: "danger",
    description: "🎢 Sehr intensive psychedelische Erfahrung, kaum steuerbar.",
    tips: [
      "⚖️ Kleine Dosierung.",
      "🧑‍🤝‍🧑 Nie ohne Sitter.",
      "🚑 Hilfe holen bei Kontrollverlust."
    ]
  },
  "DMT+Alkohol": {
    level: "danger",
    description: "😵 Alkohol kann die DMT-Wirkung stark dämpfen oder unberechenbar machen.",
    tips: [
      "🛏️ Nicht kombinieren.",
      "🧑‍🤝‍🧑 Sitter ratsam.",
      "⚠️ Ruhige Umgebung wählen."
    ]
  },
  "DMT+THC": {
    level: "caution",
    description: "🌈 THC kann DMT-Visuals verstärken und die Psyche destabilisieren.",
    tips: [
      "⚖️ Vorsichtig dosieren.",
      "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
      "🎧 Ruhige Musik bereitstellen."
    ]
  },
  "Alkohol+Tramadol": {
  level: "deadly",
  description: "☠️ Krampfanfälle und Atemstillstand möglich – Lebensgefahr!",
  tips: [
    "❌ Nie kombinieren.",
    "🚑 Notarzt rufen bei Problemen.",
    "🛑 Sofort Konsum stoppen bei Symptomen."
  ]
},
"Alkohol+Tilidin": {
  level: "danger",
  description: "😵 Beide Substanzen belasten Atmung und Bewusstsein. Unfallgefahr, Ohnmacht und Atemstillstand möglich.",
  tips: [
    "❌ Kombination meiden.",
    "🧑‍🤝‍🧑 Niemals alleine.",
    "🚑 Notruf bei Bewusstlosigkeit."
  ]
},
"Tramadol+Benzodiazepine": {
  level: "deadly",
  description: "☠️ Stark erhöhte Gefahr für Atemdepression, Koma und Tod.",
  tips: [
    "❌ Nie kombinieren.",
    "🚑 Notarzt rufen bei Bewusstlosigkeit.",
    "🛑 Keine Nachdosierung."
  ]
},
"Tramadol+GHB": {
  level: "deadly",
  description: "☠️ Extrem gefährliche Kombination – beides wirkt atemdepressiv, hohes Risiko für Atemstillstand.",
  tips: [
    "❌ Nicht kombinieren.",
    "🚑 Notruf bei Atemproblemen.",
    "🧑‍🤝‍🧑 Niemals alleine konsumieren."
  ]
},
"Tilidin+Benzodiazepine": {
  level: "deadly",
  description: "☠️ Starke atemdepressive Wirkung möglich, Lebensgefahr.",
  tips: [
    "❌ Kombination meiden.",
    "🧑‍🤝‍🧑 Niemals alleine.",
    "🚑 Sofort Notruf wählen bei Bewusstlosigkeit."
  ]
},
"Tilidin+GHB": {
  level: "deadly",
  description: "☠️ GHB und Tilidin wirken zusammen extrem atemdepressiv. Atemstillstand und Tod möglich.",
  tips: [
    "❌ Nie gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter muss nüchtern sein.",
    "🚑 Notruf bei Problemen."
  ]
},
// Optional weitere Varianten:
"Tramadol+Tilidin": {
  level: "danger",
  description: "⚠️ Zwei Opioide: erhöhtes Risiko für Nebenwirkungen, Atemprobleme und Überdosierung.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Niemals alleine.",
    "🚑 Bei Atemproblemen sofort Notruf."
  ]
},
"Tramadol+MDMA": {
  level: "danger",
  description: "⚡️ Serotonin-Syndrom möglich – stark erhöhtes Risiko für Krampfanfälle.",
  tips: [
    "❌ Kombination vermeiden.",
    "🚑 Notruf bei Fieber, Verwirrtheit, Muskelzucken.",
    "🧑‍🤝‍🧑 Immer mit nüchternem Sitter."
  ]
}
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
