Template.prescription.onCreated(function () {
    Meteor.subscribe('prescriptions');
    Meteor.subscribe('allPatients');
    Meteor.subscribe('patientMedicalCenters');
});