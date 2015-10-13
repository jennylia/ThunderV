// app.controller('MainController', ['$scope', function($scope) { 
// 	$scope.title = 'This Month\'s Bestsellers'; 
// 	$scope.promo = 'The most popular books this month.';
// $scope.program =
// {
//   series: "Sherlock",
//   series_img: './img/sherlock.jpg',
//   genre: "Crime drama",
//   season: 3,
//   episode: "The Empty Hearse",
//   description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
//   datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
// };
// }]);


app.controller("MainController", ["$scope", "$firebaseArray",
	function($scope, $firebaseArray) {
          //CREATE A FIREBASE REFERENCE
          var ref = new Firebase("https://netflixtestdemo.firebaseio.com/");

          // GET MESSAGES AS AN ARRAY
          $scope.data = $firebaseArray(ref);

      //     //ADD MESSAGE METHOD
      //     $scope.addMessage = function(e) {

      //       //LISTEN FOR RETURN KEY
      //       if (e.keyCode === 13 && $scope.msg) {
      //         //ALLOW CUSTOM OR ANONYMOUS USER NAMES
      //         var name = $scope.name || "anonymous";

      //         //ADD TO FIREBASE
      //         $scope.messages.$add({
      //         	from: name,
      //         	body: $scope.msg
      //         });

      //         //RESET MESSAGE
      //         $scope.msg = "";
      //     }
      // }
  }
  ]);