const {ProductsInCarts, Products, Carts} = require('../models');

class CartsServices {

    
    static async addProduct(data){
        try{
            const cart = await Carts.findByPk(data.cartId, {attributes: ["totalPrice"]});
            const priceCart = cart.totalPrice;
            const newPrice = parseFloat(priceCart) + parseFloat(data.price);
            console.log(`carrito: ${data.cartId}, price:${priceCart}, newPrice ${newPrice}`);
            await Carts.update( {totalPrice: newPrice},{
                where:{id: data.cartId}
            });
            const result = await ProductsInCarts.create(data);
            return result;
        } catch(error){
            throw error;
        }
    }

    static async getAllProducts(cartId){
        try{
            const result = await ProductsInCarts.findAll({
                where: {cartId },
                attributes: ["product_id", "quantity", "price"],
                include: {
                    model: Products,
                    as: "refProduct",
                    attributes: ["name"],
                },

            });
            return result;

        }catch(error){
            throw error;
        }
    }

    static async getProducts(id){
        try{
            const result = await ProductsInCarts.findAll({
                where: {cartId: id },
                attributes: ["product_id", "quantity", "price"],
            });
            return result;

        }catch(error){
            throw error;
        }
    };

    static async buy(id) {
        try {

            await ProductsInCarts.update({ status: "purchased" }, {
                where: { cartId: id },
            });
            await Carts.update({ status: "purchased" }, {
                where: { id },
                atributes: ["user_id", "totalPrice"],
            });
            const result = await Carts.findOne({
                where: { id },
                atributes: ["user_id", "totalPrice"],
            });

            console.log(`***Resultado: del buy en CartsServices user_id ${result.userId} totalPrice: ${result.totalPrice}`);
            return result; 

        } catch (error) {
            throw error;
        }
    };

};

module.exports = CartsServices;