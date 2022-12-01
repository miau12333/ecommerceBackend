const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
* @openapi
* components:
*   schemas:
*     createProduct:
*       type: object
*       properties:
*   
*         name:
*           type: string
*           example: T-shirt
*         price:
*           type: double
*           example: 30
*         availableQty:
*           type: integer
*           example: 20
*         urlImg:
*           type: string
*           example: t-shirtImg
* 
*     getProducts:
*       type: object
*       properties:
*         id:
*           type: integer
*           example: 2
*         name:
*           type: string
*           example: pants
*         price:
*           type: double
*           example: 70
*         availableQty:
*           type: integer
*           example: 100
*         urlImg:
*           type: string
*           example: https://www.mystore.co/jackets/pants05.jpg         
*         status:
*           type: boolean
*           example: true
* 
*/
 
const Products = db.define("products", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    availableQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "available_qty",
    },
    urlImg: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "url_img",
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },

});

module.exports = Products;

