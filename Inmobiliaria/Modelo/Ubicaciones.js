var mongoose = require('mongoose');
//Set up default mongoose connection
const userscheme = new mongoose.Schema({

        Departamento: {
            type: String
        },

        Ciudad: {
            type: String
        },

        Zona: {
            type: String
        },

    }

)
module.exports = mongoose.model('Ubicaciones', userscheme)