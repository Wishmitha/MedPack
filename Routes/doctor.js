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
            this.render('doctorMedicalCenters', {to: 'main'});
        }
    }
);