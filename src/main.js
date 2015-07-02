var AppView = require('./js/views/app.js');
var Router = require('./router.js');
var Vm = require('./vm.js');

// 渲染视图
var appView = Vm.create({}, 'AppView', AppView);
appView.render();

// 初始化路由
Router.initialize({appView: appView});
