const {Router} = require('express');
const {userLogin} = require('../controllers');

const router = Router();

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Login 
 *     tags: [Login] 
 *     requestBody:
 *       description: To create a new user you need a email, password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/loginUser"
 *     responses:
 *       201:
 *         description: connect
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
 *                     $ref: "#/components/schemas/loginUser"
 *  
 */

router.post('/auth/login', userLogin);

module.exports = router;
