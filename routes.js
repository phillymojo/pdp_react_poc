var JSX = require('node-jsx').install();
var React = require('react');
var ReactDom = require('react-dom/server');
var PDPApp = React.createFactory(require('./components/PDPApp.react'));
var pdp = require('./models/pdp');


module.exports = {
	index: function(req,res){

		/*	
			currently this call is returning an empty object, since I cannot figure out how to call
			the PDP endpoint directly from the server (prob a Tesla safeguard?); the resonse is just {success: false;}
			Therefore this is passing an empty 'data' object as the initial state; this horks things up when doing 
			the render() call in the PDPApp component, since it doesnt have data to do the server render.
		*/

		pdp.fetchDataServerSide(function(data){

			var markup = ReactDom.renderToString(
				PDPApp()
			);

			res.render('home', {
				markup: markup,
				state: JSON.stringify(data)
			})
		});

	}
};