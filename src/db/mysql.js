const mysql = require('mysql');
const config = require('../config');

// Llamar variables de entorno

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

// Variable de conexion

let conexion;

// Funcion para conectarse a la BD

function conMySQL(){
    conexion = mysql.createConnection(dbconfig);
    // en caso de error al conectar
    conexion.connect((err) => {
        if (err){
            console.log('[db err]', err);
            // volver a ejecutar la conexion
            setTimeout(conMySQL, 200);
        }else{
            console.log('Conexion exitosa');
        }
    });

    conexion.on('error', err => {
        console.log('[db err]', err);
        // en caso de perdidad de conexion, intentar volverse a conextar
        if(err.code == 'PROTOCOL_CONNECTION_LOST'){
            conMySQL();
        }else{
            throw err;
        }
    });
}

conMySQL();

// Funciones de la tabla Usuarios

function get_allusuarios(table){
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM ${table}`, (error, result)=>{
            if(error) return reject(error);
            resolve(result);
        })
    });
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