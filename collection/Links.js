Links = new Mongo.Collection("links");

Links.allow({
    insert: function(userId, doc){
		return true;
	},
	remove: function(userId, doc){
		return true;
	},
	update: function(userId, doc){
		return true;
	}
});