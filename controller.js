var myApp = angular.module('taskApp',[]);
myApp.controller('indexPageController', ['$scope','$http', function($scope,$http) {
  
  $scope.movieName = "";
  // $scope.isdescription = false;
  $scope.movieData = {};
  $scope.movieDetailsData = {};
  $scope.movieDetailsData.Poster = "";
  
  // below function is searching for movie list with the searched keyword as Movie Title
  $scope.movieSearch = function(){
    $scope.isdescription = false;
    console.log($scope.movieName);
    var movieJSON = "http://www.omdbapi.com/?s="+$scope.movieName;
    $http.get(movieJSON)
      .then(function(response) {
        $scope.movieData = response.data;
      });  
  }
  
  // below function is searching for movie using the imdbID
  $scope.movieDetails = function(movie_id){
    $scope.isdescription = true;
    console.log(movie_id);
    var movieDetailJSON = "//www.omdbapi.com/?i="+movie_id+"&plot=full";
    $http.get(movieDetailJSON)
      .then(function(response) {
        $scope.movieDetailsData = response.data;
      }); 
  }











  $scope.login= function(){
            var jsonfi = "http://www.omdbapi.com/?s=STAR+WARS"; //having the details of the USER LIST
            $http.get(jsonfi)
              .then(function(response) {
              var dummydata =  $scope.users = response.data;
              console.log($scope.users);
            });  
          }
}]);

// var app = angular.module('taskApp', []);
// app.controller('indexPageController', [function($scope,$http) {
//           // $scope.users = {};
//           // $scope.sname = "";
//           // $scope.errore = "";
//           // var jsonfi = "login.json"; //having the details of the USER LIST
//           // $http.get(jsonfi)
//           //   .then(function(response) {
//           //   var dummydata =  $scope.users = response.data;
//           //   alert($scope.users.user[0].uname);
//           //   $scope.login= function(){
//           //     alert("in login controller function");
//           //     // for(var i=0; i < $scope.users.user.length; i++)
//           //     // {
//           //     //   if($scope.users.user[i].uname == $scope.sname){
//           //     //     if($scope.users.user[i].upassword == $scope.spassword){
//           //     //       alert("all is good");
//           //     //       i = $scope.users.user.length;
//           //     //     }
//           //     //     else{
//           //     //       $scope.errore = "password is not match";
//           //     //       i = $scope.users.user.length;
//           //     //     }
//           //     //   }
//           //     //   else{
//           //     //       $scope.errore = "No username Found";
//           //     //       i = $scope.users.user.length;
//           //     //   }
                
//           //   }
//           // });
//           console.log("testing");
// });
// // 
// // angular.module('User.controllers', []).
// // controller('UserController', function($scope,$http) {
// //           // $scope.users = {};
// //           // $scope.sname = "";
// //           // $scope.errore = "";
// //           // var jsonfi = "login.json";
// //           // $http.get(jsonfi)
// //           //   .then(function(response) {
// //           //   var dummydata =  $scope.users = response.data;
// //           //   alert($scope.users.user[0].uname);
// //           // });
// //           alert("welcome shubham");
// // });
