// craftEd.controller('UserController', ['$scope', '$http', '$location', '$ionicPopup', function($scope, $http, $location, $ionicPopup){

//   function setHeader() {
//     return {
//       "access-token": window.sessionStorage.token,
//       "token-type": "Bearer",
//       "client": window.sessionStorage.client,
//       "expiry": window.sessionStorage.expiry,
//       "uid": window.sessionStorage.uid
//     };
//   };

//   function storeSession(response, setUser) {
//     window.sessionStorage.token = response.headers('access-token');
//     window.sessionStorage.client = response.headers('client');
//     window.sessionStorage.expiry = response.headers('expiry');
//     window.sessionStorage.uid = response.headers('uid');
//     window.sessionStorage.email = setUser.email;
//     window.sessionStorage.first_name = setUser.first_name;
//     window.sessionStorage.last_name = setUser.last_name;
//     window.sessionStorage.nickname = setUser.nickname;
//     window.sessionStorage.user_id = setUser.id;
//   };

//   showAlert = function(alert) {
//     var alertPopup = $ionicPopup.alert({
//       title: alert,
//       cssClass: 'popupstyle'
//     });
//   };

//   $scope.register = function(){
//     if($scope.password === $scope.passwordConfirm) {
//       register = JSON.stringify({email: $scope.email, password: $scope.password, passwordConfirm: $scope.passwordConfirm});
//       $http.post(rootUrl + '/v1/auth/register', register);
//       $location.path('#/flavors');
//     }
//     else {
//       $scope.password = "";
//       $scope.passwordConfirm = "";
//       showAlert("Passwords did not match.");
//     };
//   };

//     if($scope.email && $scope.password) {
//       authentication.authenticate($scope.email, $scope.password)
//         .then(function(response) {
//           storeSession(response, response.data.data);
//           $state.go('home');
//         })
//         .catch(function(data) {
//           showAlert(data.data.errors[0]);
//         });
//     }
//     else {
//       showAlert("Invalid Login");
//     }
//   };

//   $scope.logout = function() {
//     window.sessionStorage.clear();
//   };
// }]);