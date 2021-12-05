var mongoose = require("mongoose");
//const  ObjectID = require('mongodb').ObjectId;
const { ObjectId } = require("bson");

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
    }
})
module.exports = mongoose.model('Inmuebles', inmueblescheme)