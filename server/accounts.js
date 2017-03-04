AccountsTemplates.configure({

    postSignUpHook: function (userID,info) {
                        Roles.addUsersToRoles(userID,info.profile.role);
                    }

});

Meteor.users.allow({
    remove: function(userId, doc) {
        // JUST FOR TESTING - NEVER DO THIS IN PRODUCTION
        return true;
    }
});