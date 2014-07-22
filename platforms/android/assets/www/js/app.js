// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.studrab', {
      url: '/studrab',
      views: {
        'tab-studrab': {
          templateUrl: 'templates/tab-studrab.html',
          controller: 'StudrabCtrl'
        }
      }
    })
    .state('tab.studrab-detail', {
      url: '/studrab/:studrabId',
      views: {
        'tab-studrab': {
          templateUrl: 'templates/studrab-detail.html',
          controller: 'StudrabDetailCtrl'
        }
      }
    })

    .state('tab.info', {
      url: '/info',
      views: {
        'tab-info': {
          templateUrl: 'templates/tab-info.html',
          controller: 'InfoCtrl'
        }
      }
    })
  
    .state('tab.rettigheter', {
      url: '/info/rettigheter',
      views: {
        'tab-info': {
          templateUrl: 'templates/rettigheter.html',
          controller: 'RettigheterCtrl'
        }
      }
    })
  
    .state('tab.om', {
      url: '/info/om',
      views: {
        'tab-info': {
          templateUrl: 'templates/om.html',
          controller: 'OmCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/studrab');

});