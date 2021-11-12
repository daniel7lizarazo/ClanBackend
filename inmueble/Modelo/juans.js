
var mongoose = require('mongoose');
//Set up default mongoose connection
const userscheme=new mongoose.Schema(
{
      Apellido: {
          type: String
      },
      Nombre: {
          type: String
      },
      cedula: {
        type: String
      }

}

)

module.exports= mongoose.model('juans', userscheme)