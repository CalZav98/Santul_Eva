const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./controlador_tar');

const router = express.Router();

router.get('/', function (req, res) {
    
    const get_allTar = controlador.get_allTar()
    .then((items)=>{
        respuesta.success(req, res, items, 200)
    })

});

module.exports = router;