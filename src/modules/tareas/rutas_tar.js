const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('./controlador_tar');

const router = express.Router();

// Rutas
router.get('/', get_allTar);
router.get('/:id', get_Tar);
router.delete('/:id', del_Tar);

// Consultar todas las tareas
async function get_allTar (req, res) {
    try {
        const items = await controlador.get_allTar()
        respuesta.success(req, res, items, 200)
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
};

// Consultar una tarea por ID
async function get_Tar (req, res) {
    try {
        const items = await controlador.get_Tar(req.params.id)
        respuesta.success(req, res, items, 200)
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
};

// Eliminar una tarea por ID
async function del_Tar(req, res) {
    try {
        const resultado = await controlador.del_Tar(req.params.id);
        if (resultado.affectedRows === 0) {
            return res.status(404).send('Tarea no encontrada');
        }
        res.send('Tarea eliminada');
    } catch (err) {
        console.error('Error al eliminar la tarea:', err);
        res.status(500).send('Error al eliminar la tarea');
    }
}

module.exports = router;