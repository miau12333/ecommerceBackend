const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users = require('./users.models');


/**
* @openapi
* components:
*   schemas:
*     checkout:
*       type: object
*       properties:
*         userId:
*           type: integer
*           example: 1
*         totalprice:
*           type: double
*           example: 150
*       
*     getOrdersByUser:
*       type: object
*       properties:
*         userId:
*           type: integer
*           example: 1
*         totalprice:
*           type: double
*           example: 150
*          
*     
*/

const Orders = db.define("orders", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
        references: {
            model: Users,
            key: "id",
        },
    },
    totalPrice: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        field: "total_price",
    },
    status: {
        type: DataTypes.ENUM("cancelled", "purchased"),
        defaultValue: "purchased",
    },
});

module.exports = Orders;