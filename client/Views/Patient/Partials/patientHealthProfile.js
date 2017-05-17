Template.healthProfile.helpers({

    prescriptions : function () {
        return Prescriptions.find({patientID:Meteor.userId()},{sort: {createdAt: -1}});
    },
    /*medicalCenter : function () {
        return MedicalCenters.findOne({_id:this.medicalCenterID}).name;
    }*/

});