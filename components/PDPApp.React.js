var React = require('react');

var PDPApp = React.createClass({
	getInitialState: function(){
		return {displayName: ''};
	},

	componentDidMount: function(){ 
		//Fetch the PDP data via an ajax call
		$.ajax({
			context: this,
			url: '//store.nike.com/html-services/templateData/pdpData?action=getPage&path=/us/en_us/pd/air-max-95-sneakerboot-boot/pid-10338627/pgid-10348285&productId=10338627&productGroupId=10348285&catalogId=1&country=US&lang_locale=en_US',
			dataType: 'jsonp'
		}).done(function(res){
			this.setState(res.response.pdpData);
		});

		
	},

	createMarkup: function(markup) { return {__html: markup} },

	render: function(){
		return (
			<div className="PDPApp_container">
				<div>{this.state.productTitle}</div>
				<div>{this.state.productSubTitle}</div>
				<div>{this.state.localPrice}</div>
				<div dangerouslySetInnerHTML={this.createMarkup(this.state.colorwayGeneralMessage)} />
			</div>
		)
	}
});

module.exports = PDPApp;