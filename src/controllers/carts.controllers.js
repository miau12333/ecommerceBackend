const {CartsServices} = require('../services');

const addProductToCart = async (req, res, next)=>{
    try{
        const dataCart = req.body;
        const result = await CartsServices.addProduct(dataCart);
        res.status(201).json(result);
    }catch(error){
        next({
            status: 400,
            errorContent: error,
            message: 'Something went wrong, trying to add product to cart.'
        });
    }
};


const getProductsInCart = async (req, res, next) => {
    try {
        const { id } = req.params;
        const products = await CartsServices.getAllProducts(id);
        res.json(products);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Something went wrong, trying to get all productos in cart.",
        })

    };
}

module.exports = {
    addProductToCart,
    getProductsInCart,
}