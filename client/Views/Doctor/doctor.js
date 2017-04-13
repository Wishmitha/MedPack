Template.doctor.onCreated(function () { // subscribe to required collections

    Meteor.subscribe('medicalCenters');
    Meteor.subscribe('prescriptions');

});