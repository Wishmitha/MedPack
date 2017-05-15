Prescriptions = new Mongo.Collection("prescriptions");

Prescriptions.allow({
    insert:function (userID,doc) {
        return !!userID;
    }
});


Prescriptions.attachSchema(new SimpleSchema({

    patientID: {
        type: String,
        label: "Patient",

        autoform:{
            type:'selectize',
            placeholder:"Select a Registered Patient",

            options:function () {

             console.log("lololol");

                return PatientMedicalCenters.find({medicalCenterID : Router.current().params._id}).fetch().map(function (item) {
                    return {label: item.patient.profile.firstName+" "+item.patient.profile.lastName, value: item.patient._id};
                });

            }

            /*options:function () {

                console.log("lololol");

                return Meteor.users.find({roles:["patient"]}).fetch().map(function (user) {
                    return {label: user.profile.firstName+" "+user.profile.lastName, value: user._id};
                });

            }*/

            /*options:function () {

                console.log("lololol");

                var patientIDs=[];

                for(var i=0; i<PatientMedicalCenters.find({medicalCenterID : Router.current().params._id},{fields:{_id:0,medicalCenterID:0}}).fetch().length;i++){
                    patientIDs.push(PatientMedicalCenters.find({medicalCenterID : Router.current().params._id},{fields:{_id:0,medicalCenterID:0}}).fetch()[i].patientID)
                    console.log(patientIDs[i]);
                }


                return Meteor.users.find({_id:{$in:patientIDs}}).fetch().map(function (user) {
                    return {label: user.profile.firstName+" "+user.profile.lastName, value: user._id};
                });

            }*/
        }
    },

    doctorID : {
        type: String,
        defaultValue: function() {
            return Meteor.userId();
        },
        optional:true,
        autoform: {
            type : 'hidden',
            label : false,
        }
    },

    doctorName : {
        type: String,
        defaultValue: function() {
            return Meteor.user().profile.initials+' '+Meteor.user().profile.familyName
        },
        optional:true,
        autoform: {
            type : 'hidden',
            label : false,
        }
    },

    medicalCenterID : {
        type: String,
        defaultValue: function() {
            return Router.current().params._id;

        },
        optional:true,
        autoform: {
            type : 'hidden',
            label : false,
        }
    },

    diagnosis: {
        type: String,
        label: "Diagnosis"
    },

    drugs: {
        type: [Drug]
    },

    report: {
        type: String,
        label: "Reports",
        optional:true,
        autoform:{
            type: "file"
        }
    },

    additionalInfo: {
        type: String,
        label: "Additional Info",
        optional: true,
        autoform:{
            type: "textarea"
        }
    },

    createdAt : {
        type: String,
        label: "Additional Info",
        defaultValue:new Date().getDate()+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear(),
        autoform: {
            type : 'hidden',
            label : false,
        }
    }
}, { tracker: Tracker }));