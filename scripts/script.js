// Apps

var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html'
        })
        .when('/services', {
            templateUrl: 'services.html'
        })
        .when('/about', {
            templateUrl: 'about.html'
        })
        .when('/gallery', {
            templateUrl: 'gallery.html',
            controller: 'GalleryController'
        })
        .otherwise({
            redirectTo: '/index'
        });
});


//Controllers

app.controller('MainController', function($scope, $location) {
    $scope.showContact = $location.url() == '/';
    $scope.myFunc = function(val) {
        $scope.showContact = val;
    };
});


app.controller('ServicesController', function($scope) {
    $scope.msg = "I do not love Paris";
});

app.controller('GalleryController', function($scope) {
    $scope.images = [
        { "name": "blog1", "src": "images/blog1.jpg" },
        { "name": "blog2", "src": "images/blog2.jpg" },
        { "name": "blog3", "src": "images/blog3.jpg" },
        { "name": "boat", "src": "images/boat.jpg" },
        { "name": "fondoP", "src": "images/fondoP.jpg" },
        { "name": "ship", "src": "images/ship.jpg" },
        { "name": "ship2", "src": "images/ship2.jpg" },
        { "name": "truck", "src": "images/truck.jpg" }
    ];

    function setImage(image) {
        $scope.showModal = true;
        $scope.modalSrc = image.src;
    }

    $scope.setImage = setImage;
});