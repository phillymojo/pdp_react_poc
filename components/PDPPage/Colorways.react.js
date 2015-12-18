var React = require('react');

var Colorways = React.createClass({

	render: function(){
		var colorways = this.props.colorways.map(function(colorway){
			return (
				<img src={colorway.imageUrl} key={colorway.productId} />
			)
		})
		return(
			<div>{colorways}</div>
		)
	}
});

module.exports = Colorways;