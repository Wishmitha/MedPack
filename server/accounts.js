AccountsTemplates.configure({

    postSignUpHook: function (userID,info) {
                        Roles.addUsersToRoles(userID,info.profile.role);
                    },

    //enforceEmailVerification: true, // verifying the user email. should be implemented. not used in development
    //sendVerificationEmail: true

});

Meteor.users.allow({
    remove: function(userId, doc) {
        // JUST FOR TESTING - NEVER DO THIS IN PRODUCTION
        return true;
    }
});

// used to create admins from anoth  admin

