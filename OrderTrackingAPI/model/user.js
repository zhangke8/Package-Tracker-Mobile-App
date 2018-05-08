const mongoose = require('mongoose');
const crypto = require('crypto');
// json web toekn
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      // The hash is created by combining the password provided by the user and the salt
      hash: String,
      salt: String
}, { versionKey: false });



userSchema.methods.setPassword = function(password){
    // Generates cryptographically strong pseudo-random data
    this.salt = crypto.randomBytes(16).toString('hex');
    // one-way encryption
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
}

userSchema.methods.validPassword = function(password) {
    // verify the has value is equal to 
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
  };

  userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      email: this.email,
      name: this.name,
      exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET"); 
  };

const User = mongoose.model('user', userSchema ,'user');

module.exports = User;

