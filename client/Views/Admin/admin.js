//AllUsers = new Meteor.Collection('allUsers');
//UserData = new Meteor.Collection("userData");

Template.admin.onCreated(function () { // subscribe to required collection
    Meteor.subscribe('allUsers');
    Meteor.subscribe('medicalCenters');
});

