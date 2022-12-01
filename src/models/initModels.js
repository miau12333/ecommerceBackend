const { Users, Products, Carts, Orders, ProductsInCarts, ProductsInOrders} = require("./index.js");

const initModels = ()=>{


// 1.  1->many
Carts.belongsTo (Users, {as: 'buyer', foreignKey: 'user_id'});
Users.hasMany(Carts, {as:'shopping', foreignKey: 'user_id'});

//2. 1->many
Orders.belongsTo (Users, {as: 'client', foreignKey: 'user_id'});
Users.hasMany(Orders, {as:'purchases', foreignKey: 'user_id'});

//3. 1->many
ProductsInCarts.belongsTo (Carts, {as: 'container', foreignKey: 'cart_id'});
Carts.hasMany(ProductsInCarts, {as:'elements', foreignKey: 'cart_id'});

//4. 1->many
ProductsInOrders.belongsTo (Orders, {as: 'purchase', foreignKey: 'order_id'});
Orders.hasMany(ProductsInOrders, {as:'items', foreignKey: 'order_id'});

//5. 1->many
ProductsInCarts.belongsTo (Products, {as: 'refProduct', foreignKey: 'product_id'});
Products.hasMany(ProductsInCarts, {as: 'cartItems', foreignKey: 'product_id'});

//6. 1->many
ProductsInOrders.belongsTo (Products, {as: 'ref', foreignKey: 'product_id'});
Products.hasMany(ProductsInOrders, {as: 'orderItems', foreignKey: 'product_id'});
}

module.exports = initModels;
