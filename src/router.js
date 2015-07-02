var Backbone = require('backbone');
var Vm = require('./vm.js');
var Event = require('./event.js');

var aboutView = require('./js/views/pages/about/page');

var AppRouter = Backbone.Router.extend({
	routes: {
		'about': 'about',	// 关于页面
		'*actions': 'defaultAction'	
	}
});

var initialize = function(options) {
	var appView = options.appView;
	var router = new AppRouter(options);
	router.on('route:about', function() {
		Vm.create(appView, 'aboutPage', aboutView).render();	
	});
	router.on('route:defaultAction', function (actions) {
		appView.render();
	});

	Backbone.history.start();
};

module.exports = {
	initialize: initialize
}
