const Usuario = require('../models/usuarios_model');
let response = {
    msg: "",
    exito: false
}

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

exports.find = function(req, res){
    Usuario.find(function(err, usuarios){
        res.json(usuarios);
    });
}

exports.findOne = function(req, res){
    Usuario.findOne({_id: req.params.id}, function(err, usuario){
        res.json(usuario);
    });
}

