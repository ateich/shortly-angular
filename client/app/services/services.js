angular.module('shortly.services', [])

.factory('Links', function ($http) {
  // Your code here
  var linkArray = [];
  console.log('entered factory');
  var shortenLink = function(data){
    console.log('shortenLink: ', data);
    return $http({
      method: 'POST',
      url: '/api/links',
      data: JSON.stringify(data)
    })
    .then(function(resp){
      console.log('shorten resp: ', resp.data);
      linkArray.push(resp.data);
      return resp.data;
    });
  };

  var getLocalLinks = function(){
    console.log('getLocalLinks ', linkArray);
    return linkArray;
  };

  var getLinks = function(callback){
    console.log('called getLinks in services');
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function(resp){
      console.log('got links: ', resp.data);
      linkArray = resp.data;
      return resp.data;
    });
  };
  return {
    shortenLink : shortenLink,
    getLinks: getLinks,
    getLocalLinks: getLocalLinks
  };
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
