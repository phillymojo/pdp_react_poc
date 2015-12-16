var http = require('http');

var pdp = {
	fetchDataServerSide: function(callback){
		var data = {};

		var options = {
			host: 'store.nike.com',
			port: 80,
			path: '/html-services/templateData/pdpData?action=getPage&path=/us/en_us/pd/air-max-95-sneakerboot-boot/pid-10338627/pgid-10348285&productId=10338627&productGroupId=10348285&catalogId=1&country=US&lang_locale=en_US',
			headers: {
				'Host': 'store.nike.com',
				'Connection': 'keep-alive',
				'Pragma': 'no-cache',
				'Cache-Control': 'no-cache',
				'Accept': '*/*',
				'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36',
				'Referer': 'http://localhost:5000/',
				'Accept-Encoding': 'gzip, deflate, sdch',
				'Accept-Language': 'en-US,en;q=0.8,sv;q=0.6,zh-CN;q=0.4,zh;q=0.2,de;q=0.2,nl;q=0.2,es;q=0.2,it;q=0.2,pl;q=0.2,ja;q=0.2'
			}
		};

		http.get(options, function(res){
			console.log(res.statusCode);
			res.on('data', function(chunk){
				console.log('BODY: ' + chunk);
			});
		}).on('error', function(e){
			console.log('Got error: ' + e.message)
		});

		callback(data);
	}
};

module.exports = pdp;