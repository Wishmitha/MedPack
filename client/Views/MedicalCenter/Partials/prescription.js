Template.prescription.onCreated(function () {
    Meteor.subscribe('prescriptions');
    Meteor.subscribe('allPatients');
})

Template.prescription.helpers({



});