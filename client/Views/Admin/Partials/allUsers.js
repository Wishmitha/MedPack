Template.allUsers.onCreated(function () {
    Session.set('clickedAllUsers', 'active');
});

//displays all the users seperately as patients and doactors

Template.allUsers.helpers({
    users : function () {
        return Meteor.users.find({}, {sort: {createdAt: -1}})
    },

    isDoctor : function () {
        return Roles.userIsInRole(this._id,'doctor');
    },

    isPatient : function () {
        return Roles.userIsInRole(this._id,'patient');
    },

    email : function () {
        return Meteor.users.findOne(this._id).emails[0].address;
    }

});

Template.allUsers.events({

    'click #deletePatient': function () {
        if (confirm("Are you sure you want to completely remove this patient?") == true) {
            Meteor.call("removePatient",this._id);
        } else {

        }
    },

    'click #deleteDoctor': function () {
        if (confirm("Are you sure you want to completely remove this doctor?") == true) {
            Meteor.call("removeDoctor",this._id);
        } else {

        }
    },

    'click #verify':function () {
        if (confirm("Are you sure you want to verify this user?") == true) {
            Meteor.call("verifyDoctor",this._id);
        } else {

        }
    },

    'click #unverify':function () {
        if (confirm("Are you sure you want to remove the verification from the user?") == true) {
            Meteor.call("unverifyDoctor",this._id);
        } else {

        }
    },

    'click #registry':function () {
        window.open('http://www.srilankamedicalcouncil.org/registry.php', '_blank');
    }
});