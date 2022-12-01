const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Carts = require('./carts.models');
const Products = require('./products.models');

/**
* @openapi
* components:
*   schemas:
*     addProduct:
*       type: object
*       properties:
*         cartId:
*           type: integer
*           example: 1
*         productId:
*           type: integer
*           example: 3
*         quantity:
*           type: integer
*           example: 1
*         price:
*           type: double
*           example: 70
*     getProductsInCart:
*       type: object
*       properties:
*         cartId:
*           type: integer
*           example: 1
*         productId:
*           type: integer
*           example: 3
*         quantity:
*           type: integer
*           example: 1
*         price:
*           type: double
*           example: 70
*        
*   
*/


const ProductsInCarts = db.define("products_in_carts", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "cart_id",
        references: {
            model: Carts,
            key: "id",
        },
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_id",
        references: {
            model: Products,
            key: "id",
        },
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("pending", "purchased"),
        defaultValue: "pending",
    },
},{
    timestamps: false,
});

module.exports = ProductsInCarts;