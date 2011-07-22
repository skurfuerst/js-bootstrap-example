define(
['core/application',
'file/module'], // Simply load all the other modules you need for the application to run here.
function(Application, FileModule) {
	Application.run();
	FileModule.start(); // This could also be done using events

	// This file should not contain anything else...
});