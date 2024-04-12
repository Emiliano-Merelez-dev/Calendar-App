/*
    event routes
    /api/events
*/


const { Router } = require('express')
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.use( validarJWT );

router.get('/', getEventos );

router.post('/',
    [
        check('title', 'el titulo es obligatorio').not().isEmpty(),
        check('start', 'la fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'la fecha de finalizacion es obligatoria').custom( isDate ),
       validarCampos
    ],
 crearEvento );

router.put('/:id', actualizarEvento );

router.delete('/:id', eliminarEvento );

module.exports = router;

