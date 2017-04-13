Template.medicalCenters.onCreated(function () {
    Session.set('clickedMedicalCenters', 'active');
});

//displays all the medical centers registered in the system

Template.medicalCenters.helpers({
    medicalcenters: function () {
        return MedicalCenters.find();
    }
});