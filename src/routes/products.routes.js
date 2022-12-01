const { Router} = require("express");
const {createProduct, getProducts}=require('../controllers');

const router = Router();
/**
* @openapi
* /api/v1/products/new:
*   post:
*     summary: Create a new Product in the app
*     tags: [Products] 
*     requestBody:
*       description: To create a new user you need a name, price , availableQty ,urlImg
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/createProduct"
*     responses:
*       201:
*         description: created
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
*                     $ref: "#/components/schemas/createProduct"
* /api/v1/products:
*   get:
*     summary: We get the products whose available quantity is greater than zero.
*     tags: [Products] 
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
*                     $ref: "#/components/schemas/getProducts"  
*/

router.post('/products/new', createProduct);
router.get('/products', getProducts);


module.exports = router;