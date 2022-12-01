const {UserServices} = require('../services');
const transporter = require('../utils/mailer');


const userRegister = async (req, res, next)=>{
    try{
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.status(201).json(result);
        transporter.sendMail({
            from: "<paola.torres.osorio@gmail.com>",
            to: result.email, //el email esta here
            subject: "Wellcome a ecommerce v1",
            text: `Hi ${result.firstname} thanks for suscribe a Ecommerce, we are glad that are part our family `,
            html: `<h2> ${result.firstname} </h2><p>Thanks for suscribe a Ecommerce, we are glad that are part our family </p>`
        });
    }catch(error){
        next({
            status: 400,
            errorContent: error,
            message: 'Faltan datos'
        });
    }
};


const getAllUsers = async(req, res, next)=>{
    try{
        const users = await UserServices.getAll();
        res.json(users);
    }catch(error){
        next({
            status:400,
            errorContent: error,
            message: "Algo salio mal",
        })

    };
}

module.exports = {
    userRegister,
    getAllUsers,
}