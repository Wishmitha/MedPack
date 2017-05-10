Drug = new SimpleSchema({

    name:{
        type: Number,
        label: "Year",
        autoform:{
            type:'selectize',
            options:function () {
                return [{label:"2013",value:3102},{label:"2014",value:4102},{label:"2015",value:5102}]
            }
        }
    },

    dose:{
        type:String
    },

    frequency:{
        type:String
    },

    time:{
        type:String
    }
});