const mysql = require('mysql');
const config = require('../config');

// Llamar variables de entorno

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

// Funciones de la tabla Usuarios

function get_allusuarios(table){
    return prueba_usuarios;
}

function get_usuario(table, idUsu){
    
}

function reg_usuario(table, dataUsu){
    
}

function del_usuario(table, idUsu){
    
}

// Funciones de la tabla Tareas

function get_alltareas(table){
    return prueba_tareas;
}

function get_tarea(table, idTar){
    
}

function reg_tarea(table, dataTar){
    
}

function del_tarea(table, idTar){
    
}

module.exports = {
    get_allusuarios,
    get_usuario,
    reg_usuario,
    del_usuario,

    get_alltareas,
    get_tarea,
    reg_tarea,
    del_tarea
}