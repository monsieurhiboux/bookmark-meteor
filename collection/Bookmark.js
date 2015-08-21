BookmarkList = new Ground.Collection('bookmarkList', { connection: null });

BookmarkList.allow({
    insert: function(userId, doc){
		return true;
	},
	remove: function(userId, doc){
		return true;
	}
});