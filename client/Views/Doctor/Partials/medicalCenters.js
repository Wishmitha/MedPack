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
    },

    'click #delete':function () {
        if (confirm("Are you sure you want to delete this medical center? All the data and join requests will be lost.") == true) {
            Meteor.call('removeMedicalCenter',this._id);
        } else {

        }
    }
});

// displays medical centers of the current doctor in the template

Template.doctorMedicalCenters.helpers({
    medicalcenters: function () {
        return MedicalCenters.find({createdBy:Meteor.userId()});
    },

    joinedMedicalCenters : function () {
        var requiredEntries = DoctorMedicalCenters.find({doctorID:Meteor.userId(),isApproved:true})

        var medicalCenterIDS = [];

        for(var i =0; i<requiredEntries.count();i++){
            medicalCenterIDS.push(requiredEntries.fetch()[i].medicalCenterID);
        }

        return MedicalCenters.find({_id:{$in:medicalCenterIDS}}).fetch()
    }
});