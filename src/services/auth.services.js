const {Users} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();

class AuthServices {
    static async authenticate(credentials){
        try{
         //   
         const {email, password} = credentials;
         const result = await Users.findOne({
            where: {email}
         });
         //null
         if(result){
           const isValid = bcrypt.compareSync(password, result.password);
           return isValid ? {isValid, result}: isValid;
         } else{
            return false;
         }
        } catch(error){
            throw error;
        }
    }

    static genToken(data){
        try{
            const token = jwt.sign(data, process.env.SECRET, {
                expiresIn: '5d', //2d 2 días o 5m 5 minutos
                algorithm: 'HS512',
            });
            return token;
        }catch(error){
            throw(error);
        }
    }
}



module.exports = AuthServices;