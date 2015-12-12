var JSX = require('node-jsx').install();
var React = require('react');
var ReactDom = require('react-dom/server');
var PDPApp = React.createFactory(require('./components/PDPApp.react'));
var pdp = require('./models/pdp')

module.exports = {
	index: function(req,res){

		//load PDP data, and pass it to the PDPApp
		pdp.getData(function(data){

			var markup = ReactDom.renderToString(
				PDPApp({data: data})
			);
			res.render('home', {
				markup: markup
			})
		});

	}
};