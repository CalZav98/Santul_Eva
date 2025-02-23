const express = require('express');
const morgan = require('morgan');
const config = require('./config');


const usuarios = require('./modules/usuarios/rutas_usu');
const tareas = require('./modules/tareas/rutas_tar');

const app = express();

// Middlewares
app.use(morgan('dev'));

// Configuracion 
app.set('port', config.app.port);

// Rutas
app.use('/usuarios', usuarios)
app.use('/tareas', tareas)

module.exports = app;