Template.patientRegister.onCreated(function () {

    Meteor.subscribe('allUsers');

    Session.set('emailError',false);
    Session.set('emailVal','');

    Session.set('passwordError',false);
    Session.set('passwordVal','');

    Session.set('isEmpty',false);
});


Template.patientRegister.helpers({

    emailError:function () {
        return Session.get('emailError');
    },

    emailVal:function () {
        return Session.get('emailVal');
    },

    passwordError:function () {
        return Session.get('passwordError');
    },

    passwordVal:function () {
        return Session.get('passwordVal');
    },

    isEmpty:function () {
        return Session.get('isEmpty');
    }

});

Template.patientRegister.events({

    'submit form': function(event) {

        Session.set('isEmpty',false);

        event.preventDefault();
        var emailVar = event.target.email.value;
        var passwordVar = event.target.password.value;
        var passwordAgainVar = event.target.passwordAgain.value;
        var firstNameVar = event.target.firstName.value;
        var lastNameVar = event.target.lastName.value;
        var genderVar = event.target.gender.value;
        var ageVar = event.target.age.value;
        var weightVar = event.target.weight.value;
        var telNoVar = event.target.telNo.value;

        //Check for empty fields
        if(emailVar.length==0 || passwordVar.length==0 || passwordAgainVar.length==0 || firstNameVar.length==0 || lastNameVar.length==0 || genderVar.length==0 || ageVar.length==0 || weightVar.length==0 || telNoVar.length==0){
            Session.set('isEmpty',true);
        }

        //Storing input email
        Session.set('emailVal',emailVar);

        //Check for duplicate or invalid emails
        if(function() {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(emailVar);
            }){
            Session.set('emailError',Meteor.users.find({"emails.address": emailVar}, {limit: 1}).count()>0);
        }else{
            Session.set('emailError',true);
        }


        //Check password confiramations
        if(passwordVar != passwordAgainVar && passwordVar.length!=0 && passwordAgainVar.length!=0){
            Session.set('passwordError',true);
        }else{
            Session.set('passwordError',false);
            Session.set('PasswordVal',passwordVar); // Storing input password
        }

        // Method call for create user
        if(!Session.get('emailError') && !Session.get('isEmpty')) {
            Meteor.call('createPatient', emailVar, passwordVar, firstNameVar, lastNameVar, genderVar, ageVar,weightVar,telNoVar);
            alert("Your account has been successfully created.");
            Meteor.loginWithPassword(emailVar,passwordVar);
            Router.go('main');
        }

    }
});
