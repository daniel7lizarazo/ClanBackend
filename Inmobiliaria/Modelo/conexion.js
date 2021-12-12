// // const monngodb_url = "mongodb+srv://grupo_4:Ricardo89@grupo4.womut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// mongoose.connect(monngodb_url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
//     console.log("mongodb esta conectado");
// }).catch((error) => {
//     console.log("mondb no esta conectado");
//     console.log(error);
// });


//llamo el paquete de mongoose y o defino en una variable
var mongoose= require("mongoose")
//definimos nuestra cadena de conexión
//const monngodb_url = "mongodb://mileniso:1234*@inmobiliaria-shard-00-00.aqxbp.mongodb.net:27017,inmobiliaria-shard-00-01.aqxbp.mongodb.net:27017,inmobiliaria-shard-00-02.aqxbp.mongodb.net:27017/Inmobiliaria?ssl=true&replicaSet=atlas-11rchw-shard-0&authSource=admin&retryWrites=true&w=majority";
const monngodb_url = "mongodb+srv://daniel_prog_web:programacionweb2021@clusterprogweb.tkzyl.mongodb.net/Inmobiliaria?retryWrites=true&w=majority";


//me conecto a mi base de datos mongo por medio de mongoose
mongoose.connect(monngodb_url, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("nos conectamos a la base de datos");
}).catch((error)=>{
    console.log("no se pudo conectar a mongodb");
    console.log(error);
});

