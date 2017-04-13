Template.adminNavbar.helpers({

    clickedAllUsers:function () {
        return Session.get('clickedAllUsers');
    },
    clickedMedicalCenters:function () {
        return Session.get('clickedMedicalCenters');
    },
    clickedAdmins:function () {
        return Session.get('clickedAdmins');
    },

    firstName:function () {
        return Meteor.user().profile.firstName;
    },

    lastName:function () {
        return Meteor.user().profile.lastName;
    },

});

Template.adminNavbar.events({

    // session variables for update navbar

    'click #allUsers':function (event) {
        Session.set('clickedAllUsers', 'active');
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedAdmins', '');
        //Router.go('main');
    },
    'click #medicalCenters':function (event) {
        Session.set('clickedAllUsers', '');
        Session.set('clickedMedicalCenters', 'active');
        Session.set('clickedAdmins', '');
    },
    'click #admins':function (event) {
        Session.set('clickedAllUsers', '');
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedAdmins', 'active');
    },

    'click #editProfile':function (event) {
        Session.set('clickedAllUsers', '');
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedAdmins', '');
    },

    'click #editAccount':function (event) {
        Session.set('clickedAllUsers', '');
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedAdmins', '');
    },

    'click #logout': function(event) {
        Session.set('clickedAllUsers', '');
        Session.set('clickedMedicalCenters', '');
        Session.set('clickedAdmins', '');
        Meteor.logout();
        Router.go('/');
    }
});