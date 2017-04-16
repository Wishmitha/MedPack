Template.patientEditProfile.onCreated(function () {

    Session.set('isEmpty',false);

});

Template.patientEditProfile.helpers({
    telNo:function () {
        return Meteor.user().profile.telNo;
    },

    address:function () {
        return Meteor.user().profile.address;
    },

    isEmpty: function () {
        return Session.get('isEmpty');
    }
});

Template.patientEditProfile.events({
    'submit form': function(event) { // updates the profile of the doctor



        Session.set('isEmpty',false);

        event.preventDefault();

        var telNoVar = event.target.telNo.value;
        var addressVar = event.target.address.value;

        if(telNoVar.length == 0 || addressVar.length == 0){ //check for empty input fields
            Session.set('isEmpty',true);
        }

        if(!Session.get('isEmpty')) {
            alert("Profile Updated Succesfully");
            Meteor.users.update(Meteor.userId(), {
                $set: {
                    "profile.telNo": telNoVar,
                    "profile.address": addressVar
                }
            });
        }

    }
});

