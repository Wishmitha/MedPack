Template.medicalCenters.onCreated(function () {
    Session.set('clickedMedicalCenters', 'active');
});

Template.medicalCenters.helpers({
    medicalcenters: function () {
        return MedicalCenters.find();
    }
});