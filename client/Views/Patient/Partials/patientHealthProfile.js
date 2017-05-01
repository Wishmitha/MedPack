Template.healthProfile.helpers({

    prescriptions : function () {
        return Prescriptions.find({patientID:Meteor.userId()});
    },
    medicalCenter : function () {
        return MedicalCenters.findOne({_id:this.medicalCenterID}).name;
    }

});