Template.doctorNavbar.onCreated(function () {
    Session.set('clickedMedicalCenters', 'active');
});

// session varibles for update doctor navbar

Template.doctorNavbar.helpers({

    clickedMedicalCenters:function () {
        return Session.get('clickedMedicalCenters');
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

Template.doctorNavbar.events({

    'click #medicalCenters':function (event) {
        Session.set('clickedMedicalCenters', 'active');
        Session.set('clickedViewHistory', '');
        Router.go("doctorMedicalCenters");
        Session.set('searchItem','');
    },

    'click #editProfile': function(event) {
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedViewHistory', '');
        Session.set('searchItem','');
    },

    'click #editAccount': function(event) {
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedViewHistory', '');
        Session.set('searchItem','');
    },

    'click #logout': function(event) {
        Session.set('clickedAllUsers', '');
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedViewHistory', '');
        Session.set('clickedAdmins', '');
        Session.set('searchItem','');
        Meteor.logout();
        Router.go('/');
    }
});

