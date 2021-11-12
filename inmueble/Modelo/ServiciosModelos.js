var modeloUsario= require('./user')


 require('./conexion')
 //var modelo2=require('./zonas')

 
     
 //app.post("/", (req, res) => {

  var myobj = { nombre: "nombre", tipo: "alberto", ubicacion: "767776677" };
  modeloUsario.collection.insertOne(myobj, function(err, res) {
  if (err) throw err;
  console.log("1 documento insertado");

    })


  //})