Template.allUsers.onCreated(function () {
    Session.set('clickedAllUsers', 'active');
});


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

    'click #delete': function () {
        if (confirm("Are you sure you want to completely remove this user?") == true) {
            Meteor.users.remove(this._id);
        } else {

        }

    }
});