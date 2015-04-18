(function(){
    
    var app = angular.module("tipcalc", ["ngRoute"]);
    
    app.config(function($routeProvider){
        $routeProvider
            .when("/calculator", {
                templateUrl: "calculator.html",
                controller: "MainCtrl"
            }).otherwise({redirectTo:"/calculator"});
           
    });
    
}());