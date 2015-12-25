angular
  .module('Biketrek')
  .config(config);
 
function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.html'
    })
    .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'client/templates/profile.html'
        }
      }
    })
    .state('tab.logs', {
      url: '/logs',
      views: {
        'tab-logs': {
          templateUrl: 'client/templates/logs.html'
        }
      }
    })
    .state('tab.training', {
      url: '/training',
      views: {
        'tab-training': {
          templateUrl: 'client/templates/training.html'
        }
      }
    })
    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'client/templates/settings.html',
          controller: 'SettingsCtrl as settings'
        }
      }
    });
 
  $urlRouterProvider.otherwise('tab/training');
}