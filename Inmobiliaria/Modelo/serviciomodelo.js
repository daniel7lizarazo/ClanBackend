const express = require("express");
//const { createReadStream } = require('fs')
var usuarios = require('./usuarios')
var ubicaciones = require('./ubicaciones')
var inmuebles = require('./inmuebles')
var cors = require('cors');

//var qs=require("querystring")
//var body_parser = require('body-parser');


const app = new express();
const HTML_CONTENT_TYPE = 'text/html'


// const bodyParser = require("body-parser");
// app.use(bodyparser.json());

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

const path = require("path");

require('./conexion')

app.post("/insertuser", (req, res) => {
    var myobj = { Nombre: req.body.nombre, Documento: req.body.documento, Email: req.body.email, Usuario: req.body.usuario, Clave: req.body.clave };
    usuarios.collection.insertOne(myobj, function(err, res) {
        if (err) {throw err;}
        console.log("datos creados")
    })
})

app.post("/insertubicacion", (req, res) => {
    var myobj = { Departamento: req.body.Departamento, Ciudad: req.body.Ciudad, Zona: req.body.Zona};
    ubicaciones.collection.insertOne(myobj, function(err, res) {
        if (err) {throw err;}
        console.log("datos creados")
    })
})

//POST INMUEBLE
app.post("/insertarInmueble", (req, res) => {
    ubicaciones.find({ Zona:req.body.ubicacion }, (err, docs) => {
        var inmueble1 = { nombre:req.body.nombre , numero_habitaciones: req.body.numero_habitaciones, precio: req.body.precio, tipo:req.body.tipo , imagen:req.body.imagen , ubicacion: docs[0]._id };
        inmuebles.collection.insertOne(inmueble1, function (err, res) {
            if (err) throw err;
            console.log("1 dato Insertado en Inmueble");
        })
    })
})


/*app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })

    createReadStream('./index.html').pipe(res)

})*/

app.get('/usuarios-prueba', (req,res)=>{
    res.writeHead(200,{'Content-Type': HTML_CONTENT_TYPE})
    console.log("Hola desde la api en puerto 3000")
})

app.listen(3000, () => {

    console.log("aplicacion corriendo en el puerto 3000")

})