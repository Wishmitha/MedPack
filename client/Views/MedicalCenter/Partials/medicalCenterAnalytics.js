Template.medicalCenterAnalytics.topGenresChart = function() {
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: ""
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'genre',
            data : function () {

                var analytics = [];

                for(var i = 0; i<Session.get('diseases').length; i++){
                    var append = [];
                    append.push(Session.get('diseases')[i]);
                    append.push(Session.get('counts')[i]);
                    analytics.push(append);
                }

                return analytics;
            }()
        }]
    };
};

Template.medicalCenterAnalytics.testChart = function() {
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: ""
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'genre',
            data : function () {

                var analytics = [];

                for(var i = 0; i<Session.get('overallDiseases').length; i++){
                    var append = [];
                    append.push(Session.get('overallDiseases')[i]);
                    append.push(Session.get('overallCounts')[i]);
                    analytics.push(append);
                }

                return analytics;
            }()
        }]
    };
};

Template.medicalCenterAnalytics.onCreated(function () {

    var allPrescriptions = Prescriptions.find({medicalCenterID:Router.current().params._id}).fetch();

    var uniqueDiagnoses = [];

    for(var i=0; i<allPrescriptions.length; i++){
        if(!uniqueDiagnoses.includes(allPrescriptions[i].diagnosis)){
            uniqueDiagnoses.push(allPrescriptions[i].diagnosis);
        }
    }

    var counts = []

    for(var i=0; i<uniqueDiagnoses.length; i++){
        var count = 0;
        for(var j=0; j<allPrescriptions.length; j++){
            if(uniqueDiagnoses[i]==allPrescriptions[j].diagnosis){
                count++
            }
        }
        counts.push(count)
    }

    Session.set('diseases',uniqueDiagnoses);
    Session.set('counts',counts);

    //overall analytics-----------------------------------------------------------------------

    var overallAllPrescriptions = Prescriptions.find({}).fetch();

    var overallUniqueDiagnoses = [];

    for(var i=0; i<overallAllPrescriptions.length; i++){
        if(!overallUniqueDiagnoses.includes(overallAllPrescriptions[i].diagnosis)){
            overallUniqueDiagnoses.push(overallAllPrescriptions[i].diagnosis);
        }
    }

    var overallCounts = []

    for(var i=0; i<overallUniqueDiagnoses.length; i++){
        var overallCount = 0;
        for(var j=0; j<overallAllPrescriptions.length; j++){
            if(overallUniqueDiagnoses[i]==overallAllPrescriptions[j].diagnosis){
                overallCount++
            }
        }
        overallCounts.push(overallCount)
    }

    Session.set('overallDiseases',overallUniqueDiagnoses);
    Session.set('overallCounts',overallCounts);



});

Template.medicalCenterAnalytics.helpers({

    prescriptions : function () {
        return Prescriptions.find({medicalCenterID:Router.current().params._id},{sort: {createdAt: -1}});
    },

    patientName : function () {
        return Meteor.users.find({_id:this.patientID}).fetch()[0].profile.firstName + " " + Meteor.users.find({_id:this.patientID}).fetch()[0].profile.lastName;
    }

});