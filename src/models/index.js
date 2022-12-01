//importar los modelos y exportarlos esto es barrels
//este archivo es de proposito especifico, agrupar todos los modelos y exportarlos.

const Users = require('./users.models');
const Products = require('./products.models');
const Carts = require('./carts.models');
const Orders = require('./orders.models');
const ProductsInCarts = require('./productsInCarts.model');
const ProductsInOrders = require('./productsInOrders.model');

module.exports = {
    Users,
    Products,
    Carts,
    Orders,
    ProductsInCarts,
    ProductsInOrders,
};

