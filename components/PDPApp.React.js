var React = require('react');

var PDPApp = React.createClass({
	render: function(){
		return <div className="PDPApp_container">{this.props.data.title}</div>;
	}
});

module.exports = PDPApp;