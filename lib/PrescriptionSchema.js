Prescriptions = new Mongo.Collection("prescriptions");

Prescriptions.allow({
    insert:function (userID,doc) {
        return !!userID;
    }
});


Prescriptions.attachSchema(new SimpleSchema({

    patientID: {
        type: SimpleSchema.Integer,
        label: "Patient ID",
        autoform:{
            type:"select2",
            options:function () {

                return Meteor.users.find({roles:["patient"]}).map(function (user) {
                    return {label: user.profile.firstName+" "+user.profile.lastName, value: user._id};
                });

            }
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
    }
}, { tracker: Tracker }));