import * as productService from '../services/productService.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        return res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    }

export const createProduct = async (req, res) => {
    try {
        const { name, price } = req.body;
        const product = await productService.createProduct(name, price);
        return res.status(201).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}