var mongoose = require("mongoose");
//const  ObjectID = require('mongodb').ObjectId;
const  { ObjectId } = require("bson");

const inmueblescheme = new mongoose.Schema(
    {
        nombre:{
            type: String
        },
        numeroHabitaciones:{
            type: Number
        },
        precio:{
            type: Number
        },
        tipo:{
            type: String
        },
        imagen:{
            type: String
        },
        ubicacion:{
            type: ObjectId
        }
    }
)
module.exports = mongoose.model('Inmuebles', inmueblescheme)