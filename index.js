//Requires node-modules.
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

//Require del Router.
const apiRouter = require('./server/router/api.router');

//Puerto.
const port = 3000;

//Instanciando servidor...
const app = express();

//Tablas
require('./server/db/database.db');

//Middlesware's
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors())
app.use(express.static('public'))

//Rutas...
//Ruta API.
app.use('/jsonplaceholder.typicode.com', apiRouter);
//Ruta 404.
app.use('*', (req, res) =>{
  res.status(404).sendFile(__dirname + '/public/page404.html');
});

app.listen(process.env.PORT || port, ()=>{
  console.log(`Servidor corriendo exitosamente 🚀 `);
});