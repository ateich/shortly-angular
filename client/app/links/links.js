angular.module('shortly.links', ['ngFx'])

.controller('LinksController', function ($scope, $location, Links) {
  $scope.data = {
    links: null
  };

  $scope.getLinks = function(){
    Links.getLinks().then(function(){
      $scope.data.links = Links.getLocalLinks();
    });
  };

  $scope.goToShorten = function(){
    $location.path( '/shorten' );
  };

  $scope.getLinks();

});
