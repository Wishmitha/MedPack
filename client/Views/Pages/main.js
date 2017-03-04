Template.main.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    }
});

Template.main.helpers({
    'isAdmin': function(){
        return Roles.userIsInRole(Meteor.userId(),'admin');
    },
    'isDoctor': function(){
        return Roles.userIsInRole(Meteor.userId(),'doctor');
    },
    'isPatient': function(){
        return Roles.userIsInRole(Meteor.userId(),'patient');
    }
});
