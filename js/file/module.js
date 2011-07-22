define(['core/application'], function(Application) {
	Application.registerModule({
		configure: function() {
			console.log("Configuring file module");
		}
	});

	var FileModule = {
		start: function() {
			console.log("Starting file module");

			// Here, the main application code should be!
		}
	}

	return FileModule;
});