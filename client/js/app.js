var app = angular.module('app', ['ngRoute']);

app.filter('percentage', ['$filter', function ($filter) {
	  return function (input, decimals) {
	    return $filter('number')(input * 100, decimals) + '%';
	  };
	  }]);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		redirectTo: '/dashboard'
	})
	.when('/dashboard', {
		controller: 'DashboardsController',
		controllerAs: 'dashboardsCtrl',
		templateUrl: 'partials/dashboard.partial.html'
	})
	.when('/play', {
		controller: 'PlaysController',
		controllerAs: 'playsCtrl',
		templateUrl: '/partials/play.partial.html'
	})
	.when('/question', {
		controller: 'QuestionsController',
		controllerAs: 'questionsCtrl',
		templateUrl: '/partials/questions.partial.html'
	})
	
	.otherwise('/')
})