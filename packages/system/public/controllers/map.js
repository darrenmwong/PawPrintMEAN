var controller = module.controller('MapCtrl', function($scope) {
  $scope.myMarkers = [
      {
         "latitude": 33.22,
         "longitude": 35.33
      }
  ];

  $scope.center = {
      latitude: 33.895497,
      longitude: 35.480347,
  };

  $scope.zoom = 13;
  $scope.markers = $scope.myMarkers;
  $scope.fit = true;
});