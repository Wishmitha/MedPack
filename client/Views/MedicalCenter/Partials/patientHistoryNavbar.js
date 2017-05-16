// session varibles for update doctor navbar
Template.patientHistoryNavbar.onCreated(function () { // subscribe to required collections

    Session.set('medicalCenterID', Router.current().params._id);

});

Template.patientHistoryNavbar.helpers({

    clickedMedicalCenters:function () {
        return Session.get('clickedMedicalCenters');
    },

    clickedNewPrescription : function () {
        return Session.get('clickedNewPrescription');
    },

    clickedViewHistory:function () {
        return Session.get('clickedViewHistory');
    },

    initials:function () {
        return Meteor.user().profile.initials;
    },

    familyName:function () {
        return Meteor.user().profile.familyName;
    },

});

Template.patientHistoryNavbar.events({

    'click #editProfile': function(event) {
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedViewHistory', '');
        Session.set('clickedNewPrescription', '');
        Session.set('searchItem','');
    },

    'click #editAccount': function(event) {
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedViewHistory', '');
        Session.set('clickedNewPrescription', '');
        Session.set('searchItem','');
    },

    'click #exit': function(event) {
        Session.set('clickedAllUsers', '');
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedViewHistory', '');
        Session.set('clickedNewPrescription', '');
        Session.set('clickedAdmins', '');
        Session.set('searchItem','');

        window.close()
    }
});

