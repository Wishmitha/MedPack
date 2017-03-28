Template.adminEditProfile.onCreated(function () {

    Session.set('isEmpty',false);

});

Template.adminEditProfile.helpers({
    firstName:function () {
        return Meteor.user().profile.firstName;
    },

    lastName:function () {
        return Meteor.user().profile.lastName;
    },
    address:function () {
        return Meteor.user().profile.address;
    },

    isEmpty: function () {
        return Session.get('isEmpty');
    }
});

Template.adminEditProfile.events({
    'submit form': function(event) {

        Session.set('isEmpty',false);

        event.preventDefault();
        var firstNameVar = event.target.firstName.value;
        var lastNameVar = event.target.lastName.value;
        var addressVar = event.target.address.value;

        if(firstNameVar.length == 0 || lastNameVar.length == 0 || addressVar.length == 0){
            Session.set('isEmpty',true);
        }

        if(!Session.get('isEmpty')) {
            alert("Profile Updated Succesfully");
            Meteor.users.update(Meteor.userId(), {
                $set: {
                    "profile.firstName": firstNameVar,
                    "profile.lastName": lastNameVar,
                    "profile.address": addressVar
                }
            });
        }

    }
});

