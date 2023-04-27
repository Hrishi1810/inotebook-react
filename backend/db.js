const mongo = require('mongoose');

<<<<<<< HEAD
const mongoUrl = "mongodb://localhost:27017/?readPreference=primary"
=======
const mongoUrl = "mongodb://localhost:27017/"
>>>>>>> e9f8705c6323a0a582b9087410b299045f718183

const connectToMongo =()=>{
    mongo.connect(mongoUrl, ()=>{
        console.log("Connected!!!!!!!!!!!!");
    })
}

module.exports = connectToMongo;
