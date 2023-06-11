import products from "../Models/products.js";

export const addProduct = async (req,res) => {
    try {
        const {name, category, price, image} = req.body;
        const product = new products ({
            name,category,price,image
        });
        await product.save();
        return res.send("product added");
    } catch (error) {
        return res.send(error);
    }
}

export const getProduct = async (req,res) => {
    try {
        // const page = req.query.page || 1;
        const { page } = req.body;
        const eachSkip = (page-1) * 5; 
        const product = await products.find({}).skip(eachSkip).limit(5).exec();
        if(product){
            return res.send(product);
        }else{
            return res.send("product not found");
        }
    } catch (error) {
        return res.send(error);
    }
}