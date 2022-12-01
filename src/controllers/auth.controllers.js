const {AuthServices} = require('../services');

const userLogin = async (req, res, next)=>{
    try{
        //email y password
        const credentials = req.body;
        const result = await AuthServices.authenticate(credentials);


        //{isValid, result} result = {isValid, result }; por eso usaremos result.result
        if(result){
            const { username, firstname, lastname, email, id} = result.result;
            const user = {username, firstname, lastname, email, id};
            const token = AuthServices.genToken(user);
            user.token = token;
            res.json({...user});
        } else{
            res.status(400).json({message: "información inválida"});
        }
    }
    catch(error){
        next({
            status: 400,
            errorContent: error,
            message: 'Email o contraseña invalida',
        });
    }
}

module.exports = {
    userLogin
};