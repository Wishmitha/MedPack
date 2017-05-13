Template.doctorMedicalCenters.events({
    'click #newMedicalCenter':function () {
        Session.set('clickedMedicalCenters', '');
        Router.go('newMedicalCenter');

    },

    'click #joinMedicalCenter':function () {
        Session.set('clickedMedicalCenters', '');
        Router.go('joinMedicalCenter');

    },

    'click #login':function () {
        Session.set('clickedMedicalCenters', '');
        Router.go('medicalCenter',{_id:this._id});
    }
});

// displays medical centers of the current doctor in the template

Template.doctorMedicalCenters.helpers({
    medicalcenters: function () {
        return MedicalCenters.find({createdBy:Meteor.userId()});
    }
});