Template.patientEditProfile.onCreated(function () {

    Session.set('isEmpty',false);

});

Template.patientEditProfile.helpers({

    firstName : function () {
      return Meteor.user().profile.firstName;
    },

    lastName : function () {
        return Meteor.user().profile.lastName;
    },

    age : function () {
        return Meteor.user().profile.age;
    },

    weight:function () {
        return Meteor.user().profile.weight;
    },

    telNo:function () {
        return Meteor.user().profile.telNo;
    },

    isEmpty: function () {
        return Session.get('isEmpty');
    }
});

Template.patientEditProfile.events({
    'submit form': function(event) { // updates the profile of the doctor



        Session.set('isEmpty',false);

        event.preventDefault();

        var firstNameVar = event.target.firstName.value;
        var lastNameVar = event.target.lastName.value;
        var ageVar = event.target.age.value;
        var weightVar = event.target.weight.value;
        var telNoVar = event.target.telNo.value;

        if(firstNameVar.length == 0 || lastNameVar.length == 0 || ageVar == 0 || weightVar == 0 || telNoVar.length == 0){ //check for empty input fields
            Session.set('isEmpty',true);
        }

        if(!Session.get('isEmpty')) {
            alert("Profile Updated Succesfully");
            Meteor.call('editPatientProfile',firstNameVar,lastNameVar,ageVar,weightVar,telNoVar)

            /*Meteor.users.update(Meteor.userId(), {
                $set: {
                    "profile.firstName" : firstNameVar,
                    "profile.lastName" : lastNameVar,
                    "profile.age" : ageVar,
                    "profile.weight" : weightVar,
                    "profile.telNo": telNoVar
                }
            });

            PatientMedicalCenters.update({patientID:Meteor.userId()},{
                $set: {
                    "patient.profile.firstName" : firstNameVar,
                    "patient.profile.lastName" : lastNameVar,
                    "patient.profile.age" : ageVar,
                    "patient.profile.weight" : weightVar,
                    "patient.profile.telNo": telNoVar
                }
            });*/
        }

    }
});

