var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
	question: { type: String, trim: true, required: true},
	answers: [],
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

mongoose.model('Question', QuestionSchema);
QuestionSchema.path('question').required(true, "Question is required");