define ["angular","angular-route"],
  ->
    app = angular.module "talentSiteApp",[ "ngRoute"]
    debugger;
    app.config ($routeProvider)->
      $routeProvider
        .when "/test", {
          templateUrl: "partial/test.html"
        }
    return app
