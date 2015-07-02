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
var homePage = require('./pages/home/page.js');

var AppView = Backbone.View.extend({
	el: '.container',
	render: function() {
		var that = this;
		$(this.el).html(layoutTemplate);
		// 创建视图
		var headerMenuView = Vm.create(that, 'headerView', headerView);
        var FooterView = Vm.create(that, 'footerView', footerView);
        var HomePage = Vm.create(that, 'homePage', homePage); 
        // 渲染视图
        FooterView.render();
        headerMenuView.render();
        HomePage.render();
	}
});

module.exports = AppView;
