Prescriptions = new Mongo.Collection("prescriptions");

Prescriptions.allow({
    insert:function (userID,doc) {
        return !!userID;
    }
});

Prescriptions.attachSchema(new SimpleSchema({
    patientID: {
        type: String,
        allowedValues:['lol','k'],
        label: "Patient ID",
        max: 200
    },
    diagnosis: {
        type: String,
        label: "Diagnosis"
    },
    copies: {
        type: Number,
        label: "Number of copies",
        min: 0
    },
    lastCheckedOut: {
        type: Date,
        label: "Last date this book was checked out",
        optional: true
    },
    summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000
    }
}, { tracker: Tracker }));