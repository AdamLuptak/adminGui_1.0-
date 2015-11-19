'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description # MainCtrl Controller of the sbAdminApp
 */

angular.module('AdminGui')
.controller('MainCtrl', ['$scope','dashstatsService','dashtaskService', function($scope,dashstatsService,dashtaskService) {
	dashstatsService.success(function(data) {
	     $scope.divs = data; 
	   });
	dashtaskService.success(function(data) {
	     $scope.tasks = data; 
	   });
	$scope.sortType="time";
	$scope.sortReverse=false;
	$scope.searchTask="";
	$scope.numberOfTasks=5;
	$scope.taskDetail=false;
	$scope.setSelected=function(index){
		$scope.selected=index;
	}
}]);