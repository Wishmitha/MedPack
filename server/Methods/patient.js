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

});