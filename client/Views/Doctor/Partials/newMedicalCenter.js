Template.newMedicalCenter.onCreated(function () {

    Session.set('isEmpty',false);
});


Template.newMedicalCenter.helpers({

    isEmpty:function () {
        return Session.get('isEmpty');
    }

});

Template.newMedicalCenter.events({

    'submit form': function(event) { // creates a new medical center

        Session.set('isEmpty',false);

        event.preventDefault();
        var nameVar = event.target.medicalCenterName.value;
        var addressVar = event.target.address.value;
        var telNoVar = event.target.telNo.value;
        var morningOpenVar = event.target.morningOpen.value;
        var moriningCloseVar = event.target.morningClose.value;
        var eveningOpenVar = event.target.eveningOpen.value;
        var eveningCloseVar = event.target.eveningClose.value;

        //Check for empty fields
        if(nameVar.length==0 || addressVar.length==0 || telNoVar.length==0 || morningOpenVar.length==0 || moriningCloseVar.length==0 || eveningOpenVar.length==0 || eveningCloseVar.length==0){
            Session.set('isEmpty',true);
        }

        // Method call for create medical center
        if(!Session.get('emailError') && !Session.get('isEmpty')) {
            Meteor.call('createMedicalCenter', nameVar,addressVar,telNoVar,morningOpenVar,moriningCloseVar,eveningOpenVar,eveningCloseVar);
            alert("Medical Center created successfully.")
            //Router.go('admins');
        }

    }
});
