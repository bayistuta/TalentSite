// Generated by CoffeeScript 1.10.0
(function() {
  app.service("artistService", [
    "$http", "$q", function($http, $q) {
      this.queryList = function(filters) {
        var deferred;
        deferred = $q.defer();
        $http.get("../../data.json").success(function(data, status, headers, config) {
          return deferred.resolve(data);
        }).error(function(data, status, headers, config) {
          return deferred.reject(data);
        });
        return deferred.promise;
      };
      this.queryDetail = function(memberId) {
        var deferred;
        deferred = $q.defer();
        $http.get("../../artist.json").success(function(data, status, headers, config) {
          return deferred.resolve(data);
        }).error(function(data, status, headers, config) {
          return deferred.reject(data);
        });
        return deferred.promise;
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=artistService.js.map
