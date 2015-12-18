var React = require('react');

var HeroImage = React.createClass({

	render: function(){
		var heroImages = this.props.heroImages;

		return (
			<div className="pdp_heroImage"><img src={heroImages[0]} /></div>
		)
	}
});

module.exports = HeroImage;