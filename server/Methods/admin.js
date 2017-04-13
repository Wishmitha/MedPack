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

});
