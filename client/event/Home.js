Template.Home.events({
    'submit form': function(e){
		e.preventDefault();
		if(e.target.link.value != false){
			$('#share').prop('disabled', true);
			console.log($("input[name='link']").val());
			var link = $("input[name='link']").val();
			var url = $("input[name='link']").val();
			var bookmarkInput = $("input[name='bookmarkInput']").val();
			Meteor.call('getUrlInfo', link, function (error, result) {
				if (error) {
				  	$('#share').prop('disabled', false);
				};
				var title = result.title;
				var content = result.content;
				var date = new Date();
				var link = {
					link: url,
					bookmark: bookmarkInput,
					title: title,
					content: content,
					date: date.valueOf(),
					userId: localStorage.getItem("Meteor.userId")
				}
		        
		        Links.insert(link, function(err, id){
					if(err){
						$('#share').prop('disabled', false);
						$('#share-publish').show();
						$('#share-sending').hide();
					}
					else{
						$("#link").val("");
						$('#share').prop('disabled', false);
					}
				});
			});
		}
	},
	'click #actionDelete': function (e) {
		var id = $(e.currentTarget).attr('data');
	    Links.remove(({_id:id}));
	},
	'click #actionClick': function (e) {
		var id = $(e.currentTarget).attr('data');
		var link = Links.findOne({"_id": id});
		if(link.view){
			var result = link.view + 1;
			Links.update(id, {
		        $set: {view: result}
		    });
		}
		else {
			Links.update(id, {
		        $set: {view: 1}
		    });
		};

		var linkView = LinkView.find({"linkId": $(e.currentTarget).attr('data')}).count();
		if(linkView == 0){
			LinkView.insert({linkId : $(e.currentTarget).attr('data')});
		};
	}

});