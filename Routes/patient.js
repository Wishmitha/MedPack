Router.route('/main/health-profile',

    {
        name: "patientHealthProfile",

        onBeforeAction: function () {

            if (!Meteor.user()) {
                if (!Meteor.loggingIn()) {
                    Router.go("login");
                }
            }else if(Roles.userIsInRole(Meteor.userId(),'admin') || Roles.userIsInRole(Meteor.userId(),'doctor')){
                Router.go("main");
            }
            this.next();
        },

        action:function(){
            this.layout('patient');
            this.render('healthProfile', {to: 'main'});
        }
    }
);