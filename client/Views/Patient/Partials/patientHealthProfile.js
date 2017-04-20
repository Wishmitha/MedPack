Template.healthProfile.helpers({

    prescriptions : function () {
        return Prescriptions.find({patientID:Meteor.userId()});
    }

});