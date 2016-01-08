/**
 * Created by lizwestberg on 1/8/16.
 */

var app = angular.module('myApp', []);

var canArray = [];
var winnerName;
var goButton;

//Controller to listen for requests from the page
app.controller('doThings', function($scope, $http){

    $scope.goButton=false;

    //Function to fetch the data from the two party data files and post them to the DOM
    $scope.getCans = function() {
        $http.get('/getDem').then(function (response) {
            for(i=0; i<response.data.candidates.length; i++) {
                $scope.candidates = response.data.candidates[i];
                canArray.push(response.data.candidates[i]);
            }

        $http.get('/getRep').then(function (response) {
            for(i=0; i<response.data.candidates.length; i++) {
                $scope.candidates = response.data.candidates[i];
                canArray.push(response.data.candidates[i]);
            }
        });
            $scope.goButton=true;
            $scope.names= canArray;
        });
    };

    //Function to randomly pick a winner from the candidates
    $scope.pickWin = function(){
        var random = randomNumber(0,9);
        var winner = canArray[random];

        winnerName = winner.Name;
        $scope.winnerPost = 'And the winner is: ' + winnerName;

    };

});


//random number function
function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}