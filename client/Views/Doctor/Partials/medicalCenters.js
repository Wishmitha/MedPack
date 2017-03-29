Template.doctorMedicalCenters.events({
    'click #newMedicalCenter':function () {
        Session.set('clickedMedicalCenters', '');
        Router.go('newMedicalCenter');

    }
});

Template.doctorMedicalCenters.helpers({
    medicalcenters: function () {
        return MedicalCenters.find({createdBy:Meteor.userId()});
    }
});