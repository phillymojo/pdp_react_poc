var React = require('react');

var PDPPage = React.createClass({

	createMarkup: function(markup) { return {__html: markup} },

	render: function(){
		return (
			<div className="pdpPage">
				<div className="pdp_productTitle">{this.props.data.productTitle}</div>
				<div className="pdp_productSubTitle">{this.props.data.productSubTitle}</div>
				<div className="pdp_localPrice">{this.props.data.localPrice}</div>
				<div className="pdp_reviews-formattedAverageRating">{this.props.data.reviews.formattedAverageRating}</div>
				<div className="pdp_colorwayGeneralMessage" dangerouslySetInnerHTML={this.createMarkup(this.props.data.colorwayGeneralMessage)} />
			</div>
		)
	}
});

module.exports = PDPPage;