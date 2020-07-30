const mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

const UserSchema = mongoose.Schema({
	title:{
		type:String,
		required:true
	},

	email:{
		type:String,
		unique: true,
		required:true
	},

	userName:{
		type:String,
		unique: true,
		required:true
	},	

	password:{
		type:String,
		required:true
	},

	date:{
		type:Date,
		default:Date.now
	},
});

// hash the password
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('Users', UserSchema);