module.exports = function(app) {

  	var tests = require('../controllers/tests.js');
  	var questions = require('../controllers/questions.js');

	app

	// - - - Test - - -
    // Index
	.get('/tests', function(request, response) { tests.index(request, response) })
	
	// Create
	.post('/tests', function(request, response) { tests.create(request, response) })


// - - - Questions - - -
    // Index
	.get('/questions', function(request, response) { questions.index(request, response) })
	// Edit 
	.post('/questions/:id/edit', function(request, response) { questions.update(request, response) })
	// Create
	.post('/questions', function(request, response) { questions.create(request, response) })	

};