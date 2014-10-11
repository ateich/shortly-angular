angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {
    links: Links.all
  };

  $scope.getLinks = function(){
    //Get saved links from server
  };

  $scope.init = function(){
    $scope.getLinks();
  };

});
