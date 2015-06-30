var Backbone = require('backbone');
var footerViewTemplate = require('./../../../templates/components/footer/footer.html');

var FooterView = Backbone.View.extend({
	el: '#footer',
	render: function() {
		this.$el.html(footerViewTemplate);
	}
});

module.exports = FooterView;
