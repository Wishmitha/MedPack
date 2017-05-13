Template.joinMedicalCenter.helpers({

    medicalCenters : function () {
        return MedicalCenters.find();
    },

    searchResults:function () {
        return MedicalCenters.find({name:Session.get('searchItem')});
    },

    isJoined : function () {
        return DoctorMedicalCenters.find({doctorID:Meteor.userId(),medicalCenterID:this._id}).count()>0;
    },

    isApproved : function () {
        return DoctorMedicalCenters.findOne({doctorID:Meteor.userId(),medicalCenterID:this._id}).isApproved
    }

    /*registeredMedicalCenters : function () {
        var requiredEntries = PatientMedicalCenters.find({patientID:Meteor.userId()});

        var medicalCenterIDS = [];

        for(var i =0; i<requiredEntries.count();i++){
            medicalCenterIDS.push(requiredEntries.fetch()[i].medicalCenterID)
        }

        return MedicalCenters.find({_id:{$in:medicalCenterIDS}});
    }*/


});

Template.joinMedicalCenter.events({
    'click #search': function(event) {
        var searchItem = document.getElementById("search").value;
        console.log(searchItem);
        Session.set('searchItem',searchItem);
    },

    'click #join':function (event) {
        //if(PatientMedicalCenters.find({patientID:Meteor.userId(),medicalCenterID:this._id}).count()==0)


            if (confirm("Your join request has been sent. Wait for the confirmation of the owner.") == true) {
                Meteor.call('joinMedicalCenter',Meteor.userId(),this._id,MedicalCenters.findOne({_id:this._id}).createdBy);
            } else {

            }

    },

    'click #cancel':function (event) {
        //if(PatientMedicalCenters.find({patientID:Meteor.userId(),medicalCenterID:this._id}).count()==1)

            if (confirm("Are you sure you want to cancel the request?") == true) {
                Meteor.call('cancelJoinRequest',Meteor.userId(),this._id);
            } else {

            }
    },

    'click #leave':function (event) {
        //if(PatientMedicalCenters.find({patientID:Meteor.userId(),medicalCenterID:this._id}).count()==1)

        if (confirm("Are you sure you want to leave the medical center?") == true) {
            Meteor.call('cancelJoinRequest',Meteor.userId(),this._id);
        } else {

        }
    }
});