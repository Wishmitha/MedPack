Template.patientNavbar.onCreated(function () {
    Session.set('clickedMedicalCenters', 'active');
});

// session varibles for update doctor navbar

Template.patientNavbar.helpers({

    clickedMedicalCenters:function () {
        return Session.get('clickedMedicalCenters');
    },

     firstName:function () {
        return Meteor.user().profile.firstName;
    },

    lastName:function () {
        return Meteor.user().profile.lastName;
    },

});

Template.patientNavbar.events({

    'click #medicalCenters':function (event) {
        Session.set('clickedMedicalCenters', 'active');
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

