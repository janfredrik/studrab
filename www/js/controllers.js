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
})

.controller('InfoCtrl', function($scope, $ionicPopup, $timeout) {  
 var ant = 0;
    
 $scope.byttSpraak = function() {
   if (ant == 0) {
     var alertPopup = $ionicPopup.alert({
       title: 'Sorry..',
       template: 'Vi har for øyeblikket ikke en engelsk versjon. Lyst til å oversette? Kontakt oss!'
     });
     alertPopup.then(function(res) {
     console.log('Vi har for øyeblikket ikke en engelsk versjon.');
     });
     ant+=1;
 }
};

});