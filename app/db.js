require('dotenv').config()
const mongoose = require('mongoose');

exports.connectMonggose =()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true
    })
    .then((e)=>console.log("Connected to Mongodb => Habit-Tracker"))
    .catch((e)=>console.log("Not Connect Mongodb"))
}
