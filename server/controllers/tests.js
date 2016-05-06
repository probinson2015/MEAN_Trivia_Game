var Test = mongoose.model('Test');

module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / Tests - Index")
			
			Test.find({}, function(err, tests){
				if(err)
				{
					console.log(err);
				}
				else
				{
					console.log(tests);
					response.json(tests);
				}
			})
		},
		
		create: function(request, response){
			console.log("Server / Ctrl / Tests - Create")
			var correct = 0;
			if(request.body[0].correct){correct++}
			if(request.body[1].correct){correct++}
			if(request.body[2].correct){correct++}

			console.log("here is the test", request.body)

			var test = new Test({
				name: request.body[3],
				correct_no: correct,
				percent: correct/3
			});

			test.save(function(err){
				if(err){
					console.log(err);
					response.json(false);
				}
				else{
					response.json(true);
				}
			})
		}
		
	}
})();