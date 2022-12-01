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

    
    static async addProductsInOrder(arrayProdInOrders){
        try{
            arrayProdInOrders.forEach(async (item) => await ProductsInOrders.create(item));
            return;
        } catch(error){
            throw error;
        }
    }

}

module.exports = OrdersServices;