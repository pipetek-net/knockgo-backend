const mongoose = require('mongoose');

const host = "localhost";
const port = "27017";
const db = "knockgo-test";

exports.mongoConnect = () => {
    const mogoStringConnection = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(mogoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error",console.error.bind(console, "Error en la coneccion"));
    dbConnection.once("open", () => {console.log("La base de datos de mongo ha sido conectada");});
}