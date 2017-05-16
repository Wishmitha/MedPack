Template.prescription.onCreated(function () {
    Meteor.subscribe('prescriptions');
    Meteor.subscribe('allPatients');
    Meteor.subscribe('patientMedicalCenters');

    document.title = "MedPack";

    AutoForm.addHooks(null, {
        onSuccess: function() {
            alert('Prescription submitted successfully.');
        },
    });

});