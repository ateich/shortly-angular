angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  console.log('links: ', Links);
  console.log('location: ', $location);
  $scope.link = {
    url: null
  };

  $scope.addLink = function(){
    console.log('shorten add link!');
    // Links.all.push($scope.link.url);
    // console.log('Links: ', Links.all);
    console.log('addLink: ', $scope.link);

    if($scope.link.url !== null && $scope.link.url.slice(0,7) !== 'http://'){
      $scope.link.url = 'http://' + $scope.link.url;
    }

    Links.shortenLink($scope.link);
    $scope.link.url = null;

    $location.path( "/links" );

    //Send link to server
    //Hopefully, it will return a shortened version
    //BCrypt willing

  };
});
