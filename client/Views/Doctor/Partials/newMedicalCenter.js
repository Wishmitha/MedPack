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
        var consultentOpenVar = event.target.consultentOpen.value;
        var consultentCloseVar = event.target.consultentClose.value;
        var ownerName = Meteor.user().profile.initials+" "+Meteor.user().profile.familyName;

        //Check for empty fields
        if(nameVar.length==0 || addressVar.length==0 || telNoVar.length==0 || consultentOpenVar.length==0 || consultentCloseVar.length==0){
            Session.set('isEmpty',true);
        }

        // Method call for create medical center
        if(!Session.get('emailError') && !Session.get('isEmpty')) {
            Meteor.call('createMedicalCenter', nameVar,addressVar,telNoVar,consultentOpenVar,consultentCloseVar,ownerName);
            alert("Medical Center created successfully.")
            //Router.go('admins');
        }

    }
});
