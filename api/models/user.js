const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  cardio: {},
  strength: {}
});

exports.User = mongoose.model('User', userSchema, 'users');
