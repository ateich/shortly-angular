angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {
    links: Links.getLocalLinks()
  };

  $scope.getLinks = function(){
    //Get saved links from server
    // $scope.links = $scope.links.concat(Links.getLinks());
    console.log('links get links');
    Links.getLinks().then(function(){
      $scope.data.links = Links.getLocalLinks();
    });
  };

  $scope.getLinks();

});
