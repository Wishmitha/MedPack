Router.route('/main/all-users',

    {
        name: "allUsers",

        onBeforeAction: function () {

            if (!Meteor.user()) {
                if (!Meteor.loggingIn()) {
                    Router.go("home");
                }
            }else if(Roles.userIsInRole(Meteor.userId(),'doctor') || Roles.userIsInRole(Meteor.userId(),'patient')){
                Router.go("main");
            }
            this.next();
        },

        action:function(){
            this.layout('admin');
            this.render('allUsers', {to: 'main'});
        }
    }
);

Router.route('/main/medical-centers',

    {
        name: "medicalCenters",

        onBeforeAction: function () {

            if (!Meteor.user()) {
                if (!Meteor.loggingIn()) {
                    Router.go("home");
                }
            }else if(Roles.userIsInRole(Meteor.userId(),'doctor') || Roles.userIsInRole(Meteor.userId(),'patient')){
                Router.go("main");
            }
            this.next();
        },

        action:function(){
            this.layout('admin');
            this.render('medicalCenters', {to: 'main'});
        }
    }
);

Router.route('/main/admins',

    {
        name: "admins",

        onBeforeAction: function () {

            if (!Meteor.user()) {
                if (!Meteor.loggingIn()) {
                    Router.go("home");
                }
            }else if(Roles.userIsInRole(Meteor.userId(),'doctor') || Roles.userIsInRole(Meteor.userId(),'patient')){
                Router.go("main");
            }
            this.next();
        },

        action:function(){
            this.layout('admin');
            this.render('admins', {to: 'main'});
        }
    }
);

Router.route('/main/new-admin',

    {
        name: "newAdmin",

        onBeforeAction: function () {

            if (!Meteor.user()) {
                if (!Meteor.loggingIn()) {
                    Router.go("home");
                }
            }else if(Roles.userIsInRole(Meteor.userId(),'doctor') || Roles.userIsInRole(Meteor.userId(),'patient')){
                Router.go("main");
            }
            this.next();
        },

        action:function(){
            this.layout('admin');
            this.render('newAdmin', {to: 'main'});
        }
    }
);

