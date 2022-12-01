const {ProductsServices} = require('../services');


const createProduct = async (req, res, next)=>{
    try{
        const newProduct = req.body;
        const result = await ProductsServices.create(newProduct);
        res.status(201).json(result);
    }catch(error){
        next({
            status: 400,
            errorContent: error,
            message: 'Missing attributes.'
        });
    }
};


const getProducts = async(req, res, next)=>{
    try{
        const products = await ProductsServices.getAll();
        const productsAvailable = products.filter((item)=> item.availableQty > 0);
        res.json(productsAvailable);
    }catch(error){
        next({
            status:400,
            errorContent: error,
            message: "Something went wrong.",
        })

    };
}

module.exports = {
    createProduct,
    getProducts,
}