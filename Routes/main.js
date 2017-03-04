Router.route('/',
    {
        name: "home",

        onBeforeAction: function () {
            if (!!Meteor.user()) {
                if (!Meteor.loggingIn()) Router.go("main");
            }
            this.next();
        }
    });

Router.route('/main',
    {
        name: "main",

        onBeforeAction: function () {

            if (! Meteor.user()) {
                if (!Meteor.loggingIn()){
                    Router.go("home");
                }
            }else if(Roles.userIsInRole(Meteor.userId(),'admin')) {
                Router.go("allUsers");

            }
            this.next();
        }
    });