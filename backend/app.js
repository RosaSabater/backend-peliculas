const express = require('express');
const usuariosRouter = require('./routes/usuarios')
const peliculasRouter = require('./routes/peliculas')
const app = express();


//esto es para evitar el error de CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //permite hacer peticiones desde todos los orígenes
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); //permite peticiones con las cabeceras enumeradas
    // res.header("Access-Control-Allow-Methods", "GET, POST");
    next();
});

app.use(express.json());


app.use('/usuarios', usuariosRouter);
app.use('/peliculas', peliculasRouter);


app.listen(3000,()=>console.log('Servidor levantado en 3000'));




