Template.editAccount.onCreated(function () {

    Session.set('isEmpty',false);

    Session.set('passwordError',false);

    Session.set('passwordUpdate',false);

});

Template.editAccount.helpers({

    passwordError:function () {
        return Session.get('passwordError');
    },

    isEmpty: function () {
        return Session.get('isEmpty');
    }

});

Template.editAccount.events({
    'submit form': function(event) {

        Session.set('isEmpty',false);

        event.preventDefault();
        var oldPasswordVar = event.target.oldPassword.value;
        var newPasswordVar = event.target.newPassword.value;
        var newPasswordAgainVar = event.target.newPasswordAgain.value;

        if(oldPasswordVar.length == 0 || newPasswordVar.length == 0 || newPasswordAgainVar.length == 0){
            Session.set('isEmpty',true);
        }

        //Check password confiramations
        if(newPasswordVar != newPasswordAgainVar && newPasswordVar.length!=0 && newPasswordAgainVar.length!=0){
            Session.set('passwordError',true);
        }else{
            Session.set('passwordError',false);
        }

        if(!Session.get('isEmpty') && !Session.get('passwordError')) {
            Accounts.changePassword(oldPasswordVar,newPasswordVar,function (err) {
                if(err){
                    alert("Password Update Failed : Recheck your old password")
                }else{
                    alert("Password Updated Successfully");
                }
            });
            //alert("Password Updated Successfully");
        }



    }
});