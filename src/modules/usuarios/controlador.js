const db = require('../../db/mysql');

const TABLA_USU = 'usuarios'
const TABLA_TAR = 'tareas'

function get_allUsu() {
    return db.get_allusuarios(TABLA_USU);
}


function get_allTar() {
    return db.get_alltareas(TABLA_TAR);
}

module.exports = {
    get_allUsu,
    get_allTar
}