app

.controller('AppCtrl', ["$scope", "$ionicModal", "$ionicSideMenuDelegate", function($scope, $ionicModal, $ionicSideMenuDelegate) {

	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	// Form data for the login modal
  	$scope.loginData = {};

  	// Create the login modal that we will use later
	  $ionicModal.fromTemplateUrl('templates/main.html', {
	    scope: $scope
	  }).then(function(modal) {
	    $scope.modal = modal;
	  });

	// Triggered in the login modal to close it
	$scope.closeLogin = function() {
		$scope.modal.hide();
	};

	// Open the login modal
	$scope.login = function() {
		$scope.modal.show();
	}
}])

.controller("MainCtrl", ["$scope", "$ionicPlatform", function($scope, $ionicPlatform) {
	console.log("This is Main Controller");

	$ionicPlatform.ready(function() {
		// bluetoothSerial.list(function(devices) {
		//     devices.forEach(function(device) {
		//         alert(device.id);
		//     })
		// }, function() {
		// 	alert("Failed");
		// });
	});

}])

.controller("MenuCtrl", ["$scope", "$ionicPlatform", function($scope, $ionicPlatform) {
	console.log("This is Menu Controller");

}])

.controller("startAppCtrl", ["$scope", "$state", "$stateParams", "$cordovaLocalNotification", "$http", "$ionicPlatform", "$rootScope", function($scope, $state, $stateParams, $cordovaLocalNotification, $http, $ionicPlatform, $rootScope) {
	console.log($state.params.name_set);

	// $ionicPlatform.ready(function() {
	// 	bluetoothSerial.available(
	// 		function (numBytes) {
	// 		    alert("There are " + numBytes + " available to read.");
	// 		}, function() {
	// 			alert("FAILED");	
	// 		});
	// });

	var name = $state.params.name_set;
	var gender = $state.params.gender_set;

	$scope.name = name;
	$scope.gender = gender;

	$scope.notify = function() {
		var time = new Date();
		time.setSeconds(time.getSeconds() + 5); 
	
		$cordovaLocalNotification.add({
	        id: 10,
	        title: "Baby Prone Detector",
	        message: "Warning ! Baby needs attention !",
	        date: time,
	        data: "1"
	    });
	};
}])