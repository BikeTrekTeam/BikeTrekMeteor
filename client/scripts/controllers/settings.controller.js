angular
  .module('Biketrek')
  .controller('SettingsCtrl', SettingsCtrl);
 
function SettingsCtrl($scope, $reactive, $state) {
  $reactive(this).attach($scope);
 
  this.logout = logout;
 
  ////////////
 
  function logout() {
    alert("I AM LOGGING OUT");
    Meteor.logout((err) => {
      if (!err) return;
      $state.go('login');
    });
  }
}