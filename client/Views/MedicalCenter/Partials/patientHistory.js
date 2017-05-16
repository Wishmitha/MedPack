Template.patientHistory.onCreated(function () { // subscribe to required collections
    document.title = "Patient History";

    Meteor.subscribe('patientMedicalCenters');

});

Template.patientHistory.helpers({

    medicalCenters : function () {
        return PatientMedicalCenters.find({medicalCenterID : Router.current().params._id});
    },

    searchResults:function () {

        var firstName = Session.get('searchItem').split(" ")[0];
        var lastName = Session.get('searchItem').split(" ")[1];

        var patientIDS=[];

        for(var i=0; i<Meteor.users.find({roles:["patient"],"profile.firstName":firstName,"profile.lastName":lastName}).count();i++){
            patientIDS.push(Meteor.users.find({roles:["patient"],"profile.firstName":firstName,"profile.lastName":lastName}).fetch()[i]._id)
        }

        Session.set('patientIDS',patientIDS);

        return Meteor.users.find({roles:["patient"],"profile.firstName":firstName,"profile.lastName":lastName});

    },

    prescriptions : function () {
        return Prescriptions.find({patientID:Session.get('patientIDS')[0]},{sort: {createdAt: -1}})
    },



});

Template.patientHistory.events({
    'click #searchBtn': function(event) {
        var searchItem = document.getElementById("searchPatient").value;
        console.log(searchItem);
        Session.set('searchItem',searchItem);
    },
});
