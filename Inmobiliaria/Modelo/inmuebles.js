var mongoose = require("mongoose");
//const  ObjectID = require('mongodb').ObjectId;
const { ObjectId } = require("bson");

<<<<<<< HEAD
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
=======
const inmueblescheme = new mongoose.Schema({
    nombre: {
        type: String
    },
    numero_habitaciones: {
        type: Number
    },

    tipo: {
        type: String
    },

    precio: {
        type: Number
    },

    imagen: {
        type: String
    },
    ubicacion: {
        type: ObjectId
>>>>>>> df8397a08f5e9dd539663527170e7ee2c4744ea2
    }
})
module.exports = mongoose.model('Inmuebles', inmueblescheme)