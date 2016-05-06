app.controller('PlaysController', function(UserFactory, QuestionFactory, TestFactory){
		var that = this;
		UserFactory.setName();
		this.resetName = function(){
			UserFactory.resetName();
		}
		this.getQuestions = function(){
			QuestionFactory.getQuestions(function(questions){

				// SHUFFLE QUESTIONS
				var length = questions.length;
				for(var i = 0; i < questions.length; i++){
					var random = Math.floor(Math.random()*(length))
					var temp = questions[i];
					questions[i] = questions[random];
					questions[random] = temp;
				}
				questions = questions.splice(0,3)
				// END 

				// SHUFFLE ANSWERS IN QUESTIONS
				for( index in questions ){
					for(var i = 0; i < 3; i++){
						var random = Math.floor(Math.random()* 3)
						var temp = questions[index].answers[i];
						questions[index].answers[i] = questions[index].answers[random];
						questions[index].answers[random] = temp;
					}
				}
				// END


				that.questions = questions;
				
			})

			this.calculate = function(a1,a2,a3){
				console.log(a1,a2,a3);
				var name = UserFactory.getName();
				TestFactory.test(a1,a2,a3, name);
			}
		}
		
		this.getQuestions();

	})