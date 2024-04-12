// rutas del usuario

// host + /api/auth

const {Router} = require('express');
const { check } = require('express-validator')
const { crearUsuario, loginUsuario, revelidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();


router.post('/new',
    [
        check('name', 'El nombre es obligatrio').not().isEmpty(),
        check('email', 'El email es obligatrio').isEmail(),
        check('password', 'El password debe de ser mas de 6 caracteres').isLength({ min: 6 }),
        validarCampos

    ],
  crearUsuario );

router.post('/', 
    [
        check('email', 'El email es obligatrio').isEmail(),
        check('password', 'El password debe de ser mas de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario )

router.get('/revali',validarJWT, revelidarToken )





module.exports = router