Template.medicalCenters.onCreated(function () {
    Session.set('clickedMedicalCenters', 'active');
});

//displays all the medical centers registered in the system

Template.medicalCenters.helpers({
    medicalcenters: function () {
        return MedicalCenters.find({},{sort: {createdAt: -1}});
    }
});

Template.medicalCenters.events({

    'click #delete': function () {
        if (confirm("Are you sure you want to completely remove this Medical Center?") == true) {
            Meteor.call("removeMedicalCenter",this._id);
        } else {

        }
    },

    'click #verify':function () {
        if (confirm("Are you sure you want to verify this Medical Center?") == true) {
            Meteor.call("verifyMedicalCenter",this._id);
        } else {

        }
    },

    'click #unverify':function () {
        if (confirm("Are you sure you want to remove the verification from this Medical Center?") == true) {
            Meteor.call("unverifyMedicalCenter",this._id);
        } else {

        }
    },
});