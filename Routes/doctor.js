Router.route('/main/doctor-medical-centers',

    {
        name: "doctorMedicalCenters",

        onBeforeAction: function () {

            if (!Meteor.user()) {
                if (!Meteor.loggingIn()) {
                    Router.go("login");
                }
            }else if(Roles.userIsInRole(Meteor.userId(),'admin') || Roles.userIsInRole(Meteor.userId(),'patient')){
                Router.go("main");
            }
            this.next();
        },

        action:function(){
            this.layout('doctor');
            this.render('doctorNavbar', {to: 'navbar'});
            this.render('doctorMedicalCenters', {to: 'main'});
        }
    }
);

Router.route('/main/new-medical-center',

    {
        name: "newMedicalCenter",

        onBeforeAction: function () {

            if (!Meteor.user()) {
                if (!Meteor.loggingIn()) {
                    Router.go("login");
                }
            }else if(Roles.userIsInRole(Meteor.userId(),'admin') || Roles.userIsInRole(Meteor.userId(),'patient')){
                Router.go("main");
            }
            this.next();
        },

        action:function(){
            this.layout('doctor');
            this.render('doctorNavbar', {to: 'navbar'});
            this.render('newMedicalCenter', {to: 'main'});
        }
    }
);

Router.route('/main/join-medical-center',

    {
        name: "joinMedicalCenter",

        onBeforeAction: function () {

            if (!Meteor.user()) {
                if (!Meteor.loggingIn()) {
                    Router.go("login");
                }
            }else if(Roles.userIsInRole(Meteor.userId(),'admin') || Roles.userIsInRole(Meteor.userId(),'patient')){
                Router.go("main");
            }
            this.next();
        },

        action:function(){
            this.layout('doctor');
            this.render('doctorNavbar', {to: 'navbar'});
            this.render('joinMedicalCenter', {to: 'main'});
        }
    }
);

Router.route('/main/doctor-medical-centers/:_id',
    {
        name:"medicalCenter",

        onBeforeAction: function () {

            if (!Meteor.user()) {
                if (!Meteor.loggingIn()) {
                    Router.go("login");
                }
            }else if(Roles.userIsInRole(Meteor.userId(),'admin') || Roles.userIsInRole(Meteor.userId(),'patient')){
                Router.go("main");
            }
            this.next();
        },

        action:function(){
            this.layout('doctor');
            this.render('medicalCenterNavbar', {to: 'navbar'});
            this.render('prescription', {to: 'main'});
        }
    }
);

Router.route('/main/view-patient-history/:_id',
    {
        name:"viewHistory",

        onBeforeAction: function () {

            if (!Meteor.user()) {
                if (!Meteor.loggingIn()) {
                    Router.go("login");
                }
            }else if(Roles.userIsInRole(Meteor.userId(),'admin') || Roles.userIsInRole(Meteor.userId(),'patient')){
                Router.go("main");
            }
            this.next();
        },

        action:function(){
            this.layout('doctor');
            this.render('patientHistoryNavbar', {to: 'navbar'});
            this.render('patientHistory', {to: 'main'});
        }
    }
);