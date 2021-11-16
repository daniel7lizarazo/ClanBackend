var mongoose = require("mongoose")
const monngodb_url = "mongodb://mileniso:1234*@inmobiliaria-shard-00-00.aqxbp.mongodb.net:27017,inmobiliaria-shard-00-01.aqxbp.mongodb.net:27017,inmobiliaria-shard-00-02.aqxbp.mongodb.net:27017/Inmobiliaria?ssl=true&replicaSet=atlas-11rchw-shard-0&authSource=admin&retryWrites=true&w=majority";



// const monngodb_url = "mongodb+srv://grupo_4:Ricardo89@grupo4.womut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(monngodb_url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("mongodb esta conectado");
}).catch((error) => {
    console.log("mondb no esta conectado");
    console.log(error);
});