const router = require('express').Router();
const UsuarioController = require('../controllers/UsuarioController');
const auth = require('../middleware/auth')



router.post('/registro', UsuarioController.registro);
router.post('/login', UsuarioController.login);
router.post('/logout', auth, UsuarioController.logout);
router.post('/delete', auth, UsuarioController.delete);
router.get('/perfil', auth, UsuarioController.perfil);

module.exports = router;