const mongoose = require('mongoose');

const supercarSchema = new mongoose.Schema(
{
    engine:String ,
        power:String,
        topSpeed:String,
        color:String,
        name:String,
        model:String,
        year:String 
})
const Supercar = mongoose.model('superCarCollection', supercarSchema);

module.exports = Supercar








