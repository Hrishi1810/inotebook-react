const mongo = require('mongoose');

const mongoUrl = "mongodb://localhost:27017/";

const connectToMongo =()=>{
    mongo.connect(mongoUrl);
}

module.exports = connectToMongo;