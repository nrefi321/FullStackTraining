import express from "express";
import productModel from "../models/productModel.js";
 
export const getAllProducts = async () => {
  return await productModel.find();
};

export const getProductById = async (id) => {
  return await productModel.findById(id);
};
 
export const createProduct = async (name, price) => {
  const product = new productModel({ name, price })
  return await product.save()
};

export const updateProduct = async (id, name, price) => {
  try {
    return await productModel.findByIdAndUpdate(id, { name, price }, { new: true })
  } catch (error) {
    throw new Error(`Error update ${error.message}`)
  }
}

export const deleteProduct = async (id) => { 
  try {
    return await productModel.findByIdAndDelete(id)
  } catch (error) {
    throw new Error(`Error delete ${error.message}`)
  }
}

export const searchProduct = async (name) => {
  try{
    const products = await productModel.find({ name: { $regex: name, $options: 'i' } })
    return products
  }
  catch (error) {
    throw new Error(`Error search ${error.message}`)
  } 
}