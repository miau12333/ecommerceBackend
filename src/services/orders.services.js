const {Products, Orders, ProductsInCarts, ProductsInOrders, Carts} = require('../models');

class OrdersServices {

    static async create (newOrder){
        try{
            const result = await Orders.create(newOrder);
            return result;
        } catch(error){
            throw error;
        }
    }

    static async getAll(userId){
        try{
            const result = await Orders.findAll({
                where: {userId},
            });
            return result;
        }catch(error){
            throw error;
        }
    }

    
    static async addProductsInOrder(array){
        try{
     
            array.forEach((item) => console.log(item.orderId, item.productId, item.quantity, item.price));
            array.forEach(async (item) => ProductsInOrders.create(item));
            
            return;
        } catch(error){
            throw error;
        }
    }

}

module.exports = OrdersServices;