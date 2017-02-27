/* W celu uzycia routingu musimy poinformowac Angulara deklarujac ngRoute module w zaleznosciach modulu. */
var myApp = angular.module('myApp', ['ngRoute']);




/* Nastepnie musimy skonfigurowac aplikacje za pomoca metody config 
i okreslic trase komponentow za pomoca $routeProvider */
myApp.config(function ($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'pages/news.html',
		controller: 'newsController'
	})
	.when('/biography', {
		templateUrl: 'pages/biography.html',
		controller: 'biographyController'
	})
	.when('/tour', {
		templateUrl: 'pages/tour.html',
		controller: 'tourController'
	})
	.when('/shop', {
		templateUrl: 'pages/shop.html',
	})
	.when('/discography', {
		templateUrl: 'pages/discography.html',
		controller: 'discographyController'
	})
	.when('/media', {
		templateUrl: 'pages/media.html',
		controller: 'mediaController'
	})
	.when('/press', {
		templateUrl: 'pages/press.html',
		controller: 'pressController'
	})
	.when('/fans', {
		templateUrl: 'pages/fans.html',
		controller: 'fansController'
	})
	.when('/contact', {
		templateUrl: 'pages/contact.html',
		controller: 'contactController'
	})
});

myApp.controller('newsController', ['$scope', '$sce', function($scope, $sce) {	
	
	 $scope.videoUrls = {
	 	left: $sce.trustAsResourceUrl('https://www.youtube.com/embed/xpawuHBoc0E'),
	 	midle: $sce.trustAsResourceUrl('https://www.youtube.com/embed/kJA1W7eTb1s'),
	 	right: $sce.trustAsResourceUrl('https://www.youtube.com/embed/Tp8Ic1QttdM'),
	 };


}]);

myApp.controller('biographyController', ['$scope', function($scope) {
	$scope.message = "This message comes from the Biography Controller.";
}]);

myApp.controller('discographyController', ['$scope', function($scope) {
	$scope.message = "This message comes from the Discography Controller.";
}]);

myApp.controller('mediaController', ['$scope', function($scope) {
	$scope.message = "Message from Media controller";
}]);

myApp.controller('pressController', ['$scope', function($scope) {
	$scope.message = "Message from Press controller";
}]);

myApp.controller('fansController', ['$scope', function($scope) {
	$scope.message = "Message from Fans controller";
}]);

myApp.controller('contactController', ['$scope', function($scope) {
	$scope.message = "Message from Contact controller";
}]);




/* Tworzenie Dyrektywu */
myApp.directive('textTemplate', function() {
	return {
		template: '<h3>This h1 element is a template which comes from the textTemplate directive.</h3>'
	}
});

/*
Oto sposob na podpiecie templateu zapisanego jako oddzielny plik html.
Metoda rozni sie tym, ze zamiast wlasnosci template w obiekcie stosujemy templateUrl.
*/

myApp.directive('panelTemplate', function() {
	return {
		templateUrl: 'templates/text-panel.html'
	}
});




