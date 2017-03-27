//AllUsers = new Meteor.Collection('allUsers');
//UserData = new Meteor.Collection("userData");

Template.admin.onCreated(function () {
    Meteor.subscribe('allUsers');
});

