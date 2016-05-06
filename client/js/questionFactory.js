app.factory('QuestionFactory', function($http, $location){
	return {
		getQuestions: function(callback){
			console.log("QuestionsFactory getQuestions");
			$http.get('/questions').success(function(response){
				callback(response);
			})
		},
		create: function(newQuestion){
			if(newQuestion){
				console.log("QuestionsFactory create ", newQuestion);
				$http.post('/questions', newQuestion).success(function(response){
					// callback(response);
				})
			}
		}
	}
})