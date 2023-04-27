const mongo = require('mongoose');
const { Schema } = mongo;

const UserSchema = new Schema({
    UserName: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type : String,
        required : true
    },
    date: {
        type : Date,
        required : Date.now
    },
  });

  module.exports = mongo.model('user' , UserSchema);