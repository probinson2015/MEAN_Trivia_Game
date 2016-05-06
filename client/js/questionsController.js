
app.controller('QuestionsController', function(QuestionFactory, UserFactory){
	console.log("QuestionsController Loaded");
	var that = this;
	
	// var getQuestions = function(){
	// 	QuestionFactory.getQuestions(function(questions){
	// 		that.questions = questions;
	// 	});
	// }
	// getQuestions();

	this.resetName = function(){
		userFactory.resetName();
	}
	this.create = function(newQuestion){
		// console.log('made it to new question!')
		QuestionFactory.create(newQuestion);
		this.newQuestion = {};
		}
	})

