var mongoose = require('mongoose');
//Set up default mongoose connection
const userscheme = new mongoose.Schema({
        Nombre: {
            type: String
        },
        Documento: {
            type: String
        },
        Email: {
            type: String
        },
        Usuario: {
            type: String
        },
        Clave: {
            type: String
        }
    }

)
module.exports = mongoose.model('Usuarios', userscheme)