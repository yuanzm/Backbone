var $ = require('jquery');
var Backbone = require('backbone');
var layoutTemplate = require('../../templates/layout.html');
var Vm = require('../../vm.js');

var AppView = Backbone.View.extend({
	el: '.container',
	initialize: function() {
		var NestedView2 = Backbone.View.extend({});
		var NestedView1 = Backbone.View.extend({
			initialize: function() {
				var nestedView2 = Vm.create(this, 'Nested View 2', NestedView2);
			}
		});
		var nestedView1 = Vm.create(this, 'Nested View 1', NestedView1);
	},
	render: function() {
		var that = this;
		$(this.el).html(layoutTemplate);
	}
});

module.exports = AppView;
