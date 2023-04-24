const mongo = require('mongoose');
const Schema = mongo.Schema;

const NotesSchema = new Schema({
    title: {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true,
        unique : true
    },
    tag: {
        type : String,
        required : true
    },
    date: {
        type : Date,
        required : Date.now
    },
  });

  module.exports = mongo.model('notes' , NotesSchema);