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
				<div className="pdp_hero_and_alt_images">
					<HeroImage heroImages={data.imagesHeroLarge} />
					<Thumbnails thumbnails={data.imagesThumbnail} />
				</div>
				<div className="pdp_content_container">
					<h1 className="pdp_productTitle">{data.productTitle}</h1>
					<div className="pdp_productSubTitle">{data.productSubTitle}</div>
					<div className="pdp_localPrice">{data.localPrice}</div>
					<div className="pdp_reviews-formattedAverageRating">{data.reviews.formattedAverageRating}</div>
					<hr />
					<div className="pdp_styleandcolor-info">
						<span className="pdp_colorDescription">{data.colorDescription}</span>
						<span className="pdp_styleandcolorNumber">Style: {data.styleNumber}-{data.colorNumber}</span>
					</div>
					<Colorways colorways={data.inStockColorways} />
					<hr />
					<div className="pdp_colorwayGeneralMessage" dangerouslySetInnerHTML={this.createMarkup(data.colorwayGeneralMessage)} />
				</div>
			</div>
		)
	}
});

module.exports = PDPPage;