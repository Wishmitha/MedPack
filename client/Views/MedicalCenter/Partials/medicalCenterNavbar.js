// session varibles for update doctor navbar
Template.medicalCenterNavbar.onCreated(function () { // subscribe to required collections

    Session.set('medicalCenterID', Router.current().params._id);

});

Template.medicalCenterNavbar.helpers({

    clickedMedicalCenters:function () {
        return Session.get('clickedMedicalCenters');
    },

    clickedNewPrescription : function () {
        return Session.get('clickedNewPrescription');
    },

    clickedViewHistory:function () {
        return Session.get('clickedViewHistory');
    },

    clickedAnalytics:function () {
        return Session.get('clickedAnalytics');
    },

    initials:function () {
        return Meteor.user().profile.initials;
    },

    familyName:function () {
        return Meteor.user().profile.familyName;
    },

});

Template.medicalCenterNavbar.events({

    'click #medicalCenters':function (event) {
        Session.set('clickedMedicalCenters', 'active');
        Session.set('clickedViewHistory', '');
        Session.set('clickedNewPrescription', '');
        Session.set('searchItem','');
        Session.set('medicalCenterID', '');
        Session.set('clickedAnalytics', '');

        Router.go("doctorMedicalCenters");

    },

    'click #viewHistory':function (event) {
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedNewPrescription', 'active');
        Session.set('clickedAnalytics', '');
        Session.set('searchItem','');

        //Router.go("viewHistory",{_id:Session.get('medicalCenterID')});

        window.open('http://localhost:3000/main/view-patient-history/'+Session.get('medicalCenterID'), '_blank');
    },

    'click #newPrescription':function (event) {
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedViewHistory', '');
        Session.set('clickedNewPrescription', 'active');
        Session.set('clickedAnalytics', '');
        Session.set('searchItem','');

        Router.go('medicalCenter',{_id:Session.get('medicalCenterID')});
    },

    'click #analytics':function (event) {
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedViewHistory', '');
        Session.set('clickedNewPrescription', '');
        Session.set('clickedAnalytics', 'active');
        Session.set('searchItem','');

        Router.go('medicalCenterAnalytics',{_id:Session.get('medicalCenterID')});
    },

    'click #editProfile': function(event) {
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedViewHistory', '');
        Session.set('clickedNewPrescription', '');
        Session.set('clickedAnalytics', '');
        Session.set('searchItem','');
    },

    'click #editAccount': function(event) {
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedViewHistory', '');
        Session.set('clickedNewPrescription', '');
        Session.set('clickedAnalytics', '');
        Session.set('searchItem','');
    },

    'click #logout': function(event) {
        Session.set('clickedAllUsers', '');
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedViewHistory', '');
        Session.set('clickedNewPrescription', '');
        Session.set('clickedAdmins', '');
        Session.set('searchItem','');
        Session.set('clickedAnalytics', '');

        Meteor.logout();
        Router.go('/');
    }
});

