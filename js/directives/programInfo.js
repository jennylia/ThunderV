app.directive('programInfo', function(){
	return {
		restrict: 'E',
		scope: {
			program:'='
		},
		templateUrl: 'js/directives/programInfo.html'
	};

});

