const mongo = require('mongoose');

const mongoUrl = "mongodb://localhost:27017/"

const connectToMongo =()=>{
    mongo.connect(mongoUrl, ()=>{
        console.log("Connected!!!!!!!!!!!!");
    })
}

module.exports = connectToMongo;
