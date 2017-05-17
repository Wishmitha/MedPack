// myTemplate.js
Template.patientAnalytics.topGenresChart = function() {
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text:""
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
            /*data: [
                ['Adventure',   45.0],
                ['Action',       26.8],
                ['Ecchi',   12.8],
                ['Comedy',    8.5],
                ['Yuri',     6.2]
            ]*/

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

Template.patientAnalytics.onCreated(function () {

    var allPrescriptions = Prescriptions.find({patientID:Meteor.userId()}).fetch();

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

});

Template.patientAnalytics.helpers({

    prescriptions : function () {
        return Prescriptions.find({patientID:Meteor.userId()},{sort: {createdAt: -1}});
    }

});
