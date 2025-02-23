const db = require('../../db/mysql');

const TABLA_TAR = 'tareas'


function get_allTar() {
    return db.get_alltareas(TABLA_TAR);
}

function get_Tar(id) {
    return db.get_tarea(TABLA_TAR, id);
}

function del_Tar(id) {
    return db.del_tarea(TABLA_TAR, id);
}

module.exports = {
    get_allTar,
    get_Tar,
    del_Tar
}