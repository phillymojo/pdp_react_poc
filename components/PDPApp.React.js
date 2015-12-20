var React = require('react');
var PDPPage = require('./PDPPage/PDPPage.react');
var Loading = require('./PDPPage/Loading.react');

var PDPApp = React.createClass({

	/*
	Accept an object with properites of the requested service
	*/
	loadDataFromServer: function(reqParams){
		//Fetch the PDP data via an ajax call

		var service = (reqParams && reqParams.service) || "http://store.nike.com/html-services/templateData/pdpData?action=getPage";
		var path = (reqParams && reqParams.path) || "/us/en_us/pd/air-max-95-sneakerboot-boot/pid-10338627/pgid-10348285";
		var productId = (reqParams && reqParams.productId) || "10338627";
		var productGroupId = (reqParams && reqParams.productGroupId) || "10348285";
		var catalogId = (reqParams && reqParams.catalogId) || "1";
		var country = (reqParams && reqParams.country) || "US";
		var lang_locale = (reqParams && reqParams.lang_locale) || "en_US";

		var url = service + "&path=" + path + "&productId=" + productId + "&productGroupId=" + productGroupId + "&catalogId=" + catalogId + "&country=" + country + "&lang_locale=" + lang_locale;

		$.ajax({
			context: this,
			url: url,
			dataType: 'jsonp'
		}).done(function(res){
			this.setState(res.response.pdpData);
		})
	},

	componentDidMount: function(){ 
		this.loadDataFromServer();		
	},

	render: function(){
		/*
			Since the server is not able to fetch the PDP data (must be Tesla blocking server-side calls?),
			we do not want to render the PDPPage on the server; because it will not render without the data.
			So we check this.state to see if its is set first, which if true, means it is being rendered on
			the client. If false, then just server the page with the Loading component.
		*/

		var pdpPage;

		if(!this.state){
			pdpPage = <Loading />;
		} else {
			pdpPage = <PDPPage data={this.state} />;
		}

		return (
			<div className="PDPApp_container">
				{pdpPage}
			</div>
		)
	}
});

module.exports = PDPApp;