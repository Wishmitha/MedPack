Template.doctor.onCreated(function () { // subscribe to required collections

    Meteor.subscribe('medicalCenters');

    Meteor.subscribe('doctorMedicalCenters');

    Meteor.subscribe('allDoctors');

    Meteor.subscribe('allPatients');

    Meteor.subscribe('prescriptions');

    document.title = "MedPack";

});