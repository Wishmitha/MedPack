Template.patient.onCreated(function () {
    Meteor.subscribe('prescriptions');
});