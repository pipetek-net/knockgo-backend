const Usuario = require('../models/usuarios_model');
let response = {
    msg: "",
    exito: false
}

// funcion para crear un nuevo usuario
exports.create = function(req, res){
    let usuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password,
        telefono: req.body.telefono,
        tipo: req.body.tipo
    });

    usuario.save(function(err){
        if(err){
            console.log(err);
            response.exito = false;
            response.msg = "Error al crear el usuario";
            res.json(response);
            return;
        }
        response.exito = true;
        response.msg = "Usuario creado correctamente";
        res.json(response);
    });
}

// funcion para obtener todos los usuarios
exports.find = function(req, res){
    Usuario.find(function(err, usuarios){
        res.json(usuarios);
    });
}

// funcion para obtener un usuario por su id
exports.findOne = function(req, res){
    Usuario.findOne({_id: req.params.id}, function(err, usuario){
        res.json(usuario);
    });
}

//funcion para actualizar un usuario
exports.update = function(req, res){
    let usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password,
        telefono: req.body.telefono,
        tipo: req.body.tipo
    };
    Usuario.findByIdAndUpdate(req.params.id, {$set:usuario} , function(err){
        if(err){
            console.log(err);
            response.exito = false;
            response.msg = "Error al actualizar el usuario";
            res.json(response);
            return;
        }
        response.exito = true;
        response.msg = "Usuario actualizado correctamente";
        res.json(response);
    });
}

// funcion para eliminar un usuario
exports.remove = function(req, res){
    Usuario.findByIdAndRemove({ _id: req.params.id }, function(err){
        if(err){
            console.log(err);
            response.exito = false;
            response.msg = "Error al eliminar el usuario";
            res.json(response);
            return;
        }
        response.exito = true;
        response.msg = "Usuario eliminado correctamente";
        res.json(response);
    });
}
