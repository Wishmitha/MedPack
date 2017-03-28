Template.doctorNavbar.onCreated(function () {
    Session.set('clickedMedicalCenters', 'active');
});

Template.doctorNavbar.helpers({

    clickedMedicalCenters:function () {
        return Session.get('clickedMedicalCenters');
    },

    initials:function () {
        return Meteor.user().profile.initials;
    },

    familyName:function () {
        return Meteor.user().profile.familyName;
    },

});

Template.doctorNavbar.events({

    'click #medicalCenters':function (event) {
        Session.set('clickedMedicalCenters', 'active');
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

