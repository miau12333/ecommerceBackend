const db = require("../utils/database");
const { Users, Products, Carts, Orders, ProductsInCarts, ProductsInOrders, } = require("../models");
const initModels = require("../models/initModels");

initModels();


/*
users
[{username:"",firstname:"", lastname: "", email:"", password:""}];

products
[name:"",price: "", availableQty: 200 ,urlImg:""];

carts
[userId: , totalPrice:];

orders
[userId: , totalPrice: ];

productsincarts
[cartId: , productId: , quantity: , price: ];

productsinorders
[ orderId, productId: , quantity: , price: ];
*/
const users = [
    {   username: "mary20", firstname: "Maria",  lastname: "Godoy", email: "maria@gmail.com",  password: "1234" },
    {   username: "silva81", firstname: "Diana", lastname: "Silva", email: "ger@hotmail.com", password: "1234"},
    {   username: "amadaflor20", firstname: "Paola", lastname: "Torres", email: "polato22@yahoo.com", password: "1234" },
];

const products = [
    {   name: "T-shirt", price: 30, availableQty: 200 ,urlImg:"https://www.mystore.co/tshirts/tshirt01.jpg" },
    {   name: "pants", price: 70, availableQty: 100 ,urlImg:"https://www.mystore.co/jackets/pants05.jpg" },
    {   name: "Jacket", price: 50.5, availableQty: 50 ,urlImg:"https://www.mystore.co/jackets/jackets01.jpg" },
];

const carts = [
    {userId: 1 , totalPrice: 60 },
    {userId: 3 , totalPrice: 80.5 },
];

const productsInCarts = [
    {cartId: 1, productId: 1 , quantity: 2 , price: 60 },
    {cartId: 2, productId: 1 , quantity: 1 , price: 30 },
    {cartId: 2, productId: 3 , quantity: 1 , price: 50.5 },
];

const orders= [
    {userId: 3 , totalPrice: 110.5 }, //compró 2 tshirt 30 y 1 jacket 50.5
    {userId: 2 , totalPrice: 140 }, //

];

const productsInOrders = [
    {orderId: 1 , productId: 1 , quantity: 2 , price: 60},
    {orderId: 1 , productId: 3 , quantity: 1 , price: 50.5},
    {orderId: 2 , productId: 2 , quantity: 2 , price: 140},
];

db.sync({ force: true }).then(() => {
    console.log("Sinronizado");
    users.forEach(async (user) => await Users.create(user));
    setTimeout(() => {
        products.forEach(
            async (product) => await Products.create(product)
        );
    }, 100);
    setTimeout(() => {
        carts.forEach(
            async (cart) => await Carts.create(cart)
        );
    }, 200);
    setTimeout(() => {
        productsInCarts.forEach(async (item) => await ProductsInCarts.create(item));
    }, 300);
    setTimeout(() => {
        orders.forEach(async (order) => await Orders.create(order));
    }, 500);
    setTimeout(() => {
        productsInOrders.forEach(async (item) => await ProductsInOrders.create(item));
    }, 800);
});

  

