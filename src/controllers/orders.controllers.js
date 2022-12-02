const {ProductsServices, OrdersServices, CartsServices, ProductsInOrders} = require('../services');
const transporter = require('../utils/mailer');

const checkout = async (req, res, next)=>{
    try{
        
        const {id} = req.params; // id del carrito.
        const preOrder = await CartsServices.buy(id); // Cambiar el estado del carrito y el estado de los productos 
        const newOrder = {userId: preOrder.userId, totalPrice: preOrder.totalPrice};
        const orderCreated = await OrdersServices.create(newOrder);
        const idNewOrder = orderCreated.id; //lo que se acaba de crear.


        const preProdInOrder = await CartsServices.getProducts(id);// generar un arreglo de objetos, al consultar todos los products_in_cart de un id carrito.
        const arrayProdInOrders = preProdInOrder.map((item)=>{
            const order = { orderId: idNewOrder, 
                            productId: item.product_id,
                            quantity: item.quantity, 
                            price: item.price}
            return order;
        });
        await OrdersServices.addProductsInOrder(arrayProdInOrders);
        res.status(201).json({message: `Order create ${idNewOrder}` });
        const transporter = require('../utils/mailer');
        transporter.sendMail({
            from: "<juta2303@gmail.com>",
            to: result.email, //el email esta here
            subject: "Thanks for you purchase.",
            text: `Hi ${result.firstname} Thanks for your purchase in our Ecommerce, we are glad to serv you.`,
            html: `<h2> ${result.firstname} </h2><p>Thanks for your purchase in our Ecommerce, we are glad to serv you.</p>`
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