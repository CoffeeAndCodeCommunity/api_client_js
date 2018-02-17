var app = angular.module('myApp', []);
app.controller('contactsController', function($scope, $http) {
  $http.get('https://ca-address-book.herokuapp.com/api/contacts').then(function(response) {
    $scope.contacts = response.data.data;
  });
});
