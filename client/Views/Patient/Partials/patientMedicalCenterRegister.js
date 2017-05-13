Template.patientMedicalCenterRegister.helpers({

    medicalCenters : function () {
        return MedicalCenters.find();
    },

    searchResults:function () {
        return MedicalCenters.find({name:Session.get('searchItem')});
    },

    isRegistered : function () {
        return PatientMedicalCenters.find({patientID:Meteor.userId(),medicalCenterID:this._id}).count()>0;
    },

    registeredMedicalCenters : function () {
        var requiredEntries = PatientMedicalCenters.find({patientID:Meteor.userId()});

        var medicalCenterIDS = [];

        for(var i =0; i<requiredEntries.count();i++){
            medicalCenterIDS.push(requiredEntries.fetch()[i].medicalCenterID)
        }

        return MedicalCenters.find({_id:{$in:medicalCenterIDS}});
    }


});

Template.patientMedicalCenterRegister.events({
    'click #search': function(event) {
        var searchItem = document.getElementById("search").value;
        console.log(searchItem);
        Session.set('searchItem',searchItem);
    },
    
    'click #register':function (event) {
        if(PatientMedicalCenters.find({patientID:Meteor.userId(),medicalCenterID:this._id}).count()==0)

            if (confirm("Are you sure you want to register? This will allow access to the medical center to view your health profile.") == true) {
                Meteor.call('registerInMedicalCenter',Meteor.userId(),this._id);
            } else {

            }

    },

    'click #unregister':function (event) {
        if(PatientMedicalCenters.find({patientID:Meteor.userId(),medicalCenterID:this._id}).count()==1)

            if (confirm("Are you sure you want to unregister? This will no longer allow access to the medical center to view your health profile.") == true) {
                Meteor.call('unregisterMedicalCenter',Meteor.userId(),this._id);
            } else {

            }


    }
});