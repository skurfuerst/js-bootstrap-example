define(
['core/registry'],
function(Registry) {
	var Application = {
		_modules: [],
		registerModule: function(module) {
			this._modules.push(module);
		},
		run: function() {
			Registry.initialize();

			for (var i in this._modules) {
				this._modules[i].configure();
			}
			Registry.compile();

			console.log("Running Application");
		}
	};

	return Application;
});