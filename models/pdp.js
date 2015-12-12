//call the PDP data from here - http://store.nike.com/html-services/templateData/pdpData?action=getPage&path=/us/en_us/pd/air-max-95-sneakerboot-boot/pid-10338627/pgid-10348285&productId=10338627&productGroupId=10348285&catalogId=1&country=US&lang_locale=en_US
		//

var pdp = {
	getData: function(callback){
		var data = {title: 'Hello, world! 4'};

		// $.ajax({
		// 	url: 'http://store.nike.com/html-services/templateData/pdpData?action=getPage&path=/us/en_us/pd/air-max-95-sneakerboot-boot/pid-10338627/pgid-10348285&productId=10338627&productGroupId=10348285&catalogId=1&country=US&lang_locale=en_US'
		// }).done(function(res){
		// 	data = response;
		// });

		callback(data);
	}
};

module.exports = pdp;