var React = require('react');
var ReactDom = require('react-dom');
var PDPApp = require('./components/PDPApp.React');

var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

ReactDom.render(
	<PDPApp data={initialState} />, 
	document.getElementById('react-app')
);

