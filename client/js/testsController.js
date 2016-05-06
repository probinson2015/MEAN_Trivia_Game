app.controller('MainController', function(){
	console.log("MainController Loaded");
	
})

app.controller('TestsController', function(TestFactory, QuestionFactory){

	// if (!this.first_name)
	// 	{
	// 		this.first_name = prompt("Please enter your name", "Harry Potter");
	// 	}


	console.log("TestsController Loaded");
	var that = this;
	
	var getTests = function(){
		TestFactory.getTests(function(tests){
			that.tests = tests;
		});
	}
	getTests();
	this.add = function(newTest){
		TestFactory.add(newTest, function(){
			getTests();
		})
	}
	this.remove = function(test){
		TestFactory.remove(test, function(){
			getTests();
		})
	}
	this.show = function(test){
		TestFactory.setTest(test);
	}
	var getQuestions = function(){
		QuestionFactory.getQuestions(function(questions){
			that.questions = questions;
			// console.log("here are the questions", questions)
		});
	}
	getQuestions();

	this.check = function(newTest){
		// TestFactory.add(newTest, function(){
		// 	getTests();
		// })
	console.log(newTest);
	}
})

app.controller('TestController', function(TestFactory){
	console.log("TestController Loaded");
	this.test = TestFactory.getTest();
	this.update = function(test){
		TestFactory.update(test);
	}
})

