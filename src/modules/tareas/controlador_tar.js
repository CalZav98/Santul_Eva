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

async function reg_Tar(data) {
    return db.reg_tarea(TABLA_TAR, data);
}

module.exports = {
    get_allTar,
    get_Tar,
    del_Tar,
    reg_Tar
}