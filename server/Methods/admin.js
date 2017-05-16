Meteor.methods({

    createAdmin : function (email,password,firstName,lastName,address) { // server method to create an admin
        var adminID = Accounts.createUser({
                         email: email,
                         password: password,
                         profile: {
                             firstName:firstName,
                             lastName:lastName,
                             address: address,
                             addedBy: this.userId
                         }

                      });

        Roles.addUsersToRoles(adminID,'admin');
    },

    verifyDoctor : function (doctorID) {
        Meteor.users.update({_id:doctorID},{$set:{"profile.isVerified":true}});
    },

    unverifyDoctor : function (doctorID) {
        Meteor.users.update({_id:doctorID},{$set:{"profile.isVerified":false}});
    },

    verifyMedicalCenter : function (medicalCenterID) {
        MedicalCenters.update({_id:medicalCenterID},{$set:{"isVerified":true}});
    },

    unverifyMedicalCenter : function (medicalCenterID) {
        MedicalCenters.update({_id:medicalCenterID},{$set:{"isVerified":false}});
    },

});
