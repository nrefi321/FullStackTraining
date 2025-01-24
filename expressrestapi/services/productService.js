import productModel from "../models/productModel.js";
 
export const getAllProducts = async () => {
  return await productModel.find();
};
 
export const createProduct = async (name, price) => {
  const product = new preductModel({ name, price });
  return await product.save();
};
 