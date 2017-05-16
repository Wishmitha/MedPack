Template.doctorRegister.onCreated(function () {

    Meteor.subscribe('allUsers');

    Session.set('emailError',false);
    Session.set('emailVal','');

    Session.set('passwordError',false);
    Session.set('passwordVal','');

    Session.set('isEmpty',false);
});


Template.doctorRegister.helpers({

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

Template.doctorRegister.events({

    'submit form': function(event) {

        Session.set('isEmpty',false);

        event.preventDefault();
        var emailVar = event.target.email.value;
        var passwordVar = event.target.password.value;
        var passwordAgainVar = event.target.passwordAgain.value;
        var initialsVar = event.target.initials.value;
        var familyNameVar = event.target.familyName.value;
        var qualificationsVar = event.target.qualifications.value;
        var telNoVar = event.target.telNo.value;
        var slmcRegNoVar = event.target.slmcRegNo.value;
        var nicNoVar = event.target.nicNo.value;
        var addressVar = event.target.address.value;

        //Check for empty fields
        if(emailVar.length==0 || passwordVar.length==0 || passwordAgainVar.length==0 || initialsVar.length==0 || familyNameVar.length==0 || qualificationsVar.length==0 || telNoVar.length==0 || slmcRegNoVar.length==0 || nicNoVar.length==0 || addressVar.length==0){
            Session.set('isEmpty',true);
        }

        //Storing input email
        Session.set('emailVal',emailVar);

        //Check for duplicate or invalid emails
        if(emailFormatTest(emailVar)){
            Session.set('emailError',Meteor.users.find({"emails.address": emailVar}, {limit: 1}).count()>0);
            console.log('noemailerror')
        }else{
            Session.set('emailError',true);
            console.log('emailerror')
        }

        function emailFormatTest(email) {
            if(email.length != 0) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }else{
                return true;
            }
        }


        //Check password confiramations
        if(passwordVar != passwordAgainVar && passwordVar.length!=0 && passwordAgainVar.length!=0){
            Session.set('passwordError',true);
        }else{
            Session.set('passwordError',false);
            Session.set('PasswordVal',passwordVar); // Storing input password
        }

        // Method call for create user
        if(!Session.get('emailError') && !Session.get('isEmpty') && !Session.get('passwordError')) {
            Meteor.call('createDoctor', emailVar, passwordVar, initialsVar, familyNameVar, qualificationsVar, telNoVar, slmcRegNoVar,nicNoVar,addressVar);
            alert("Your account has been successfully created.");
            Meteor.loginWithPassword(emailVar,passwordVar);
            Router.go('main');
        }

    }
});
