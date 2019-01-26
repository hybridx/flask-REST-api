var assignment = angular.module('assignment',['ngRoute','ui.bootstrap','ngMaterial','ngAnimate','ngAria','ngMessages']);


assignment.config(['$routeProvider',function($routeProvider) {
	
	$routeProvider
	.when('/student',{
		templateUrl:'static/resources/views/student.html',
		controller:'studentController'
	})
	.when('/subject',{
		templateUrl:'static/resources/views/subject.html',
		controller:'subjectController'
	})
	.when('/marks',{
		templateUrl:'static/resources/views/marks.html',
		controller:'marksController'
	})
	.otherwise('/student',{
		redirectTo:'/student'
	});
}])
