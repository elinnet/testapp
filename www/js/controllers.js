angular.module('starter.controllers', [])

.controller('WodCtrl', function($scope) {

  $scope.workout1 = "123";
  $scope.workout = [
    {
      "day": "Mon 06/10/15",
      "box": "CF Hackney",
      "strength1": "Strength",
      "metcon": "Metcon"
    },
    {
      "day": "Tues 07/10/15",
      "box": "CF Hackney",
      "Strength1": "Strength",
      "Metcon": "Metcon"
    },
  ];

  var currentDay = $scope.workout[0];

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
