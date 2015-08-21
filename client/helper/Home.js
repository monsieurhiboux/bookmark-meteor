Template.Home.helpers({
    shortString: function(string) {
    	var stringLength = string.length;
    	if( stringLength > 35){
    		return string.substr(0,35)+'...';
    	}
    	else{
    		return string;
    	} 
    },
    ifUserView: function(string) {
    	var exist = LinkView.findOne({"linkId": string});
		if(exist){
			return true;
		}
		else {
			return false;
		}
    },
    ifDelete: function(string) {
        var exist = Links.findOne({"_id": string});
        if(exist.userId == localStorage.getItem("Meteor.userId")){
            return true;
        }
        else {
            return false;
        }
    },
    gravatar: function(string) {
        var url = Gravatar.imageUrl(string, {
            size: 30,
            default: 'mm'
        });
        return url;
    },
    gravatarCollection: function(string) {
        var string = Meteor.users.findOne({"_id": string});
        string = string.emails[0].address;
        var url = Gravatar.imageUrl(string, {
            size: 20,
            default: 'mm'
        });
        return url;
    },
    infoUser: function(string) {
        var exist = Meteor.users.findOne({"_id": string});
        return exist.username;
    },
});