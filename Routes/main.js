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