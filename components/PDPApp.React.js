var React = require('react');
var PDPPage = require('./PDPPage/PDPPage.react');
var Loading = require('./PDPPage/Loading.react');

var PDPApp = React.createClass({

	loadDataFromServer: function(){
		//Fetch the PDP data via an ajax call
		$.ajax({
			context: this,
			url: '//store.nike.com/html-services/templateData/pdpData?action=getPage&path=/us/en_us/pd/air-max-95-sneakerboot-boot/pid-10338627/pgid-10348285&productId=10338627&productGroupId=10348285&catalogId=1&country=US&lang_locale=en_US',
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