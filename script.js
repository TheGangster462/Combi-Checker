const substances = [
  "LSD","Alkohol","THC","MDMA","Ritalin","Mirtazapin","Ketamin","CBD","2C-B","1V-LSD","Diazepam",
  "Tramadol","Kokain","Amphetamin","3-MMC","4-MMC","MDA","6-APB","HHC","GHB","Tilidin","DMT","JWH-018","Mescalin","Benzodiazepine","Pilze","O-DSMT","Kratom","Methamphetamin","Salvia divinorum",
  "Methadon"
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
// Kombinationen einer Substanz mit sich selbst

"LSD+LSD": {
  level: "danger",
  description: "⚠️ Nachlegen von LSD während eines Trips erhöht das Risiko für Überforderung, Panik, psychische Langzeitfolgen und einen sehr langen, anstrengenden Trip.",
  tips: [
    "❌ Kein Nachlegen während eines aktiven Trips.",
    "🧑‍🤝‍🧑 Immer nüchterner Sitter empfohlen.",
    "⏳ Wirkdauer und Intensität steigen unkontrollierbar an."
  ]
},
"Alkohol+Alkohol": {
  level: "danger",
  description: "🍻 Wiederholter Alkoholkonsum steigert das Risiko für Alkoholintoxikation, Blackout, Erbrechen und Atemdepression.",
  tips: [
    "🧑‍🤝‍🧑 Trinkpausen einhalten, Wasser zwischendurch trinken.",
    "⏳ Auf erste Warnzeichen achten (Schwindel, Übelkeit, Gedächtnislücken).",
    "🚑 Bei Bewusstlosigkeit sofort Notruf."
  ]
},
"THC+THC": {
  level: "caution",
  description: "🌿 Nachlegen von THC kann zu Angst, Paranoia, Kreislaufproblemen, starker Müdigkeit oder Fressflash führen.",
  tips: [
    "⏳ Wirkung abwarten, bevor nachgelegt wird.",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "🥤 Viel trinken, auf sich achten."
  ]
},
"MDMA+MDMA": {
  level: "deadly",
  description: "☠️ Nachlegen von MDMA erhöht das Risiko für Überhitzung, Serotoninsyndrom, Kreislaufkollaps und dauerhafte Nervenschäden massiv.",
  tips: [
    "❌ Kein Nachlegen (Redosing) von MDMA – Lebensgefahr!",
    "💧 Auf ausreichend Flüssigkeit achten, aber nicht übertreiben.",
    "🚑 Bei Schwindel, Krämpfen, Verwirrung oder Überhitzung sofort Notruf."
  ]
},
"Ritalin+Ritalin": {
  level: "danger",
  description: "💊 Erhöhtes Risiko für Herzrasen, Angst, Überreizung, Schlaflosigkeit und psychotische Symptome.",
  tips: [
    "⏳ Auf Wirkung warten, nicht nachlegen.",
    "🧑‍🤝‍🧑 Sitter ratsam bei hohen Dosen.",
    "🚑 Hilfe holen bei starken Nebenwirkungen."
  ]
},
"Mirtazapin+Mirtazapin": {
  level: "danger",
  description: "💤 Zu hohe Dosen führen zu extremer Sedierung, Verwirrtheit, Atemdepression und Kreislaufproblemen.",
  tips: [
    "❌ Niemals eigenständig die Dosis erhöhen!",
    "😴 Nicht in Kombination mit anderen Sedativa.",
    "🚑 Notruf bei Bewusstlosigkeit oder starker Benommenheit."
  ]
},
"Ketamin+Ketamin": {
  level: "danger",
  description: "🌀 Mehrfachdosen führen schnell zu Kontrollverlust, Blackout, Atemproblemen und starker Dissoziation.",
  tips: [
    "⏳ Immer Wirkung abwarten, nicht nachlegen.",
    "🧑‍🤝‍🧑 Sitter zwingend erforderlich.",
    "🚑 Notruf bei Atemnot oder Bewusstlosigkeit."
  ]
},
"CBD+CBD": {
  level: "safe",
  description: "🌱 Sehr hohe Dosen CBD können starke Müdigkeit und niedrigen Blutdruck verursachen, sind aber selten gefährlich.",
  tips: [
    "😴 Bei starker Müdigkeit keine Maschinen bedienen.",
    "🥤 Viel trinken.",
    "🚗 Kein Autofahren bei Schwindel."
  ]
},
"2C-B+2C-B": {
  level: "danger",
  description: "🧠 Nachlegen von 2C-B kann zu Überforderung, Angst, Kreislaufproblemen und Kontrollverlust führen.",
  tips: [
    "⏳ Wirkung vollständig abwarten.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei starken Nebenwirkungen."
  ]
},
"1V-LSD+1V-LSD": {
  level: "danger",
  description: "⚠️ Nachlegen von 1V-LSD kann die Intensität und Dauer des Trips unkontrollierbar steigern.",
  tips: [
    "❌ Kein Nachlegen während des Trips.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Kontrollverlust."
  ]
},
"Diazepam+Diazepam": {
  level: "deadly",
  description: "☠️ Überdosierung kann zu extremer Sedierung, Gedächtnisverlust, Atemdepression und Tod führen.",
  tips: [
    "❌ Dosis nie eigenständig erhöhen.",
    "🧑‍🤝‍🧑 Nie alleine konsumieren.",
    "🚑 Bei Bewusstlosigkeit oder Atemproblemen sofort Notruf."
  ]
},
"Tramadol+Tramadol": {
  level: "deadly",
  description: "☠️ Zu hohe Dosen verursachen Krampfanfälle, Atemstillstand und schwere Vergiftungen.",
  tips: [
    "❌ Keine Nachdosierung.",
    "🚑 Bei Krämpfen oder Bewusstlosigkeit sofort Notruf.",
    "🧑‍🤝‍🧑 Sitter ratsam."
  ]
},
"Kokain+Kokain": {
  level: "deadly",
  description: "☠️ Wiederholtes Nachlegen extrem gefährlich – Risiko für Herzinfarkt, Krämpfe, Psychose und plötzlichen Tod.",
  tips: [
    "❌ Kein Redosing.",
    "🚑 Hilfe holen bei Brustschmerzen, Unruhe, Krämpfen.",
    "🧑‍🤝‍🧑 Nie allein konsumieren."
  ]
},
"Amphetamin+Amphetamin": {
  level: "deadly",
  description: "☠️ Nachlegen erhöht massiv das Risiko für Kreislaufversagen, Psychosen und Organversagen.",
  tips: [
    "❌ Kein Redosing.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Herzrasen, Krämpfen oder Verwirrtheit."
  ]
},
"3-MMC+3-MMC": {
  level: "danger",
  description: "💥 Nachlegen kann zu sehr starker Überreizung, Angst, Kreislaufproblemen und Psychosen führen.",
  tips: [
    "⏳ Wirkung abwarten, nicht nachlegen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Nebenwirkungen."
  ]
},
"4-MMC+4-MMC": {
  level: "deadly",
  description: "☠️ Sehr hohes Risiko für Überhitzung, Krampfanfälle, Herzinfarkt und Psychosen.",
  tips: [
    "❌ Kein Redosing.",
    "🚑 Hilfe holen bei Problemen.",
    "🧑‍🤝‍🧑 Nie alleine konsumieren."
  ]
},
"MDA+MDA": {
  level: "deadly",
  description: "☠️ Doppelte Dosis bedeutet extrem hohe Belastung für Herz und Psyche, Gefahr für Überhitzung und Serotoninsyndrom.",
  tips: [
    "❌ Kein Nachlegen.",
    "🚑 Notruf bei Überhitzung, Krämpfen, Verwirrtheit.",
    "🧑‍🤝‍🧑 Nie alleine konsumieren."
  ]
},
"6-APB+6-APB": {
  level: "danger",
  description: "💥 Nachlegen erhöht Risiko für Überhitzung, Angst, Kreislaufprobleme und Serotoninsyndrom.",
  tips: [
    "❌ Kein Redosing.",
    "🚑 Hilfe holen bei Nebenwirkungen.",
    "🧑‍🤝‍🧑 Sitter ratsam."
  ]
},
"HHC+HHC": {
  level: "caution",
  description: "🍃 Nachlegen kann Müdigkeit, Verwirrtheit und Kreislaufprobleme verstärken.",
  tips: [
    "⏳ Wirkung abwarten, nicht nachlegen.",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "🚗 Kein Autofahren."
  ]
},
"GHB+GHB": {
  level: "deadly",
  description: "☠️ Nachlegen kann zu Atemdepression, Koma und Tod führen – Gefahr eines 'GHB-Lochs' (Blackout)!",
  tips: [
    "❌ Kein Nachlegen.",
    "🧑‍🤝‍🧑 Sitter MUSS nüchtern sein.",
    "🚑 Notruf bei Bewusstlosigkeit."
  ]
},
"Tilidin+Tilidin": {
  level: "deadly",
  description: "☠️ Nachdosierung erhöht das Risiko für Atemdepression, Bewusstlosigkeit und Tod.",
  tips: [
    "❌ Kein Redosing.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Notruf bei Bewusstlosigkeit."
  ]
},
"DMT+DMT": {
  level: "danger",
  description: "🚀 Mehrere Dosen hintereinander verstärken die psychedelische Wirkung, können aber zu extremer Verwirrung und Kontrollverlust führen.",
  tips: [
    "⏳ Immer Pause zwischen den Dosen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Kontrollverlust."
  ]
},
"JWH-018+JWH-018": {
  level: "danger",
  description: "🚩 Nachlegen von synthetischen Cannabinoiden kann zu Psychosen, Krämpfen und schweren Vergiftungen führen.",
  tips: [
    "❌ Kein Nachlegen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei schweren Nebenwirkungen."
  ]
},
"Mescalin+Mescalin": {
  level: "danger",
  description: "🌈 Mehrfachdosen können zu extrem langen und intensiven Trips, Überforderung und Kreislaufproblemen führen.",
  tips: [
    "❌ Kein Nachlegen.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "🚑 Hilfe holen bei Überforderung."
  ]
},
"Benzodiazepine+Benzodiazepine": {
  level: "deadly",
  description: "☠️ Überdosis führt schnell zu Atemstillstand, Koma und Tod.",
  tips: [
    "❌ Keine Mehrfachdosierung.",
    "🚑 Bei Bewusstlosigkeit/fehlender Atmung sofort Notruf.",
    "🧑‍🤝‍🧑 Nie alleine konsumieren."
  ]
},
"Pilze+Pilze": {
  level: "danger",
  description: "🍄 Nachlegen von Pilzen während eines Trips verstärkt Intensität und Dauer enorm – Risiko für Kontrollverlust, Angst und langanhaltende Nachwirkungen.",
  tips: [
    "❌ Kein Nachlegen während des Peaks.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Überforderung/Psychose."
  ]
},
"O-DSMT+O-DSMT": {
  level: "deadly",
  description: "☠️ Wiederholte Einnahme oder zu hohe Dosis von O-DSMT führt sehr leicht zu extremer Atemdepression, Bewusstlosigkeit und Tod.",
  tips: [
    "❌ Kein Nachlegen – höchste Lebensgefahr.",
    "🧑‍🤝‍🧑 Nie alleine konsumieren.",
    "🚑 Bei Bewusstlosigkeit/Atemproblemen: Notruf!"
  ]
},
"O-DSMT+Benzodiazepine": {
  level: "deadly",
  description: "☠️ Beide wirken stark atemdepressiv und sedierend – höchste Lebensgefahr durch Atemstillstand und Koma.",
  tips: [
    "❌ Niemals kombinieren.",
    "🧑‍🤝‍🧑 Sitter MUSS nüchtern sein.",
    "🚑 Notruf bei Bewusstlosigkeit!"
  ]
},
"O-DSMT+Alkohol": {
  level: "deadly",
  description: "☠️ Alkohol verstärkt die atemdepressive Wirkung von O-DSMT massiv – Atemstillstand und Koma möglich.",
  tips: [
    "❌ Nie gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Immer Sitter dabei.",
    "🚑 Bei Atemproblemen/Bewusstlosigkeit sofort Notruf."
  ]
},
"O-DSMT+GHB": {
  level: "deadly",
  description: "☠️ Beides sind ZNS-dämpfende Substanzen – Atemdepression und Tod sehr wahrscheinlich.",
  tips: [
    "❌ Nie gemeinsam einnehmen.",
    "🧑‍🤝‍🧑 Sitter MUSS nüchtern sein.",
    "🚑 Notruf bei Problemen."
  ]
},
"O-DSMT+Tramadol": {
  level: "danger",
  description: "⚠️ Zwei Opioide: sehr hohes Risiko für Atemdepression, Überdosierung und schwere Nebenwirkungen.",
  tips: [
    "❌ Kombination meiden.",
    "🧑‍🤝‍🧑 Nie allein konsumieren.",
    "🚑 Bei Atemnot sofort Notruf."
  ]
},
"O-DSMT+Tilidin": {
  level: "danger",
  description: "⚠️ Beide sind Opioide – Gefahr für Atemdepression und starke Sedierung.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Hilfe holen bei Bewusstlosigkeit."
  ]
},
"O-DSMT+MDMA": {
  level: "danger",
  description: "⚡ Erhöhtes Risiko für Atemdepression, Kreislaufprobleme und Serotoninsyndrom.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Unruhe, Krämpfen, Atemnot."
  ]
},
"O-DSMT+THC": {
  level: "danger",
  description: "🌫️ Verstärkte Müdigkeit, Übelkeit, Schwindel und Unfallgefahr.",
  tips: [
    "🧑‍🤝‍🧑 Nie allein konsumieren.",
    "🛏️ Ruhige Umgebung.",
    "🚑 Hilfe holen bei starker Schläfrigkeit/Atemnot."
  ]
},
"O-DSMT+Ketamin": {
  level: "danger",
  description: "💤 Beide sedierend – Gefahr von Bewusstlosigkeit und Atemdepression.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"O-DSMT+Mirtazapin": {
  level: "danger",
  description: "💤 Beide machen stark müde und erhöhen das Risiko für Kreislaufprobleme, Schwindel und Atemdepression.",
  tips: [
    "❌ Kombination meiden.",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "🚑 Hilfe holen bei Bewusstlosigkeit."
  ]
},
"O-DSMT+CBD": {
  level: "caution",
  description: "🌱 Additive beruhigende Wirkung, kann Müdigkeit und niedrigen Blutdruck verstärken.",
  tips: [
    "😴 Mit starker Müdigkeit rechnen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚗 Kein Fahren nach Einnahme."
  ]
},
// Optional weitere Kombis:
"O-DSMT+Amphetamin": {
  level: "danger",
  description: "💥 Unvorhersehbare Wechselwirkung zwischen Stimulation und Sedierung – Risiko für Herzprobleme, Kreislaufversagen und Verwirrtheit.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Beschwerden."
  ]
},
"O-DSMT+Kokain": {
  level: "danger",
  description: "⚡ Kombination aus Opioid und Stimulans belastet Herz und Kreislauf stark, Gefahr für Überdosis nach Wirkungseinbruch.",
  tips: [
    "⏳ Substanzen nicht gleichzeitig konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"Tilidin+Alkohol": {
  level: "danger",
  description: "😵 Beide Substanzen belasten Atmung und Bewusstsein. Unfallgefahr, Ohnmacht und Atemstillstand möglich.",
  tips: [
    "❌ Kombination meiden.",
    "🧑‍🤝‍🧑 Niemals alleine.",
    "🚑 Notruf bei Bewusstlosigkeit."
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
"Tilidin+Tramadol": {
  level: "danger",
  description: "⚠️ Zwei Opioide: erhöhtes Risiko für Nebenwirkungen, Atemprobleme und Überdosierung.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Niemals alleine.",
    "🚑 Bei Atemproblemen sofort Notruf."
  ]
},
"Tilidin+MDMA": {
  level: "danger",
  description: "⚡ Gefahr für Kreislauf, Serotoninsyndrom und erhöhte Überhitzungsgefahr.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Fieber, Krämpfen oder Verwirrtheit sofort Hilfe."
  ]
},
"Tilidin+THC": {
  level: "caution",
  description: "🌿 THC verstärkt die sedierende Wirkung, kann zu Benommenheit und Stürzen führen.",
  tips: [
    "🛏️ Nur in sicherem Umfeld.",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "🚗 Kein Auto/Maschinen bedienen."
  ]
},
"Tilidin+Ketamin": {
  level: "danger",
  description: "💤 Starke Sedierung, Verwirrtheit und Atemprobleme möglich.",
  tips: [
    "🛏️ Nur mit nüchternem Sitter.",
    "❌ Nicht gemeinsam einnehmen.",
    "🚑 Bei Atemnot oder Bewusstlosigkeit Notruf."
  ]
},
"Tilidin+Mirtazapin": {
  level: "danger",
  description: "💤 Sedierung und Atemdepression verstärkt, Risiko für Ohnmacht und Sturz.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Hilfe holen bei Bewusstlosigkeit."
  ]
},
"Tilidin+O-DSMT": {
  level: "danger",
  description: "⚠️ Zwei Opioide kombiniert – stark erhöhtes Risiko für Atemdepression, Überdosis und Bewusstlosigkeit.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Niemals alleine.",
    "🚑 Bei Bewusstlosigkeit/Problemen sofort Notruf."
  ]
},
"Tilidin+Amphetamin": {
  level: "caution",
  description: "⚡️ Gegensätzliche Wirkungen, können Kreislauf und Psyche belasten.",
  tips: [
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "⏳ Wirkung einzeln testen.",
    "🚑 Bei Herzrasen/Unwohlsein Hilfe holen."
  ]
},
"1V-LSD+Alkohol": {
  level: "danger",
  description: "🍻 Alkohol schwächt die Kontrolle beim Trip. Erhöhtes Risiko für Blackouts und gefährliches Verhalten.",
  tips: [
    "❗ Kein Alkohol im LSD-Peak.",
    "👫 Niemals alleine konsumieren.",
    "🚑 Bei Bewusstlosigkeit: Notruf wählen."
  ]
},
"1V-LSD+THC": {
  level: "danger",
  description: "🔀 Verstärkung und Verlängerung des LSD-Trips. Mehr optische Effekte, aber auch mehr Angst/Panik möglich.",
  tips: [
    "🔎 Kleine Dosierungen wählen.",
    "🎵 Ruhige Musik/Umgebung.",
    "🧑‍🤝‍🧑 Mit erfahrenem Sitter."
  ]
},
"1V-LSD+MDMA": {
  level: "caution",
  description: "🌈 'Candyflip' Feeling. Kann sehr euphorisch, aber auch überfordernd sein.",
  tips: [
    "⭐ Immer niedrige Dosierungen.",
    "🧑‍🤝‍🧑 Niemals alleine nehmen.",
    "💧 Viel Wasser trinken."
  ]
},
"1V-LSD+Ketamin": {
  level: "danger",
  description: "🌀 Sehr intensive Dissoziation möglich, erhöhtes Psychose-Risiko.",
  tips: [
    "🔬 Nur für sehr erfahrene User.",
    "🏡 Sichere Umgebung!",
    "📅 Viel Erholungszeit einplanen."
  ]
},
"1V-LSD+2C-B": {
  level: "danger",
  description: "🧠 Sehr intensive psychedelische Synergie. Wirkung kaum vorhersehbar.",
  tips: [
    "⚖️ Niedrige Dosierungen verwenden.",
    "🧑‍🤝‍🧑 Trip-Sitter unbedingt erforderlich.",
    "⏳ Viel Zeit zur Erholung."
  ]
},
"1V-LSD+Mirtazapin": {
  level: "caution",
  description: "🧬 Wirkung von 1V-LSD kann abgeschwächt oder unberechenbar verändert werden.",
  tips: [
    "⏳ Wirkung abwarten.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "❌ Kein Nachlegen."
  ]
},
"1V-LSD+Ritalin": {
  level: "danger",
  description: "⚡ Sehr nervös machend, Risiko für Panik und Herzrasen.",
  tips: [
    "🚫 Nicht bei Herzproblemen!",
    "🧑‍🤝‍🧑 Immer mit nüchternem Sitter.",
    "🌬️ Atmen nicht vergessen."
  ]
},
"1V-LSD+Benzodiazepine": {
  level: "caution",
  description: "🛑 Benzodiazepine können die Wirkung von 1V-LSD deutlich abschwächen oder beenden.",
  tips: [
    "😌 Nur bei Bad Trip, niemals zur Verstärkung.",
    "🧑‍🤝‍🧑 Nüchterner Sitter ratsam.",
    "⏳ Nach Einnahme keine weiteren Substanzen."
  ]
},
"1V-LSD+GHB": {
  level: "danger",
  description: "💀 GHB kann den Trip von 1V-LSD abrupt beenden oder stark dämpfen. Kontrollverlust und Blackout möglich.",
  tips: [
    "🚫 Nicht kombinieren.",
    "🧑‍🤝‍🧑 Nüchterner Sitter.",
    "🚑 Notruf bei Problemen."
  ]
},
"1V-LSD+Pilze": {
  level: "danger",
  description: "🍄 Zwei starke Psychedelika – sehr intensive und kaum steuerbare Wirkung. Gefahr von Überforderung, Kontrollverlust und anhaltenden psychischen Nachwirkungen.",
  tips: [
    "❗ Nur für extrem erfahrene Psychonauten.",
    "🧑‍🤝‍🧑 Trip-Sitter zwingend erforderlich.",
    "⏳ Sehr niedrige Dosierung beider Substanzen.",
    "🛌 Viel Zeit zur Erholung einplanen.",
    "🚑 Bei anhaltender Angst/Psychose: ärztliche Hilfe holen."
  ]
},
"1V-LSD+1V-LSD": {
  level: "danger",
  description: "⚠️ Nachlegen von 1V-LSD kann die Intensität und Dauer des Trips unkontrollierbar steigern.",
  tips: [
    "❌ Kein Nachlegen während des Trips.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Kontrollverlust."
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
"Ritalin+THC": {
  level: "danger",
  description: "😰 Herzrasen, Unruhe und Panik möglich.",
  tips: [
    "⏳ Sehr langsam dosieren.",
    "🧑‍🤝‍🧑 Sitter empfehlenswert.",
    "❤️ Bei Herzproblemen meiden."
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
"Ritalin+Ketamin": {
  level: "danger",
  description: "⚡️ Erhöhtes Risiko für Kreislaufprobleme, Verwirrtheit und unvorhersehbare Wirkung.",
  tips: [
    "⏳ Zeitlich trennen, nie zusammen einnehmen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Herzrasen/Verwirrtheit Hilfe holen."
  ]
},
"Ritalin+2C-B": {
  level: "danger",
  description: "😵 Kombination kann zu starker Überstimulation, Herzrasen und Unruhe führen.",
  tips: [
    "⚖️ Kleine Dosierung probieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Problemen Notruf."
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
"Ritalin+Benzodiazepine": {
  level: "danger",
  description: "⚡️ Wechsel zwischen Beruhigung und Stimulation kann Kreislauf und Psyche stark belasten.",
  tips: [
    "⏳ Substanzen möglichst zeitlich trennen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Unwohlsein oder Herzproblemen Hilfe holen."
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
"Ritalin+GHB": {
  level: "danger",
  description: "❗️ Entgegengesetzte Wirkung, starke Belastung für das zentrale Nervensystem.",
  tips: [
    "🧑‍🤝‍🧑 Niemals alleine.",
    "💧 Sehr niedrig dosieren (am besten nicht kombinieren).",
    "🚑 Bei Atemproblemen sofort Notruf."
  ]
},
"Ritalin+Tramadol": {
  level: "danger",
  description: "⚡️ Erhöhte Krampfgefahr, Kreislaufprobleme und unvorhersehbare Wechselwirkungen.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Unwohlsein sofort Hilfe holen."
  ]
},
"Ritalin+CBD": {
  level: "caution",
  description: "🌿 CBD kann Überstimulation etwas dämpfen, Wirkung ist aber individuell unterschiedlich.",
  tips: [
    "⚖️ Kleine Dosis testen.",
    "😴 Auf Müdigkeit vorbereitet sein.",
    "🧑‍🤝‍🧑 Sitter ratsam bei Unsicherheit."
  ]
},
"Ritalin+Ritalin": {
  level: "danger",
  description: "💊 Erhöhtes Risiko für Herzrasen, Angst, Überreizung, Schlaflosigkeit und psychotische Symptome.",
  tips: [
    "⏳ Auf Wirkung warten, nicht nachlegen.",
    "🧑‍🤝‍🧑 Sitter ratsam bei hohen Dosen.",
    "🚑 Hilfe holen bei starken Nebenwirkungen."
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
"DMT+CBD": {
  level: "caution",
  description: "🌿 CBD kann helfen, die psychedelische Wirkung von DMT sanft abzumildern.",
  tips: [
    "😌 Bei Unruhe geringe CBD-Dosis erwägen.",
    "🧑‍🤝‍🧑 Sitter trotzdem ratsam.",
    "🥤 Viel trinken."
  ]
},
"DMT+Ketamin": {
  level: "danger",
  description: "🌀 Sehr intensive, dissoziative und psychedelische Erfahrung. Hohe Gefahr von Kontrollverlust.",
  tips: [
    "❗️ Nur für sehr erfahrene Psychonauten.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "🛏️ Ruhige Umgebung."
  ]
},
"DMT+MDMA": {
  level: "danger",
  description: "⚡️ Beide wirken stark auf das serotonerge System. Risiko für emotionale Überforderung und Serotoninsyndrom.",
  tips: [
    "❌ Kombination vermeiden.",
    "🧑‍🤝‍🧑 Immer Sitter dabei.",
    "🚑 Bei Symptomen wie Fieber, Muskelzucken sofort Hilfe holen."
  ]
},
"DMT+2C-B": {
  level: "danger",
  description: "🧠 Sehr intensive psychedelische Synergie, kaum steuerbar, Gefahr von Überforderung.",
  tips: [
    "⚖️ Sehr niedrige Dosierungen.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "⏳ Genug Zeit für Erholung einplanen."
  ]
},
"DMT+1V-LSD": {
  level: "danger",
  description: "🌈 Sehr intensive, langanhaltende psychedelische Effekte, Realitätsverlust möglich.",
  tips: [
    "❗️ Nur für sehr erfahrene User.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "⏳ Erholungszeit einplanen."
  ]
},
"DMT+Mirtazapin": {
  level: "caution",
  description: "⬇️ Dämpft oft die psychedelische Wirkung, macht aber müde und kann verwirren.",
  tips: [
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "⏳ Wirkung abwarten.",
    "🛏️ Ruhige Umgebung."
  ]
},
"DMT+Benzodiazepine": {
  level: "caution",
  description: "🧘‍♂️ Benzodiazepine können einen DMT-Trip abbremsen oder beenden, aber auch für starke Sedierung sorgen.",
  tips: [
    "❌ Nicht zur Verstärkung des Trips einsetzen.",
    "😌 Nur im Ausnahmefall (z.B. Panik) und unter Aufsicht.",
    "🛌 Nach Einnahme: Ruhig bleiben, nicht allein lassen."
  ]
},
"DMT+Tramadol": {
  level: "danger",
  description: "⚡️ Gefahr von Krampfanfällen und unvorhersehbaren Wechselwirkungen.",
  tips: [
    "❌ Kombination vermeiden.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Unwohlsein Notruf."
  ]
},
"DMT+GHB": {
  level: "danger",
  description: "😵 GHB kann die psychedelischen Effekte von DMT abschwächen oder unvorhersehbar verändern. Erhöhtes Risiko für Kontrollverlust und Blackout.",
  tips: [
    "🧑‍🤝‍🧑 Niemals alleine konsumieren.",
    "⏳ Erst die Wirkung einer Substanz abklingen lassen.",
    "🚑 Bei Bewusstlosigkeit sofort Notruf."
  ]
},
"DMT+Diazepam": {
  level: "caution",
  description: "🧘‍♂️ Diazepam kann einen DMT-Trip beenden, aber auch für starke Sedierung sorgen.",
  tips: [
    "❌ Nur im Notfall anwenden.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🛌 Nach Einnahme: ruhige Umgebung."
  ]
},
"DMT+Kokain": {
  level: "danger",
  description: "⚡️ Beide Substanzen können Herz und Psyche stark belasten – Risiko für Kreislaufprobleme, Panik und Überforderung.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Nie allein konsumieren.",
    "🚑 Hilfe holen bei Beschwerden."
  ]
},
"DMT+Amphetamin": {
  level: "danger",
  description: "💥 Starke Überstimulation und Verwirrung möglich. Gefahr für Psyche und Kreislauf.",
  tips: [
    "❌ Kombination vermeiden.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Überforderung."
  ]
},
"DMT+DMT": {
  level: "danger",
  description: "🚀 Mehrere Dosen hintereinander verstärken die psychedelische Wirkung, können aber zu extremer Verwirrung und Kontrollverlust führen.",
  tips: [
    "⏳ Immer Pause zwischen den Dosen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Kontrollverlust."
  ]
},
"DMT+Pilze": {
  level: "danger",
  description: "🚀 Sehr intensive, kaum steuerbare psychedelische Wirkung. Realitätsverlust und Angst möglich.",
  tips: [
    "⚖️ Nur für sehr erfahrene User.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "⏳ Keine weiteren Substanzen nachlegen."
  ]
},
"DMT+Mescalin": {
  level: "danger",
  description: "🌈 Beide sind starke Psychedelika – Gefahr für Kontrollverlust, Überforderung und langanhaltende Nachwirkungen.",
  tips: [
    "❗️ Sehr niedrige Dosen.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "⏳ Erholungszeit einplanen."
  ]
},
"Diazepam+Alkohol": {
  level: "deadly",
  description: "💀 Beide wirken atemdepressiv. Lebensgefahr durch Atemstillstand!",
  tips: [
    "❌ Niemals zusammen konsumieren!",
    "🛌 Bei Bewusstlosigkeit sofort Notarzt rufen.",
    "🚷 Auch kleine Mengen vermeiden."
  ]
},
"Diazepam+THC": {
  level: "caution",
  description: "💤 Starke Sedierung, Koordinationsprobleme und Erinnerungslücken möglich.",
  tips: [
    "🛏️ Ruhige Umgebung, nicht allein.",
    "😴 Keine Maschinen/Auto.",
    "🚑 Hilfe holen bei extremer Müdigkeit."
  ]
},
"Diazepam+CBD": {
  level: "caution",
  description: "🌿 Beide wirken entspannend und beruhigend, verstärken sich gegenseitig. Kann starke Müdigkeit und reduzierte Aufmerksamkeit auslösen.",
  tips: [
    "🛏️ Nicht vor Aktivitäten, Autofahren vermeiden.",
    "😴 Mit Müdigkeit rechnen.",
    "🧑‍🤝‍🧑 Sitter ratsam, vor allem bei höheren Dosen."
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
"Diazepam+MDMA": {
  level: "caution",
  description: "😴 Kann MDMA-Trip abrupt beenden, aber auch Atemdepression verursachen.",
  tips: [
    "🧑‍⚕️ Diazepam nur bei extremem Bad Trip und unter Aufsicht.",
    "❌ Nicht zur Party kombinieren.",
    "💤 Wirkung stark dämpfend."
  ]
},
"Diazepam+2C-B": {
  level: "caution",
  description: "🛌 Diazepam dämpft 2C-B-Trips, kann aber sehr müde und benommen machen.",
  tips: [
    "😌 Nur bei Bedarf (Unruhe/Bad Trip).",
    "🛏️ Nicht allein bleiben.",
    "🚑 Hilfe holen bei Bewusstlosigkeit."
  ]
},
"Diazepam+1V-LSD": {
  level: "caution",
  description: "🛑 Diazepam kann die Wirkung von 1V-LSD deutlich abschwächen oder beenden.",
  tips: [
    "😌 Nur bei Bad Trip, niemals zur Verstärkung.",
    "🧑‍🤝‍🧑 Nüchterner Sitter ratsam.",
    "⏳ Nach Einnahme keine weiteren Substanzen."
  ]
},
"Diazepam+Mirtazapin": {
  level: "danger",
  description: "💤 Starke Sedierung, Atemdepression möglich – Vorsicht!",
  tips: [
    "❌ Nicht gemeinsam einnehmen.",
    "🧑‍🤝‍🧑 Niemals alleine.",
    "🚑 Hilfe holen bei Bewusstlosigkeit."
  ]
},
"Diazepam+Tramadol": {
  level: "danger",
  description: "☠️ Stark erhöhte Gefahr für Atemdepression, Koma und Tod.",
  tips: [
    "❌ Nie kombinieren.",
    "🚑 Notarzt rufen bei Bewusstlosigkeit.",
    "🛑 Keine Nachdosierung."
  ]
},
"Diazepam+Kokain": {
  level: "danger",
  description: "⚡️ Kokain kann angstlösend wirken, aber nach Wirkungseinbruch droht depressive Verstärkung, Kreislaufbelastung und Überdosierungsgefahr.",
  tips: [
    "⏳ Substanzen zeitlich trennen.",
    "🚑 Bei Herzrasen, Atemproblemen Notruf.",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren."
  ]
},
"Diazepam+Amphetamin": {
  level: "danger",
  description: "💤 Diazepam kann Überstimulation abmildern, aber starke Sedierung und Kontrollverlust hervorrufen.",
  tips: [
    "😌 Diazepam nur im Notfall, nicht zur Kombination.",
    "🧑‍🤝‍🧑 Nüchterner Sitter ratsam.",
    "🚑 Bei Bewusstlosigkeit Hilfe holen."
  ]
},
"Diazepam+GHB": {
  level: "deadly",
  description: "☠️ Beide wirken extrem atemdepressiv – höchste Lebensgefahr durch Atemstillstand und Koma.",
  tips: [
    "❌ Nie kombinieren.",
    "🚑 Notruf bei Bewusstlosigkeit.",
    "🧑‍🤝‍🧑 Sitter MUSS nüchtern sein."
  ]
},
"Diazepam+Mescalin": {
  level: "caution",
  description: "🛌 Diazepam kann den Mescalin-Trip beenden oder stark abschwächen, wirkt aber sehr sedierend.",
  tips: [
    "😌 Nur bei extremer Unruhe/Bad Trip.",
    "🛏️ Ruhige Umgebung.",
    "🧑‍🤝‍🧑 Sitter ratsam."
  ]
},
"Diazepam+DMT": {
  level: "caution",
  description: "🧘‍♂️ Diazepam kann einen DMT-Trip beenden, aber auch für starke Sedierung sorgen.",
  tips: [
    "❌ Nur im Notfall anwenden.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🛌 Nach Einnahme: ruhige Umgebung."
  ]
},
"Diazepam+Pilze": {
  level: "caution",
  description: "🛑 Diazepam kann Pilz-Trips stark abschwächen oder beenden, wirkt aber sedierend.",
  tips: [
    "😌 Nur im Notfall (z. B. Bad Trip).",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🛏️ Nach Einnahme: Ruhig bleiben, nicht allein lassen."
  ]
},
"Diazepam+Ritalin": {
  level: "danger",
  description: "⚡️ Wechsel zwischen Beruhigung und Stimulation kann Kreislauf und Psyche stark belasten.",
  tips: [
    "⏳ Substanzen möglichst zeitlich trennen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Unwohlsein oder Herzproblemen Hilfe holen."
  ]
},
"Diazepam+HHC": {
  level: "caution",
  description: "💤 Kombi kann starke Sedierung, Koordinationsprobleme und Blackouts auslösen.",
  tips: [
    "🛏️ Nicht alleine konsumieren.",
    "😴 Keine Maschinen bedienen/Auto fahren.",
    "🚑 Bei extremer Schläfrigkeit Hilfe holen."
  ]
},
"Diazepam+JWH-018": {
  level: "danger",
  description: "🚩 Unberechenbare Verstärkung von Sedierung und Psychoserisiko, extreme Verwirrtheit und Kontrollverlust möglich.",
  tips: [
    "⚠️ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei starken Nebenwirkungen sofort Hilfe holen."
  ]
},
"Diazepam+Tilidin": {
  level: "danger",
  description: "☠️ Starke atemdepressive Wirkung möglich, Lebensgefahr.",
  tips: [
    "❌ Kombination meiden.",
    "🧑‍🤝‍🧑 Niemals alleine.",
    "🚑 Sofort Notruf wählen bei Bewusstlosigkeit."
  ]
},
"Diazepam+Diazepam": {
  level: "deadly",
  description: "☠️ Überdosierung kann zu extremer Sedierung, Gedächtnisverlust, Atemdepression und Tod führen.",
  tips: [
    "❌ Dosis nie eigenständig erhöhen.",
    "🧑‍🤝‍🧑 Nie alleine konsumieren.",
    "🚑 Bei Bewusstlosigkeit oder Atemproblemen sofort Notruf."
  ]
},
"Kokain+Alkohol": {
  level: "danger",
  description: "❗ Im Körper entsteht das giftige Cocaethylen – erhöht Herzinfarkt- und Krampfrisiko.",
  tips: [
    "❌ Kombination möglichst vermeiden.",
    "🩺 Blutdruck kontrollieren.",
    "🏥 Im Zweifel Notaufnahme."
  ]
},
"Kokain+THC": {
  level: "danger",
  description: "🩺 Kann zu Herzrasen, Unruhe, Kreislaufproblemen führen.",
  tips: [
    "🚨 Nur winzige Dosen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "❌ Bei Unwohlsein abbrechen."
  ]
},
"Kokain+CBD": {
  level: "caution",
  description: "🌱 CBD kann die nervöse Wirkung von Kokain leicht dämpfen, aber keine Risiken aufheben.",
  tips: [
    "😌 Erst niedrige Dosis CBD probieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Herzrasen trotzdem Notruf."
  ]
},
"Kokain+Ketamin": {
  level: "danger",
  description: "❗ Beide Substanzen können Herz und Psyche stark belasten – hohe Gefahr für Kreislaufprobleme, Paranoia und Kontrollverlust.",
  tips: [
    "🚫 Kombination vermeiden.",
    "🧑‍🤝‍🧑 Nie allein.",
    "🚑 Hilfe holen bei Beschwerden."
  ]
},
"Kokain+MDMA": {
  level: "deadly",
  description: "☠️ Extrem gefährlich! Herzinfarkt, Überhitzung, Krampfanfall möglich.",
  tips: [
    "❌ Nie kombinieren.",
    "🚑 Notruf bei Symptomen.",
    "🧑‍🤝‍🧑 Sitter, kalte Getränke bereit."
  ]
},
"Kokain+2C-B": {
  level: "danger",
  description: "⚡️ Sehr intensive Wirkung, Kreislaufbelastung und Paranoia möglich.",
  tips: [
    "⚠️ Kleine Dosierung.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Angst oder Herzproblemen Hilfe holen."
  ]
},
"Kokain+1V-LSD": {
  level: "danger",
  description: "⚠️ Unberechenbare Wirkung – erhöhtes Psychoserisiko, Kreislaufprobleme.",
  tips: [
    "🧑‍⚕️ Kein Nachlegen!",
    "💤 Ausreichend Ruhe einplanen.",
    "🚫 Nicht für Einsteiger."
  ]
},
"Kokain+Mirtazapin": {
  level: "danger",
  description: "⚠️ Kreislaufbelastung, erhöhte Risiken für Psychosen und Unruhe.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Notruf bei Herzrasen oder starker Unruhe."
  ]
},
"Kokain+Tramadol": {
  level: "danger",
  description: "☠️ Beide Substanzen können die Krampfschwelle senken – erhöhtes Risiko für Krampfanfälle.",
  tips: [
    "❌ Kombination vermeiden.",
    "🧑‍🤝‍🧑 Nie alleine konsumieren.",
    "🚑 Notruf bei Muskelzucken/Bewusstlosigkeit."
  ]
},
"Kokain+Amphetamin": {
  level: "deadly",
  description: "☠️ Zwei starke Stimulanzien: Sehr hohes Risiko für Herzinfarkt, Krampfanfälle und Psychose.",
  tips: [
    "❌ Auf keinen Fall kombinieren!",
    "🚑 Sofort Notruf bei Symptomen.",
    "🧑‍🤝‍🧑 Sitter muss nüchtern sein."
  ]
},
"Kokain+Ritalin": {
  level: "danger",
  description: "⚡️ Zwei Stimulanzien – starke Belastung für Herz, Kreislauf und Psyche.",
  tips: [
    "⏳ Einzelkonsum bevorzugen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Beschwerden."
  ]
},
"Kokain+GHB": {
  level: "danger",
  description: "⚡️ Gegensätzliche Effekte können Kreislauf und Psyche extrem belasten. Nach dem High droht Überdosis-Gefahr von GHB.",
  tips: [
    "⏳ Substanzen zeitlich trennen.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Bei Schwäche, Bewusstlosigkeit sofort Hilfe holen."
  ]
},
"Kokain+Tilidin": {
  level: "danger",
  description: "⚡️ Belastung für Herz und Kreislauf, Risiko für Atemprobleme, Paranoia und Kontrollverlust.",
  tips: [
    "❌ Kombination meiden.",
    "🧑‍🤝‍🧑 Nie allein konsumieren.",
    "🚑 Bei Unwohlsein Notruf."
  ]
},
"Kokain+Diazepam": {
  level: "danger",
  description: "⚡️ Kokain kann angstlösend wirken, aber nach Wirkungseinbruch droht depressive Verstärkung, Kreislaufbelastung und Überdosierungsgefahr.",
  tips: [
    "⏳ Substanzen zeitlich trennen.",
    "🚑 Bei Herzrasen, Atemproblemen Notruf.",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren."
  ]
},
"Kokain+LSD": {
  level: "danger",
  description: "⚠️ Unberechenbare Wirkung – erhöhtes Psychoserisiko, Kreislaufprobleme.",
  tips: [
    "🧑‍⚕️ Kein Nachlegen!",
    "💤 Ausreichend Ruhe einplanen.",
    "🚫 Nicht für Einsteiger."
  ]
},
"Kokain+Mescalin": {
  level: "danger",
  description: "🌈 Verstärkte psychedelische und stimulierende Wirkung. Gefahr von Überforderung und Herzproblemen.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Nur mit Sitter.",
    "🚑 Bei Überforderung Notruf."
  ]
},
"Kokain+Pilze": {
  level: "danger",
  description: "⚡️ Unvorhersehbare, oft toxische Wirkung. Gefahr für Kreislauf, Psyche und Überhitzung.",
  tips: [
    "❌ Kombination vermeiden.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Notruf bei Problemen."
  ]
},
"Kokain+MDMA": {
  level: "deadly",
  description: "☠️ Extrem gefährlich! Herzinfarkt, Überhitzung, Krampfanfall möglich.",
  tips: [
    "❌ Nie kombinieren.",
    "🚑 Notruf bei Symptomen.",
    "🧑‍🤝‍🧑 Sitter, kalte Getränke bereit."
  ]
},
"Kokain+Kokain": {
  level: "deadly",
  description: "☠️ Wiederholtes Nachlegen extrem gefährlich – Risiko für Herzinfarkt, Krämpfe, Psychose und plötzlichen Tod.",
  tips: [
    "❌ Kein Redosing.",
    "🚑 Hilfe holen bei Brustschmerzen, Unruhe, Krämpfen.",
    "🧑‍🤝‍🧑 Nie allein konsumieren."
  ]
},
// ---- KRATOM-KOMBIS ----
"Kratom+Alkohol": {
  level: "danger",
  description: "💀 Beide wirken sedierend und können die Atemdepression und das Risiko für Blackout, Erbrechen und Ohnmacht deutlich erhöhen.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Nie alleine – Begleitperson empfehlenswert.",
    "🚑 Notruf bei Bewusstlosigkeit, Atemnot oder Erbrechen."
  ]
},
"Kratom+Benzodiazepine": {
  level: "deadly",
  description: "☠️ Kratom und Benzos können starke Atemdepression, Koma und Todesfälle verursachen – extrem gefährliche Mischung!",
  tips: [
    "❌ Auf keinen Fall kombinieren.",
    "🚑 Sofort Hilfe holen bei Bewusstlosigkeit oder Atemaussetzern.",
    "🧑‍🤝‍🧑 Sitter MUSS nüchtern sein."
  ]
},
"Kratom+Tramadol": {
  level: "danger",
  description: "⚡ Zwei Opioide: Risiko für Krampfanfälle, Atemdepression und schwere Nebenwirkungen deutlich erhöht.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Nie alleine.",
    "🚑 Hilfe holen bei Muskelzucken, Bewusstlosigkeit oder Atemnot."
  ]
},
"Kratom+Tilidin": {
  level: "danger",
  description: "💊 Zwei Opioide – deutlich gesteigertes Risiko für Nebenwirkungen, Übelkeit, Atemdepression und Sucht.",
  tips: [
    "❌ Kombination vermeiden.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Problemen (Atemnot, Bewusstlosigkeit) sofort Notruf."
  ]
},
"Kratom+O-DSMT": {
  level: "danger",
  description: "☠️ Zwei opioide Wirkstoffe, hohe Gefahr für Atemstillstand, Übelkeit, Kreislaufkollaps und starke Nebenwirkungen.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Nie alleine konsumieren.",
    "🚑 Bei Bewusstlosigkeit oder Atemnot sofort Notruf."
  ]
},
"Kratom+CBD": {
  level: "caution",
  description: "🌱 CBD kann die sedierende und entspannende Wirkung von Kratom verstärken, aber auch müde machen.",
  tips: [
    "⚖️ Mit kleinen Dosen beginnen.",
    "😴 Keine Maschinen bedienen/Auto fahren.",
    "🧑‍🤝‍🧑 Sitter hilfreich bei Unsicherheit."
  ]
},
"Kratom+THC": {
  level: "caution",
  description: "🌿 THC kann die sedierende Wirkung von Kratom verstärken, erhöht das Risiko für Schwindel, Übelkeit und Kreislaufprobleme.",
  tips: [
    "⚖️ Erst geringe THC-Menge ausprobieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei starker Übelkeit oder Schwindel Hilfe holen."
  ]
},
"Kratom+MDMA": {
  level: "danger",
  description: "💥 Unvorhersehbare Wechselwirkungen – erhöhte Herz-Kreislauf-Belastung und Gefahr für Übelkeit, Serotoninsyndrom und Kontrollverlust.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Notruf bei Krämpfen, starker Unruhe, Herzrasen."
  ]
},
"Kratom+Amphetamin": {
  level: "caution",
  description: "⚠️ Mischkonsum kann Kreislauf und Psyche belasten: Kratom dämpft, Amphetamin stimuliert – erhöhtes Risiko für Übelkeit, Unruhe und Herzprobleme.",
  tips: [
    "⚖️ Einzelkonsum bevorzugen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Problemen Notruf."
  ]
},
"Kratom+Ketamin": {
  level: "danger",
  description: "🌫️ Beide können die Wahrnehmung verzerren und für Verwirrung, Übelkeit und starke Sedierung sorgen.",
  tips: [
    "❌ Kombination meiden.",
    "🧑‍🤝‍🧑 Nie alleine konsumieren.",
    "🚑 Bei Bewusstlosigkeit sofort Hilfe holen."
  ]
},
"Kratom+LSD": {
  level: "caution",
  description: "🌀 Kratom kann den LSD-Trip dämpfen, besonders gegen Ende zur Beruhigung genutzt werden – kann aber müde und benommen machen.",
  tips: [
    "🧑‍🤝‍🧑 Nur gegen Ende des Trips vorsichtig ausprobieren.",
    "😴 Nicht bei Aktivitäten oder Autofahren.",
    "⚠️ Wirkung individuell sehr unterschiedlich."
  ]
},
"Kratom+Mirtazapin": {
  level: "caution",
  description: "🌙 Beide machen müde, verstärkte Sedierung möglich.",
  tips: [
    "😴 Nur zu Hause in sicherer Umgebung.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚗 Kein Auto/Maschinen bedienen."
  ]
},
"Kratom+GHB": {
  level: "deadly",
  description: "☠️ Beide stark sedierend – höchste Lebensgefahr durch Atemdepression und Koma!",
  tips: [
    "❌ Nie kombinieren.",
    "🚑 Notruf bei Bewusstlosigkeit.",
    "🧑‍🤝‍🧑 Sitter MUSS nüchtern sein."
  ]
},
"Kratom+1V-LSD": {
  level: "caution",
  description: "🌀 Kratom kann 1V-LSD dämpfen, besonders am Trip-Ende zur Beruhigung, kann aber müde machen.",
  tips: [
    "🧑‍🤝‍🧑 Wirkung individuell beobachten.",
    "😴 Nicht vor Aktivitäten.",
    "⚠️ Nur kleine Dosen probieren."
  ]
},
"Kratom+2C-B": {
  level: "caution",
  description: "🌈 Kann 2C-B-Trip dämpfen, aber auch starke Müdigkeit oder Übelkeit verursachen.",
  tips: [
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "😴 Auf Müdigkeit achten.",
    "🚑 Hilfe bei starker Übelkeit/Kreislaufproblemen."
  ]
},
"Kratom+Pilze": {
  level: "caution",
  description: "🍄 Kann den Pilz-Trip abmildern, aber auch müde oder benommen machen. Wirkung sehr individuell.",
  tips: [
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "⚖️ Erst Trip abklingen lassen, dann vorsichtig dosieren.",
    "🚗 Kein Auto fahren!"
  ]
},
"Kratom+Kratom": {
  level: "danger",
  description: "💊 Nachlegen von Kratom erhöht das Risiko für Übelkeit, Erbrechen, Atemdepression und Abhängigkeit deutlich.",
  tips: [
    "❌ Kein Nachlegen während eines aktiven Rausches.",
    "😴 Auf Nebenwirkungen achten.",
    "🚑 Hilfe holen bei Erbrechen, Bewusstlosigkeit oder Atemnot."
  ]
},
// ---- METHAMPHETAMIN-KOMBIS ----
"Methamphetamin+Alkohol": {
  level: "danger",
  description: "💥 Extreme Belastung für Herz und Kreislauf, stark erhöhtes Risiko für Aggressivität, Kontrollverlust, Blackout.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Herzrasen, Ohnmacht oder Atemnot sofort Notruf."
  ]
},
"Methamphetamin+Benzodiazepine": {
  level: "danger",
  description: "💊 Nach dem Meth-High können Benzos zum Runterkommen benutzt werden, aber hohe Gefahr für Blackout, Atemdepression und Überdosierung.",
  tips: [
    "❌ Kombi möglichst vermeiden.",
    "🧑‍🤝‍🧑 Sitter muss nüchtern sein.",
    "🚑 Hilfe holen bei Bewusstlosigkeit oder Atemnot."
  ]
},
"Methamphetamin+Tramadol": {
  level: "danger",
  description: "⚡️ Serotoninsyndrom, Krampfanfälle und Kreislaufprobleme möglich – hohes Risiko!",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Notruf bei Muskelzucken, Fieber, Bewusstlosigkeit."
  ]
},
"Methamphetamin+Tilidin": {
  level: "danger",
  description: "💣 Beide wirken gegensätzlich (stimulierend/sedierend), Belastung für Herz, Kreislauf und Psyche. Risiko für Atemprobleme und Kontrollverlust.",
  tips: [
    "❌ Kombination meiden.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"Methamphetamin+O-DSMT": {
  level: "danger",
  description: "☠️ Zwei starke Substanzen: erhöhte Gefahr für Herzversagen, Atemprobleme und Psychosen.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Nie alleine konsumieren.",
    "🚑 Bei Bewusstlosigkeit oder Herzproblemen Notruf."
  ]
},
"Methamphetamin+CBD": {
  level: "caution",
  description: "🌱 CBD kann Unruhe, Überstimulation und Schlaflosigkeit mildern, aber auch müde machen.",
  tips: [
    "⚖️ Erst kleine CBD-Menge testen.",
    "😴 Kein Auto/Maschinen nach CBD.",
    "🧑‍🤝‍🧑 Sitter hilfreich."
  ]
},
"Methamphetamin+THC": {
  level: "danger",
  description: "🍁 Erhöhtes Risiko für Paranoia, Angstzustände, Kreislaufprobleme und Psychosen.",
  tips: [
    "⚖️ Niedrig dosieren, Wirkung beobachten.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Kontrollverlust."
  ]
},
"Methamphetamin+MDMA": {
  level: "deadly",
  description: "☠️ Zwei starke Stimulanzien – extrem hohes Risiko für Überhitzung, Herzinfarkt, Serotoninsyndrom und Krampfanfälle.",
  tips: [
    "❌ Nicht kombinieren!",
    "🚑 Notruf bei Symptomen wie Muskelzucken, Fieber, Herzrasen.",
    "🧑‍🤝‍🧑 Sitter MUSS nüchtern sein."
  ]
},
"Methamphetamin+Amphetamin": {
  level: "deadly",
  description: "☠️ Zwei starke Stimulanzien – massive Gefahr für Herz, Kreislauf, Psychosen, Krampfanfälle und plötzlichen Tod.",
  tips: [
    "❌ Nicht kombinieren!",
    "🚑 Sofort Notruf bei Problemen.",
    "🧑‍🤝‍🧑 Nie alleine konsumieren."
  ]
},
"Methamphetamin+Ketamin": {
  level: "danger",
  description: "🌫️ Stimulans plus Dissoziativum: unberechenbare Wirkung, Gefahr für Angst, Verwirrtheit, Kreislaufprobleme.",
  tips: [
    "❌ Kombination meiden.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe bei Unruhe/Verwirrtheit."
  ]
},
"Methamphetamin+LSD": {
  level: "danger",
  description: "🌀 Sehr starke psychedelische Stimulation, Risiko für Angst, Psychose und Kreislaufprobleme.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter dringend empfohlen.",
    "🚑 Hilfe holen bei Kontrollverlust."
  ]
},
"Methamphetamin+Mirtazapin": {
  level: "caution",
  description: "😴 Mirtazapin kann den Meth-High abmildern, macht aber sehr müde und kann Wirkung unberechenbar machen.",
  tips: [
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "⏳ Wirkung einzeln testen.",
    "😴 Auf Müdigkeit vorbereiten."
  ]
},
"Methamphetamin+GHB": {
  level: "deadly",
  description: "☠️ Gefahr für Atemstillstand, Herz-Kreislauf-Kollaps, Koma und Tod durch gegensätzliche Wirkung!",
  tips: [
    "❌ Auf keinen Fall kombinieren!",
    "🚑 Notruf bei Bewusstlosigkeit oder Atemproblemen.",
    "🧑‍🤝‍🧑 Sitter MUSS nüchtern sein."
  ]
},
"Methamphetamin+1V-LSD": {
  level: "danger",
  description: "🌀 Sehr starke Überstimulation, Psyche und Herz werden stark belastet – Angst und Kontrollverlust möglich.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"Methamphetamin+2C-B": {
  level: "danger",
  description: "🎢 Sehr intensive, stimulierende und psychedelische Wirkung. Gefahr für Überhitzung, Kreislaufprobleme und Psychosen.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe bei Symptomen."
  ]
},
"Methamphetamin+Pilze": {
  level: "danger",
  description: "🍄 Unberechenbare, stark stimulierende Wirkung, Gefahr für Angst, Paranoia, Kreislaufprobleme und Psychosen.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Bei Problemen Notruf."
  ]
},
"Methamphetamin+Kratom": {
  level: "caution",
  description: "🌿 Kratom kann die Meth-Wirkung etwas dämpfen, aber auch Kreislauf, Übelkeit und Müdigkeit verstärken.",
  tips: [
    "⚖️ Wirkung individuell testen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe bei Übelkeit/Kreislaufproblemen."
  ]
},
"Methamphetamin+Ritalin": {
  level: "deadly",
  description: "☠️ Zwei Stimulanzien – massives Risiko für Herzinfarkt, Krämpfe, Psychosen und plötzlichen Tod.",
  tips: [
    "❌ Nicht kombinieren.",
    "🚑 Sofort Hilfe bei Beschwerden.",
    "🧑‍🤝‍🧑 Nie allein konsumieren."
  ]
},
"Methamphetamin+Kokain": {
  level: "deadly",
  description: "☠️ Zwei extrem starke Stimulanzien – höchste Gefahr für Herzinfarkt, Krampfanfälle, Psychosen und plötzlichen Tod.",
  tips: [
    "❌ Nicht kombinieren!",
    "🚑 Sofort Notruf bei Beschwerden.",
    "🧑‍🤝‍🧑 Nie allein konsumieren."
  ]
},
"Methamphetamin+Methamphetamin": {
  level: "deadly",
  description: "☠️ Nachlegen erhöht das Risiko für akute Überhitzung, Psychosen, Kreislaufversagen und Tod massiv.",
  tips: [
    "❌ Kein Redosing.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
// ---- SALVIA DIVINORUM-KOMBIS ----
"Salvia divinorum+Alkohol": {
  level: "danger",
  description: "🍻 Alkohol kann die Dissoziation durch Salvia verstärken und zu Kontrollverlust, Blackouts und Angst führen.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter zwingend erforderlich.",
    "🚑 Bei Ohnmacht/Blackout sofort Hilfe holen."
  ]
},
"Salvia divinorum+THC": {
  level: "danger",
  description: "🍁 THC kann die psychedelische Wirkung von Salvia unberechenbar verstärken – starke Angst, Panik und Realitätsverlust möglich.",
  tips: [
    "⚖️ Sehr niedrige Dosierungen.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "🚑 Hilfe holen bei Kontrollverlust."
  ]
},
"Salvia divinorum+MDMA": {
  level: "danger",
  description: "💥 Beide verändern massiv die Wahrnehmung, die Kombination ist kaum steuerbar und kann starke Angst, Kreislaufprobleme und Verwirrung auslösen.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "🚑 Bei Problemen Notruf."
  ]
},
"Salvia divinorum+LSD": {
  level: "danger",
  description: "🌈 Zwei sehr starke Psychedelika. Wirkung kann extrem überwältigend, desorientierend und beängstigend werden.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "🚑 Hilfe holen bei Kontrollverlust oder Angst."
  ]
},
"Salvia divinorum+Ketamin": {
  level: "danger",
  description: "🌀 Sehr starke Dissoziation und Realitätsverlust möglich, Gefahr von Panik und Unfällen.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Nüchterner Sitter zwingend.",
    "🚑 Bei Bewusstlosigkeit Notruf."
  ]
},
"Salvia divinorum+Pilze": {
  level: "danger",
  description: "🍄 Zwei intensive Psychedelika. Kombination kann extrem überwältigend und psychisch belastend sein.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "🚑 Hilfe holen bei Kontrollverlust oder Panik."
  ]
},
"Salvia divinorum+DMT": {
  level: "danger",
  description: "🚀 Beide haben kurze, aber extreme psychedelische Peaks – Realitätsverlust, Panik und Kontrollverlust möglich.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "🚑 Hilfe holen bei anhaltender Angst."
  ]
},
"Salvia divinorum+CBD": {
  level: "caution",
  description: "🌿 CBD könnte Angst und Desorientierung dämpfen, aber Wirkung ist individuell und wenig erforscht.",
  tips: [
    "⚖️ Kleine CBD-Dosis ausprobieren.",
    "🧑‍🤝‍🧑 Nie allein konsumieren.",
    "🚗 Kein Fahren/Bedienen von Maschinen."
  ]
},
"Salvia divinorum+Benzodiazepine": {
  level: "caution",
  description: "😴 Benzos können Salvia-Wirkung dämpfen oder beenden, machen aber sehr müde und führen zu Gedächtnislücken.",
  tips: [
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "⏳ Keine weiteren Substanzen nach Benzo.",
    "🛏️ Ruhige Umgebung."
  ]
},
"Salvia divinorum+Mirtazapin": {
  level: "caution",
  description: "💤 Mirtazapin könnte die Wirkung abschwächen und starke Müdigkeit auslösen.",
  tips: [
    "😴 Auf Müdigkeit vorbereitet sein.",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "⏳ Wirkung abwarten, kein Nachlegen."
  ]
},
"Salvia divinorum+Amphetamin": {
  level: "danger",
  description: "⚡️ Extreme Überstimulation, Desorientierung und Panik möglich. Unvorhersehbare Wechselwirkungen.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"Salvia divinorum+Methamphetamin": {
  level: "danger",
  description: "⚡️ Beide können zu extremer Unruhe, Panik und psychotischen Zuständen führen.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe bei Kontrollverlust."
  ]
},
"Salvia divinorum+Ritalin": {
  level: "danger",
  description: "💊 Beide können Unruhe, Angst und Desorientierung verstärken.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"Salvia divinorum+Tramadol": {
  level: "danger",
  description: "⚡️ Gefahr für Krampfanfälle, Desorientierung und starke Müdigkeit.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Nie allein konsumieren.",
    "🚑 Bei Problemen Notruf."
  ]
},
"Salvia divinorum+Tilidin": {
  level: "danger",
  description: "💤 Starke Sedierung, Desorientierung und Gefahr von Stürzen oder Blackouts.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Bewusstlosigkeit."
  ]
},
"Salvia divinorum+GHB": {
  level: "danger",
  description: "☠️ Starke Sedierung und Atemdepression möglich, sehr hohes Risiko für Blackout.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Nüchterner Sitter notwendig.",
    "🚑 Bei Atemnot/Bewusstlosigkeit Notruf."
  ]
},
"Salvia divinorum+Kratom": {
  level: "caution",
  description: "🌿 Wenig untersucht. Kratom könnte die Sedierung verstärken oder Übelkeit auslösen.",
  tips: [
    "⚖️ Vorsichtig ausprobieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Übelkeit/Kreislaufproblemen."
  ]
},
"Salvia divinorum+Kokain": {
  level: "danger",
  description: "💥 Extreme Überreizung und Desorientierung möglich, unvorhersehbare Wechselwirkungen.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"Salvia divinorum+Salvia divinorum": {
  level: "danger",
  description: "🔁 Nachlegen kann zu extrem langer und verwirrender Dissoziation führen.",
  tips: [
    "❌ Kein Nachlegen.",
    "🧑‍🤝‍🧑 Nie allein konsumieren.",
    "🚑 Hilfe holen bei Kontrollverlust."
  ]
},
// HHC-Kombinationen

"HHC+THC": {
  level: "caution",
  description: "🍃 Beide wirken ähnlich, können sich gegenseitig verstärken. Stärkere Sedierung und Verwirrtheit möglich.",
  tips: [
    "⚖️ Kleine Mengen probieren.",
    "🧑‍🤝‍🧑 Nie alleine.",
    "🚑 Hilfe holen bei Kontrollverlust."
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
"HHC+Amphetamin": {
  level: "danger",
  description: "💥 Beide wirken stimulierend – Risiko für Herzrasen, Paranoia und Kreislaufprobleme.",
  tips: [
    "⚖️ Niedrig dosieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Unruhe/Herzrasen abbrechen."
  ]
},
"HHC+Ritalin": {
  level: "danger",
  description: "⚡ Kombi kann zu Nervosität, Herzrasen und starker Unruhe führen.",
  tips: [
    "⏳ Sehr langsam dosieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "❤️ Bei Herzproblemen meiden."
  ]
},
"HHC+Benzodiazepine": {
  level: "caution",
  description: "💤 Kombi kann starke Sedierung, Koordinationsprobleme und Blackouts auslösen.",
  tips: [
    "🛏️ Nicht alleine konsumieren.",
    "😴 Keine Maschinen bedienen/Auto fahren.",
    "🚑 Bei extremer Schläfrigkeit Hilfe holen."
  ]
},
"HHC+Tramadol": {
  level: "danger",
  description: "😴 Starke Müdigkeit, Koordinationsprobleme und Verwirrtheit möglich. Erhöhte Unfallgefahr.",
  tips: [
    "🛏️ Nur zu Hause/in sicherer Umgebung.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚗 Kein Fahren/Bedienen von Maschinen."
  ]
},
"HHC+Tilidin": {
  level: "danger",
  description: "💤 Verstärkte Sedierung, Schwindel und Atemdepression möglich.",
  tips: [
    "❌ Kombination meiden.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Bewusstlosigkeit Hilfe holen."
  ]
},
"HHC+GHB": {
  level: "caution",
  description: "💤 Beide wirken beruhigend und können die Sedierung verstärken. Blackout-Gefahr!",
  tips: [
    "🛏️ Nicht alleine, ruhige Umgebung.",
    "😴 Kein Fahren/Bedienen von Maschinen.",
    "🚑 Bei starker Benommenheit Notruf."
  ]
},
"HHC+JWH-018": {
  level: "danger",
  description: "🚩 Zwei Cannabinoide, eines synthetisch: Extreme Überforderung von Kreislauf und Psyche möglich.",
  tips: [
    "❌ Kombination vermeiden.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Psychose/Kollaps."
  ]
},
"HHC+Kratom": {
  level: "danger",
  description: "🌿 Beide können sedierend wirken, Atemdepression und starke Müdigkeit möglich.",
  tips: [
    "🛏️ Nur zu Hause/in ruhiger Umgebung.",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "🚑 Notruf bei Bewusstlosigkeit oder Atemproblemen."
  ]
},
"HHC+Methamphetamin": {
  level: "danger",
  description: "💥 Beide können Unruhe, Herzrasen und starke Verwirrtheit auslösen. Psychosegefahr!",
  tips: [
    "⚖️ Dosierung extrem niedrig halten.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "🚑 Bei Unruhe oder Psychosezeichen Notruf."
  ]
},
"HHC+Ketamin": {
  level: "danger",
  description: "🌫️ Verstärkte Dissoziation, Müdigkeit und Kontrollverlust möglich.",
  tips: [
    "💡 Licht gedimmt, ruhige Umgebung.",
    "🚨 Nicht alleine konsumieren.",
    "📉 Niedrige Dosierung."
  ]
},
"HHC+LSD": {
  level: "caution",
  description: "🔀 HHC kann LSD-Trip verstärken, verändern oder verlängern – mehr Sedierung, teils Verwirrung.",
  tips: [
    "🔎 Kleine Dosierungen wählen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🛏️ Viel Zeit zur Erholung."
  ]
},
"HHC+1V-LSD": {
  level: "caution",
  description: "🔀 HHC kann 1V-LSD-Trip verstärken oder sedieren, Wirkung kaum vorhersagbar.",
  tips: [
    "⚖️ Sehr niedrige Dosierungen.",
    "🧑‍🤝‍🧑 Mit erfahrenem Sitter.",
    "⏳ Wirkung beobachten."
  ]
},
"HHC+2C-B": {
  level: "caution",
  description: "🤹‍♂️ Kombination kann visuelle Effekte verstärken, aber auch sedieren – Wirkung individuell.",
  tips: [
    "🧑‍🤝‍🧑 Nur mit Vertrauten.",
    "🎢 Kleine Dosierung.",
    "🚫 Nicht am Peak kombinieren."
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
"HHC+Diazepam": {
  level: "caution",
  description: "💤 Sehr starke Sedierung möglich, Koordinations- und Gedächtnisprobleme.",
  tips: [
    "🛏️ Nur zu Hause.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Bewusstlosigkeit."
  ]
},
"HHC+Kokain": {
  level: "danger",
  description: "⚡️ Herz und Kreislauf werden stark belastet, Gefahr von Paranoia und Kontrollverlust.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Nie allein konsumieren.",
    "🚑 Hilfe holen bei Beschwerden."
  ]
},
"HHC+Methadon": {
  level: "danger",
  description: "💤 Beide sind sedierend – Gefahr für Atemdepression und Blackout.",
  tips: [
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🛏️ Nur zu Hause/in sicherer Umgebung.",
    "🚑 Bei Bewusstlosigkeit Notruf."
  ]
},
"HHC+Salvia divinorum": {
  level: "caution",
  description: "🌿 Salvia kann unter HHC-Verstärkung noch verwirrender wirken. Kontrollverlust und starker Realitätsverlust möglich.",
  tips: [
    "🧑‍🤝‍🧑 Nie alleine konsumieren.",
    "⚖️ Sehr niedrige Dosierung.",
    "🚑 Hilfe holen bei Kontrollverlust."
  ]
},
// 2C-B-Kombinationen

"2C-B+LSD": {
  level: "danger",
  description: "🧠 Sehr intensive psychedelische Synergie. Wirkung kaum vorhersehbar.",
  tips: [
    "⚖️ Niedrige Dosierungen verwenden.",
    "🧑‍🤝‍🧑 Trip-Sitter unbedingt erforderlich.",
    "⏳ Viel Zeit zur Erholung."
  ]
},
"2C-B+MDMA": {
  level: "danger",
  description: "🎢 Sehr intensiver, chaotischer Trip möglich – Herzbelastung, Kontrollverlust.",
  tips: [
    "🔎 Kleine Dosierungen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚫 Nicht nachlegen."
  ]
},
"2C-B+Alkohol": {
  level: "danger",
  description: "🌪️ Verstärkte Wahrnehmungsverzerrung, Übelkeit, Kontrollverlust.",
  tips: [
    "⚠️ Langsam dosieren.",
    "🏡 Nicht in der Öffentlichkeit.",
    "💤 Rückzugsort vorbereiten."
  ]
},
"2C-B+THC": {
  level: "caution",
  description: "🤹‍♂️ Wirkung schwer vorhersehbar – teils 'lustig', teils unangenehm.",
  tips: [
    "🧑‍🤝‍🧑 Nur mit Vertrauten.",
    "🎢 Kleine Dosierung.",
    "🚫 Nicht am Peak kombinieren."
  ]
},
"2C-B+Ketamin": {
  level: "danger",
  description: "🧠 Sehr intensive psychedelische Erfahrung, Wirkung schwer steuerbar.",
  tips: [
    "⚖️ Kleine Dosierungen.",
    "🧑‍🤝‍🧑 Trip-Sitter zwingend erforderlich.",
    "🚑 Hilfe holen bei Kontrollverlust."
  ]
},
"2C-B+Amphetamin": {
  level: "danger",
  description: "🎢 Sehr intensive, stimulierende und psychedelische Wirkung. Hohe Gefahr für Überhitzung, Panik, Kreislaufprobleme.",
  tips: [
    "⚖️ Kleine Dosen, Wirkung abwarten.",
    "🧑‍🤝‍🧑 Nie allein konsumieren.",
    "🚑 Bei Schwindel/Herzrasen sofort Hilfe."
  ]
},
"2C-B+Benzodiazepine": {
  level: "caution",
  description: "🛌 Benzodiazepine dämpfen 2C-B-Trips, können aber sehr müde und benommen machen.",
  tips: [
    "😌 Nur bei Bedarf (Unruhe/Bad Trip).",
    "🛏️ Nicht allein bleiben.",
    "🚑 Hilfe holen bei Bewusstlosigkeit."
  ]
},
"2C-B+Mirtazapin": {
  level: "caution",
  description: "🧪 Wirkung von 2C-B kann abgeschwächt oder verändert werden, starke Müdigkeit möglich.",
  tips: [
    "⏳ Wirkung beobachten.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "😴 Auf Müdigkeit achten."
  ]
},
"2C-B+Tramadol": {
  level: "danger",
  description: "⚡️ Beide können Krämpfe, Verwirrung und starke Sedierung verursachen.",
  tips: [
    "❌ Kombination vermeiden.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Problemen sofort Hilfe holen."
  ]
},
"2C-B+Ritalin": {
  level: "danger",
  description: "⚡️ Gefahr für Herzrasen, Panik und psychische Instabilität.",
  tips: [
    "⏳ Substanzen einzeln testen.",
    "🧑‍🤝‍🧑 Sitter empfehlenswert.",
    "🚑 Bei Unruhe/Herzrasen abbrechen."
  ]
},
"2C-B+1V-LSD": {
  level: "danger",
  description: "🧠 Sehr intensive psychedelische Synergie, Wirkung schwer einschätzbar.",
  tips: [
    "⚖️ Niedrige Dosierung.",
    "🧑‍🤝‍🧑 Trip-Sitter unerlässlich.",
    "🚑 Hilfe holen bei Kontrollverlust."
  ]
},
"2C-B+CBD": {
  level: "safe",
  description: "🌱 CBD kann 2C-B leicht beruhigen und hilft bei Unruhe.",
  tips: [
    "😌 CBD zur 'Notbremse' nutzen.",
    "🧑‍🤝‍🧑 Sitter trotzdem sinnvoll.",
    "🥤 Viel trinken."
  ]
},
"2C-B+GHB": {
  level: "danger",
  description: "🛌 Beide Substanzen wirken auf das zentrale Nervensystem, verstärkte Sedierung und Kontrollverlust möglich.",
  tips: [
    "🛏️ Nicht alleine konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Bewusstlosigkeit Hilfe holen."
  ]
},
"2C-B+Kratom": {
  level: "caution",
  description: "🌿 Kratom kann sedierend wirken, die 2C-B-Erfahrung verändern und vernebeln.",
  tips: [
    "🛏️ Ruhige Umgebung.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "😴 Auf Müdigkeit achten."
  ]
},
"2C-B+HHC": {
  level: "caution",
  description: "🤹‍♂️ Kombination kann visuelle Effekte verstärken, aber auch sedieren – Wirkung individuell.",
  tips: [
    "🧑‍🤝‍🧑 Nur mit Vertrauten.",
    "🎢 Kleine Dosierung.",
    "🚫 Nicht am Peak kombinieren."
  ]
},
"2C-B+Kokain": {
  level: "danger",
  description: "⚡️ Starke Kreislaufbelastung, Gefahr für Angst/Panik und Kontrollverlust.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Beschwerden."
  ]
},
"2C-B+Diazepam": {
  level: "caution",
  description: "🛌 Diazepam kann 2C-B dämpfen, macht aber sehr müde und benommen.",
  tips: [
    "😌 Nur bei Bad Trip.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Bewusstlosigkeit."
  ]
},
"2C-B+Salvia divinorum": {
  level: "danger",
  description: "🌪️ Beide psychedelisch, Wirkung kann extrem chaotisch, verwirrend und kaum steuerbar werden.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "🚑 Hilfe holen bei Kontrollverlust."
  ]
},
"2C-B+Methamphetamin": {
  level: "danger",
  description: "💥 Beide wirken sehr stimulierend – Herzrasen, Paranoia und Psychosegefahr.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Psychose/Herzproblemen."
  ]
},
"2C-B+Methadon": {
  level: "danger",
  description: "💤 Beide wirken zentralnervös, verstärkte Müdigkeit, Atemdepression und Kontrollverlust möglich.",
  tips: [
    "🛏️ Nicht alleine konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Atemnot/Bewusstlosigkeit Notruf."
  ]
},
"2C-B+Pilze": {
  level: "danger",
  description: "🎢 Beide sind psychedelisch, Wirkung kaum vorhersehbar. Gefahr von Überforderung und Kontrollverlust.",
  tips: [
    "❗ Sehr vorsichtig dosieren.",
    "🧑‍🤝‍🧑 Trip-Sitter zwingend.",
    "⏳ Genug Zeit für Erholung einplanen."
  ]
},
// Methadon (Methadone) - Kombis

"Methadon+Alkohol": {
  level: "deadly",
  description: "☠️ Beide wirken atemdepressiv – sehr hohes Risiko für Atemstillstand, Koma und Tod.",
  tips: [
    "❌ Niemals gemeinsam konsumieren!",
    "🚑 Notruf bei Bewusstlosigkeit.",
    "🧑‍🤝‍🧑 Sitter MUSS nüchtern sein."
  ]
},
"Methadon+Benzodiazepine": {
  level: "deadly",
  description: "☠️ Lebensgefahr durch Atemdepression, Koma und Tod, selbst bei therapeutischen Dosen.",
  tips: [
    "❌ Kombination streng vermeiden!",
    "🚑 Notruf bei Atemproblemen/Bewusstlosigkeit.",
    "🧑‍🤝‍🧑 Sitter muss absolut nüchtern bleiben."
  ]
},
"Methadon+GHB": {
  level: "deadly",
  description: "☠️ Sehr stark atemdepressiv – Lebensgefahr bereits bei kleinen Mengen.",
  tips: [
    "❌ Nie kombinieren.",
    "🚑 Notruf bei Problemen.",
    "🧑‍🤝‍🧑 Sitter MUSS nüchtern sein."
  ]
},
"Methadon+Tramadol": {
  level: "danger",
  description: "⚡️ Krampfgefahr und verstärkte atemdepressive Wirkung.",
  tips: [
    "❌ Nicht kombinieren.",
    "🚑 Bei Krampfanfällen/Problemen sofort Notruf.",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren."
  ]
},
"Methadon+Tilidin": {
  level: "danger",
  description: "⚡️ Zwei Opioide: Gefahr für Atemdepression, Übelkeit und Überdosierung.",
  tips: [
    "❌ Nicht kombinieren.",
    "🚑 Bei Problemen sofort Hilfe holen.",
    "🧑‍🤝‍🧑 Sitter ratsam."
  ]
},
"Methadon+MDMA": {
  level: "danger",
  description: "❤️ Herzbelastung, Gefahr für Kreislaufversagen und Serotonin-Syndrom.",
  tips: [
    "❌ Kombination vermeiden.",
    "🚑 Bei Unruhe/Fieber/Verwirrtheit sofort Notruf.",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren."
  ]
},
"Methadon+THC": {
  level: "caution",
  description: "😪 THC kann die sedierende Wirkung von Methadon verstärken – erhöhte Sturz- und Müdigkeitsgefahr.",
  tips: [
    "😴 Auf starke Müdigkeit achten.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚗 Kein Fahren/Maschinen bedienen."
  ]
},
"Methadon+CBD": {
  level: "caution",
  description: "🌱 Kann zusätzliche Müdigkeit, niedrigen Blutdruck und Benommenheit auslösen.",
  tips: [
    "😴 Mit Müdigkeit rechnen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚗 Kein Autofahren."
  ]
},
"Methadon+Ketamin": {
  level: "danger",
  description: "🌫️ Verstärkte Sedierung, Koordinationsprobleme und Gefahr für Atemdepression.",
  tips: [
    "🛏️ Nur in sicherer Umgebung.",
    "🧑‍🤝‍🧑 Nicht allein konsumieren.",
    "🚑 Hilfe holen bei Bewusstlosigkeit."
  ]
},
"Methadon+Kratom": {
  level: "danger",
  description: "⚡️ Zwei Opioid-Agonisten: Gefahr für Atemdepression und Übelkeit.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Notruf bei Atemproblemen."
  ]
},
"Methadon+Methamphetamin": {
  level: "danger",
  description: "⚡️ Gegensätzliche Wirkung, starke Belastung für Kreislauf, Psyche und Atmung.",
  tips: [
    "❌ Kombination vermeiden.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Notruf bei Herzrasen, Unruhe, Atemnot."
  ]
},
"Methadon+2C-B": {
  level: "danger",
  description: "💤 Beide wirken zentralnervös, verstärkte Müdigkeit, Atemdepression und Kontrollverlust möglich.",
  tips: [
    "🛏️ Nicht alleine konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Atemnot/Bewusstlosigkeit Notruf."
  ]
},
"Methadon+HHC": {
  level: "caution",
  description: "😪 Sedierung, Benommenheit und Sturzgefahr erhöht.",
  tips: [
    "🛏️ In sicherer Umgebung bleiben.",
    "🧑‍🤝‍🧑 Nicht allein konsumieren.",
    "😴 Kein Auto fahren/Maschinen bedienen."
  ]
},
"Methadon+LSD": {
  level: "caution",
  description: "🔄 Methadon kann die psychedelische Wirkung von LSD abmildern, macht aber müde.",
  tips: [
    "😴 Mit Müdigkeit rechnen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "❌ Kein Nachlegen."
  ]
},
"Methadon+Kokain": {
  level: "danger",
  description: "⚡️ Herzanstrengung und Atemdepression wechseln sich ab, erhöhtes Risiko für Kreislaufprobleme, Atemstillstand und Kontrollverlust.",
  tips: [
    "⏳ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"Methadon+Pilze": {
  level: "caution",
  description: "⬇️ Methadon kann psychedelische Effekte abschwächen und macht müde.",
  tips: [
    "😴 Nur in sicherer Umgebung.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "⏳ Wirkung einzeln beobachten."
  ]
},
"Methadon+Salvia divinorum": {
  level: "danger",
  description: "🌪️ Wirkung schwer vorhersehbar, erhöhte Verwirrung und Kontrollverlust.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei starker Verwirrung."
  ]
},
"Methadon+Methadon": {
  level: "deadly",
  description: "☠️ Mehrfachdosierung/Redosing von Methadon erhöht das Risiko für Atemstillstand, Bewusstlosigkeit und Tod.",
  tips: [
    "❌ Kein Redosing.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Atemstillstand/Bewusstlosigkeit sofort Notruf."
  ]
},
// DMT (N,N-Dimethyltryptamin) - Kombis

"DMT+Alkohol": {
  level: "danger",
  description: "😵 Alkohol kann die DMT-Wirkung stark dämpfen oder unberechenbar machen. Gefahr von Übelkeit, Blackout und Kontrollverlust.",
  tips: [
    "🛏️ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "⚠️ Ruhige, sichere Umgebung wählen."
  ]
},
"DMT+THC": {
  level: "caution",
  description: "🌈 THC kann DMT-Visuals und den Trip verstärken, kann aber auch Angst/Panik fördern.",
  tips: [
    "⚖️ Vorsichtig dosieren.",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "🎧 Ruhige Musik bereitstellen."
  ]
},
"DMT+CBD": {
  level: "safe",
  description: "🌱 CBD kann die psychedelische Wirkung leicht dämpfen und hilft bei Unruhe/Ängsten.",
  tips: [
    "😌 Bei Unruhe kleine Menge CBD einnehmen.",
    "🧑‍🤝‍🧑 Sitter trotzdem empfehlenswert.",
    "🥤 Viel trinken."
  ]
},
"DMT+Ketamin": {
  level: "danger",
  description: "🌀 Sehr intensive dissoziativ-psychedelische Erfahrung – Gefahr von Kontrollverlust, Verwirrung und Blackout.",
  tips: [
    "⚠️ Nur für sehr erfahrene User.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "⏳ Viel Zeit zur Erholung einplanen."
  ]
},
"DMT+MDMA": {
  level: "danger",
  description: "⚡️ Kombi kann starke emotionale Intensität, Überforderung und Kreislaufprobleme verursachen.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Problemen sofort Hilfe holen."
  ]
},
"DMT+2C-B": {
  level: "danger",
  description: "🎢 Zwei starke Psychedelika: unberechenbare Synergie, Gefahr von Angst, Kontrollverlust und Nachwirkungen.",
  tips: [
    "❗ Nur für extrem erfahrene Psychonauten.",
    "🧑‍🤝‍🧑 Trip-Sitter zwingend.",
    "⏳ Sehr niedrige Dosierung."
  ]
},
"DMT+1V-LSD": {
  level: "danger",
  description: "🚀 Sehr intensive, kurze, aber heftige Erfahrung – psychedelische Effekte und Kontrollverlust möglich.",
  tips: [
    "⚠️ Nur für Profis.",
    "🧑‍🤝‍🧑 Nie alleine.",
    "⏳ Viel Zeit zur Erholung."
  ]
},
"DMT+Mirtazapin": {
  level: "caution",
  description: "⬇️ Dämpft oft die psychedelische Wirkung, macht aber müde und kann verwirren.",
  tips: [
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "⏳ Wirkung abwarten.",
    "🛏️ Ruhige Umgebung."
  ]
},
"DMT+Benzodiazepine": {
  level: "caution",
  description: "🧘‍♂️ Benzodiazepine können einen DMT-Trip abbremsen oder beenden, wirken aber stark sedierend.",
  tips: [
    "❌ Nicht zur Verstärkung des Trips einsetzen.",
    "😌 Nur im Ausnahmefall (z.B. Panik) und unter Aufsicht.",
    "🛌 Nach Einnahme: Ruhig bleiben, nicht allein lassen."
  ]
},
"DMT+GHB": {
  level: "danger",
  description: "😵 GHB kann die psychedelischen Effekte von DMT abschwächen oder unvorhersehbar verändern. Erhöhtes Risiko für Kontrollverlust und Blackout.",
  tips: [
    "🧑‍🤝‍🧑 Niemals alleine konsumieren.",
    "⏳ Erst die Wirkung einer Substanz abklingen lassen.",
    "🚑 Bei Bewusstlosigkeit sofort Notruf."
  ]
},
"DMT+Tramadol": {
  level: "danger",
  description: "⚡️ Krampfanfälle, starke Sedierung und unvorhersehbare Wechselwirkungen möglich.",
  tips: [
    "❌ Kombination vermeiden.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Hilfe holen bei Muskelzucken/Bewusstlosigkeit."
  ]
},
"DMT+Tilidin": {
  level: "danger",
  description: "💤 Verstärkte Sedierung und Kontrollverlust möglich.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe bei Bewusstlosigkeit."
  ]
},
"DMT+Methadon": {
  level: "danger",
  description: "⬇️ Methadon kann psychedelische Effekte abschwächen, aber starke Sedierung und Atemdepression fördern.",
  tips: [
    "🛏️ Nur mit nüchternem Sitter.",
    "❌ Nicht gemeinsam konsumieren.",
    "🚑 Bei Problemen sofort Hilfe holen."
  ]
},
"DMT+Kratom": {
  level: "caution",
  description: "🌱 Kratom kann beruhigen, aber auch müde machen und den Trip verändern.",
  tips: [
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "😴 Wirkung beobachten.",
    "❌ Kein weiteres Nachlegen."
  ]
},
"DMT+Methamphetamin": {
  level: "danger",
  description: "⚡️ Extreme Überstimulation, Gefahr für Psyche, Kreislauf und Kontrollverlust.",
  tips: [
    "❌ Kombination vermeiden.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Notruf bei Herzrasen/Verwirrtheit."
  ]
},
"DMT+Kokain": {
  level: "danger",
  description: "⚡️ Extreme Belastung für Herz, Psyche und Kreislauf. Risiko für Angst, Überhitzung und Kontrollverlust.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Bei Problemen sofort Hilfe holen."
  ]
},
"DMT+Salvia divinorum": {
  level: "danger",
  description: "🌪️ Beide starke Psychedelika, Wirkung unvorhersehbar. Gefahr für Kontrollverlust, Verwirrung, Panik.",
  tips: [
    "❗ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "🚑 Hilfe bei Kontrollverlust."
  ]
},
"DMT+HHC": {
  level: "caution",
  description: "🍃 HHC kann DMT-Effekte verlängern/abmildern, aber auch Verwirrung oder Müdigkeit fördern.",
  tips: [
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "⚖️ Kleine Dosierungen.",
    "😌 Ruhige Umgebung."
  ]
},
"DMT+MDA": {
  level: "danger",
  description: "⚡️ Beide wirken sehr stark auf Psyche und Kreislauf, Gefahr für Überforderung, Angst und Nachwirkungen.",
  tips: [
    "❗ Nur für erfahrene User.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Problemen Hilfe holen."
  ]
},
"DMT+Pilze": {
  level: "danger",
  description: "🚀 Sehr intensive, kaum steuerbare psychedelische Wirkung. Realitätsverlust und Angst möglich.",
  tips: [
    "⚖️ Nur für sehr erfahrene User.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "⏳ Keine weiteren Substanzen nachlegen."
  ]
},
"DMT+Mescalin": {
  level: "danger",
  description: "🌈 Zwei starke Psychedelika – sehr lange und intensive Trips, Gefahr von Kontrollverlust.",
  tips: [
    "❗ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe bei Überforderung."
  ]
},
"DMT+DMT": {
  level: "danger",
  description: "🚀 Mehrere Dosen hintereinander verstärken die psychedelische Wirkung, können aber zu extremer Verwirrung und Kontrollverlust führen.",
  tips: [
    "⏳ Immer Pause zwischen den Dosen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Kontrollverlust."
  ]
},
// 3-MMC (3-Methylmethcathinon) - Kombis

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
"3-MMC+4-MMC": {
  level: "danger",
  description: "💥 Kombination aus zwei Cathinonen – extrem hohe Stimulation, hohe Sucht- und Herzgefahr.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Überhitzung, Krämpfen, Herzproblemen."
  ]
},
"3-MMC+2C-B": {
  level: "danger",
  description: "🎢 Beide stimulierend und psychedelisch – Gefahr für Überhitzung, Paranoia, Kontrollverlust.",
  tips: [
    "⚠️ Kleine Dosierungen wählen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Notruf bei starker Unruhe/Kollaps."
  ]
},
"3-MMC+Kokain": {
  level: "danger",
  description: "❗ Zwei Stimulanzien – Herzrasen, Krampfanfälle und Psychosen möglich.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"3-MMC+Amphetamin": {
  level: "danger",
  description: "💥 Sehr starke Überstimulation – Gefahr für Überhitzung, Herzprobleme und Panik.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter empfehlenswert.",
    "🚑 Notruf bei Symptomen."
  ]
},
"3-MMC+Ritalin": {
  level: "danger",
  description: "⚡️ Beide wirken stimulierend – erhöhte Gefahr für Herzrasen, Schlaflosigkeit und Psychosen.",
  tips: [
    "❌ Kombination vermeiden.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Nebenwirkungen."
  ]
},
"3-MMC+Mirtazapin": {
  level: "caution",
  description: "⚠️ Wirkung gegenseitig abschwächend oder unberechenbar, starke Müdigkeit möglich.",
  tips: [
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "⏳ Erst Wirkung abwarten.",
    "😴 Keine weiteren Dosen."
  ]
},
"3-MMC+Benzodiazepine": {
  level: "danger",
  description: "💥 Risiko für Kreislauf, psychische Instabilität, starke Müdigkeit nach Wirkungseinbruch.",
  tips: [
    "⏳ Substanzen trennen, nie gleichzeitig konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Problemen Notruf."
  ]
},
"3-MMC+Tramadol": {
  level: "danger",
  description: "⚡️ Serotonin-Syndrom und Krampfanfälle möglich, sehr riskant.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Muskelzucken, Fieber, Verwirrtheit."
  ]
},
"3-MMC+Tilidin": {
  level: "danger",
  description: "💤 Gefahr für starke Müdigkeit, Atemdepression und Kontrollverlust.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Notruf bei Bewusstlosigkeit."
  ]
},
"3-MMC+Methadon": {
  level: "danger",
  description: "⚠️ Sehr hohe Belastung für Kreislauf und Psyche, Risiko für Atemdepression.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe bei Problemen holen."
  ]
},
"3-MMC+Kratom": {
  level: "caution",
  description: "🌱 Kann Wirkung von 3-MMC dämpfen, aber auch Müdigkeit und Übelkeit verstärken.",
  tips: [
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "😌 Wirkung beobachten.",
    "❌ Kein weiteres Nachlegen."
  ]
},
"3-MMC+Methamphetamin": {
  level: "danger",
  description: "⚡️ Extreme Stimulation, Gefahr für Kreislauf, Psyche und Überhitzung.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Notruf bei Symptomen."
  ]
},
"3-MMC+DMT": {
  level: "danger",
  description: "⚡️ Zwei stark psychoaktive Substanzen – Wirkung schwer vorhersagbar, Gefahr für Überforderung und Kreislaufprobleme.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"3-MMC+Salvia divinorum": {
  level: "danger",
  description: "🌪️ Wirkung kaum vorhersehbar, Gefahr von Verwirrung, Kontrollverlust und Kreislaufbelastung.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "🚑 Hilfe holen bei Kontrollverlust."
  ]
},
"3-MMC+HHC": {
  level: "caution",
  description: "🍃 Wirkung kann sich gegenseitig verstärken oder abschwächen – Unruhe, Müdigkeit und Kreislaufprobleme möglich.",
  tips: [
    "⚖️ Kleine Dosierung.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "😌 Bei Problemen abbrechen."
  ]
},
"3-MMC+Pilze": {
  level: "danger",
  description: "💣 Extrem intensive und schwer steuerbare psychedelisch-stimulierende Erfahrung – hohes Risiko für Angst, Überhitzung und Kontrollverlust.",
  tips: [
    "❗ Nur für sehr erfahrene User.",
    "🧑‍🤝‍🧑 Trip-Sitter zwingend.",
    "⏳ Genug Zeit für Erholung einplanen."
  ]
},
"3-MMC+3-MMC": {
  level: "danger",
  description: "💥 Nachlegen kann zu sehr starker Überreizung, Angst, Kreislaufproblemen und Psychosen führen.",
  tips: [
    "⏳ Wirkung abwarten, nicht nachlegen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Nebenwirkungen."
  ]
},
// 4-MMC (Mephedron) - Kombis

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
"4-MMC+3-MMC": {
  level: "danger",
  description: "💥 Kombination aus zwei Cathinonen – extrem hohe Stimulation, hohe Sucht- und Herzgefahr.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Überhitzung, Krämpfen, Herzproblemen."
  ]
},
"4-MMC+2C-B": {
  level: "danger",
  description: "🎢 Beide stimulierend und psychedelisch – Gefahr für Überhitzung, Paranoia, Kontrollverlust.",
  tips: [
    "⚠️ Kleine Dosierungen wählen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Notruf bei starker Unruhe/Kollaps."
  ]
},
"4-MMC+Kokain": {
  level: "danger",
  description: "❗ Zwei Stimulanzien – Herzrasen, Krampfanfälle und Psychosen möglich.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"4-MMC+Amphetamin": {
  level: "danger",
  description: "💥 Extrem starke Stimulation – Gefahr von Überhitzung, Krampfanfällen und Psychosen.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍⚕️ Puls und Temperatur kontrollieren.",
    "🚑 Notruf bei Krämpfen oder Kollaps."
  ]
},
"4-MMC+Ritalin": {
  level: "danger",
  description: "⚡️ Beide wirken stimulierend – erhöhte Gefahr für Herzrasen, Schlaflosigkeit und Psychosen.",
  tips: [
    "❌ Kombination vermeiden.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Nebenwirkungen."
  ]
},
"4-MMC+Mirtazapin": {
  level: "caution",
  description: "⚠️ Wirkung gegenseitig abschwächend, verstärkte Nebenwirkungen möglich.",
  tips: [
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "⏳ Wirkung einzeln testen.",
    "🚑 Bei Unwohlsein sofort Hilfe holen."
  ]
},
"4-MMC+Benzodiazepine": {
  level: "danger",
  description: "💥 Risiko für Kreislauf, psychische Instabilität, starke Müdigkeit nach Wirkungseinbruch.",
  tips: [
    "⏳ Substanzen trennen, nie gleichzeitig konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Problemen Notruf."
  ]
},
"4-MMC+Tramadol": {
  level: "danger",
  description: "⚡️ Serotonin-Syndrom und Krampfanfälle möglich, sehr riskant.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Muskelzucken, Fieber, Verwirrtheit."
  ]
},
"4-MMC+Tilidin": {
  level: "danger",
  description: "💤 Gefahr für starke Müdigkeit, Atemdepression und Kontrollverlust.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Notruf bei Bewusstlosigkeit."
  ]
},
"4-MMC+Methadon": {
  level: "danger",
  description: "⚠️ Sehr hohe Belastung für Kreislauf und Psyche, Risiko für Atemdepression.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe bei Problemen holen."
  ]
},
"4-MMC+Kratom": {
  level: "caution",
  description: "🌱 Kann Wirkung von 4-MMC dämpfen, aber auch Müdigkeit und Übelkeit verstärken.",
  tips: [
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "😌 Wirkung beobachten.",
    "❌ Kein weiteres Nachlegen."
  ]
},
"4-MMC+Methamphetamin": {
  level: "danger",
  description: "⚡️ Extreme Stimulation, Gefahr für Kreislauf, Psyche und Überhitzung.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Notruf bei Symptomen."
  ]
},
"4-MMC+DMT": {
  level: "danger",
  description: "⚡️ Zwei stark psychoaktive Substanzen – Wirkung schwer vorhersagbar, Gefahr für Überforderung und Kreislaufprobleme.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"4-MMC+Salvia divinorum": {
  level: "danger",
  description: "🌪️ Wirkung kaum vorhersehbar, Gefahr von Verwirrung, Kontrollverlust und Kreislaufbelastung.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "🚑 Hilfe holen bei Kontrollverlust."
  ]
},
"4-MMC+HHC": {
  level: "caution",
  description: "🍃 Wirkung kann sich gegenseitig verstärken oder abschwächen – Unruhe, Müdigkeit und Kreislaufprobleme möglich.",
  tips: [
    "⚖️ Kleine Dosierung.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "😌 Bei Problemen abbrechen."
  ]
},
"4-MMC+Pilze": {
  level: "danger",
  description: "💣 Extrem intensive und schwer steuerbare psychedelisch-stimulierende Erfahrung – hohes Risiko für Angst, Überhitzung und Kontrollverlust.",
  tips: [
    "❗ Nur für sehr erfahrene User.",
    "🧑‍🤝‍🧑 Trip-Sitter zwingend.",
    "⏳ Genug Zeit für Erholung einplanen."
  ]
},
"4-MMC+4-MMC": {
  level: "deadly",
  description: "☠️ Sehr hohes Risiko für Überhitzung, Krampfanfälle, Herzinfarkt und Psychosen.",
  tips: [
    "❌ Kein Redosing.",
    "🚑 Hilfe holen bei Problemen.",
    "🧑‍🤝‍🧑 Nie alleine konsumieren."
  ]
},
// MDA - Kombis

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
"MDA+Alkohol": {
  level: "danger",
  description: "🍻 Verstärkte Kreislaufbelastung, erhöhte Enthemmung und Kontrollverlust.",
  tips: [
    "💧 Viel Wasser trinken.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Bewusstlosigkeit Hilfe holen."
  ]
},
"MDA+THC": {
  level: "caution",
  description: "🍁 Kann Euphorie verstärken, aber auch Angst und Herzrasen auslösen.",
  tips: [
    "⚖️ Kleine Dosierung.",
    "🧑‍🤝‍🧑 Sitter empfehlenswert.",
    "😌 Ruhige Umgebung."
  ]
},
"MDA+Ketamin": {
  level: "danger",
  description: "🌀 Sehr intensive Dissoziation und Psychedelik – Gefahr für Kontrollverlust und Verwirrtheit.",
  tips: [
    "❗ Nur für sehr erfahrene User.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"MDA+GHB": {
  level: "danger",
  description: "⚡️ Herz und Kreislauf werden stark belastet. Risiko für Überhitzung, Atemprobleme und Kontrollverlust.",
  tips: [
    "🧑‍🤝‍🧑 Nie alleine konsumieren.",
    "🚑 Bei Problemen Notruf.",
    "⏳ Besser einzeln konsumieren."
  ]
},
"MDA+Benzodiazepine": {
  level: "danger",
  description: "💥 Gefahr für Kreislauf, Sedierung und Blackout – besonders riskant bei Überhitzung oder Dehydrierung.",
  tips: [
    "🚫 Kombination vermeiden.",
    "🧑‍🤝‍🧑 Nie allein konsumieren.",
    "🚑 Notruf bei Bewusstlosigkeit oder Atemnot."
  ]
},
"MDA+Mirtazapin": {
  level: "caution",
  description: "⬇️ Mirtazapin dämpft MDA, starke Müdigkeit möglich.",
  tips: [
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "😴 Auf starke Sedierung achten.",
    "🛑 Kein Nachlegen."
  ]
},
"MDA+4-MMC": {
  level: "danger",
  description: "⚡️ Zwei starke Stimulanzien – hohes Risiko für Kreislaufversagen, Überhitzung und Psychosen.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Notruf bei Problemen."
  ]
},
"MDA+3-MMC": {
  level: "danger",
  description: "💥 Zwei stimulierende Substanzen – sehr hohe Belastung für Herz und Psyche.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Herzrasen, Unruhe, Überhitzung."
  ]
},
"MDA+Kokain": {
  level: "deadly",
  description: "☠️ Zwei starke Stimulanzien – hohes Risiko für Herzinfarkt, Krämpfe und Psychosen.",
  tips: [
    "❌ Auf keinen Fall kombinieren!",
    "🚑 Notruf bei Symptomen.",
    "🧑‍🤝‍🧑 Sitter muss nüchtern sein."
  ]
},
"MDA+Amphetamin": {
  level: "danger",
  description: "💥 Extrem starke Stimulation – Überhitzung, Panik, Kreislaufprobleme möglich.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍⚕️ Puls/Kreislauf beobachten.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"MDA+Ritalin": {
  level: "danger",
  description: "⚡️ Beide wirken stimulierend – sehr hohe Belastung für Herz und Psyche.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Beschwerden Hilfe holen."
  ]
},
"MDA+Tramadol": {
  level: "danger",
  description: "⚡️ Risiko für Serotonin-Syndrom, Krampfanfälle und starke Nebenwirkungen.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Muskelzucken/Fieber sofort Notruf."
  ]
},
"MDA+Tilidin": {
  level: "danger",
  description: "💤 Gefahr für Sedierung, Atemdepression und Kontrollverlust.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Notruf bei Bewusstlosigkeit."
  ]
},
"MDA+Methadon": {
  level: "danger",
  description: "⚠️ Sehr hohe Belastung für Kreislauf und Psyche, Risiko für Atemdepression.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe bei Problemen holen."
  ]
},
"MDA+Kratom": {
  level: "caution",
  description: "🌱 Kann sedierend wirken und MDA dämpfen, aber auch Nebenwirkungen wie Übelkeit verstärken.",
  tips: [
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "😌 Wirkung beobachten.",
    "❌ Kein weiteres Nachlegen."
  ]
},
"MDA+Methamphetamin": {
  level: "danger",
  description: "⚡️ Extreme Stimulation, Gefahr für Kreislauf, Psyche und Überhitzung.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Notruf bei Symptomen."
  ]
},
"MDA+DMT": {
  level: "danger",
  description: "🚀 Sehr intensive psychedelische Erfahrung, Gefahr für Überforderung und Kontrollverlust.",
  tips: [
    "⚠️ Nur für sehr erfahrene User.",
    "🧑‍🤝‍🧑 Trip-Sitter ratsam.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"MDA+Salvia divinorum": {
  level: "danger",
  description: "🌪️ Wirkung kaum vorhersehbar, Gefahr von Verwirrung, Kontrollverlust und Kreislaufbelastung.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "🚑 Hilfe holen bei Kontrollverlust."
  ]
},
"MDA+HHC": {
  level: "caution",
  description: "🍃 Kann Wirkung verstärken oder abschwächen, Gefahr für Unruhe oder starke Müdigkeit.",
  tips: [
    "⚖️ Kleine Dosierung.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "😌 Bei Problemen abbrechen."
  ]
},
"MDA+Pilze": {
  level: "danger",
  description: "💣 Intensivierende Kombination – Gefahr für Kontrollverlust, Angst und psychische Nachwirkungen.",
  tips: [
    "❗ Nur sehr erfahrene User.",
    "🧑‍🤝‍🧑 Sitter zwingend.",
    "⏳ Viel Zeit zur Erholung."
  ]
},
"MDA+MDA": {
  level: "deadly",
  description: "☠️ Doppelte Dosis bedeutet extrem hohe Belastung für Herz und Psyche, Gefahr für Überhitzung und Serotoninsyndrom.",
  tips: [
    "❌ Kein Nachlegen.",
    "🚑 Notruf bei Überhitzung, Krämpfen, Verwirrtheit.",
    "🧑‍🤝‍🧑 Nie alleine konsumieren."
  ]
},
// JWH-018 - Kombis

"JWH-018+THC": {
  level: "danger",
  description: "⚠️ Synthetisches Cannabinoid (JWH-018) kann mit THC zusammen zu extremen Psychosen führen.",
  tips: [
    "❌ Kombination meiden.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Bei starken Nebenwirkungen Hilfe holen."
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
"JWH-018+Ketamin": {
  level: "danger",
  description: "🌫️ Kombination kann zu Verwirrtheit, Blackout und extrem starker Sedierung führen.",
  tips: [
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "🛏️ Ruhige Umgebung.",
    "🚑 Hilfe holen bei Bewusstlosigkeit."
  ]
},
"JWH-018+Benzodiazepine": {
  level: "danger",
  description: "🚩 Unberechenbare Verstärkung von Sedierung und Psychoserisiko, extreme Verwirrtheit und Kontrollverlust möglich.",
  tips: [
    "⚠️ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei starken Nebenwirkungen sofort Hilfe holen."
  ]
},
"JWH-018+GHB": {
  level: "danger",
  description: "⚠️ Gefahr von starker Sedierung, Verwirrtheit und Kontrollverlust. Atemstillstand möglich.",
  tips: [
    "🛏️ Nur mit nüchternem Sitter.",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "🚑 Bei Atemnot/Bewusstlosigkeit Notruf."
  ]
},
"JWH-018+Amphetamin": {
  level: "danger",
  description: "⚠️ Synthetisches Cannabinoid plus Stimulans: Unberechenbare, oft toxische Effekte.",
  tips: [
    "❌ Kombination meiden.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Hilfe bei Psychose/Kreislaufproblemen."
  ]
},
"JWH-018+4-MMC": {
  level: "danger",
  description: "⚡️ Kombination kann Herzrasen, Angst, Psychosen und schwere Nebenwirkungen auslösen.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Problemen Hilfe holen."
  ]
},
"JWH-018+3-MMC": {
  level: "danger",
  description: "⚡️ Sehr unberechenbar, Gefahr für Kreislauf, Psychose und Kontrollverlust.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"JWH-018+Mirtazapin": {
  level: "danger",
  description: "⚠️ Extrem sedierend, Verwirrung und Blackout möglich.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Niemals alleine.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"JWH-018+Kokain": {
  level: "danger",
  description: "⚠️ Kann psychotische Symptome, starke Verwirrung und Kreislaufprobleme auslösen.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"JWH-018+Ritalin": {
  level: "danger",
  description: "😰 Unruhe, Angst, Psychose und Herzrasen möglich.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Problemen Notruf."
  ]
},
"JWH-018+HHC": {
  level: "danger",
  description: "🍃 Kombination mit anderen Cannabinoiden kann Wirkung unberechenbar verstärken (Psychose, Angst, Kreislaufprobleme).",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe bei Kontrollverlust."
  ]
},
"JWH-018+Kratom": {
  level: "danger",
  description: "🌱 Sehr starke Sedierung, Übelkeit und Verwirrung möglich.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei starker Benommenheit Hilfe holen."
  ]
},
"JWH-018+Tilidin": {
  level: "danger",
  description: "💤 Gefahr für starke Sedierung, Kontrollverlust und Atemprobleme.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Hilfe holen bei Bewusstlosigkeit."
  ]
},
"JWH-018+Tramadol": {
  level: "danger",
  description: "⚡️ Sehr starke Sedierung, Verwirrtheit und Krampfanfälle möglich.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Muskelzucken/Bewusstlosigkeit."
  ]
},
"JWH-018+Methamphetamin": {
  level: "danger",
  description: "⚡️ Unberechenbare Wirkung, Risiko für Psychose, Herzrasen und Kontrollverlust.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Problemen."
  ]
},
"JWH-018+DMT": {
  level: "danger",
  description: "🚀 Kann psychedelische Effekte unvorhersehbar und sehr unangenehm machen, Gefahr für Angst und Kontrollverlust.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Kontrollverlust Hilfe holen."
  ]
},
"JWH-018+MDA": {
  level: "danger",
  description: "💥 Gefahr für extreme Verwirrung, Kreislaufprobleme und Psychosen.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Bei Problemen Notruf."
  ]
},
"JWH-018+Methadon": {
  level: "danger",
  description: "💤 Beide sehr sedierend, Gefahr für Atemdepression und Blackout.",
  tips: [
    "❌ Nicht kombinieren.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Hilfe bei Bewusstlosigkeit."
  ]
},
"JWH-018+JWH-018": {
  level: "danger",
  description: "🚩 Nachlegen von synthetischen Cannabinoiden kann zu Psychosen, Krämpfen und schweren Vergiftungen führen.",
  tips: [
    "❌ Kein Nachlegen.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei schweren Nebenwirkungen."
  ]
},
"6-APB+Alkohol": {
  level: "danger",
  description: "🍷 Alkohol und 6-APB belasten Herz, Kreislauf und Psyche stark. Erhöhtes Risiko für Überhitzung, Kontrollverlust und Blackout.",
  tips: [
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "💧 Viel Wasser trinken, aber nicht übertreiben.",
    "🚑 Bei Kreislaufproblemen oder Ohnmacht sofort Notruf."
  ]
},
"6-APB+MDMA": {
  level: "danger",
  description: "⚡️ Beide wirken stark entaktogen und stimulierend. Extreme Belastung für Herz, Kreislauf und Psyche, hohe Gefahr für Serotoninsyndrom.",
  tips: [
    "❌ Nicht kombinieren!",
    "🚑 Hilfe holen bei Überhitzung, Krämpfen oder Verwirrtheit.",
    "🧑‍🤝‍🧑 Sitter unbedingt erforderlich."
  ]
},
"6-APB+MDA": {
  level: "danger",
  description: "🔥 Beide Substanzen wirken stark empathogen/stimulierend. Sehr hohe Gefahr für Überhitzung, Krampfanfälle und Serotoninsyndrom.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "🚑 Notruf bei Überhitzung, Krämpfen oder Unwohlsein."
  ]
},
"6-APB+2C-B": {
  level: "danger",
  description: "🎢 Sehr intensive psychedelische und empathogene Wirkung. Überforderung, Kontrollverlust und Kreislaufprobleme möglich.",
  tips: [
    "🧑‍🤝‍🧑 Trip-Sitter zwingend erforderlich.",
    "⚖️ Nur sehr niedrige Dosierungen.",
    "🚑 Hilfe holen bei starker Überforderung."
  ]
},
"6-APB+Ketamin": {
  level: "danger",
  description: "🌀 Dissoziation plus Stimulation – Gefahr für Realitätsverlust, Kreislaufprobleme und Psychosen.",
  tips: [
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "⏳ Erst Wirkung einer Substanz abwarten.",
    "🚑 Hilfe holen bei starker Verwirrung oder Kontrollverlust."
  ]
},
"6-APB+THC": {
  level: "caution",
  description: "🍃 Kann Wirkung intensivieren, teils Euphorie, teils Angst und Paranoia verstärken.",
  tips: [
    "⚖️ Kleine Dosis THC nach 6-APB.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "😌 Bei Unruhe ruhige Umgebung aufsuchen."
  ]
},
"6-APB+GHB": {
  level: "danger",
  description: "☠️ Massive Belastung für Kreislauf und Atmung, Lebensgefahr durch Atemstillstand.",
  tips: [
    "❌ Nicht kombinieren!",
    "🚑 Notruf bei Bewusstlosigkeit.",
    "🧑‍🤝‍🧑 Sitter muss nüchtern sein."
  ]
},
"6-APB+Benzodiazepine": {
  level: "danger",
  description: "⚡️ Kombination kann zu starker Sedierung, Herzproblemen und Kreislaufversagen führen.",
  tips: [
    "🚫 Kombination vermeiden.",
    "🧑‍🤝‍🧑 Nicht alleine konsumieren.",
    "🚑 Notruf bei Symptomen."
  ]
},
"6-APB+Mirtazapin": {
  level: "caution",
  description: "⚠️ Wirkung kann sich abschwächen, Müdigkeit und Kreislaufprobleme möglich.",
  tips: [
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "⏳ Wirkung beobachten.",
    "🚑 Bei Problemen Hilfe holen."
  ]
},
"6-APB+JWH-018": {
  level: "danger",
  description: "⚡️ Sehr unberechenbare Kombination. Risiko für Angst, Psychose, extreme Verwirrung und Herzprobleme.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter zwingend erforderlich.",
    "🚑 Bei Herzrasen, starker Unruhe oder Kontrollverlust sofort Hilfe holen."
  ]
},
"6-APB+4-MMC": {
  level: "danger",
  description: "💥 Sehr starke Stimulation, Überhitzungsgefahr und Kreislaufprobleme.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Herzrasen oder Überhitzung."
  ]
},
"6-APB+3-MMC": {
  level: "danger",
  description: "💥 Extreme Belastung für Herz und Kreislauf, erhöhtes Risiko für Überhitzung, Krämpfe und Psychosen.",
  tips: [
    "❌ Nicht gemeinsam konsumieren.",
    "🧑‍🤝‍🧑 Sitter ratsam.",
    "🚑 Hilfe holen bei Symptomen."
  ]
},
"6-APB+Methamphetamin": {
  level: "deadly",
  description: "☠️ Zwei extrem starke Stimulanzien! Sehr hohes Risiko für Herzinfarkt, Krampfanfälle, Psychosen, Kreislaufversagen.",
  tips: [
    "❌ Keinesfalls kombinieren!",
    "🚑 Bei Brustschmerzen, Unruhe, Krämpfen sofort Notruf.",
    "🧑‍🤝‍🧑 Nie alleine konsumieren."
  ]
},
"6-APB+Kokain": {
  level: "deadly",
  description: "☠️ Zwei starke Upper: Sehr hohes Risiko für Herzinfarkt, Psychosen, Krampfanfälle, Überhitzung.",
  tips: [
    "❌ Kombination streng meiden!",
    "🚑 Hilfe holen bei Symptomen.",
    "🧑‍🤝‍🧑 Sitter ratsam."
  ]
},
"6-APB+Amphetamin": {
  level: "deadly",
  description: "☠️ Beide wirken sehr stark stimulierend. Extrem hohe Gefahr für Kreislaufversagen, Herzinfarkt, Überhitzung, Psychose.",
  tips: [
    "❌ Nie kombinieren.",
    "🚑 Hilfe holen bei Symptomen.",
    "🧑‍🤝‍🧑 Nie alleine konsumieren."
  ]
},
"6-APB+LSD": {
  level: "danger",
  description: "🌈 Massive psychedelische/empathogene Synergie. Sehr intensive, überwältigende Erfahrung, Risiko für Kontrollverlust.",
  tips: [
    "🧑‍🤝‍🧑 Trip-Sitter zwingend.",
    "⚖️ Sehr niedrige Dosierungen.",
    "⏳ Viel Zeit für Erholung einplanen."
  ]
},
"6-APB+1V-LSD": {
  level: "danger",
  description: "🌈 1V-LSD verstärkt den psychedelischen Anteil von 6-APB stark. Risiko für Kontrollverlust, Angst/Panik.",
  tips: [
    "🧑‍🤝‍🧑 Sitter erforderlich.",
    "⚖️ Kleine Dosierung, Wirkung abwarten.",
    "🚑 Bei Kontrollverlust oder Angst Hilfe holen."
  ]
},
"6-APB+6-APB": {
  level: "danger",
  description: "💥 Nachlegen erhöht Risiko für Überhitzung, Angst, Kreislaufprobleme und Serotoninsyndrom.",
  tips: [
    "❌ Kein Redosing.",
    "🚑 Hilfe holen bei Nebenwirkungen.",
    "🧑‍🤝‍🧑 Sitter ratsam."
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
