Template.patient.onCreated(function () {
    Meteor.subscribe('prescriptions');
    Meteor.subscribe('medicalCenters');
    Meteor.subscribe('patientMedicalCenters')
});