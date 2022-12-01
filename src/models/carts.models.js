const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users = require('./users.models');

const Carts = db.define("carts", {
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
    },
    status: {
        type: DataTypes.ENUM("pending", "purchased"),
        defaultValue: "pending",
    },
});

module.exports = Carts;