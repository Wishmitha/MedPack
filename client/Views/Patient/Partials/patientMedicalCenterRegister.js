Template.patientMedicalCenterRegister.helpers({

    medicalCenters : function () {
        return MedicalCenters.find();
    },

    searchResults:function () {
        return MedicalCenters.find({name:Session.get('searchItem')});
    },


});

Template.patientMedicalCenterRegister.events({
    'click #search': function(event) {
        var searchItem = document.getElementById("search").value;
        console.log(searchItem);
        Session.set('searchItem',searchItem);
    },
});