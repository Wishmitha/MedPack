Meteor.methods({

    createMedicalCenter : function (name,address,telNo,morningOpen,morningClose,eveningOpen,eveningClose) {
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