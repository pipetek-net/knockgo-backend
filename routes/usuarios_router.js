const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios_controller');

router.post("/", usuariosController.create);

module.exports = router;