angular.module('starter.controllers', [])

.controller('WodCtrl', function($scope) {

  $scope.workout = [
    {
      "day": "Mon 06/10/15",
      "box": "CF Hackney",
      "strength": "12 min E2MOM, 6 rounds of:, 1 Power Clean, 2 Split Jerks",
      "metcon": "4 rounds of:, 3 min AMRAP of:, 2 Power Clean and Jerk, 4 Over the Bar Burpees"
    },
    {
      "day": "Tues 07/10/15",
      "box": "CF Hackney",
      "Strength1": "Strength",
      "Metcon": "Metcon"
    },
  ];

  $scope.currentDayStrength = $scope.workout[0].strength.split(", ");

  $scope.currentDayMetcon = $scope.workout[0].metcon.split(", ");

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
