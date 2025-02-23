const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./controlador_usu');

const router = express.Router();

// Consultar todos los usuarios
router.get('/', async function (req, res) {
    const items = await controlador.get_allUsu()
    respuesta.success(req, res, items, 200)
});

// Consultar un usuario por ID
router.get('/:id', async function (req, res) {
    try {
        const items = await controlador.get_usuario(req.params.id)
        respuesta.success(req, res, items, 200)
    } catch (error) {
        
    }
});


module.exports = router;