var mongoose = require('mongoose');

var TestSchema = new mongoose.Schema({
	name: { type: String, trim: true, required: true},
	correct_no: {type: Number, required: true}, 
	percent: {type: Number, required: true},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

mongoose.model('Test', TestSchema);
TestSchema.path('name').required(true, "Name is required");