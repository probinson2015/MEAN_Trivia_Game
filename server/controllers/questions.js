var Question = mongoose.model('Question');

module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / Questions - Index")
			
			Question.find({}, function(err, questions){
				if(err){
					console.log(err);
				}
				else{
					// console.log(questions);
					response.json(questions);
				}
			})
		},

		create: function(request, response){
			console.log("Server / Ctrl / Questions - Create")
			var question = new Question(request.body);
			question.answers.push({
				answer:request.body.answerT,
				correct: true,
				created_at: Date(),
				updated_at: Date()
			})
			question.answers.push({
				answer: request.body.answerF1,
				correct: false,
				created_at: Date(),
				updated_at: Date()
			})
			question.answers.push({
				answer: request.body.answerF2,
				correct: false,
				created_at: Date(),
				updated_at: Date()
			})
			question.save(function(err){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		},
		edit: function(request, response){
			console.log("Server / Ctrl / Questions - Edit")
		}
	}
})();