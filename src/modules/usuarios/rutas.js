const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');

const router = express.Router();

router.get('/', function (req, res) {
    const get_allUsu = controlador.get_allUsu();
    //const get_allTar = controlador.get_allTar();
    respuesta.success(req, res, get_allUsu, 200);
    //respuesta.success(req, res, get_allTar, 200);
});

module.exports = router;