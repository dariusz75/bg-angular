/* W celu uzycia routingu musimy poinformowac Angulara deklarujac ngRoute module w zaleznosciach modulu. */
var myApp = angular.module('myApp', ['ngRoute']);




/* Nastepnie musimy skonfigurowac aplikacje za pomoca metody config 
i okreslic trase komponentow za pomoca $routeProvider */
myApp.config(function ($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'pages/news.html',
		controller: 'mainController'
	})
	.when('/biography', {
		templateUrl: 'pages/biography.html',
		controller: 'mainController'
	})
	.when('/tour', {
		templateUrl: 'pages/tour.html',
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





myApp.controller('mainController', ['$scope', '$sce', function($scope, $sce) {

		var socialMedias = [
			{ 
				url: $sce.trustAsResourceUrl('https://www.facebook.com/boozeandgloryofficial'), 
				icon: './img/social-facebook.png'
			},	
			{ 
				url: $sce.trustAsResourceUrl('https://www.google.co.uk/'), 
				icon: './img/social-instagram.png'
			},
			{ 
				url: $sce.trustAsResourceUrl('https://www.facebook.com/boozeandgloryofficial'), 
				icon: './img/social-youtube.png'
			},
			{ 
				url: $sce.trustAsResourceUrl('https://www.facebook.com/boozeandgloryofficial'), 
				icon: './img/social-spotify.png'
			},
			{ 
				url: $sce.trustAsResourceUrl('https://www.facebook.com/boozeandgloryofficial'), 
				icon: './img/social-itunes.png'
			}	
		];


		var officialVideos = [
			{
				title: 'For The Better Times',
				url: $sce.trustAsResourceUrl('https://www.youtube.com/embed/Tp8Ic1QttdM')
			},
			{
				title: 'Blood From A Stone',
				url: $sce.trustAsResourceUrl('https://www.youtube.com/embed/xpawuHBoc0E')
			},
			{
				title: 'Carry On',
				url: $sce.trustAsResourceUrl('https://www.youtube.com/embed/kJA1W7eTb1s')
			},
			{
				title: 'Leave The Kids Alone',
				url:  $sce.trustAsResourceUrl('https://www.youtube.com/watch?v=uxEcQJU1AE0')
			},
			{
				title: 'Only Fools Get Caught',
				url: $sce.trustAsResourceUrl('https://www.youtube.com/watch?v=6HtoYVkbQks')
			},
			{
				title: 'London Skinhead Crew',
				url: $sce.trustAsResourceUrl('https://www.youtube.com/watch?v=aY4pZlP6YtE')
			}
		]; 

		var discography = [
			{
				title: 'Always On The Wrong Side',
				description: 'CD (full album) - Step 1 Music'
			},
			{
				title: 'Always On The Wrong Side',
				description: 'LP (full album) - Step 1 Music'
			},
			{
				title: 'Punks, Skins Rude Boys Now',
				description: 'CD (compilation) - Jimmy Jazz Records'
			},
			{
				title: 'England Will Never Change',
				description: 'EP (split with The Warriors) - Randale Records'
			},
			{
				title: 'Swinging Fuckin Hammers',
				description: 'EP (split with Harrington Saints) - Pirates Press records'
			},
			{
				title: 'Bruised Knuckles VS  Savage Amusement',
				description: 'CD (compilation)'
			},
			{
				title: 'Oi! The Print',
				description: 'CD (compilation) - Oi! The Print Magazine'
			},
			{
				title: '30 Years of Oi',
				description: 'CD (Garry Bushell’s compilation) - Contra Records'
			},
			{
				title: '30 Years of Oi',
				description: 'LP (Garry Bushell’s compilation) - Contra Records'
			},
			{
				title: 'Oi! This Is Streetpunk vol.1',
				description: 'LP (compilation) - Pirates Press Records'
			},
			{
				title: 'Oi! This Is Streetpunk vol.2',
				description: 'LP (compilation) - Pirates Press Records'
			},
			{
				title: 'On The Booze',
				description: 'EP (split with On The Job) - Contra Records'
			},
			{
				title: 'Oi! The Superheroes',
				description: 'EP (split with Gimp Fist, Agent Bulldogg, Sandals) - Bad Look Records'
			},
			{
				title: 'Red, White & Blue',
				description: 'EP (split with Old Firm Casuals, Argy Bargy, Harrington Saints) - PiratesPress'
			},
			{
				title: "Oi! Ain't Dead",
				description: 'CD (split with Old Firm Casuals, Razorblade, The Corps) - Rebellion Records'
			},
			{
				title: "Oi! Ain't Dead",
				description: 'LP (split with Old Firm Casuals, Razorblade, The Corps) - Rebellion Records'
			},
			{
				title: 'Sun Of A Bastard',
				description: 'CD (compilation) - Sunny Bastards Records'
			},
			{
				title: 'Back Where We Belong',
				description: 'EP (feat Micky Fitz) - Step 1 Music / Longshot Music'
			},
			{
				title: 'London Skinhead Crew',
				description: 'CD (singles collection) - Step 1 Music'
			},
			{
				title: 'As Bold As Brass',
				description: 'CD Europe - Step 1 Music'
			},
			{
				title: 'As Bold As Brass',
				description: 'LP Europe - Contra Records'
			},
			{
				title: 'As Bold As Brass',
				description: 'CD USA - Sailor’s Grave Records'
			},
			{
				title: 'As Bold As Brass',
				description: 'LP USA - Sailor’s Grave Records'
			},
			{
				title: 'As Bold As Brass',
				description: 'CD Poland - special edition - Lou&Rocked Boys'
			},
			{
				title: 'London Skinhead Crew',
				description: 'LP (singles collection) - Contra Records'
			},
			{
				title: 'Carry On/Blood From a Stone',
				description: 'EP Europe - Contra Records'
			},
			{
				title: 'Carry On/Blood From a Stone',
				description: 'EP USA - iratess Press'
			},
		];

	var members = [
		{
			name: 'Bart',
			instrument: 'bass',
			years: '2009-2012'
		},
		{
			name: 'Mariola',
			instrument: 'drums',
			years: '2009-2012'
		},
		{
			name: 'Tommy',
			instrument: 'drums',
			years: '2012-2015'
		}
	]; 


		$scope.socialMedias = socialMedias;
		$scope.officialVideos = officialVideos;
		$scope.discography = discography;
		$scope.members = members;
	

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




