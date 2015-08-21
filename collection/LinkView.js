LinkView = new Ground.Collection('LinkView', { connection: null });

LinkView.allow({
    insert: function(userId, doc){
		return true;
	}
});