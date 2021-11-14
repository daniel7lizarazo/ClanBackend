var mongoose = require('mongoose');
//Set up default mongoose connection
const userscheme=new mongoose.Schema(
{
      nombre: {
         type: String
      },
      email: {
          type: String
      },
      usuario: {
          type: String
      },
      contraseña: {
        type: String
    }
}

)
module.exports= mongoose.model('user', userscheme)