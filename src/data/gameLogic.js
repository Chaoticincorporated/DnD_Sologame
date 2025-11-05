const logic = {
    provinceLogic: {
        provincialSize: 
        {
            //
            tiny: {
                popBase: 2,
                popThreshhold: 8,
                popOverflowFactor: 1
            },
            small: {
                popBase: 4,
                popThreshhold: 16,
                popOverflowFactor: 2
            },
            medium: {
                popBase: 6,
                popThreshhold: 24,
                popOverflowFactor: 3
            },
            large: {
                popBase: 8,
                popThreshhold: 32,
                popOverflowFactor: 4
            },
            huge: {
                popBase: 10,
                popThreshhold: 40,
                popOverflowFactor: 5
            }
        },
        infastructure: [
            {
                level: 0,
                label: "wilderness"
            },
            {
                level: 1,
                label: "frontier"
            },
            {
                level: 2,
                label: "pastoral"
            },
            {
                level: 3,
                label: "rural"
            },
            {
                level: 4,
                label: "urban"
            },
            {
                level: 5,
                label: "industial"
            },
            {
                level: 6,
                label: "metropolitian"
            }
        ]
    },
    characterLogic: {
    traits: [
        ["romantic","aromantic"],["reckless","cautious"],["carnal","spiritual"],["possessive","charitable"],["loyal","selfish"],
        ["calm","hot-tempered"],["kind","sadistic"],["impolite","polite"],["trusting","untrusting"],["slob","perfectionist"],
        ["pessimist","optimistic"],["just","cruel"],["lustful","prude"],["wanderlust","grounded"],["passionate","despondent"],
        ["impatient","patient"],["shy","social"],["indifferent","flirtatious"],["intellectual","simple-minded"],["decadent","moral"],
        ["driven","bored"],["arrogant","humble"],["mischievous","serious"],["timid","rowdy"],["realist","dreamer"],
        ["hopeful","nihilistic"],["merciful","harsh"],["reserved","excessive"],["content","ambitious"],["spontaneous","methodic"],
        ["open","secretive"], ["deceptive","honest"], ["honourable", "nefarious"]
    ],
    ambitions: [
        "empty","wealth","power","fame","knowledge","comforts","change","challange","security","freedom",
        "charity","family","adventure","pleasure","control","revenge","atonement","survival","peace","purpose"
    ],
    outlook: [
        ["Isolationist","Expansionist"],
        ["Pacifist","Militaristic"],
        ["Traditionalist","Reformist"],
        ["Pluralist","Supremacist"],
        ["Religious","Atheist"],
        ["Individualist","Collectivist"],
        ["Agricultural","Mercantile"],
        ["Superstitious","Academic"],
        ["Constitutionalist","Authoritarian" ],
        ["Moralist","Decadent"],
        ["Civil","Barbaric"],
        ["Optimistic","Nihilistic"],
        ["Honest","Secretive"],
        ["Orderly","Anarchy" ]
    ]
    }
};
export default logic;