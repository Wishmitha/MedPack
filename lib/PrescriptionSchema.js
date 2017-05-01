Prescriptions = new Mongo.Collection("prescriptions");

Prescriptions.allow({
    insert:function (userID,doc) {
        return !!userID;
    }
});


Prescriptions.attachSchema(new SimpleSchema({

    patientID: {
        type: String,
        label: "Patient ID",
        autoform:{
            type:'select',
            options:function () {

                return Meteor.users.find({roles:["patient"]}).map(function (user) {
                    return {label: user.profile.firstName+" "+user.profile.lastName, value: user._id};
                });

            }
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