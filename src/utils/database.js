const { Sequelize } = require("sequelize");
require("dotenv").config(); //Porque necesitamos los datos de la base de datos.

const db = new Sequelize({
    database: process.env.DB_NAME || "ecommerce",
    username: process.env.DB_USER || "postgres",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    password: process.env.DB_PASSWORD || "root",
    dialect: "postgres",
    logging: false, //Para que no se muestren por terminal los mensajes del log en la consola
});

module.exports = db;