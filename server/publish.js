Meteor.publish("userData", function () {
    return this.users.find({_id: this.userId});
});

Meteor.publish('allUsers',function () {

    if(Roles.userIsInRole(this.userId,'admin')){
        return Meteor.users.find({});
    }

});

