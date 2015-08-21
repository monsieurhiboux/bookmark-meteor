Template.Header.events({
	'submit form': function(e){
		e.preventDefault();
		var bookmark = e.target.bookmark.value;
		if(bookmark != false){
			var ex = BookmarkList.find({"bookmark": bookmark}).count();
			if(ex == 0){
				BookmarkList.insert({bookmark: e.target.bookmark.value});
				$('#addBookmark').val("");
			}else{
				$('#addBookmark').val("");
			}
		};
		
	},
	'click #actionDelete': function (e) {
		var id = $(e.currentTarget).attr('data');
	    BookmarkList.remove(({bookmark:id}));
	},
	'click #actionAdd': function (e) {
		var bookmark = $(e.currentTarget).attr('data');
	    BookmarkList.insert({bookmark: bookmark});
	}
});