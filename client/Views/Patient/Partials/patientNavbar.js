Template.patientNavbar.onCreated(function () {
    Session.set('clickedHealthProfile', 'active');
});

// session varibles for update doctor navbar

Template.patientNavbar.helpers({

    clickedHealthProfile:function () {
        return Session.get('clickedHealthProfile');
    },

    clickedRecentVisits:function () {
        return Session.get('clickedRecentVisits');
    },

    clickedRegisteredMedCenters :function () {
      return Session.get('clickedRegisteredMedCenters');
    },

    clickedAnalytics :function () {
        return Session.get('clickedAnalytics');
    },

     firstName:function () {
        return Meteor.user().profile.firstName;
    },

    lastName:function () {
        return Meteor.user().profile.lastName;
    },

});

Template.patientNavbar.events({

    'click #healthProfile':function (event) {
        Session.set('clickedHealthProfile', 'active');
        Session.set('clickedRecentVisits', '');
        Session.set('clickedRegisteredMedCenters','');
        Session.set('clickedAnalytics','');
        Session.set('searchItem','');
        Router.go("patientHealthProfile");
    },


    'click #registeredMedCenters':function (event) {
        Session.set('clickedRecentVisits', '');
        Session.set('clickedHealthProfile', '');
        Session.set('clickedRegisteredMedCenters','active');
        Session.set('clickedAnalytics','');
        Session.set('searchItem','');
        Router.go("patientMedicalCenter");
    },

    'click #analytics':function (event) {
        Session.set('clickedRecentVisits', '');
        Session.set('clickedHealthProfile', '');
        Session.set('clickedRegisteredMedCenters','');
        Session.set('clickedAnalytics','active');
        Session.set('searchItem','');
        Router.go("doctorMedicalCenters");
    },

    'click #editProfile': function(event) {
        Session.set('clickedMedicalCenters', '');
        Session.set('searchItem','');
    },

    'click #editAccount': function(event) {
        Session.set('clickedMedicalCenters', '');
        Session.set('searchItem','');
    },

    'click #logout': function(event) {
        Session.set('clickedRecentVisits', '');
        Session.set('clickedHealthProfile', '');
        Session.set('clickedRegisteredMedCenters','');
        Session.set('clickedAnalytics','');
        Session.set('searchItem','');
        Meteor.logout();
        Router.go('/');
    }
});

