var React = require('react');

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

	getInitialState: function(){
		return {};
	},

	componentDidMount: function(){ 
		this.loadDataFromServer();		
	},

	createMarkup: function(markup) { return {__html: markup} },

	render: function(){
		/*
			I want this render() to only happen on the client, since the server does not have the PDP data.
			If this render() happens on the server, it throws errors because this.state is empty, and
			then all references to this.state.[propName] are 'undefined'.
			For instance, this.state.productTitle is 'undefined' upon server render, but that is not an
			issue since it is just a value lookup, and will just render an empty value. 
			But this.state.reviews.averageRating throws an error because 
			it is trying to access a property of an 'undefined' object (this.state.reviews).
		*/

		return (
			<div className="PDPApp_container">
				<div>{this.state.productTitle}</div>
				<div>{this.state.productSubTitle}</div>
				<div>{this.state.localPrice}</div>
				{/*<div>{this.state.reviews.averageReviews}</div>*/}
				<div dangerouslySetInnerHTML={this.createMarkup(this.state.colorwayGeneralMessage)} />
			</div>
		)
	}
});

module.exports = PDPApp;