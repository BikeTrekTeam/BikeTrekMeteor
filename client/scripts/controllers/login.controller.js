angular
  .module('Biketrek')
  .controller('LoginCtrl', LoginCtrl);

function LoginCtrl($scope, $reactive, $state, $ionicLoading, $ionicPopup, $log) {
  $reactive(this).attach($scope);

  this.login = login;

  ////////////

  function login(err) {
    if (err) return handleError(err);
    $state.go('tab.training');
  }

  function handleError(err) {
    $log.error('Login error ', err);

    $ionicPopup.alert({
      title: err.reason || 'Login failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }
}