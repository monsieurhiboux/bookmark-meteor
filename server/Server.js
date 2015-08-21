var cheerio = Meteor.npmRequire('cheerio');

Meteor.methods({
  getUrlInfo: function (link) {
    result = Meteor.http.get(link);
    $ = cheerio.load(result.content);
    var info = {};

    if($('meta[property="og:description"]').attr('content') != null){
    	info.content = $('meta[property="og:description"]').attr('content');
    }
    else if($('meta[name=description]').attr('content') != null){
    	info.content = $('meta[name=description]').attr('content');
    }
    else if($('h1').text() != null){
        info.content = $('h1').text();
    }

	info.title = $('title').text()

    return info;
  }
})