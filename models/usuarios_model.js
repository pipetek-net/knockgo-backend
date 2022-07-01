const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        max: 12
    },
    apellido: {
        type: String,
        required: true,
        max: 12
    },
    email: {
        type: String,
        required: true,
        max: 60
    },
    password: {
        type: String,
        required: true,
        max: 45
    },
    telefono: {
        type: String,
        required: true,
        max: 14
    },
    tipo: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("usuarios", UsuariosSchema);
