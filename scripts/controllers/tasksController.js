//controler for Login
adminGui.controller('TasksController', [ '$scope', function($scope) {

	$scope.testVar = [ {
		id : 1,
		name : 'Task1',
		description : 'this is first task',
		visibility : 'true'
	}, {
		id : 2,
		name : 'Task2',
		description : 'this is second task',
		visibility : 'false'
	}, {
		id : 3,
		name : 'Task3',
		description : 'this is third task',
		visibility : 'true'
	}, {
		id : 4,
		name : 'Task4',
		description : 'this is fourth task',
		visibility : 'false'
	} ];
	$scope.variable = 'true'
	$scope.myitems = 'true'
} ]);
adminGui.filter('customArray', function($filter) {
	return function(list, arrayFilter, element) {
		if (arrayFilter) {
			return $filter("filter")(list, function(listItem) {
				return arrayFilter.indexOf(listItem[element]) != -1;
			});
		}
	};
});