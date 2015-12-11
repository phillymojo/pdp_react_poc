var PDPApp = require('./components/PDPApp.react');

module.exports = {
	index: function(req,res){
		res.render('home', {
			markup: 'Hello, world!'
		})
	}
};