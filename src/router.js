var Backbone = require('backbone');
var Vm = require('./vm.js');

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
		var aboutView = require('./js/views/about/page');
		Vm.create(appView, 'aboutPage', aboutView).render();	
	});

	Backbone.history.start();
};

module.exports = {
	initialize: initialize
}
