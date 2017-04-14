Meteor.publish('userData', function () { // publishing particular user given the id
    return this.users.find({_id: this.userId});
});

Meteor.publish('allUsers',function () { // publishing user collections

    if(Roles.userIsInRole(this.userId,'admin')){
        return Meteor.users.find({});
    }

});

Meteor.publish('allPatients',function () {

    return Meteor.users.find({roles:["patient"]});

});

Meteor.publish('medicalCenters',function () { // publishing medical center collection

    return MedicalCenters.find({});

    /*if(Roles.userIsInRole(this.userId,'doctor')){
        return MedicalCenters.find();
    }*/

});

Meteor.publish('prescriptions',function () { // publishing medical center collection

    return Prescriptions.find({});

    /*if(Roles.userIsInRole(this.userId,'doctor')){
     return MedicalCenters.find();
     }*/

});
