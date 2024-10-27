var app = angular.module('learningPortalApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'mainController'
        })
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'loginController'
        })
        .when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'registerController'
        })
        .when('/courses', {
            templateUrl: 'templates/courses.html',
            controller: 'coursesController'
        })
        .when('/quiz', {
            templateUrl: 'templates/quiz.html',
            controller: 'quizController'
        })
        .when('/feedback', {
            templateUrl: 'templates/feedback.html',
            controller: 'feedbackController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});