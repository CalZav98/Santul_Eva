const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./controlador_tar');

const router = express.Router();

router.get('/', async function (req, res) {
    const items = await controlador.get_allTar()
    respuesta.success(req, res, items, 200)
});

module.exports = router;