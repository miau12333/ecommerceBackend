const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Orders = require('./orders.models');
const Products = require('./products.models');

const ProductsInOrders = db.define("products_in_orders", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "order_id",
        references: {
            model: Orders,
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
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
},{
    timestamps: false,
});

module.exports = ProductsInOrders;