angular
  .module('Biketrek')
  .config(config);
 
function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.html',
      resolve: {
        user: isAuthorized
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'client/templates/login.html',
      controller: 'LoginCtrl as logger'
    })
    .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'client/templates/profile.html',
          controller: 'ProfileCtrl as profile',
          resolve: {
            user: isAuthorized
          }
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

  ////////////

  function isAuthorized($q) {
    let deferred = $q.defer();

    if (_.isEmpty(Meteor.user()))
      deferred.reject('AUTH_REQUIRED');
    else
      deferred.resolve();

    return deferred.promise;
  }
}