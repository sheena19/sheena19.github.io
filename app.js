'use strict';

var app = angular.module('myApp', []);
var sheet = "1RatIujUPRtRTc3ajvL0gXB55GcukqwD8rNNGjVYr-Lc";

app.controller('NavCtrl', function ($scope, $http) {
    var navbarSheet = '/1';
    $http.get("https://spreadsheets.google.com/feeds/list/" + sheet + navbarSheet + "/public/values?alt=json")
        .success(function (response) {
            $scope.navbartab = response.feed.entry;
        })
});

app.directive('navbar', function () {
    return{
        restrict: 'E',
        templateUrl: 'templates/nav.html'
    }
});

app.controller('AboutCtrl', function ($scope, $http) {
    var aboutSheet = '/2';
    var aboutMeSheet = '/3';
    $http.get("https://spreadsheets.google.com/feeds/list/" + sheet + aboutSheet + "/public/values?alt=json")
        .success(function (response) {
            $scope.social = response.feed.entry;
        });
    $http.get("https://spreadsheets.google.com/feeds/list/" + sheet + aboutMeSheet + "/public/values?alt=json")
        .success(function (response) {
            $scope.mydetails = response.feed.entry;
        });
});

app.directive('about', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/about.html'
    }
});
app.directive('sociallink', function () {
    return {
        restrict: 'E',
        scope: {
            socialdetail: "="
        },
        templateUrl: 'templates/social.html'
    }
});

app.controller('ProjectCtrl', function ($scope, $http) {
    var projectSheet = '/4';
    $http.get("https://spreadsheets.google.com/feeds/list/" + sheet + projectSheet + "/public/values?alt=json")
        .success(function (response) {
            $scope.projects = response.feed.entry;
        });
});

app.directive('projects', function () {
    return {
        restrict: 'E',
        templateUrl: "templates/projects.html"
    }
});
app.directive('project', function () {
    return {
        restrict: 'E',
        scope: {
            data: "="
        },
        templateUrl: "templates/project.html"
    }
});

app.controller('EducationCtrl', function ($scope, $http) {
    var educationSheet = '/5';
    $http.get("https://spreadsheets.google.com/feeds/list/" + sheet + educationSheet + "/public/values?alt=json")
        .success(function (response) {
            $scope.schools = response.feed.entry;
        });

});

app.directive('schools', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/schools.html'
    }
});
app.directive('school', function () {
    return {
        restrict: 'E',
        scope: {
            data: "="
        },
        templateUrl: 'templates/school.html'
    }
});
app.directive('date', function () {
    return {
        restrict: 'E',
        scope: {
            info: "="
        },
        templateUrl: "templates/date.html"
    }
});

app.controller('SkillsCtrl', function ($scope, $http) {
    var skillSheet = '/6';
    $http.get("https://spreadsheets.google.com/feeds/list/" + sheet + skillSheet + "/public/values?alt=json")
        .success(function (response) {
            $scope.skills = response.feed.entry;
        });
});

app.directive('skills', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/skills.html'
    }
});
app.directive('skill', function () {
    return{
        restrict: 'E',
        templateUrl: 'templates/skill.html'
    }
});

app.controller('ExperienceCtrl', function ($scope, $http) {
    var expSheet = '/7';
    $http.get("https://spreadsheets.google.com/feeds/list/" + sheet + expSheet + "/public/values?alt=json")
        .success(function (response) {
            $scope.exp = response.feed.entry;
        });
});

app.directive('experience', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/experience.html'
    }
});

