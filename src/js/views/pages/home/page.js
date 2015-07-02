var Backbone = require('backbone');
var homePageTemplate = require('./../../../../templates/pages/home/home.html');

var homePage = Backbone.View.extend({
	el: '.page',
	render: function() {
		this.$el.html(homePageTemplate);
	}
});

module.exports = homePage;
