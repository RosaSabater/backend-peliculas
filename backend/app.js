const express = require('express');
const app = express();


app.listen(3000,()=>console.log('Servidor levantado en 3000'));

app.get('/',(req, res)=> res.send('Nitflix frontpage'));

app.get('/login', (req, res) => res.send('Login')); //iniciar sesion

app.get('/registro', (req, res) => res.send('Registro')); //registrar nueva cuenta

app.get('/logout', (req, res) => res.send('Logout')); //cerrar sesión

app.get('/perfil', (req, res) => res.send('Perfil')); //perfil de la cuenta con info y peliculas alquiladas

//esto es para evitar el error de CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //permite hacer peticiones desde todos los orígenes
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); //permite peticiones con las cabeceras enumeradas
    // res.header("Access-Control-Allow-Methods", "GET, POST");
    next();
});

