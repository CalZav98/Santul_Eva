const db = require('../../db/mysql');

const TABLA_TAR = 'tareas'


function get_allTar() {
    return db.get_alltareas(TABLA_TAR);
}

module.exports = {
    get_allTar
}