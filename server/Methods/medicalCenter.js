Meteor.methods({

    createMedicalCenter : function (name,address,telNo,consultentOpen,consultentClose,ownerName) { // server method to create a medical center
        MedicalCenters.insert({
            name:name,
            address: address,
            telNo:telNo,
            consultentOpen:consultentOpen,
            consultentClose:consultentClose,
            isVerified:false,
            ownerName : ownerName,
            createdBy : this.userId
        });
    }

});