var mongoose= require("mongoose")

const monngodb_url="mongodb+srv://grupo_4:Ricardo89@grupo4.womut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(monngodb_url, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("mongodb esta conectado");
}).catch((error)=>{
    console.log("mondb no esta conectado");
    console.log(error);
});

