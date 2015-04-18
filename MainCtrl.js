(function() {

    var app = angular.module("tipcalc");

    var MainCtrl = function($scope, $log) {
      
      
         var onError = function(reason) {
            $scope.error = "Error";

          };

		    $scope.calc = function(amount, pctg, persons)
		    {
		       
		       $log.info("Amount from form", amount);
		       $log.info("Percentage from form", pctg);
		       $log.info("No of persons from form", persons);
		       
		       var tip = (pctg/100) * amount;
		       $log.info(tip);
		       $scope.tipperson = parseFloat((tip/persons));
		    
		       $scope.totalperson = parseFloat((amount/persons) + $scope.tipperson);
		    
		       $scope.amt = parseFloat($scope.totalperson * persons);
		       
		    };
		    
		  
        $scope.amount = 100;  //defaults
    		$scope.pctg = 15
        $scope.persons = 1 ;
        $scope.tipperson = 0;
        $scope.amt = 0;
        $scope.totalperson = 0;
        
    };

    app.controller("MainCtrl", MainCtrl);
	
   

}());