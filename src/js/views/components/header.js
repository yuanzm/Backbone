var Backbone = require('backbone');
var $ = require('jquery');
var Event = require('../../../event.js');
var headerViewTemplate = require('./../../../templates/components/header/header.html');

var HeaderView = Backbone.View.extend({
	el: '#header',
	render: function() {
		this.$el.html(headerViewTemplate);
		$('a[href="' + window.location.hash + '"]').parent().addClass('active');
	},
	events: {
		'click .nav>li': 'navClickHandler'
	},
	navClickHandler: function(ev) {
		$('.active').removeClass('active');
      	$(ev.currentTarget).addClass('active');		
	}
});

module.exports = HeaderView;
