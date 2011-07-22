define([], function() {
	var Registry = {};

	// TODO: This should be the registry from http://git.typo3.org/FLOW3/Packages/TYPO3.git?a=blob;f=Resources/Public/JavaScript/Core/Registry.js;h=7a9eb8b398c998672e639231befd15d1930fb245;hb=55afa72e0fe86e6654c3d1a77c9c1350fbc56f14

	Registry.initialize = function() {
		console.log("Initializing Registry");
	};
	Registry.compile = function() {
		console.log("Compiling Registry");
	};

	return Registry;
});