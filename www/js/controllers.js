angular.module('starter.controllers', [])

.controller('RettigheterCtrl', function($scope) {
})

.controller('OmCtrl', function($scope) {
})

.controller('StudrabCtrl', function($scope, StudRab) {
  $scope.studrabs = StudRab.all(); 
})

.controller('StudrabDetailCtrl', function($scope, $stateParams, StudRab) {
  $scope.studrab = StudRab.get($stateParams.studrabId);
  
  function openDeviceBrowser(externalLinkToOpen){	 
      window.open(externalLinkToOpen, '_system', 'location=no');}

})

.controller('InfoCtrl', function($scope, $ionicPopup, $timeout) {  
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Desverre..',
     template: 'Vi har for øyeblikket ikke en engelsk versjon. Lyst til å oversette? Kontakt oss!'
   });
   alertPopup.then(function(res) {
     console.log('Vi har for øyeblikket ikke en engelsk versjon.');
   });
 };


});
