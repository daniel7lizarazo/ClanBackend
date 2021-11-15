var mongoose= require("mongoose")

const monngodb_url="mongodb+srv://daniel_prog_web:programacionweb2021@clusterprogweb.tkzyl.mongodb.net/Inmobiliaria?retryWrites=true&w=majority";

mongoose.connect(monngodb_url, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("Conectado a base de datos");
}).catch((error)=>{
    console.log("Fallo en conexión a base de datos");
    console.log(error);
});

