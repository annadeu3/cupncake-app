'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var venueSchema = new Schema({
	name: String,
	address: String,
	phoneNumber: String,
	hours: String,
	location: {
		//lat and long coordinates
		type: [Number]
	},
	description: {
		type: String,
		required: true
	},
	menuUrl: String,
	menuItems: [{
		type: ObjectId,
		ref: 'MenuItem'
	}],
	picture: String
});

mongoose.model('Venue', venueSchema);