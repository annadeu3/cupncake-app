'use strict';

var mongoose = require('mpngoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var menuSchema = new mongoose.Schema({
	_id: {
		type: String
	},
	name: {
		type: String
	},
	category: {
		type: String
	},
	venue: {
		type: String
	},
	rating: {
		type: String
	},
	description: {
		type: String
	},
	images: {
		type: [String]
	},
	tags: {
		type: [String]
	}
	
});

mongoose.model('menuItem', menuSchema);