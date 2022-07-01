const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// se crea el esquema de la base de datos
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
        max: 512
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

// se exporta el modelo
module.exports = mongoose.model("usuarios", UsuariosSchema);
