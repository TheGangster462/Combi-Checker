const substances = [
  "LSD","Alkohol","THC","MDMA","Ritalin","Mirtazapin","Ketamin","CBD","2C-B","1V-LSD","Diazepam",
  "Tramadol","Kokain","Amphetamin","3-MMC","4-MMC","MDA","6-APB","HHC","GHB","Tilidin","DMT","JWH-018","Mescalin","Benzodiazepine","Pilze"
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
  "LSD+Pilze": {
  level: "danger",
  description: "🌈 'Hippy Flip': Zwei starke Psychedelika – sehr intensive und kaum steuerbare Wirkung. Gefahr von Überforderung, Kontrollverlust und anhaltenden psychischen Nachwirkungen.",
  tips: [
    "❗ Nur für extrem erfahrene Psychonauten.",
    "🧑‍🤝‍🧑 Trip-Sitter zwingend erforderlich.",
    "⏳ Sehr niedrige Dosierung beider Substanzen.",
    "🛌 Viel Zeit zur Erholung einplanen.",
    "🚑 Bei anhaltender Angst/Psychose: ärztliche Hilfe holen."
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
},
"Benzodiazepine+CBD": {
  level: "caution",
  description: "🌿 Beide wirken entspannend und beruhigend, verstärken sich gegenseitig. Kann starke Müdigkeit und reduzierte Aufmerksamkeit auslösen.",
  tips: [
    "🛏️ Nicht vor Aktivitäten, Autofahren vermeiden.",
    "😴 Mit Müdigkeit rechnen.",
    "🧑‍🤝‍🧑 Sitter ratsam, vor allem bei höheren Dosen."
  ]
},
"Benzodiazepine+DMT": {
  level: "caution",
  description: "🧘‍♂️ Benzodiazepine können einen DMT-Trip abbremsen oder beenden, aber auch für starke Sedierung sorgen.",
  tips: [
    "❌ Nicht zur Verstärkung des Trips einsetzen.",
    "😌 Nur im Ausnahmefall (z.B. Panik) und unter Aufsicht.",
    "🛌 Nach Einnahme: Ruhig bleiben, nicht allein lassen."
  ]
},
"Benzodiazepine+Diazepam": {
  level: "danger",
  description: "💀 Zwei Benzodiazepine zusammen führen zu massiv verstärkter Wirkung. Hohe Gefahr für Blackout, Atemdepression, Gedächtnisverlust.",
  tips: [
    "❌ Nicht kombinieren.",
    "🚑 Bei Bewusstlosigkeit: Notruf.",
    "🧑‍🤝‍🧑 Niemals alleine konsumieren."
  ]
},
"Benzodiazepine+GHB": {
  level: "deadly",
  description: "☠️ Beide wirken stark atemdepressiv und sedierend – Lebensgefahr durch Atemstillstand, Koma und Tod.",
  tips: [
    "❌ Kombination streng vermeiden!",
    "🚑 Notruf bei Bewusstlosigkeit.",
    "🧑‍🤝‍🧑 Sitter MUSS nüchtern sein."
  ]
},
"Benzodiazepine+HHC": {
  level: "caution",
  description: "💤 Kombi kann starke Sedierung, Koordinationsprobleme und Blackouts auslösen.",
  tips: [
    "🛏️ Nicht alleine konsumieren.",
    "😴 Keine Maschinen bedienen/Auto fahren.",
    "🚑 Bei extremer Schläfrigkeit Hilfe holen."
  ]
},
"Benzodiazepine+JWH-018": {
  level: "danger",
  description: "🚩 Unberechenbare Verstärkung von Sedierung und Psychoserisiko, extreme Verwirrtheit und Kontrollverlust möglich.",
  tips: [
    "⚠️ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei starken Nebenwirkungen sofort Hilfe holen."
  ]
},
"Benzodiazepine+Kokain": {
  level: "danger",
  description: "⚡️ Kokain kann angstlösend wirken, aber nach Wirkungseinbruch droht depressive Verstärkung, Kreislaufbelastung und Überdosierungsgefahr.",
  tips: [
    "⏳ Substanzen zeitlich trennen.",
    "🚑 Bei Herzrasen, Atemproblemen Notruf.",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren."
  ]
},
"Benzodiazepine+Ketamin": {
  level: "danger",
  description: "🌫️ Kombination kann zu extremer Sedierung, Gedächtnislücken und Kontrollverlust führen.",
  tips: [
    "🛏️ Nur in sicherem Umfeld.",
    "🧑‍🤝‍🧑 Niemals allein konsumieren.",
    "🚑 Bei Bewusstlosigkeit: Notruf."
  ]
},
"Benzodiazepine+LSD": {
  level: "caution",
  description: "🛑 Benzodiazepine können LSD-Trips stark abschwächen oder beenden, wirken aber stark beruhigend.",
  tips: [
    "😌 Nur zur Notfallberuhigung bei Bad Trip verwenden.",
    "⏳ Nach Einnahme keine weiteren Dosen nehmen.",
    "🧑‍🤝‍🧑 Nie ohne nüchternen Sitter."
  ]
},
"Benzodiazepine+MDA": {
  level: "danger",
  description: "💥 Gefahr für Kreislauf, Sedierung und Blackout – besonders riskant bei Überhitzung oder Dehydrierung.",
  tips: [
    "🚫 Kombination vermeiden.",
    "🧑‍🤝‍🧑 Nie allein konsumieren.",
    "🚑 Notruf bei Bewusstlosigkeit oder Atemnot."
  ]
},
"Benzodiazepine+MDMA": {
  level: "caution",
  description: "😴 Benzodiazepine können MDMA-Trips beenden oder dämpfen, wirken aber stark sedierend.",
  tips: [
    "🔒 Nur bei extremer Unruhe/Bad Trip.",
    "⏳ Keine weiteren Dosen nach Benzo-Einnahme.",
    "🧑‍🤝‍🧑 Sitter empfehlenswert."
  ]
},
"Benzodiazepine+Mescalin": {
  level: "caution",
  description: "🛌 Benzos beenden oder dämpfen den Mescalin-Trip, können zu starker Sedierung führen.",
  tips: [
    "😌 Nur im Notfall einsetzen.",
    "🛏️ Keine weiteren Substanzen nach Benzo-Einnahme.",
    "🧑‍🤝‍🧑 Sitter ratsam."
  ]
},
"Benzodiazepine+Mirtazapin": {
  level: "caution",
  description: "🛏️ Additive sedierende Wirkung – starke Müdigkeit, Konzentrationsstörungen möglich.",
  tips: [
    "😴 Nur zu Hause/in sicherer Umgebung.",
    "🚗 Keine Teilnahme am Straßenverkehr.",
    "🧑‍🤝‍🧑 Sitter hilfreich."
  ]
},
"Benzodiazepine+Ritalin": {
  level: "danger",
  description: "⚡️ Wechsel zwischen Beruhigung und Stimulation kann Kreislauf und Psyche stark belasten.",
  tips: [
    "⏳ Substanzen möglichst zeitlich trennen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Unwohlsein oder Herzproblemen Hilfe holen."
  ]
},
"Benzodiazepine+THC": {
  level: "caution",
  description: "💤 Starke Sedierung, Koordinationsprobleme und Erinnerungslücken möglich.",
  tips: [
    "🛏️ Ruhige Umgebung, nicht allein.",
    "😴 Keine Maschinen/Auto.",
    "🚑 Hilfe holen bei extremer Müdigkeit."
  ]
},
// Tilidin+Benzodiazepine existiert schon
// Tramadol+Benzodiazepine existiert schon
"Benzodiazepine+1V-LSD": {
  level: "caution",
  description: "🛑 Benzodiazepine können die Wirkung von 1V-LSD deutlich abschwächen oder beenden.",
  tips: [
    "😌 Nur bei Bad Trip, niemals zur Verstärkung.",
    "🧑‍🤝‍🧑 Nüchterner Sitter ratsam.",
    "⏳ Nach Einnahme keine weiteren Substanzen."
  ]
},
"Benzodiazepine+2C-B": {
  level: "caution",
  description: "🛌 Benzodiazepine dämpfen 2C-B-Trips, können aber sehr müde und benommen machen.",
  tips: [
    "😌 Nur bei Bedarf (Unruhe/Bad Trip).",
    "🛏️ Nicht allein bleiben.",
    "🚑 Hilfe holen bei Bewusstlosigkeit."
  ]
},
"Benzodiazepine+3-MMC": {
  level: "danger",
  description: "💥 Risiko für Kreislauf, psychische Instabilität, starke Müdigkeit nach Wirkungseinbruch.",
  tips: [
    "⏳ Substanzen trennen, nie gleichzeitig konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Problemen Notruf."
  ]
},
"Benzodiazepine+4-MMC": {
  level: "danger",
  description: "⚡️ Stark unterschiedliche Wirkung – Herz und Psyche werden belastet, Gefahr von Blackout und Kreislaufproblemen.",
  tips: [
    "⏳ Zeitlich trennen, nicht zusammen einnehmen.",
    "🧑‍🤝‍🧑 Niemals allein.",
    "🚑 Bei Herz-/Kreislaufproblemen Notruf."
  ]
},
"Benzodiazepine+6-APB": {
  level: "danger",
  description: "⚡️ Kombination kann zu starker Sedierung, Herzproblemen und Kreislaufversagen führen.",
  tips: [
    "🚫 Kombination vermeiden.",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "🚑 Notruf bei Symptomen."
  ]
},
// GHB-Kombis

"GHB+CBD": {
  level: "caution",
  description: "🌿 CBD und GHB verstärken die sedierende Wirkung. Risiko für starke Müdigkeit, niedrigen Blutdruck und Schwindel.",
  tips: [
    "🛏️ Nur zu Hause/in sicherer Umgebung.",
    "😴 Mit starker Müdigkeit rechnen.",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren."
  ]
},
"GHB+DMT": {
  level: "danger",
  description: "😵 GHB kann die psychedelischen Effekte von DMT abschwächen oder unvorhersehbar verändern. Erhöhtes Risiko für Kontrollverlust und Blackout.",
  tips: [
    "🧑‍🤝‍🧑 Niemals alleine konsumieren.",
    "⏳ Erst die Wirkung einer Substanz abklingen lassen.",
    "🚑 Bei Bewusstlosigkeit sofort Notruf."
  ]
},
"GHB+Diazepam": {
  level: "deadly",
  description: "☠️ Beide wirken extrem atemdepressiv – höchste Lebensgefahr durch Atemstillstand und Koma.",
  tips: [
    "❌ Nie kombinieren.",
    "🚑 Notruf bei Bewusstlosigkeit.",
    "🧑‍🤝‍🧑 Sitter MUSS nüchtern sein."
  ]
},
"GHB+HHC": {
  level: "caution",
  description: "💤 Beide wirken beruhigend und können die Sedierung verstärken. Blackout-Gefahr!",
  tips: [
    "🛏️ Nicht alleine, ruhige Umgebung.",
    "😴 Kein Fahren/Bedienen von Maschinen.",
    "🚑 Bei starker Benommenheit Notruf."
  ]
},
"GHB+JWH-018": {
  level: "danger",
  description: "⚠️ Gefahr von starker Sedierung, Verwirrtheit und Kontrollverlust. Atemstillstand möglich.",
  tips: [
    "🛏️ Nur mit nüchternem Sitter.",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "🚑 Bei Atemnot/Bewusstlosigkeit Notruf."
  ]
},
"GHB+Kokain": {
  level: "danger",
  description: "⚡️ Gegensätzliche Effekte können Kreislauf und Psyche extrem belasten. Nach dem High droht Überdosis-Gefahr von GHB.",
  tips: [
    "⏳ Substanzen zeitlich trennen.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Bei Schwäche, Bewusstlosigkeit sofort Hilfe holen."
  ]
},
"GHB+Ketamin": {
  level: "danger",
  description: "🌫️ Kombination kann zu starker Sedierung, Bewusstlosigkeit und Atemstillstand führen.",
  tips: [
    "🚫 Kombination vermeiden.",
    "🧑‍🤝‍🧑 Nicht allein konsumieren.",
    "🚑 Bei Bewusstlosigkeit: Notruf."
  ]
},
"GHB+LSD": {
  level: "danger",
  description: "💀 GHB kann einen LSD-Trip abrupt abbrechen oder zu starkem Kontrollverlust führen. Gefahr von Blackout und Unfällen.",
  tips: [
    "🚫 Keine Mischung empfohlen.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Bei Bewusstlosigkeit sofort Hilfe holen."
  ]
},
"GHB+MDA": {
  level: "danger",
  description: "⚡️ Herz und Kreislauf werden stark belastet. Risiko für Überhitzung, Atemprobleme und Kontrollverlust.",
  tips: [
    "🧑‍🤝‍🧑 Nie alleine konsumieren.",
    "🚑 Bei Problemen Notruf.",
    "⏳ Besser einzeln konsumieren."
  ]
},
"GHB+MDMA": {
  level: "deadly",
  description: "☠️ Extrem gefährlich – Atemstillstand, Krampfanfälle und Koma möglich.",
  tips: [
    "❌ Niemals kombinieren.",
    "🚑 Notruf bei Bewusstlosigkeit.",
    "🧑‍🤝‍🧑 Sitter MUSS nüchtern sein."
  ]
},
"GHB+Mescalin": {
  level: "danger",
  description: "🛌 GHB kann die psychedelischen Effekte von Mescalin abschwächen, aber die Sedierung massiv verstärken.",
  tips: [
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🛏️ Ruhige Umgebung, keine Aktivitäten.",
    "🚑 Bei Atemnot/Bewusstlosigkeit Notruf."
  ]
},
"GHB+Mirtazapin": {
  level: "danger",
  description: "💤 Verstärkte Müdigkeit, Schwindel und Atemdepression möglich.",
  tips: [
    "🛏️ Nur zu Hause/in sicherem Umfeld.",
    "😴 Keine weiteren sedierenden Substanzen nehmen.",
    "🧑‍🤝‍🧑 Nicht allein bleiben."
  ]
},
"GHB+Ritalin": {
  level: "danger",
  description: "⚡️ Gegensätzliche Wirkung, starke Belastung für Herz/Kreislauf und Psyche.",
  tips: [
    "⏳ Substanzen nicht gleichzeitig einnehmen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Herzrasen, Atemproblemen Notruf."
  ]
},
"GHB+THC": {
  level: "danger",
  description: "😵 Kann zu sehr starker Sedierung, Übelkeit und Kontrollverlust führen.",
  tips: [
    "🧑‍🤝‍🧑 Begleitperson empfehlenswert.",
    "🛏️ Liegenbleiben im Notfall.",
    "🚑 Hilfe holen bei Atemproblemen."
  ]
},
"GHB+1V-LSD": {
  level: "danger",
  description: "💀 GHB kann den Trip von 1V-LSD abrupt beenden oder stark dämpfen. Kontrollverlust und Blackout möglich.",
  tips: [
    "🚫 Nicht kombinieren.",
    "🧑‍🤝‍🧑 Nüchterner Sitter.",
    "🚑 Notruf bei Problemen."
  ]
},
"GHB+2C-B": {
  level: "danger",
  description: "🛌 Beide Substanzen wirken auf das zentrale Nervensystem, verstärkte Sedierung und Kontrollverlust möglich.",
  tips: [
    "🛏️ Nicht alleine konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Bewusstlosigkeit Hilfe holen."
  ]
},
"GHB+3-MMC": {
  level: "danger",
  description: "⚡️ Sehr hohe Belastung für das zentrale Nervensystem, Krampfanfälle und Atemdepression möglich.",
  tips: [
    "🚫 Kombination vermeiden.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Notruf bei Symptomen."
  ]
},
"GHB+4-MMC": {
  level: "danger",
  description: "⚡️ Extrem riskant – Gefahr für Kreislauf, Atemdepression, Kontrollverlust.",
  tips: [
    "🚫 Nicht kombinieren.",
    "🧑‍🤝‍🧑 Niemals allein konsumieren.",
    "🚑 Hilfe bei Problemen sofort rufen."
  ]
},
"GHB+6-APB": {
  level: "danger",
  description: "💣 Kreislauf und Atmung werden massiv belastet – Lebensgefahr bei Überdosierung.",
  tips: [
    "🚫 Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter unbedingt notwendig.",
    "🚑 Bei Atemnot/Bewusstlosigkeit Notruf."
  ]
},
"Amphetamin+Ketamin": {
  level: "danger",
  description: "💥 Die Kombination aus Stimulanz und Dissoziativem kann Kreislauf und Psyche stark belasten. Unvorhersehbare Wirkung, Risiko für Angst und Verwirrung.",
  tips: [
    "🚫 Nicht kombinieren.",
    "🧑‍🤝‍🧑 Nie allein konsumieren.",
    "🚑 Bei Herzrasen oder Verwirrtheit Hilfe holen."
  ]
},
"Benzodiazepine+Ketamin": {
  level: "danger",
  description: "🌫️ Kombination kann zu extremer Sedierung, Gedächtnislücken und Kontrollverlust führen.",
  tips: [
    "🛏️ Nur in sicherem Umfeld.",
    "🧑‍🤝‍🧑 Niemals allein konsumieren.",
    "🚑 Bei Bewusstlosigkeit: Notruf."
  ]
},
"CBD+Ketamin": {
  level: "caution",
  description: "🌱 CBD kann die sedierende Wirkung von Ketamin verstärken, wirkt beruhigend, aber auch verlangsamend.",
  tips: [
    "🛏️ Nur in sicherer Umgebung.",
    "😴 Auf Müdigkeit und verlangsamte Reaktion achten.",
    "🚗 Keine Teilnahme am Straßenverkehr."
  ]
},
"Diazepam+Ketamin": {
  level: "danger",
  description: "💤 Sehr starke Sedierung, Bewusstseinsstörungen und Atemdepression möglich.",
  tips: [
    "🛏️ Nur mit nüchternem Sitter.",
    "❌ Nicht in Kombination ohne medizinische Überwachung.",
    "🚑 Hilfe holen bei Bewusstlosigkeit."
  ]
},
"GHB+Ketamin": {
  level: "deadly",
  description: "☠️ Massive Atemdepression und Bewusstlosigkeit möglich – absolute Lebensgefahr!",
  tips: [
    "❌ Kombination streng vermeiden!",
    "🚑 Notruf bei Bewusstlosigkeit.",
    "🧑‍🤝‍🧑 Sitter MUSS nüchtern sein."
  ]
},
"Ketamin+LSD": {
  level: "danger",
  description: "🌀 Sehr intensive Dissoziation möglich, erhöhtes Psychose-Risiko.",
  tips: [
    "🔬 Nur für sehr erfahrene User.",
    "🏡 Sichere Umgebung!",
    "📅 Viel Erholungszeit einplanen."
  ]
},
"Ketamin+MDMA": {
  level: "caution",
  description: "🌀 Wirkt stark sedierend, kann Trip verändern.",
  tips: [
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "⏳ Dosis gering halten.",
    "🛌 Ruhige Umgebung."
  ]
},
"Ketamin+Mescalin": {
  level: "danger",
  description: "🌈 Verstärkte psychedelische Wirkung, hohe Überforderungs- und Verwirrungsgefahr.",
  tips: [
    "⚖️ Kleine Dosierungen.",
    "🧑‍🤝‍🧑 Immer Sitter dabei.",
    "🚑 Bei Problemen Notruf."
  ]
},
"Ketamin+Mirtazapin": {
  level: "caution",
  description: "😴 Beide Substanzen wirken sedierend, starke Müdigkeit und Konzentrationsstörungen möglich.",
  tips: [
    "🛏️ Nicht allein konsumieren.",
    "😴 Auf Müdigkeit vorbereiten.",
    "🚑 Bei starker Bewusstseinsstörung Notruf."
  ]
},
"Ketamin+Ritalin": {
  level: "danger",
  description: "⚡️ Erhöhtes Risiko für Kreislaufprobleme, Verwirrtheit und unvorhersehbare Wirkung.",
  tips: [
    "⏳ Zeitlich trennen, nie zusammen einnehmen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Herzrasen/Verwirrtheit Hilfe holen."
  ]
},
"Ketamin+THC": {
  level: "danger",
  description: "🌫️ Verstärkte Dissoziation und Realitätsverlust.",
  tips: [
    "💡 Licht gedimmt, ruhige Umgebung.",
    "🚨 Nicht alleine konsumieren.",
    "📉 Niedrige Dosierung."
  ]
},
"Ketamin+Tramadol": {
  level: "danger",
  description: "☠️ Gefahr für Krampfanfälle und verstärkte Sedierung, Atemdepression möglich.",
  tips: [
    "❌ Kombination meiden.",
    "🧑‍🤝‍🧑 Sitter nötig.",
    "🚑 Bei Krampfanfällen/Bewusstlosigkeit sofort Hilfe holen."
  ]
},
"Ketamin+2C-B": {
  level: "danger",
  description: "🧠 Sehr intensive psychedelische Erfahrung, Wirkung schwer steuerbar.",
  tips: [
    "⚖️ Kleine Dosierungen.",
    "🧑‍🤝‍🧑 Trip-Sitter zwingend erforderlich.",
    "🚑 Hilfe holen bei Kontrollverlust."
  ]
},
"Ketamin+Amphetamin": {
  level: "danger",
  description: "💥 Die Kombination aus Stimulanz und Dissoziativem kann Kreislauf und Psyche stark belasten.",
  tips: [
    "🚫 Nicht kombinieren.",
    "🧑‍🤝‍🧑 Nie allein konsumieren.",
    "🚑 Bei Herzrasen/Verwirrtheit Hilfe holen."
  ]
},
"Ketamin+Kokain": {
  level: "danger",
  description: "❗ Beide Substanzen können Herz und Psyche stark belasten – hohe Gefahr für Kreislaufprobleme, Paranoia und Kontrollverlust.",
  tips: [
    "🚫 Kombination vermeiden.",
    "🧑‍🤝‍🧑 Nie allein.",
    "🚑 Hilfe holen bei Beschwerden."
  ]
},
"Ketamin+3-MMC": {
  level: "danger",
  description: "🌀 Kann Wirkung sehr verändern – Gefahr von Verwirrtheit, Kreislaufproblemen.",
  tips: [
    "⏳ Nur mit Pausen.",
    "🧑‍🤝‍🧑 Nicht alleine.",
    "🛏️ Ruhiger Rückzugsort."
  ]
},
"Ketamin+4-MMC": {
  level: "danger",
  description: "😵 Dissoziation und Überstimulation möglich, Verwirrtheit.",
  tips: [
    "🛏️ Ruhige Umgebung.",
    "🧑‍🤝‍🧑 Nicht allein konsumieren.",
    "⏳ Erst Wirkung einer Substanz abwarten."
  ]
},
"Amphetamin+2C-B": {
  level: "danger",
  description: "🎢 Sehr intensive, stimulierende und psychedelische Wirkung. Hohe Gefahr für Überhitzung, Panik, Kreislaufprobleme.",
  tips: [
    "⚖️ Kleine Dosen, Wirkung abwarten.",
    "🧑‍🤝‍🧑 Nie allein konsumieren.",
    "🚑 Bei Schwindel/Herzrasen sofort Hilfe."
  ]
},
"Amphetamin+3-MMC": {
  level: "danger",
  description: "💥 Starke Stimulation, erhöhte Belastung für Herz, Psyche und Kreislauf.",
  tips: [
    "❌ Kombination vermeiden.",
    "🧑‍🤝‍🧑 Sitter empfehlenswert.",
    "🚑 Hilfe holen bei Beschwerden."
  ]
},
"Amphetamin+4-MMC": {
  level: "danger",
  description: "💥 Extrem starke Stimulation – Gefahr von Überhitzung, Krampfanfällen und Psychosen.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍⚕️ Puls und Temperatur kontrollieren.",
    "🚑 Notruf bei Krämpfen oder Kollaps."
  ]
},
"Amphetamin+Alkohol": {
  level: "danger",
  description: "💓 Hohe Belastung für Herz/Kreislauf, Aggressions- und Kontrollverlust-Risiko.",
  tips: [
    "🧑‍⚕️ Puls/Kreislauf beobachten.",
    "🚫 Nicht nachlegen.",
    "🧑‍🤝‍🧑 Begleitperson empfehlenswert."
  ]
},
"Amphetamin+Benzodiazepine": {
  level: "danger",
  description: "⚡️ Wechsel zwischen Beruhigung und Stimulation belastet Herz und Psyche. Nachwirkung oft depressive Verstärkung.",
  tips: [
    "⏳ Zeitlich trennen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Unwohlsein/Herzrasen Hilfe holen."
  ]
},
"Amphetamin+CBD": {
  level: "caution",
  description: "🌱 CBD kann Unruhe und Überstimulation dämpfen, aber auch müde machen. Wirkung individuell.",
  tips: [
    "⚖️ Erst geringe CBD-Dosis probieren.",
    "😴 Auf Müdigkeit vorbereitet sein.",
    "🧑‍🤝‍🧑 Sitter ratsam bei Unsicherheit."
  ]
},
"Amphetamin+Diazepam": {
  level: "danger",
  description: "💤 Diazepam kann Überstimulation abmildern, aber starke Sedierung und Kontrollverlust hervorrufen.",
  tips: [
    "😌 Diazepam nur im Notfall, nicht zur Kombination.",
    "🧑‍🤝‍🧑 Nüchterner Sitter ratsam.",
    "🚑 Bei Bewusstlosigkeit Hilfe holen."
  ]
},
"Amphetamin+GHB": {
  level: "danger",
  description: "☠️ Sehr gefährlich – entgegengesetzte Wirkung, Gefahr von Atemstillstand und Kreislaufproblemen.",
  tips: [
    "❌ Kombination vermeiden.",
    "🧑‍🤝‍🧑 Nie allein konsumieren.",
    "🚑 Notruf bei Atemproblemen."
  ]
},
"Amphetamin+HHC": {
  level: "danger",
  description: "💥 Beide wirken stimulierend – Risiko für Herzrasen, Paranoia und Kreislaufprobleme.",
  tips: [
    "⚖️ Niedrig dosieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Unruhe/Herzrasen abbrechen."
  ]
},
"Amphetamin+JWH-018": {
  level: "danger",
  description: "⚠️ Synthetisches Cannabinoid plus Stimulans: Unberechenbare, oft toxische Effekte.",
  tips: [
    "❌ Kombination meiden.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Hilfe bei Psychose/Kreislaufproblemen."
  ]
},
"Amphetamin+Ketamin": {
  level: "danger",
  description: "💥 Die Kombination aus Stimulanz und Dissoziativem kann Kreislauf und Psyche stark belasten. Unvorhersehbare Wirkung, Risiko für Angst und Verwirrung.",
  tips: [
    "🚫 Nicht kombinieren.",
    "🧑‍🤝‍🧑 Nie allein konsumieren.",
    "🚑 Bei Herzrasen oder Verwirrtheit Hilfe holen."
  ]
},
"Amphetamin+Kokain": {
  level: "deadly",
  description: "☠️ Zwei starke Stimulanzien: Sehr hohes Risiko für Herzinfarkt, Krampfanfälle und Psychose.",
  tips: [
    "❌ Auf keinen Fall kombinieren!",
    "🚑 Sofort Notruf bei Symptomen.",
    "🧑‍🤝‍🧑 Sitter muss nüchtern sein."
  ]
},
"Amphetamin+LSD": {
  level: "danger",
  description: "💣 Sehr starke Überstimulation – Angst/Panik, Kreislaufgefahr.",
  tips: [
    "😬 Nicht bei psychischer Instabilität.",
    "🧑‍🤝‍🧑 Sitter dringend empfohlen.",
    "⏳ Besser nicht kombinieren!"
  ]
},
"Amphetamin+MDMA": {
  level: "danger",
  description: "❤️ Herzrasen, Überhitzung und Krampfanfälle möglich.",
  tips: [
    "🧑‍⚕️ Nicht kombinieren!",
    "💧 Viel trinken.",
    "🚑 Notruf bei Symptomen."
  ]
},
"Amphetamin+Mescalin": {
  level: "danger",
  description: "🌈 Überstimulation plus Psychedelik: Gefahr von Angst, Kontrollverlust und Kreislaufproblemen.",
  tips: [
    "⚖️ Nur sehr erfahrene User.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "🚑 Notruf bei Panik/Kollaps."
  ]
},
"Amphetamin+Mirtazapin": {
  level: "caution",
  description: "😴 Mirtazapin kann Überstimulation abschwächen, macht aber stark müde.",
  tips: [
    "🛏️ Auf Müdigkeit achten.",
    "⏳ Kein weiteres Nachlegen.",
    "🧑‍🤝‍🧑 Sitter hilfreich."
  ]
},
"Amphetamin+Ritalin": {
  level: "danger",
  description: "💊💥 Zwei Stimulanzien – sehr hohe Herz- und Suchtgefahr.",
  tips: [
    "⏳ Einzelkonsum bevorzugen.",
    "🧑‍🤝‍🧑 Sitter empfohlen.",
    "🚑 Bei Überhitzung/Kollaps Notruf."
  ]
},
"Amphetamin+THC": {
  level: "danger",
  description: "💥 Herzrasen, Paranoia und Panik möglich.",
  tips: [
    "❤️ Nicht bei Angsterkrankung.",
    "😌 Nicht allein konsumieren.",
    "🧑‍⚕️ Puls kontrollieren."
  ]
},
"Amphetamin+Tramadol": {
  level: "danger",
  description: "⚡️ Unvorhersehbare Wirkung, Serotonin-Syndrom und Krampfanfälle möglich.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Notruf bei Muskelzucken/Fieber."
  ]
},
"Pilze+Alkohol": {
  level: "danger",
  description: "🍺 Alkohol schwächt die Kontrolle beim Trip, erhöht Angst, Übelkeit und das Risiko für Kontrollverlust.",
  tips: [
    "❗ Kein Alkohol im Peak oder direkt davor.",
    "🧑‍🤝‍🧑 Nur mit nüchternem Sitter.",
    "🚑 Bei Bewusstlosigkeit: Notruf."
  ]
},
"Pilze+THC": {
  level: "caution",
  description: "🍁 THC kann die Wirkung von Pilzen verstärken, aber auch Angst und Paranoia auslösen.",
  tips: [
    "⚖️ Erst nach dem Pilz-Peak testen, kleine Dosis.",
    "😌 Ruhige Umgebung, vertraute Menschen.",
    "🧑‍🤝‍🧑 Sitter hilfreich bei Unsicherheit."
  ]
},
"Pilze+CBD": {
  level: "safe",
  description: "🌿 CBD kann die Intensität des Trips leicht abschwächen und bei Unruhe/Angst helfen.",
  tips: [
    "😌 CBD bei Unruhe als 'Notbremse' möglich.",
    "🧑‍🤝‍🧑 Sitter trotzdem empfehlenswert.",
    "🥤 Viel trinken."
  ]
},
"Pilze+Ketamin": {
  level: "danger",
  description: "🌀 Sehr intensive psychedelisch-dissoziative Erfahrung. Gefahr für Realitätsverlust, Angst und Verwirrtheit.",
  tips: [
    "❗ Nur für sehr erfahrene User.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "⏳ Viel Zeit zur Erholung einplanen."
  ]
},
"Pilze+Benzodiazepine": {
  level: "caution",
  description: "🛑 Benzodiazepine können den Pilz-Trip dämpfen oder beenden, aber auch zu starker Müdigkeit führen.",
  tips: [
    "😌 Nur im Notfall (z. B. Bad Trip).",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "⏳ Nach Einnahme keine weiteren Substanzen."
  ]
},
"Pilze+MDMA": {
  level: "danger",
  description: "🌈 'Hippyflip': Sehr intensive, aber schwer vorhersehbare Kombination. Risiko für emotionale Überforderung.",
  tips: [
    "⚖️ Kleine Dosen beider Substanzen.",
    "🧑‍🤝‍🧑 Sitter unbedingt erforderlich.",
    "🚑 Bei Unruhe/Herzrasen Hilfe holen."
  ]
},
"Pilze+2C-B": {
  level: "danger",
  description: "🎢 Beide sind psychedelisch, Wirkung kaum vorhersehbar. Gefahr von Überforderung und Kontrollverlust.",
  tips: [
    "❗ Sehr vorsichtig dosieren.",
    "🧑‍🤝‍🧑 Trip-Sitter zwingend.",
    "⏳ Genug Zeit für Erholung einplanen."
  ]
},
"Pilze+Mirtazapin": {
  level: "caution",
  description: "😴 Mirtazapin kann den Trip abschwächen oder beenden, macht aber sehr müde.",
  tips: [
    "😌 Nur bei Bad Trip/Unruhe.",
    "🛏️ Ruhige Umgebung.",
    "🧑‍🤝‍🧑 Sitter ratsam."
  ]
},
"Pilze+Ritalin": {
  level: "danger",
  description: "⚡ Starke Kreislaufbelastung, Gefahr von Angst, Herzrasen und Überforderung.",
  tips: [
    "🚫 Kombination vermeiden.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Herzproblemen Notruf."
  ]
},
"Pilze+Tramadol": {
  level: "danger",
  description: "⚡️ Krampfanfälle und starke Sedierung möglich, Trip wird unvorhersehbar.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Nie alleine konsumieren.",
    "🚑 Bei Unwohlsein Notruf."
  ]
},
"Pilze+Amphetamin": {
  level: "danger",
  description: "💣 Extreme Überstimulation – Angst, Kontrollverlust und Kreislaufprobleme möglich.",
  tips: [
    "😬 Nicht bei psychischer Instabilität.",
    "🧑‍🤝‍🧑 Sitter dringend empfohlen.",
    "🚑 Notruf bei Überhitzung/Kollaps."
  ]
},
"Pilze+Kokain": {
  level: "danger",
  description: "⚡️ Unvorhersehbare, oft toxische Wirkung. Gefahr für Kreislauf, Psyche und Überhitzung.",
  tips: [
    "❌ Kombination vermeiden.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Notruf bei Problemen."
  ]
},
"Pilze+GHB": {
  level: "danger",
  description: "💀 Gefahr von Kontrollverlust, starker Sedierung und Blackout.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter muss nüchtern sein.",
    "🚑 Bei Bewusstlosigkeit Notruf."
  ]
},
"Pilze+Mescalin": {
  level: "danger",
  description: "🌈 Zwei Psychedelika – Trip kann extrem intensiv, lang und unvorhersehbar werden.",
  tips: [
    "⚖️ Nur sehr erfahrene Psychonauten.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "⏳ Lange Erholungsphase einplanen."
  ]
},
"Pilze+DMT": {
  level: "danger",
  description: "🚀 Sehr intensive, kaum steuerbare psychedelische Wirkung. Realitätsverlust und Angst möglich.",
  tips: [
    "⚖️ Nur für sehr erfahrene User.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "⏳ Keine weiteren Substanzen nachlegen."
  ]
},
// Alle relevanten Mirtazapin-Kombis im Stil deiner Datenbank:

"LSD+Mirtazapin": {
  level: "caution",
  description: "💤 Mirtazapin kann LSD-Wirkung stark dämpfen oder unberechenbar machen.",
  tips: [
    "❓ Rechne nicht mit 'normalem' LSD-Trip.",
    "⛔ Kein Nachlegen.",
    "😴 Möglich, dass der Trip plötzlich endet."
  ]
},
"Alkohol+Mirtazapin": {
  level: "danger",
  description: "🍷 Beide wirken sedierend. Risiko für Blackouts, Stürze und Atemdepression.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Niemals alleine.",
    "🚑 Notruf bei Bewusstlosigkeit."
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
"MDMA+Mirtazapin": {
  level: "caution",
  description: "⬇️ Mirtazapin schwächt MDMA stark ab.",
  tips: [
    "🧑‍⚕️ Kein Nachlegen.",
    "😶 Trip kann ganz anders ausfallen.",
    "🛑 Keine Erwartung an typisches MDMA-Feeling."
  ]
},
"Ritalin+Mirtazapin": {
  level: "caution",
  description: "⚠️ Wirkung kann sich gegenseitig beeinflussen, Nebenwirkungen schwer vorhersehbar.",
  tips: [
    "⏳ Einzelkonsum bevorzugen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Unwohlsein Hilfe holen."
  ]
},
"Mirtazapin+Ketamin": {
  level: "caution",
  description: "😴 Beide Substanzen wirken sedierend, starke Müdigkeit und Konzentrationsstörungen möglich.",
  tips: [
    "🛏️ Nicht allein konsumieren.",
    "😴 Auf Müdigkeit vorbereiten.",
    "🚑 Bei starker Bewusstseinsstörung Notruf."
  ]
},
"Mirtazapin+CBD": {
  level: "caution",
  description: "🌿 Additive beruhigende Wirkung, kann müde machen.",
  tips: [
    "😴 Mit Müdigkeit rechnen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚗 Kein Fahren nach Einnahme."
  ]
},
"Mirtazapin+2C-B": {
  level: "caution",
  description: "🧪 Wirkung von 2C-B kann abgeschwächt oder verändert werden, starke Müdigkeit möglich.",
  tips: [
    "⏳ Wirkung beobachten.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "😴 Auf Müdigkeit achten."
  ]
},
"Mirtazapin+1V-LSD": {
  level: "caution",
  description: "🧬 Wirkung von 1V-LSD kann abgeschwächt oder unberechenbar verändert werden.",
  tips: [
    "⏳ Wirkung abwarten.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "❌ Kein Nachlegen."
  ]
},
"Mirtazapin+Diazepam": {
  level: "danger",
  description: "💤 Starke Sedierung, Atemdepression möglich – Vorsicht!",
  tips: [
    "❌ Nicht gemeinsam einnehmen.",
    "🧑‍🤝‍🧑 Niemals alleine.",
    "🚑 Hilfe holen bei Bewusstlosigkeit."
  ]
},
"Mirtazapin+Tramadol": {
  level: "danger",
  description: "⚡ Erhöhte Krampfgefahr, starke Sedierung und Wechselwirkungen.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "🚑 Notruf bei Muskelzucken/Bewusstlosigkeit."
  ]
},
"Mirtazapin+Kokain": {
  level: "danger",
  description: "⚠️ Kreislaufbelastung, erhöhte Risiken für Psychosen und Unruhe.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Notruf bei Herzrasen oder starker Unruhe."
  ]
},
"Mirtazapin+Amphetamin": {
  level: "caution",
  description: "😴 Mirtazapin kann Überstimulation abschwächen, macht aber stark müde.",
  tips: [
    "🛏️ Auf Müdigkeit achten.",
    "⏳ Kein weiteres Nachlegen.",
    "🧑‍🤝‍🧑 Sitter hilfreich."
  ]
},
"Mirtazapin+3-MMC": {
  level: "caution",
  description: "⚠️ Wirkung gegenseitig abschwächend oder unberechenbar, starke Müdigkeit möglich.",
  tips: [
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "⏳ Erst Wirkung abwarten.",
    "😴 Keine weiteren Dosen."
  ]
},
"Mirtazapin+4-MMC": {
  level: "caution",
  description: "⚠️ Wirkung gegenseitig abschwächend, verstärkte Nebenwirkungen möglich.",
  tips: [
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "⏳ Wirkung einzeln testen.",
    "🚑 Bei Unwohlsein sofort Hilfe holen."
  ]
},
"Mirtazapin+MDA": {
  level: "caution",
  description: "⬇️ Mirtazapin dämpft MDA, starke Müdigkeit möglich.",
  tips: [
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "😴 Auf starke Sedierung achten.",
    "🛑 Kein Nachlegen."
  ]
},
"Mirtazapin+6-APB": {
  level: "caution",
  description: "⚠️ Wirkung kann sich abschwächen, Müdigkeit und Kreislaufprobleme möglich.",
  tips: [
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "⏳ Wirkung beobachten.",
    "🚑 Bei Problemen Hilfe holen."
  ]
},
"Mirtazapin+HHC": {
  level: "caution",
  description: "😪 Verstärkte Müdigkeit und Fressflash möglich.",
  tips: [
    "🍽️ Vorräte bereithalten.",
    "🛌 Nur in sicherer Umgebung.",
    "😴 Kein Fahren/Bedienen von Maschinen."
  ]
},
"Mirtazapin+GHB": {
  level: "danger",
  description: "💤 Verstärkte Müdigkeit, Schwindel und Atemdepression möglich.",
  tips: [
    "🛏️ Nur zu Hause/in sicherem Umfeld.",
    "😴 Keine weiteren sedierenden Substanzen nehmen.",
    "🧑‍🤝‍🧑 Nicht allein bleiben."
  ]
},
"Mirtazapin+Tilidin": {
  level: "danger",
  description: "💤 Sedierung und Atemdepression verstärkt, Risiko für Ohnmacht und Sturz.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Hilfe holen bei Bewusstlosigkeit."
  ]
},
"Mirtazapin+DMT": {
  level: "caution",
  description: "⬇️ Dämpft oft die psychedelische Wirkung, macht aber müde und kann verwirren.",
  tips: [
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "⏳ Wirkung abwarten.",
    "🛏️ Ruhige Umgebung."
  ]
},
"Mirtazapin+JWH-018": {
  level: "danger",
  description: "⚠️ Extrem sedierend, Verwirrung und Blackout möglich.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Niemals alleine.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"Mirtazapin+Mescalin": {
  level: "caution",
  description: "⬇️ Psychedelische Wirkung kann abgeschwächt werden, starke Müdigkeit möglich.",
  tips: [
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "⏳ Wirkung abwarten.",
    "😴 Keine weiteren Dosen nachlegen."
  ]
},
"Mirtazapin+Benzodiazepine": {
  level: "caution",
  description: "🛏️ Additive sedierende Wirkung – starke Müdigkeit, Konzentrationsstörungen möglich.",
  tips: [
    "😴 Nur zu Hause/in sicherer Umgebung.",
    "🚗 Keine Teilnahme am Straßenverkehr.",
    "🧑‍🤝‍🧑 Sitter hilfreich."
  ]
},
"Mirtazapin+Pilze": {
  level: "caution",
  description: "😴 Mirtazapin kann den Trip abschwächen oder beenden, macht aber sehr müde.",
  tips: [
    "😌 Nur bei Bad Trip/Unruhe.",
    "🛏️ Ruhige Umgebung.",
    "🧑‍🤝‍🧑 Sitter ratsam."
  ]
},

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
