let races = [
{
    raceName:"Abyssal Tiefling",
    id: "rac1",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [3, 10, 16, 275, 300],
    cultures: [
        {
            cultureName: "Bari",
            id: "cul1-1",
            generalGrowthRate: 0.005,
            acceptedOutlooks: [
                "decedent", "expansionist", "collectivist"
            ],
            promotedMotives: [
                "pleasure", "control", "adventure"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 5, 
            culturalTraits: [
                "lustful", "carnal", "decadent", "exessive", "loyal", "wanderlust", "rowdy", "spontaneous"
            ],
            details: "Abyssal Tieflings that settled upon the Barchine Islands"
        },
        {
            cultureName: "Rua",
            id: "cul1-2",
            generalGrowthRate: 0.005,
            acceptedOutlooks: [
                "decedent", "expansionist", "collectivist", "militaristic"
            ],
            promotedMotives: [
                "pleasure", "control", "power"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 6, 
            culturalTraits: [
                "lustful", "carnal", "decadent", "exessive", "loyal", "harsh", "ambitious", "methodic"
            ],
            details: "Abyssal Tieflings that settled in Covenhome"
        },
        {
            cultureName: "Alyiatian",
            id: "cul1-3",
            generalGrowthRate: 0.005,
            acceptedOutlooks: [
                "decedent", "religious", "collectivist"
            ],
            promotedMotives: [
                "pleasure", "comforts", "family"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 10, 
            culturalTraits: [
                "lustful", "carnal", "decadent", "exessive", "loyal", "romantic", "flirtatious", "social", "simple-minded"
            ],
            details: "Abyssal Tieflings that settled in Covenhome"
        },
        {
            cultureName: "Xlivi",
            id: "cul1-4",
            generalGrowthRate: 0.005,
            acceptedOutlooks: [
                "decedent", "isolationist", "collectivist"
            ],
            promotedMotives: [
                "pleasure", "control", "family", "security"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 6, 
            culturalTraits: [
                "lustful", "carnal", "decadent", "loyal", "secretive", "romantic", "cautious"
            ],
            details: "Abyssal Tieflings that settled in Xlivzra"
        },
        {
            cultureName: "Syesi",
            id: "cul1-5",
            generalGrowthRate: 0.005,
            acceptedOutlooks: [
                "decedent", "expansionist", "academic"
            ],
            promotedMotives: [
                "pleasure", "freedom", "wealth"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 7, 
            culturalTraits: [
                "lustful", "carnal", "decadent", "exessive", "intellectual", "reckless", "ambitious" 
            ],
            details: "Abyssal Tieflings that settled in the province of Benir, Ranthuk"
        },
        {
            cultureName: "Lieri",
            id: "cul1-6",
            generalGrowthRate: 0.005,
            acceptedOutlooks: [
                "decedent", "expansionist", "collectivist", "academic"
            ],
            promotedMotives: [
                "pleasure", "knowledge", "purpose"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 5, 
            culturalTraits: [
                "lustful", "carnal", "decadent", "exessive", "loyal", "open", "ambitious", "polite"
            ],
            details: "Abyssal Tieflings that settled in Lichindow"
        },
        {
            cultureName: "Yusui",
            id: "cul1-7",
            generalGrowthRate: 0.005,
            acceptedOutlooks: [
                "decedent", "expansionist", "mercantile"
            ],
            promotedMotives: [
                "pleasure", "control", "wealth"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 5, 
            culturalTraits: [
                "lustful", "carnal", "decadent", "exessive", "hot-tempered", "aggressive", "aromantic"
            ],
            details: "Abyssal Tieflings that settled in Lichindow"
        },
        {
            cultureName: "Qwasyuri",
            id: "cul1-8",
            generalGrowthRate: 0.005,
            acceptedOutlooks: [
                "decedent", "collectivist", "agricultural"
            ],
            promotedMotives: [
                "pleasure", "family", "comforts"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 8, 
            culturalTraits: [
                "lustful", "carnal", "decadent", "loyal", "passive", "grounded", "content", "arrogant", "realist"
            ],
            details: "Abyssal Tieflings that settled in Lichindow"
        }
    ]

},
{
    raceName:"Blazic",
    id: "rac2",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [5, 13, 125, 575, 600],
    cultures: [
        {
            cultureName: "Zahcraherian",
            id: "cul2-1",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "isolationist", "secretive"
            ],
            promotedMotives: [
                "security"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "secretive", "cautious", "untrusting", "despondent", "pragmatic", "methodic"
            ],
            details: "Native to northern Furcais"
        },
        {
            cultureName: "Krethi",
            id: "cul2-2",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "expansionist", "reformist", "moralists"
            ],
            promotedMotives: [
                "revenge", "family"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 4, 
            culturalTraits: [
                "cautious", "untrusting", "ambitious", "methodic", "honest", "honourable", "moral", "loyal"
            ],
            details: "Native to the Krether region of Furcais"
        },
        {
            cultureName: "Kharian",
            id: "cul2-3",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "pacifist", "civil", "honest"
            ],
            promotedMotives: [
                "family", "security", "peace"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "polite", "just", "kind", "methodic", "honest", "honourable", "loyal"
            ],
            details: "Native to the deserts of northern Khariss"
        }
    ]

},
{
    raceName:"Centaur",
    id: "rac3",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [3, 9, 16, 80, 105],
    cultures: [
        {
            cultureName: "Ablieryarg",
            id: "cul3-1",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "expansionist", "militaristic", "supremacist"
            ],
            promotedMotives: [
                "fame", "family", "adventure"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 9, 
            culturalTraits: [
                "aggressive", "honourable", "reckless", "brave", "arrogant", "loyal"
            ],
            details: "Centaurs native to eastern Ochvir"
        },
        {
            cultureName: "Dralba",
            id: "cul3-2",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "collectivist", "traditionalist", "honest"
            ],
            promotedMotives: [
                "peace", "family"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 7, 
            culturalTraits: [
                "honest", "honourable", "loyal", "arrogant", "open", "content", "serious"
            ],
            details: "Centaurs native to western Ochvir"
        },
        {
            cultureName: "Kui",
            id: "cul3-3",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "reformist", "militaristic", "individualist"
            ],
            promotedMotives: [
                "adventure", "freedom", "challenge", "change"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 5, 
            culturalTraits: [
                "honourable", "brave", "honest", "hopeful", "dreamer", "reckless", "impatient", "humble"
            ],
            details: "Centaurs native to the plains of Kuithir"
        }
    ]

},
{
    raceName:"Dragon",
    id: "rac4",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [3, 15, 50, 4999, 5000],
    cultures: [
        {
            cultureName: "Vethiovraki",
            id: "",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Dragonborn",
    id: "rac5",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [4, 11, 19, 80, 110],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Drake",
    id: "rac6",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [3, 15, 30, 120, 150],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Dryad(Senoran)",
    id: "rac7",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [6, 16, 35, 1250, "immortal"],
    cultures: [
        {
            cultureName: "Beyn",
            id: "cul7-1",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "academic", "secretive"
            ],
            promotedMotives: [
                "pleasure", "comforts", "freedom"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 6, 
            culturalTraits: [
                "reserved", "content", "grounded", "decadent", "passive", "secretive", "bored", "intellectual"
            ],
            details: "Native to the Forests of Benir province, Ranthuk"
        },
        {
            cultureName: "Nalva",
            id: "cul7-2",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "isolationist", "secretive", "militaristic"
            ],
            promotedMotives: [
                "survival", "revenge", "security"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 10, 
            culturalTraits: [
                "secretive", "cautious", "untrusting", "deceptive", "harsh", "aggressive", "driven", "realist", "cruel"
            ],
            details: "Native to the forests of the south dokaal coast"
        },
        {
            cultureName: "Ixi",
            id: "cul7-3",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "pacifist", "religious"
            ],
            promotedMotives: [
                "charity", "freedom"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 7, 
            culturalTraits: [
                "open", "forgiving", "kind", "trusting", "flirtatious", "naive", "social", "honest", "charitable", "spiritual"
            ],
            details: "Native to the forests of Ixyazm province, Cainkayt"
        },
        {
            cultureName: "Rayss",
            id: "cul7-4",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "isolationist", "traditionalist"
            ],
            promotedMotives: [
                "family", "security"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 5, 
            culturalTraits: [
                "reserved", "cautious", "loyal", "grounded", "content", "patient", "apathetic", "honourable"
            ],
            details: "Native to the forests of Khariss"
        },
        {
            cultureName: "Ozieri",
            id: "cul7-5",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "militaristic", "barbaric"
            ],
            promotedMotives: [
                "power", "family", "challenge"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 7, 
            culturalTraits: [
                "disciplined", "aggressive", "brave", "curious", "driven", "honourable", "social", "passionate"
            ],
            details: "Native to the forests of Ostvarskin"
        },
        {
            cultureName: "Yima",
            id: "cul7-6",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "anarchy", "reformist"
            ],
            promotedMotives: [
                "change", "adventure"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 4, 
            culturalTraits: [
                "mischievous", "wanderlust", "curious", "spontaneous"
            ],
            details: "Native to the forests of Corearux and North Folxa"
        },
        {
            cultureName: "Falyrsha",
            id: "cull7-7",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "decedent", "isolationist", "collectivist"
            ],
            promotedMotives: [
                "pleasure", "comforts", "family", "security"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 5, 
            culturalTraits: [
                "lustful", "decadent", "loyal", "secretive", "shy", "cautious", "grounded", "content", "patient"
            ],
            details: "Native to the forests of Xlivzra"
        },
        {
            cultureName: "Sezechian",
            id: "cul7-8",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "collectivist", "mercantile"
            ],
            promotedMotives: [
                "wealth", "security", "comforts"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 6, 
            culturalTraits: [
                "intellectual", "carnal", "decadent", "pragmatic", "grounded", "methodic", "honest", "perfectionist"
            ],
            details: "Native to the forests of East and West Sezech, Ekervis"
        }
    ]

},
{
    raceName:"Dwarf",
    id: "rac8",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [5, 15, 40, 250, 450],
    cultures: [
        {
            cultureName: "Giliric",
            id: "cul8-1",
            generalGrowthRate: 0.002,
            acceptedOutlooks: [
                "militaristic", "mercantile"
            ],
            promotedMotives: [
                "wealth", "family", "security"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 6, 
            culturalTraits: [
                "perfectionist", "driven", "disciplined", "methodic", "ambitious", "pragmatic", "loyal", "honourable"
            ],
            details: "Native to the Glivanian mountains, Gliva Province, Southern Expanse"
        },
        {
            cultureName: "Dlardrig",
            id: "cul8-2",
            generalGrowthRate: 0.002,
            acceptedOutlooks: [
                "orderly"
            ],
            promotedMotives: [
                "wealth", "security"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 3, 
            culturalTraits: [
                "perfectionist", "driven", "ambitious", "disciplined", "methodic", "just"
            ],
            details: "Native to the Rakoisien Mountains of eastern Khariss"
        },
        {
            cultureName: "Drawm",
            id: "cul8-3",
            generalGrowthRate: 0.002,
            acceptedOutlooks: [
                "mercantile", "secretive"
            ],
            promotedMotives: [
                "wealth", "security"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 4, 
            culturalTraits: [
                "perfectionist", "driven", "ambitious", "secretive", "disciplined", "grounded"
            ],
            details: "Native to the Drawm vally, Cainkayt"
        },
        {
            cultureName: "Amargi",
            id: "cul8-4",
            generalGrowthRate: 0.002,
            acceptedOutlooks: [
                "mercantile", "civil"
            ],
            promotedMotives: [
                "purpose", "knowledge"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "driven", "perfectionist", "social", "curious", "open"
            ],
            details: "Native to the Amargindale Mountains spanning the border between Ostvarskin and Kuithir"
        },
        {
            cultureName: "Dorandi",
            id: "cul8-5",
            generalGrowthRate: 0.002,
            acceptedOutlooks: [
                "religious", "traditionalist"
            ],
            promotedMotives: [
                "atonement"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 6, 
            culturalTraits: [
                "spiritual", "just", "humble", "loyal", "nihilistic", "forgiving"
            ],
            details: "Native to northern Folxa"
        },
        {
            cultureName: "Trigdamin",
            id: "cul8-6",
            generalGrowthRate: 0.002,
            acceptedOutlooks: [
                "expansionist", "militaristic"
            ],
            promotedMotives: [
                "revenge"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 7, 
            culturalTraits: [
                "aggressive", "arrogant", "brave", "loyal", "serious", "vengeful", "harsh"
            ],
            details: "Native to the Triga Mountains in Nekin Jar"
        },
        {
            cultureName: "Zadin",
            id: "cul8-7",
            generalGrowthRate: 0.002,
            acceptedOutlooks: [
                "militaristic", "secretive"
            ],
            promotedMotives: [
                "control", "power"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "secretive", "humble", "calm", "pragmatic", "polite", "loyal", "serious"
            ],
            details: "Native to the Yithstharian Mountains in southern Ekervis"
        },
        {
            cultureName: "Klasgarid",
            id: "cul8-8",
            generalGrowthRate: 0.002,
            acceptedOutlooks: [
                "mercantile", "reformist"
            ],
            promotedMotives: [
                "challenge", "fame"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 5, 
            culturalTraits: [
                "perfectionist", "driven", "ambitious","curious", "honest", "wanderlust"
            ],
            details: "Native to northern Graxa"
        }
    ]

},
{
    raceName:"Elf",
    id: "rac9",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [6, 15, 30, 650, 900],
    cultures: [
        {
            cultureName: "Lolthite",
            id: "cul9-1",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "religious", "supremacist"
            ],
            promotedMotives: [
                "power", "control", "revenge"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 9, 
            culturalTraits: [
                "nefarious", "deceptive", "secretive", "vengeful", "cruel", "carnal", "ambitious", "disciplined",
                "decadent", "selfish", "intellectual", "polite", "social", "despondent", "sadistic"
            ],
            details: "Drow elves native to the caverns beneath the Dokaal Mountains who devote themselves to Lolth"
        },
        {
            cultureName: "Vhaeilistraean",
            id: "cul9-2",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "reformist"
            ],
            promotedMotives: [
                "change", "freedom", "purpose"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 6, 
            culturalTraits: [
                "open", "passionate", "dreamer", "hopeful", "driven", "social", "wanderlust", "mischievous",
                "spontaneous"
            ],
            details: "Drow elves native to the caverns beneath the Dokaal Mountains who adhear to the ways of Vhaeraun or Eilistraee"
        },
        {
            cultureName: "Avyiurian",
            id: "cul9-3",
            generalGrowthRate: 0.0015,
            acceptedOutlooks: [
                "decadent"
            ],
            promotedMotives: [
                "pleasure", "comforts"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 8, 
            culturalTraits: [
                "curious", "open", "aggressive", "spontaneous", "excessive", "bored", "mischievous", "rowdy",
                "decadent", "simple-minded", "flirtatious", "social", "lustful", "passionate", "loyal", "carnal"
            ],
            details: "Drow elves native to the caverns beneath the Dokaal Mountains who have Devoted themselves to the Agriansut"
        },
        {
            cultureName: "Khrahierra",
            id: "cul9-4",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "militaristic", "traditionalist"
            ],
            promotedMotives: [
                "family", "survival"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 6, 
            culturalTraits: [
                "pragmatic", "disciplined", "secretive", "aggressive", "brave", "content", "harsh", "moral",
                "patient", "just", "untrusting", "loyal"
            ],
            details: "Wild elves native to the plains of Khariss and Kuithir"
        },
        {
            cultureName: "Qwasirrian",
            id: "cul9-5",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "academic", "religious"
            ],
            promotedMotives: [
                "knowledge", "purpose", "peace"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 5, 
            culturalTraits: [
                "curious", "forgiving", "passive", "methodic", "driven", "serious", "intellectual", "indifferent", 
                "patient", "wanderlust", "calm", "spiritual"
            ],
            details: "Moon elves native to Corearux"
        },
        {
            cultureName: "Eyuiliashia",
            id: "cul9-6",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "reformist", "collectivist"
            ],
            promotedMotives: [
                "survival", "family", "pleasure"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 7, 
            culturalTraits: [
                "romantic", "cautious", "loyal", "passionate", "social", "flirtatious", "mischievous", "excessive",
                "secretive", "pragmatic"
            ],
            details: "Moon elves native to the Barchine Isle"
        }
    ]

},
{
    raceName:"Ferrolith",
    id: "rac10",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [4, 10, 21, 750, "immortal"],
    cultures: [
        {
            cultureName: "Iyralian",
            id: "cul10-1",
            generalGrowthRate: 0.003,
            acceptedOutlooks: [
                "collectivist", "barbaric"
            ],
            promotedMotives: [
                "power", "adventure", "challenge"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 7, 
            culturalTraits: [
                "hot-tempered", "carnal", "aggressive", "brave", "arrogant", "vengeful", "excessive", "lustful", "decadent"
            ],
            details: "Native to the north of Xlivzra"
        },
        {
            cultureName: "Jyessian",
            id: "cul10-2",
            generalGrowthRate: 0.003,
            acceptedOutlooks: [
                "individualist", "anarchy"
            ],
            promotedMotives: [
                "change", "adventure", "freedom"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 5, 
            culturalTraits: [
                "passionate", "lustful", "decadent", "rowdy", "spontaneous", "sadistic", "flirtatious", "selfish"
            ],
            details: "Native to the south of Xlivzra"
        }
    ]

},
{
    raceName:"Half-Dragon",
    id: "rac11",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [4, 12, 21, 490, 500],
    cultures: [
        {
            cultureName: "Dralcomic",
            id: "cul11-1",
            generalGrowthRate: 0.003,
            acceptedOutlooks: [
                "civil", "reformists"
            ],
            promotedMotives: [
                "change", "purpose"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 7, 
            culturalTraits: [
                "disciplined", "honourable", "brave", "ambitious", "excessive", "harsh", "arrogant", "dreamer",
                "indifferent", "social", "impatient", "just", "passionate", "impolite", "hot-tempered", "romantic",
                "reckless", "carnal", "possessive", "loyal"
            ],
            details: "Native to far southern province of Ranthuk. Dralcomic Half-dragons comprise a varity of dragonic ancestries"
        },
        {
            cultureName: "Ulhari",
            id: "cul11-2",
            generalGrowthRate: 0.003,
            acceptedOutlooks: [
                "decadent", "militaristic"
            ],
            promotedMotives: [
                "revenge", "family"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 9, 
            culturalTraits: [
                "romantic", "possessive", "loyal", "untrusting", "sadistic", "calm", "lustful", "despondent",
                "decadent", "driven", "arrogant", "serious", "harsh", "ambitious", "aggressive", "deceptive",
                "vengeful", "disciplined", "pragmatic"
            ],
            details: "Native to the provinces within Ranthuk under the rulership of house Ulharkepesk. Ulhari are almost exclusively of Blue Dragon ancestry."
        }
    ]

},
{
    raceName:"Harpy",
    id: "rac12",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [4, 10, 15, 65, 80],
    cultures: [
        {
            cultureName: "Bivlyieri",
            id: "cul12-1",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "decadent", "religious"
            ],
            promotedMotives: [
                "family", "pleasure", "purpose"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 13, 
            culturalTraits: [
                "naive", "lazy", "curious", "open", "skidish", "spontaneous", "excessive", "bored", "mischievous",
                "rowdy", "decadent", "simple-minded", "flirtatious", "social", "impatient", "lustful", "wanderlust",
                "passionate", "slob", "sadistic", "romantic", "carnal", "possessive"
            ],
            details: "Native to the Barchine Isles"
        },
        {
            cultureName: "Cyuthi",
            id: "cul12-2",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "decadent", "expansionist"
            ],
            promotedMotives: [
                "family", "pleasure", "control"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 12, 
            culturalTraits: [
                "naive", "aggressive", "curious", "open", "spontaneous", "excessive", "bored", "mischievous",
                "rowdy", "decadent", "simple-minded", "flirtatious", "social", "impatient", "lustful", "wanderlust",
                "passionate", "slob", "sadistic", "romantic", "carnal", "possessive"
            ],
            details: "Native to CovenHome"
        },
        {
            cultureName: "Darhixi",
            id: "cul12-3",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "reformist", "religious"
            ],
            promotedMotives: [
                "family", "pleasure", "purpose"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 13, 
            culturalTraits: [
                "naive", "curious", "open", "skidish", "spontaneous", "excessive", "bored", "mischievous",
                "rowdy", "simple-minded", "flirtatious", "social", "impatient", "loyal", "wanderlust",
                "passionate", "slob", "kind", "romantic", "possessive", "honourable"
            ],
            details: "Native to Mt.Darhir, Darhir Province, Ranthuk"
        },
        {
            cultureName: "Benarui",
            id: "cul12-4",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "decadent", "civil"
            ],
            promotedMotives: [
                "family", "comforts", "purpose"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 9, 
            culturalTraits: [
                "naive", "driven", "curious", "open", "brave", "spontaneous", "excessive", "mischievous",
                "rowdy", "decadent", "flirtatious", "social", "impatient", "lustful", "wanderlust",
                "passionate", "sadistic", "romantic", "carnal", "possessive"
            ],
            details: "Native to the coastal provinces spanning from Benir province, Ranthuk to Kienar province, Southern Expanse"
        },
        {
            cultureName: "Teinistrix",
            id: "cul12-5",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "collectivist"
            ],
            promotedMotives: [
                "family", "change"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 10, 
            culturalTraits: [
                "pragmatic", "lazy", "curious", "secretive", "skidish", "methodic", "excessive", "driven", "serious",
                "rowdy", "decadent", "intellectual", "flirtatious", "social", "ambitious", "lustful", "wanderlust",
                "passionate", "perfectionist", "romantic", "carnal", "possessive"
            ],
            details: "Native to Teiniax province, Southern Expanse"
        },
        {
            cultureName: "Ivanyx",
            id: "cul12-6",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "decadent"
            ],
            promotedMotives: [
                "comforts", "pleasure", "freedom"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 7, 
            culturalTraits: [
                "curious", "open", "spontaneous", "excessive", "bored", "mischievous",
                "rowdy", "decadent", "flirtatious", "social", "lustful", "wanderlust",
                "passionate", "carnal"
            ],
            details: "Native to Gliva province, Southern Expanse"
        },
        {
            cultureName: "Imyalia",
            id: "cul12-7",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "decadent", "religious"
            ],
            promotedMotives: [
                "family", "pleasure", "purpose"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 8, 
            culturalTraits: [
                "pragmatic", "disciplined", "curious", "secritive", "skidish", "methodic", "reserved", "bored", "mischievous",
                "realist", "decadent", "flirtatious", "social", "impatient", "lustful", "wanderlust",
                "passionate", "slob", "sadistic", "romantic", "carnal", "possessive"
            ],
            details: "Native to the far southern provinces of the South Dokaal Coast"
        },
        {
            cultureName: "Yui",
            id: "cul12-8",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "militaristic", "religious"
            ],
            promotedMotives: [
                "family", "revenge", "survival"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 9, 
            culturalTraits: [
                "pragmatic", "disciplined", "aggressive", "secretive", "brave", "methodic", "excessive", "driven", "serious",
                "rowdy", "decadent", "realist", "ambitious", "harsh", "patient", "lustful", "grounded",
                "passionate", "deceptive", "vengeful", "romantic", "carnal", "possessive", "loyal"
            ],
            details: "Native to the Yui forest in the South Dokaal Coast"
        },
        {
            cultureName: "Kyarsierese",
            id: "cul12-9",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "militaristic", "expansionist"
            ],
            promotedMotives: [
                "family", "power", "control"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 12, 
            culturalTraits: [
                "pragmatic", "disciplined", "aggressive", "secretive", "brave", "spontaneous", "excessive", "driven", 
                "mischievous", "rowdy", "decadent", "realist", "ambitious", "harsh", "patient", "lustful", "grounded",
                "passionate", "deceptive", "sadistic", "cruel", "carnal", "possessive", "loyal", "nefarious"
            ],
            details: "Native to the Mountains of the North Dokaal Coast"
        },
        {
            cultureName: "Jyrataxi",
            id: "cul12-10",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "decadent", "civil"
            ],
            promotedMotives: [
                "family", "pleasure", "change"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 7, 
            culturalTraits: [
                "lazy", "apathetic", "open", "skidish", "methodic", "excessive", "bored", "mischievous",
                "decadent", "intellectual", "flirtatious", "social", "lustful", "grounded",
                "passionate", "slob", "romantic", "carnal", "possessive"
            ],
            details: "Native to the eastern provinces of Lichindow"
        },
        {
            cultureName: "Yrowsatrixa",
            id: "cul12-11",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "decadent", "civil"
            ],
            promotedMotives: [
                "family", "security", "control"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 8, 
            culturalTraits: [
                "pragmatic", "apathetic", "open", "methodic", "excessive", "driven", "mischievous",
                "decadent", "intellectual", "flirtatious", "social", "lustful", "grounded",
                "passionate", "harsh", "romantic", "carnal", "possessive", "cautious"
            ],
            details: "Native to the western provinces of Lichindow and the forests of eastern Ekervis"
        },
        {
            cultureName: "Qyorax",
            id: "cul12-12",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "decadent", "religious"
            ],
            promotedMotives: [
                "family", "pleasure", "comforts"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 14, 
            culturalTraits: [
                "naive", "lazy", "curious", "open", "skidish", "spontaneous", "excessive", "mischievous",
                "decadent", "simple-minded", "flirtatious", "social", "lustful", "wanderlust",
                "passionate", "slob", "sadistic", "romantic", "carnal", "possessive", "cruel"
            ],
            details: "Native to Xlivzra"
        },
        {
            cultureName: "Uralia",
            id: "cul12-13",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "decadent", "religious"
            ],
            promotedMotives: [
                "family", "freedom"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 6, 
            culturalTraits: [
                "naive", "driven", "curious", "open", "brave", "spontaneous", "excessive", "mischievous",
                "rowdy", "decadent", "flirtatious", "social", "impatient", "lustful", "wanderlust",
                "passionate", "romantic", "carnal", "possessive"
            ],
            details: "Native to the mainland regions of Graxa"
        },
        {
            cultureName: "Undrix",
            id: "cul12-14",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "isolationist", "authoritarian"
            ],
            promotedMotives: [
                "survival", "security"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 5, 
            culturalTraits: [
                "pragmatic", "disciplined", "open", "spontaneous", "excessive", "driven", "serious",
                "rowdy", "decadent", "indifferent", "social", "impatient", "lustful", "grounded",
                "passionate", "perfectionist", "sadistic", "aromantic", "carnal", "possessive"
            ],
            details: "Native to the islands of Graxa"
        },
        {
            cultureName: "Trazyir",
            id: "cul12-15",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "civil", "religious"
            ],
            promotedMotives: [
                "family", "purpose"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 9, 
            culturalTraits: [
                "naive", "curious", "secretive", "brave", "spontaneous", "excessive", "ambitious", "mischievous",
                "polite", "decadent", "simple-minded", "flirtatious", "social", "arrogant", "lustful", "grounded",
                "passionate", "dreamer", "sadistic", "romantic", "carnal", "possessive"
            ],
            details: "Native to the forests of Corearux"
        },
        {
            cultureName: "Foli",
            id: "cul12-16",
           generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "decadent", "religious"
            ],
            promotedMotives: [
                "family", "pleasure", "purpose"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 11, 
            culturalTraits: [
                "naive", "lazy", "curious", "open", "skidish", "spontaneous", "excessive", "bored", "mischievous",
                "decadent", "intellectual", "flirtatious", "social", "impatient", "lustful", "wanderlust",
                "passionate", "slob", "romantic", "carnal", "possessive", "forgiving"
            ],
            details: "Native to the northern provinces of Folxa"
        },
        {
            cultureName: "Irerasixi",
            id: "cul12-17",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "decadent", "religious"
            ],
            promotedMotives: [
                "family", "pleasure", "freedom"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 9, 
            culturalTraits: [
                "naive", "lazy", "curious", "open", "skidish", "spontaneous", "excessive", "bored", "mischievous",
                "rowdy", "decadent", "simple-minded", "flirtatious", "social", "impatient", "lustful", 
                "passionate", "slob", "sadistic", "romantic", "carnal", "possessive", "optimistic"
            ],
            details: "Native to the southern provinces of Folxa"
        },
        {
            cultureName: "Nocralese",
            id: "cul12-18",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "isolationist", "supremacist"
            ],
            promotedMotives: [
                "pleasure", "power"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 10, 
            culturalTraits: [
                "disciplined", "vengeful", "secretive", "skidish", "content", "reserved", "arrogant", 
                "decadent", "simple-minded", "indifferent", "cruel", "impatient", "lustful", "wanderlust",
                "despondent", "perfectionist", "sadistic", "selfish", "carnal", "possessive"
            ],
            details: "Native to Mt.Nocral, Nocraldine province, Ostvarskin"
        }
    ]

},
{
    raceName:"Human",
    id: "rac13",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [4, 11, 19, 60, 100],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.003,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Giant",
    id: "rac14",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [10, 25, 50, 370, 400],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.0001,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Gnoll",
    id: "rac15",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [3, 6, 11, 27, 30],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.003,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Goblin",
    id: "rac16",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [3, 8, 13, 45, 60],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.005,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Hobgoblin",
    id: "rac31",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [4, 11, 19, 60, 100],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.005,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Bugbear",
    id: "rac32",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [3, 9, 16, 55, 80],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.005,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Kobold",
    id: "rac17",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [4, 11, 19, 95, 120],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.003,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Kraken",
    id: "rac18",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [15, 30, 60, 300, 700],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.0001,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Kruthik",
    id: "rac19",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [2, 5, 7, 10, 25],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Lizardfolk",
    id: "rac20",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [1, 4, 7, 60, 80],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.003,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Lycan",
    id: "rac21",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: "Depends upon their origin race",
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.003,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Minotaur",
    id: "rac22",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [2, 4, 10, 80, 200],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.003,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Orc",
    id: "rac23",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [3, 9, 15, 45, 65],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.004,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Sahuagin",
    id: "rac24",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [3, 12, 22, 150, 180],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.003,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Sirene",
    id: "rac25",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [4, 10, 30, 390, 450],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.002,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Surikshal",
    id: "rac26",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [4, 14, 22, 550, 1000],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.007,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Tabaxi",
    id: "rac27",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [4, 11, 19, 60, 100],
    cultures: [
        {
            cultureName: "",
            id: "",
            generalGrowthRate: 0.002,
            acceptedOutlooks: [
                "", ""
            ],
            promotedMotives: [
                "", ""
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 2, 
            culturalTraits: [
                "", ""
            ],
            details: ""
        }
    ]

},
{
    raceName:"Troll",
    id: "rac28",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [4, 9, 16, 65, 150],
    cultures: [
        {
            cultureName: "Gloribekan",
            id: "cul28-1",
            generalGrowthRate: 0.0005,
            acceptedOutlooks: [
                "barbaric", "anarchy"
            ],
            promotedMotives: [
                "power", "survival"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 6, 
            culturalTraits: [
                "reckless", "hot-tempered", "sadistic", "slob", "cruel", "aromantic", "indifferent",
                "simple-minded", "decadent", "rowdy", "harsh", "excessive", "brave", "curious", "lazy"
            ],
            details: "Native to the northern provinces of Corearux"
        },
        {
            cultureName: "Jlargi",
            id: "cul28-2",
            generalGrowthRate: 0.0006,
            acceptedOutlooks: [
                "barbaric", "collectivist"
            ],
            promotedMotives: [
                "propagation", "survival"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 7, 
            culturalTraits: [
                "reckless", "hot-tempered", "sadistic", "slob", "cruel", "carnal", "indifferent", "loyal",
                "simple-minded", "decadent", "rowdy", "harsh", "excessive", "brave", "curious", "lazy"
            ],
            details: "Native to the south-western provinces of Corearux"
        },
        {
            cultureName: "Luruokra",
            id: "cul28-3",
            generalGrowthRate: 0.0005,
            acceptedOutlooks: [
                "barbaric", "anarchy"
            ],
            promotedMotives: [
                "power", "survival"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 5, 
            culturalTraits: [
                "reckless", "hot-tempered", "sadistic", "vengeful", "cruel", "aromantic", "indifferent",
                "ambitious", "decadent", "rowdy", "harsh", "excessive", "brave", "apathetic", "disciplined"
            ],
            details: "Native to the south-eastern provinces of Corearux"
        }
    ]

},
{
    raceName:"Vrock",
    id: "rac29",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [3, 7, 16, 50, "immortal"],
    cultures: [
        {
            cultureName: "Ayrngon",
            id: "cul29-1",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "supremacist", "decadent"
            ],
            promotedMotives: [
                "power", "control"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 9, 
            culturalTraits: [
                "apathetic", "vengeful", "aggressive", "spontaneous", "ambitious", "excessive", "deceptive",
                "nihilistic", "nefarious", "serious", "arrogant", "bored", "social", "intellectual", "decadent",
                "passionate", "lustful", "cruel", "sadistic", "untrusting", "selfish", "carnal", "possessive"
            ],
            details: "Native to the Barchine Isles"
        }
    ]

},
{
    raceName:"Yeti",
    id: "rac30",
    //starting as infants
    //years until[childhood, adolescence, adulthood, elder, maximum lifespan]
    lifespan: [4, 9, 16, 50, 80],
    cultures: [
        {
            cultureName: "Sar",
            id: "cul30-1",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "barbaric", "superstitious"
            ],
            promotedMotives: [
                "survival", "challange"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 6, 
            culturalTraits: [
                "vengeful", "honest", "honourable", "aggressive", "brave", "spontaneous", "content", "harsh",
                "humble", "serious", "realist", "moral", "indifferent", "patient", "just", "prude", "loyal", 
                "spiritual"
            ],
            details: "Native to the province of Searsjach, Ranthuk"
        },
        {
            cultureName: "Rakoi",
            id: "cul30-2",
            generalGrowthRate: 0.001,
            acceptedOutlooks: [
                "authoritarian", "civil"
            ],
            promotedMotives: [
                "power", "family"
            ],
            /*culturalTraitStrength is the maximum trait points that an NPC will be assigned from the culturalTraits*/
            culturalTraitStrength: 11, 
            culturalTraits: [
                "disciplined", "pragmatic", "brave", "passive", "honourable", "secretive", "methodic", "content",
                "reserved", "merciful", "driven", "humble", "moral", "intellectual", "patient", "just", "grounded",
                "spiritual", "loyal", "charitable"
            ],
            details: "Native to the Rakoisien Mountains of eastern Khariss"
        }
    ]

},

]
export default races;