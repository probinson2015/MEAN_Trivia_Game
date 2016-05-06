app.factory('TestFactory', function($http, $location){
	return {
		getTests: function(callback){
			console.log("TestsFactory getTests");
			$http.get('/tests').success(function(response){
				callback(response);
			})
		},
		// add: function(newTest, callback){
		// 	if(newTest){
		// 		console.log("TestsFactory add ", newTest);
		// 		$http.post('/tests', newTest).success(function(response){
		// 			callback(response);
		// 		})
		// 	}
		// },
		test: function(a1,a2,a3,name){
			console.log("score", a1,a2,a3,name)
			$http.post('/tests', [a1,a2,a3,name]).success(function(response){
				$location.path('/dashboard')
			})
		}

	}
})