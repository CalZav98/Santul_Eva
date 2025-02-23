const db = require('../../db/mysql');

const TABLA_USU = 'usuarios'

function get_allUsu() {
    return db.get_allusuarios(TABLA_USU);
}

module.exports = {
    get_allUsu
}