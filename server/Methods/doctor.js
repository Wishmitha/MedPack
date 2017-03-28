Meteor.methods({

    createDoctor : function (email,password,initials,familyName,telNo,slmcRegNo,nicNo,address) {
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

});