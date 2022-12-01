require('dotenv').config();
const jwt = require("jsonwebtoken");
const authenticate = (req, res, next)=>{

    const bearerToken = req.headers.authorization;
    if(bearerToken){
        const token = bearerToken.split("Bearer ")[1];
        console.log(token);
        try{
            const decoded = jwt.verify(token, process.env.SECRET,'HS512');
            console.log(decoded);
            next();
        }catch(error){
            next({
                status:400,
                errorContent: error,
                message: "Invalid Token",
            });
        }
    }
};

module.exports = authenticate;