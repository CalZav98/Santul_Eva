const express = require('express');

const respuesta = require('../../red/respuestas');

const router = express.Router();

router.get('/', function (req, res) {
    respuesta.success(req, res, 'Todo en orden desde usuarios', 200);
});

module.exports = router;