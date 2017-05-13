Meteor.methods({

    createDoctor : function (email,password,initials,familyName,telNo,slmcRegNo,nicNo,address) { // server method to create a doctor
        var doctorID = Accounts.createUser({
            email: email,
            password: password,
            profile: {
                initials:initials,
                familyName:familyName,
                telNo:telNo,
                slmcRegNo:slmcRegNo,
                nicNo: nicNo,
                address: address,
                isVerified : false
            }

        });

        Roles.addUsersToRoles(doctorID,'doctor');
    },

    joinMedicalCenter : function (doctorID,medicalCenterID,ownerID) { // server method to map joined medical  centers

        DoctorMedicalCenters.insert({
            doctorID:doctorID,
            medicalCenterID: medicalCenterID,
            ownerID:ownerID,
            isApproved : false
        });
    },

    cancelJoinRequest : function (doctorID,medicalCenterID) { // server method to create a patient
        DoctorMedicalCenters.remove({doctorID:doctorID,medicalCenterID:medicalCenterID})
    }

});