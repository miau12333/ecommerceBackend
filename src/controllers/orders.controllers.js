const {ProductsServices, OrdersServices, CartsServices, ProductsInOrders} = require('../services');
const transporter = require('../utils/mailer');

const checkout = async (req, res, next)=>{
    try{
        console.log(`1. ********* Iniciando el checkout*********`);
        const {id} = req.params; // id del carrito.
        console.log(`2. ********* id del cartito ${id}*********`);
        // que obtener un objeto de consultar el carrito, nos interesa, el totalPrice, el usuario, esto es un solo registro.
    
    
        //OJOOOOOOO HIZO LO DEl buy pero no sabemos que arrojó.
        const preOrder = await CartsServices.buy(id); // Cambiar el estado del carrito y el estado de los productos 
        console.log(`3. ********* Número de orden creado: ${preOrder.userId}*********`);

    
        const preProdInOrder = await CartsServices.getAllProducts(id);// generar un arreglo de objetos, al consultar todos los products_in_cart de un id carrito, 

        const newOrder = await OrdersServices.create(preOrder);
        console.log(`4. ********* Número de orden creado: ${newOrder.id}*********`);
        const idNewOrder = newOrder.id; //lo que se acaba de crear.

        const arrayProdInOrders = preProdInOrder.map((item)=>item.id = idNewOrder);
        console.log(arrayProdInOrders);

        await CartsServices.addProductsInOrder(arrayProdInOrders);
        // crear una orden con el objeto anterior, el status por defecto es purchased no hay que enviarlo.
        // aquí creamos los registros de productos_in_orders y tenemos que enviarle el número de la orden generado.

        res.status(201).json(result);
        const transporter = require('../utils/mailer');
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
            message: 'Missing attributes.'
        });
    }
};

 

const getOrdersByUser = async(req, res, next)=>{
    try{
        const {id} = req.params;
        const orders = await OrdersServices.getAll(id);
        res.json(orders);
    }catch(error){
        next({
            status:400,
            errorContent: error,
            message: "Something went wrong.",
        })

    };
}

module.exports = {
    getOrdersByUser, 
    checkout,
}