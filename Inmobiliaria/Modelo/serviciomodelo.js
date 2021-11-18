const express = require("express");
const { createReadStream } = require('fs')
var modelo = require('./usuarios')

//var qs=require("querystring")
//var body_parser = require('body-parser');


const app = new express();
const HTML_CONTENT_TYPE = 'text/html'


// const bodyParser = require("body-parser");
// app.use(bodyparser.json());

app.use(express.json());
app.use(express.static("public"));

const path = require("path");
var modeloUsario = require('./inmuebles')

require('./conexion')

app.post("/insertuser", (req, res) => {
    var myobj = { Nombre: req.body.nombre, Documento: req.body.documento, Email: req.body.email, Usuario: req.body.usuario, Clave: req.body.clave };
    modelo.collection.insertOne(myobj, function(err, res) {
        if (err) throw err;
        res.send("datos creados")
    })
    res.send("datos creados")
})

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })

    createReadStream('./index.html').pipe(res)

})


app.listen(3000, () => {

    console.log("aplicacion corriendo en el puerto 3000")

})