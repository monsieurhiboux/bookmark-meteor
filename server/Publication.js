Meteor.publish("getLinks", function(){
    return Links.find();
});

Meteor.publish("allUsers", function () {
  return Meteor.users.find({});
});