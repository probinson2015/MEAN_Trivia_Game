app.controller('DashboardsController', function(UserFactory, TestFactory){
	var that = this;

	UserFactory.setName();

	this.resetName = function(){
		UserFactory.resetName();
	}

	this.getTests = function(){
		TestFactory.getTests(function(tests){
			that.tests = tests;
		})
	}
	this.getTests();
})