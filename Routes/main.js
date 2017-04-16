Router.route('/user-login',
    {
        name: "login",

        onBeforeAction: function () {
            if (!!Meteor.user()) {
                if (!Meteor.loggingIn()) Router.go("main");
            }
            this.next();
        },

        action : function () {
            this.render('login');
        }
    });

Router.route('/main',
    {
        name: "main",

        onBeforeAction: function () {

            if (! Meteor.user()) {
                if (!Meteor.loggingIn()){
                    Router.go("login");
                }
            }else if(Roles.userIsInRole(Meteor.userId(),'admin')) {
                Router.go("allUsers");
            }else if(Roles.userIsInRole(Meteor.userId(),'doctor')) {
                Router.go("doctorMedicalCenters");
            }else if(Roles.userIsInRole(Meteor.userId(),'patient')) {
                Router.go("patientHealthProfile");
            }
            this.next();
        },

        action : function () {
            this.render('main');
        }
    });

Router.route('/doctor-register',
    {
        name: "doctorRegister",

        onBeforeAction: function () {
            if (!!Meteor.user()) {
                if (!Meteor.loggingIn()) Router.go("main");
            }
            this.next();
        },

        action : function () {
            this.render('doctorRegister');
        }
    });

Router.route('/patient-register',
    {
        name: "patientRegister",

        onBeforeAction: function () {
            if (!!Meteor.user()) {
                if (!Meteor.loggingIn()) Router.go("main");
            }
            this.next();
        },

        action : function () {
            this.render('patientRegister');
        }
    });

Router.route('/main/edit-account',

    {
        name: "editAccount",

        onBeforeAction: function () {

            if (!Meteor.user()) {
                if (!Meteor.loggingIn()) {
                    Router.go("login");
                }
            }

            this.next();
        },

        action:function(){
            if(Roles.userIsInRole(Meteor.userId(),'doctor')){
                this.layout('doctor');
                this.render('editAccount', {to: 'main'});
            }else if(Roles.userIsInRole(Meteor.userId(),'patient')){
                this.layout('patient');
                this.render('editAccount', {to: 'main'});
            }else if(Roles.userIsInRole(Meteor.userId(),'admin')){
                this.layout('admin');
                this.render('editAccount', {to: 'main'});
            }
        }
    }
);

Router.route('/main/edit-profile',

    {
        name: "editProfile",

        onBeforeAction: function () {

            if (!Meteor.user()) {
                if (!Meteor.loggingIn()) {
                    Router.go("login");
                }
            }
            this.next();
        },

        action:function(){
            if(Roles.userIsInRole(Meteor.userId(),'doctor')){
                this.layout('doctor');
                this.render('doctorEditProfile', {to: 'main'});
            }else if(Roles.userIsInRole(Meteor.userId(),'patient')){
                this.layout('patient');
                this.render('patientEditProfile', {to: 'main'});
            }else if(Roles.userIsInRole(Meteor.userId(),'admin')){
                this.layout('admin');
                this.render('adminEditProfile', {to: 'main'});
            }
        }
    }
);