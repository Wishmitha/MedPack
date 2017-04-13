Meteor.methods({

    createMedicalCenter : function (name,address,telNo,morningOpen,morningClose,eveningOpen,eveningClose) { // server method to create a medical center
        MedicalCenters.insert({
            name:name,
            address: address,
            telNo:telNo,
            morningOpen:morningOpen,
            morningClose:morningClose,
            eveningOpen: eveningOpen,
            eveningClose:eveningClose,
            isVerified:false,
            createdBy : this.userId
        });
    }

});