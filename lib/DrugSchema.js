Drug = new SimpleSchema({

    name:{
        type: String,
        label: "Name",
        autoform:{
            type:'selectize',
            placeholder:"Select a Medicine",
            options:function () {
                return [{label:"Hydrocodone",value:"Hydrocodone"},
                    {label:"Simvastatin",value:"Simvastatin"},
                    {label:"Lisinopril",value:"Lisinopril"},
                    {label:"Levothyroxine Sodium ",value:"Levothyroxine Sodium "},
                    {label:"Azithromycin",value:"Azithromycin"},
                    {label:"Metformin",value:"Metformin"},
                    {label:"Lipitor",value:"Lipitor"},
                    {label:"Amlodipine",value:"Amlodipine"},
                    {label:"Amoxicillin",value:"Amoxicillin"},
                    {label:"Hydrochlorothiazide",value:"Hydrochlorothiazide"},
                    {label:"Omeprazole",value:"Omeprazole"},
                    {label:"Alprazolam",value:"Alprazolam"},
                    {label:"Furosemide ",value:"Furosemide "},
                    {label:"Metoprolol Tartrate",value:"Metoprolol Tartrate"},
                    {label:"Atenolol",value:"Atenolol "},
                    {label:"Paracetamol",value:"Paracetamol"}]
            }
        }
    },

    dose:{
        type:String,
        label: "Dose",
        autoform:{
            type:'selectize',
            placeholder:"Pick the Dose",
            options:function () {
                return [{label:"5 ml",value:"5 ml"},
                    {label:"10 ml",value:"10 ml"},
                    {label:"15 ml",value:"15 ml"},
                    {label:"20 ml",value:"20 ml"},
                    {label:"30 ml",value:"30 ml"},
                    {label:"1 mg",value:"1 mg"},
                    {label:"2 mg",value:"2 mg"},
                    {label:"5 mg",value:"5 mg"},
                    {label:"8 mg",value:"8 mg"},
                    {label:"16 mg",value:"16 mg"},
                    {label:"50 mg",value:"50 mg"},
                    {label:"100 mg",value:"100 mg"},
                    {label:"250 mg",value:"250 mg"},
                    {label:"500 mg",value:"500 mg"},
                    {label:"1 g",value:"1 g"},]
            }
        }
    },

    frequency:{
        type:String,
        label: "Frequency",
        autoform:{
            type:'selectize',
            placeholder:"Pick the Frequency",
            options:function () {
                return [{label:"tds",value:"Three Times"},
                    {label:"bd",value:"Two Times"},
                    {label:"nocte",value:"Night Only"},
                    {label:"mane",value:"Morning Only"},
                    {label:"daily",value:"Daily"},
                    {label:"6 hourly",value:"6 Hourly"}]
            }
        }
    },

    time:{
        type:String,
        label: "Frequency",
        autoform:{
            type:'selectize',
            placeholder:"Pick the Time",
            options:function () {
                return [{label:"Before Meal",value:"Before Meal"},
                    {label:"After Meal",value:"After Meal"}]
            }
        }
    }
});