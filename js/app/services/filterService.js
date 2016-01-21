// Generated by CoffeeScript 1.10.0
(function() {
  app.service("filterService", [
    "$http", "$q", function($http, $q) {
      this.queryFilters = function() {
        var deferred;
        deferred = $q.defer();
        $http.get("../../filters.json").success(function(data, status, headers, config) {
          return deferred.resolve(data);
        }).error(function(data, status, headers, config) {
          return deferred.reject(data);
        });
        return deferred.promise;
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=filterService.js.map
