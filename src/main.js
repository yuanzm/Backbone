var AppView = require('./js/views/app.js');
var Router = require('./router.js');
var Vm = require('./vm.js');

var appView = Vm.create({}, 'AppView', AppView);
appView.render();
Router.initialize({appView: appView});
