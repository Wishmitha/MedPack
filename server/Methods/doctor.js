Meteor.methods({

    createDoctor : function (email,password,initials,familyName, qualifications, telNo,slmcRegNo,nicNo,address) { // server method to create a doctor
        var doctorID = Accounts.createUser({
            email: email,
            password: password,
            profile: {
                initials:initials,
                familyName:familyName,
                qualifications: qualifications,
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
            medicalCenterID:medicalCenterID,
            ownerID:ownerID,
            doctor:Meteor.users.findOne({_id:doctorID}),
            medicalCenter: MedicalCenters.findOne(medicalCenterID),
            owner:Meteor.users.findOne({_id:ownerID}),
            timeStamp : Date(),
            isApproved : false
        });
    },

    cancelJoinRequest : function (doctorID,medicalCenterID) { // server method to create a patient
        DoctorMedicalCenters.remove({doctorID:doctorID,medicalCenterID:medicalCenterID})
    },

    approveRequest : function (requestID) {
        DoctorMedicalCenters.update({_id:requestID},{$set:{isApproved:true}})
    },

    editDoctorProfile : function (telNo,address) {

        Meteor.users.update({_id:this.userId}, {
            $set: {
                "profile.telNo" : telNo,
                "profile.address" : address
            }
        });

        DoctorMedicalCenters.update({doctorID:this.userId},{
            $set: {
                "doctor.profile.telNo" : telNo,
                "doctor.profile.address" : address,
            }
        });

        DoctorMedicalCenters.update({ownerID:this.userId},{
            $set: {
                "owner.profile.telNo" : telNo,
                "owner.profile.address" : address,
            }
        });
    }

});