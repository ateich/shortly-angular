angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  console.log('links: ', Links);
  console.log('location: ', $location);
  $scope.link = {
    url: null
  };

  $scope.addLink = function(){
    if($scope.link.url !== null && $scope.link.url.slice(0,7) !== 'http://'){
      $scope.link.url = 'http://' + $scope.link.url;
    }

    Links.shortenLink($scope.link);
    $scope.link.url = null;

    $location.path( "/links" );
  };
});
