Router.configure({
    layoutTemplate: 'Layout',
    loadingTemplate: 'Loading'
});


Router.route('/bookmark/:bookmark', {
    name: 'Bookmark',
    data: function(){
		var bookmark = this.params.bookmark;
		var links = Links.find({"bookmark": bookmark},{sort: {'date': -1}});
		var bookmarks = BookmarkList.find();
		var exist = BookmarkList.findOne({"bookmark": bookmark});
		if(exist){
			exist = true;
		}
		else {
			exist = false;
		}
		return {
			bookmark: bookmark,
			links: links,
			bookmarks : bookmarks,
			exist : exist
		};
	},
	waitOn: function(){
		return Meteor.subscribe("getLinks");
	},
	action: function () {
	    if (this.ready()){
	    	document.title = "Bookmark: " +this.params.bookmark;
	      	this.render('Home');
	    }
	}
});

Router.route('/', {
    name: 'Welcome',
    data: function(){
		var bookmarks = BookmarkList.find();
		return {
			bookmarks : bookmarks
		};
	},
	action: function () {
	    if (this.ready()){
	    	document.title = "Bookmark";
	      	this.render('Welcome');
	    }
	}
});

Router.route('/bookmark', {
    name: 'Home',
    data: function(){
		var bookmarks = BookmarkList.find();
		return {
			bookmarks : bookmarks
		};
	},
	action: function () {
	    if (this.ready()){
	    	document.title = "Bookmark";
	      	this.render('Welcome');
	    }
	}
});

