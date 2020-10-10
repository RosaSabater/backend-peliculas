const router = require('express').Router();
const PeliculasController = require('../controllers/PeliculaController');


router.get('/', PeliculasController.mostrarPeliculas);
router.post('/add', PeliculasController.addPelicula); 
router.post('/alquilar', PeliculasController.alquilarPelicula); 

module.exports = router;