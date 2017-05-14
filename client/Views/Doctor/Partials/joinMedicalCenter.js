Template.joinMedicalCenter.helpers({

    medicalCenters : function () {
        return MedicalCenters.find({createdBy:{$not:Meteor.userId()}});
    },

    searchResults:function () {
        return MedicalCenters.find({name:Session.get('searchItem')});
    },

    isJoined : function () {
        return DoctorMedicalCenters.find({doctorID:Meteor.userId(),medicalCenterID:this._id}).count()>0;
    },

    isApproved : function () {
        return DoctorMedicalCenters.findOne({doctorID:Meteor.userId(),medicalCenterID:this._id}).isApproved
    },

    joinRequests : function () {
        return DoctorMedicalCenters.find({ownerID:Meteor.userId()},{sort: {timeStamp: -1}});
    },

    /*requestedMedicalCentersAndDoctors : function () {

        var requiredEntries = DoctorMedicalCenters.find({ownerID:Meteor.userId()});

        var results = [];
        var medicalCenterIDS = [];
        var doctorIDS = [];

        for(var i =0; i<requiredEntries.count();i++){
            medicalCenterIDS.push(requiredEntries.fetch()[i].medicalCenterID);
            doctorIDS.push(requiredEntries.fetch()[i].doctorID);;
        }


        //results.push(MedicalCenters.find({_id:{$in:medicalCenterIDS}}).fetch());

        var medicalCenters=[];
        var doctors=[];

        for(var i =0; i<medicalCenterIDS.length;i++){
            medicalCenters.push(MedicalCenters.find({_id:medicalCenterIDS[i]}).fetch());
            doctors.push(Meteor.users.find({_id:doctorIDS[i]}).fetch());
        }

        results.push(medicalCenters);
        results.push(doctors);

        return results;
    },

    requestedMedicalCenters : function () {

        var requiredEntries = DoctorMedicalCenters.find({ownerID:Meteor.userId()});

        var medicalCenterIDS = [];

        for(var i =0; i<requiredEntries.count();i++){
            medicalCenterIDS.push(requiredEntries.fetch()[i].medicalCenterID);
        }

        var medicalCenters=[];

        for(var i =0; i<medicalCenterIDS.length;i++){
            medicalCenters.push(MedicalCenters.find({_id:medicalCenterIDS[i]}).fetch());
        }

        return medicalCenters;
    },

    requestedDoctors : function () {

        var requiredEntries = DoctorMedicalCenters.find({ownerID:Meteor.userId()});

        var doctorIDS = [];

        for(var i =0; i<requiredEntries.count();i++){
            doctorIDS.push(requiredEntries.fetch()[i].doctorID);;
        }

        var doctors=[];

        for(var i =0; i<doctorIDS.length;i++){
            doctors.push(Meteor.users.find({_id:doctorIDS[i]}).fetch());
        }

        return doctors;

    }*/


});

Template.joinMedicalCenter.events({
    'click #search': function(event) {
        var searchItem = document.getElementById("search").value;
        console.log(searchItem);
        Session.set('searchItem',searchItem);
    },

    'click #join':function (event) {
        //if(PatientMedicalCenters.find({patientID:Meteor.userId(),medicalCenterID:this._id}).count()==0)


            if (confirm("Your join request has been sent. Wait for the confirmation of the owner.") == true) {
                Meteor.call('joinMedicalCenter',Meteor.userId(),this._id,MedicalCenters.findOne({_id:this._id}).createdBy);
            } else {

            }

    },

    'click #cancel':function (event) {
        //if(PatientMedicalCenters.find({patientID:Meteor.userId(),medicalCenterID:this._id}).count()==1)

            if (confirm("Are you sure you want to cancel the request?") == true) {
                Meteor.call('cancelJoinRequest',Meteor.userId(),this._id);
            } else {

            }
    },

    'click #leave':function (event) {
        //if(PatientMedicalCenters.find({patientID:Meteor.userId(),medicalCenterID:this._id}).count()==1)

        if (confirm("Are you sure you want to leave the medical center?") == true) {
            Meteor.call('cancelJoinRequest',Meteor.userId(),this._id);
        } else {

        }
    },

    'click #approve':function (event) {
        //if(PatientMedicalCenters.find({patientID:Meteor.userId(),medicalCenterID:this._id}).count()==1)

        if (confirm("Are you sure you want to approve this doctor? This will allow the doctor to access your medical center?") == true) {
            Meteor.call('approveRequest',this._id);
        } else {

        }
    },
});