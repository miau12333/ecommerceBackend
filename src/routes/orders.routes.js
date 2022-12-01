const { Router} = require("express");
const { getOrdersByUser, checkout}=require('../controllers');

const router = Router();

/**
* @openapi
* /api/v1/orders/checkout/{id}:
*   post:
*     summary: Create a new Order
*     tags: [Orders] 
*     parameters:
*       - in: path
*         name: id
*         required: true
*     requestBody:
*       description: To create a new order you need a userId, totalprice
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/checkout"
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
*                     $ref: "#/components/schemas/checkout"
* /api/v1/orders/{id}:
*   get:
*     summary: We get the orders of the user by id.
*     tags: [Orders] 
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
*                     $ref: "#/components/schemas/getOrdersByUser"  
*/

router.post('/orders/checkout/:id', checkout);
router.get('/orders/:id', getOrdersByUser);

module.exports = router;