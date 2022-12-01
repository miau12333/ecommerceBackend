const { Router} = require("express");
const {addProductToCart, getProductsInCart}=require('../controllers');


const router = Router();

/**
* @openapi
* /api/v1/carts/add:
*   post:
*     summary: add a Product in the cart
*     tags: [Carts] 
*     requestBody:
*       description: To add a product you need a cartId, productId, quantity , price
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/addProduct"
*     responses:
*       201:
*         description: add
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: OK
*                 data:
*                   type: array
*                   items:
*                     $ref: "#/components/schemas/addProduct"
* /api/v1/carts/{id}:
*   get:
*     summary: We get the all products in the cart.
*     tags: [Carts] 
*     parameters:
*       - in: path
*         name: id
*     responses:
*       200:
*         description: OK
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: OK
*                 data:
*                   type: array
*                   items:
*                     $ref: "#/components/schemas/getProductsInCart"  
*  
*/

router.post('/carts/add', addProductToCart);
router.get('/carts/:id', getProductsInCart);


module.exports = router;