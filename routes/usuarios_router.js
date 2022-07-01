const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios_controller');

router.post("/", usuariosController.create);
router.get("/", usuariosController.find);
router.get("/:id", usuariosController.findOne);
router.put("/:id", usuariosController.update);
router.delete("/:id", usuariosController.remove);

module.exports = router;