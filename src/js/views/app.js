/*
 * app.js
 * author: yuanzm
 * 渲染layout视图
 */
var $ = require('jquery');
var Backbone = require('backbone');
var Vm = require('./../../vm.js');
var layoutTemplate = require('../../templates/layout.html');
var headerView = require('./components/header.js');
var footerView = require('./components/footer.js');

var AppView = Backbone.View.extend({
	el: '.container',
	render: function() {
		var that = this;
		$(this.el).html(layoutTemplate);
		var headerMenuView = Vm.create(that, 'headerView', headerView);
        headerMenuView.render();
        var FooterView = Vm.create(that, 'footerView', footerView);
        FooterView.render();
	}
});

module.exports = AppView;
