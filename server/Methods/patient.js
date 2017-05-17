Meteor.methods({

    createPatient : function (email,password,firstName,lastName,gender,age,weight,telNo) { // server method to create a patient
        var patientID = Accounts.createUser({
            email: email,
            password: password,
            profile: {
                firstName:firstName,
                lastName:lastName,
                gender:gender,
                age:age,
                weight:weight,
                telNo:telNo
            }

        });

        Roles.addUsersToRoles(patientID,'patient');
    },

    registerInMedicalCenter : function (patientID,medicalCenterID) { // server method to create a patient
        PatientMedicalCenters.insert({
            patientID:patientID,
            medicalCenterID: medicalCenterID,
            patient : Meteor.users.findOne({_id:patientID})
        });
    },

    unregisterMedicalCenter : function (patientID,medicalCenterID) { // server method to create a patient
        PatientMedicalCenters.remove({patientID:patientID,medicalCenterID:medicalCenterID})
    },

    editPatientProfile : function (firstName,lastName,age,weight,telNo) {

        Meteor.users.update({_id:this.userId}, {
            $set: {
                "profile.firstName" : firstName,
                "profile.lastName" : lastName,
                "profile.age" : age,
                "profile.weight" : weight,
                "profile.telNo": telNo
            }
        });

        PatientMedicalCenters.update({patientID:this.userId},{
            $set: {
                "patient.profile.firstName" : firstName,
                "patient.profile.lastName" : lastName,
                "patient.profile.age" : age,
                "patient.profile.weight" : weight,
                "patient.profile.telNo": telNo
            }
        });
    }

});