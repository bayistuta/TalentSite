app.controller "artistListController",["$scope","artistService",
  ($scope, artistService)->
    $scope.showFilter = true
    $scope.artists = {}

    $scope.init = ->
      artistService
      .queryList("153208")
      .then(
        (data)->
          $scope.artists = data.Result.ArtistList
          return
      )
      return
]