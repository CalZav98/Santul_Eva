const express = require('express');
const config = require('./config');

const usuarios = require('./modules/usuarios/rutas');

const app = express();

// Configuracion 
app.set('port', config.app.port);

// Rutas
app.use('/usuarios', usuarios)

module.exports = app;