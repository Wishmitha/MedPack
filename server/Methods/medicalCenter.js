Meteor.methods({

    createMedicalCenter : function (name,type,address,telNo,consultentOpen,consultentClose,ownerName) { // server method to create a medical center
        MedicalCenters.insert({
            name:name,
            type:type,
            address: address,
            telNo:telNo,
            consultentOpen:consultentOpen,
            consultentClose:consultentClose,
            isVerified:false,
            ownerName : ownerName,
            createdBy : this.userId,
            createdAt: new Date(),
        });
    },

    removeMedicalCenter: function (medicalCenterID) {
        MedicalCenters.remove({_id:medicalCenterID});
        DoctorMedicalCenters.remove({medicalCenterID:medicalCenterID});
        PatientMedicalCenters.remove({medicalCenterID:medicalCenterID});
    },

});