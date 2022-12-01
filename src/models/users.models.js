const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

/**
* @openapi
* components:
*   schemas:
*     register:
*       type: object
*       properties:
*         username:
*          type: string
*          example: Tati23
*         firstname:
*          type: string
*          example: Tatiana
*         lastname:
*          type: string
*          example: Guerrero
*         email:
*          type: string
*          example: tati@gmail.com
*          password:
*           type: string
*           example: 1234
*     loginUser:
*       type: object
*       properties:
*          email:
*           type: string
*           example: tati@gmail.com
*          password:
*           type: string
*           example: 1234
*   securitySchemes:
*     bearerAuth:
*       type: http
*       scheme: bearer
*       bearerFormat: JWT
*/


const Users = db.define("users",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
/*        profileImage: {
            type: DataTypes.STRING,
            field: 'profile_image',
        },
        phone: {
            type: DataTypes.STRING(16),
            unique: true,
            allowNull: false,
        },*/
    }, {
    hooks: {
        beforeCreate: (user, options) => {
            const { password } = user;
            const hash = bcrypt.hashSync(password, 8);
            user.password = hash;
        }
    }
});

module.exports = Users;