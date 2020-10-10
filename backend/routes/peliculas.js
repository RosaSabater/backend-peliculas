const router = require('express').Router();
const PeliculasController = require('../controllers/PeliculaController');


router.post('/add', PeliculasController.addPelicula);
router.get('/', PeliculasController.mostrarPeliculas);

module.exports = router;