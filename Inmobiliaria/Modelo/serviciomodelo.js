const express = require("express");
//const { createReadStream } = require('fs')
var usuarios = require('./usuarios')
var ubicaciones = require('./ubicaciones')
var inmuebles = require('./Inmuebles')
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
    var myobj = { nombre: req.body.nombre, documento: req.body.documento, email: req.body.email, usuario: req.body.usuario, clave: req.body.clave };
    usuarios.collection.insertOne(myobj, function(err, res) {
        if (err) {throw err;}
        console.log("datos creados")
    })
})

app.get("/findusuarios", (req, res) => {
    usuarios.find({}, (err, usuarios) => {
        if (err) {throw err;}
        res.send(JSON.stringify(usuarios))
    })
})

app.post("/insertubicacion", (req, res) => {
    var myobj = { Departamento: req.body.departamento, Ciudad: req.body.ciudad, Zona: req.body.zona};
    ubicaciones.collection.insertOne(myobj, function(err, res) {
        if (err) {throw err;}
        console.log(myobj)
    })
})

//POST INMUEBLE
app.post("/insertInmueble", (req, res) => {
    ubicaciones.find({ Zona:req.body.ubicacion }, (err, docs) => {
        var inmueble = { nombre:req.body.nombre , numeroHabitaciones: parseInt(req.body.numeroHabitaciones), precio: parseInt(req.body.precio), tipo:req.body.tipo , imagen:req.body.imagen , ubicacion: docs[0]._id };
        inmuebles.collection.insertOne(inmueble, function (err, res) {
            if (err) throw err;
            console.log(inmueble);
        })
    })
})


/*app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })

    createReadStream('./index.html').pipe(res)

})*/

app.get('/usuarios-prueba', (req,res)=>{
    console.log("Hola usuarios desde la api en puerto 3000")
})

/*app.post('/registrar-usuarios-prueba', (req,res)=>{
    var user={
        nombre:req.body.nombre,
        documento:req.body.documento,
        email:req.body.email,
        usuario:req.body.usuario,
        clave:req.body.clave
    }
    usuarios.collection.insertOne(user, function(err, res) {
        if (err) {throw err;}
        console.log("datos creados")
    })

    res.send(user)

})*/

app.listen(3000, () => {

    console.log("aplicacion corriendo en el puerto 3000")

})