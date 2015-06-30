var Backbone = require('backbone');
var aboutPageTemplate = require('./../../../templates/about/page.html');

var AboutPage = Backbone.View.extend({
	el: '.page',
	render: function() {
		this.$el.html(aboutPageTemplate);
	}
});

module.exports = AboutPage;
