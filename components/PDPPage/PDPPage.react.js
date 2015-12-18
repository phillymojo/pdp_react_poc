var React = require('react');
var Colorways = require('./Colorways.react');
var HeroImage = require('./HeroImage.react');
var Thumbnails = require('./Thumbnails.react')

var PDPPage = React.createClass({

	createMarkup: function(markup) { return {__html: markup} },

	render: function(){
		var data = this.props.data; //for convienence...

		return (
			<div className="pdpPage">
				<HeroImage heroImages={data.imagesHeroLarge} />
				<Thumbnails thumbnails={data.imagesThumbnail} />
				<div className="pdp_productTitle">{data.productTitle}</div>
				<div className="pdp_productSubTitle">{data.productSubTitle}</div>
				<div className="pdp_localPrice">{data.localPrice}</div>
				<div className="pdp_reviews-formattedAverageRating">{data.reviews.formattedAverageRating}</div>
				<hr />
				<div className="pdp_colorDescription">{data.colorDescription}</div>
				<div className="pdp_styleandcolorNumber">Style: {data.styleNumber}-{data.colorNumber}</div>
				<Colorways colorways={data.inStockColorways} />
				<hr />
				<div className="pdp_colorwayGeneralMessage" dangerouslySetInnerHTML={this.createMarkup(data.colorwayGeneralMessage)} />
			</div>
		)
	}
});

module.exports = PDPPage;