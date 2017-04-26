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
        Router.go("doctorMedicalCenters");
    },

    'click #recentVisits':function (event) {
        Session.set('clickedRecentVisits', 'active');
        Session.set('clickedHealthProfile', '');
        Session.set('clickedRegisteredMedCenters','');
        Router.go("doctorMedicalCenters");
    },

    'click #registeredMedCenters':function (event) {
        Session.set('clickedRecentVisits', '');
        Session.set('clickedHealthProfile', '');
        Session.set('clickedRegisteredMedCenters','active');
        Router.go("doctorMedicalCenters");
    },

    'click #editProfile': function(event) {
        Session.set('clickedMedicalCenters', '');
    },

    'click #editAccount': function(event) {
        Session.set('clickedMedicalCenters', '');
    },

    'click #logout': function(event) {
        Session.set('clickedAllUsers', '');
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedAdmins', '');
        Meteor.logout();
        Router.go('/');
    }
});

