import productModel from "../productModel.js";

export const getAllProducts = async () => {
    return await productModel.find({})
}

export const createProduct = async (name,price) => {
    const product = new productModel({name,price})
    return await product.save()
}