"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	email: {
		type: String, 
		required: true, 
		unique: true},
	password: {
		type: String, 
		required: true},
	admin: {
		type: Boolean,
		default: false
	},
	location: String,
	firstName: String,
	lastName: String,
	picture: String

});
mongoose.model('User', userSchema);