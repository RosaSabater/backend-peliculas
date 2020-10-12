const router = require('express').Router();
const PeliculasController = require('../controllers/PeliculaController');


router.get('/', PeliculasController.mostrarPeliculas);
router.post('/add', PeliculasController.addPelicula); 
router.post('/alquilar', PeliculasController.alquilarPelicula); 
router.get('/:id', PeliculasController.buscarPorId);
router.get('/titulo/:titulo', PeliculasController.buscarPorTitulo);

module.exports = router;