const {userRegister, getAllUsers} = require('./users.controllers');
const  {userLogin} = require('./auth.controllers');
const {createProduct, getProducts} = require('./products.controllers');
const {addProductToCart, getProductsInCart} = require('./carts.controllers');
const {getOrdersByUser, checkout} = require('./orders.controllers');



module.exports = {
    userRegister,
    userLogin,
    getAllUsers,
    createProduct,
    getProducts,
    addProductToCart, 
    getProductsInCart,
    getOrdersByUser, 
    checkout,
};