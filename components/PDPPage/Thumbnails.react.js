var React = require('react');

var Thumbnails = React.createClass({

	render: function(){
		var thumbnails = this.props.thumbnails.map(function(thumbnail, i){
			return (
				<img src={thumbnail} key={i} />
			)
		})
		return (
			<div className="thumbnails">{thumbnails}</div>
		)
	}
});

module.exports = Thumbnails;