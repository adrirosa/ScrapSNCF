var express = require('express'),
request = require('request'),
cheerio = require('cheerio');

var app = express().use(express.static(__dirname+'/'));

app.set('port', process.env.PORT || 3000);

app.get('/',function(req, res){
	res.sendFile(__dirname + '/index.html');
	res.render('index');
});


function scrapper(url){
	request(url, function(error, response, body) {
		if(error){ console.log("Error : " + error);}

    var $ = cheerio.load(body);

   
}
