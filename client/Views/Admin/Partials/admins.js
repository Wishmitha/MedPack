Template.admins.onCreated(function () {
    Session.set('clickedAdmins', 'active');
});


Template.admins.helpers({

    users : function () {
        return Meteor.users.find({}, {sort: {createdAt: -1}})
    },

    isAdmin:function () {
        return Roles.userIsInRole(this._id,'admin');
    },

    isCurrentUser:function () {
        return !(this._id==Meteor.userId());
    },

    email : function () {
        return Meteor.users.findOne(this._id).emails[0].address;
    },

    addedBy:function () {
        return Meteor.users.findOne(Meteor.users.findOne(this._id).profile.addedBy).profile.firstName.concat(' '.concat(Meteor.users.findOne(Meteor.users.findOne(this._id).profile.addedBy).profile.lastName));
    }
});

Template.admins.events({

    'click #delete': function () {
        if (confirm("Are you sure you want to completely remove this admin?") == true) {
            Meteor.users.remove(this._id);
        } else {

        }

    },

    'click #newAdmin': function () {
        Session.set('clickedAdmins', '');
        Router.go('newAdmin');

    }
});