var React = require('react');

var PDPApp = React.createClass({
	getInitialState: function(){
		return {};
	},

	componentDidMount: function(){ 
		//Fetch the PDP data via an ajax call
		$.ajax({
			url: '//store.nike.com/html-services/templateData/pdpData?action=getPage&path=/us/en_us/pd/air-max-95-sneakerboot-boot/pid-10338627/pgid-10348285&productId=10338627&productGroupId=10348285&catalogId=1&country=US&lang_locale=en_US',
			dataType: 'jsonp'
		}).done(function(res){
			console.log(res);
		});

		
	},


	render: function(){
		return <div className="PDPApp_container">Hey {this.props.data.title}</div>;
	}
});

module.exports = PDPApp;