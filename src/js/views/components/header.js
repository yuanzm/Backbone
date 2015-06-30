var Backbone = require('backbone');
var headerViewTemplate = require('./../../../templates/components/header/header.html');

var HeaderView = Backbone.View.extend({
	el: '#header',
	render: function() {
		this.$el.html(headerViewTemplate);
	}
});

module.exports = HeaderView;
