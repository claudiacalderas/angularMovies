var myApp = angular.module("myApp", []);

myApp.controller("FirstController", [ "$scope", "OnlyService", function($scope, OnlyService){
  $scope.newMovie = OnlyService.movieObject;
  $scope.addMovie = OnlyService.addMovie;
}]);

myApp.controller("SecondController", ["$scope", "OnlyService", function($scope, OnlyService){
  $scope.movies = OnlyService.allMovies.movies;
}]);

myApp.factory("OnlyService", [function(){

  // this object is used to be able to clear the inputs once the movie is added
  // data bound to inputs in the HTMl through FirstController
  var movieObject = {
        name: "",
        desc: "",
        director: "",
        length: ""
      };

  // Object that contains the array of movies
  var allMovies = {
        movies: []
      };

  // Function that adds a new movie to the array. Called from the button in the
  // div controlled by FirstController
  var addMovie = function(name, desc, director, length){
    var movie = {
      name: name,
      desc: desc,
      director: director,
      length: length
    };
    allMovies.movies.push(movie);
    console.log(allMovies.movies);
    // This is how we reinitialized the inputs:
    movieObject.name = "";
    movieObject.desc = "";
    movieObject.director = "";
    movieObject.length = "";
  };

  return {
    allMovies: allMovies,
    addMovie: addMovie,
    movieObject: movieObject
  };

}]);
