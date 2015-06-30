var views = {};

var create = function(context, name, View, options) {
	if (typeof views[name] !== 'undefined') {
		// Removes all of the view's delegated events. 
		// Useful if you want to disable or remove a view from the DOM temporarily.
		views[name].undelegateEvents();
	}
	var view = new View(options);
	views[name] = view;

	if (typeof context.children === 'undefined') {
		context.children = {};
		context.children[name] = view;	
	} else {
		context.children[name] = view;
	}

	return view;
}

module.exports = {
	create: create
}
