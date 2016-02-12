angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/page1',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('tabsController.dashbord', {
      url: '/dashbord',
      views: {
        'tab5': {
          templateUrl: 'templates/dashbord.html',
          controller: 'dashbordCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.ukeplan', {
      url: '/ukeplan',
      views: {
        'tab12': {
          templateUrl: 'templates/ukeplan.html',
          controller: 'ukeplanCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.lekseplan', {
      url: '/lekseplan',
      views: {
        'tab13': {
          templateUrl: 'templates/lekseplan.html',
          controller: 'lekseplanCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page3',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('fravæR', {
      url: '/sykmelding',
      templateUrl: 'templates/fravæR.html',
      controller: 'fravæRCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});