import e from 'express';
import * as productService from '../services/productService.js';
import { successResponse,errorResponse } from '../utils/apiResponse.js';    

export const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        return res.status(200).json(successResponse(products, `Successfully fetched all products`));
    } catch (error) {
        return res.status(500).json((errorResponse(error.message)));
    }
    }

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productService.getProductById(id);
        if (!product) {
            return res.status(404).json(errorResponse(`Product with id ${id} not found`));
        }
        return res.status(200).json(successResponse(product, `Successfully fetched product with id ${id}`));
    } catch (error) {
        return res.status(500).json(errorResponse(error.message));
    }
}

export const createProduct = async (req, res) => {
    try {
        const { name, price } = req.body;
        const product = await productService.createProduct(name, price);
        return res.status(201).json(successResponse(product,`Successfully created product`));
    } catch (error) {
        return res.status(500).json(errorResponse(error.message));
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price } = req.body;
        const product = await productService.updateProduct(id, name, price);
        if (!product) {
            return res.status(404).json(errorResponse(`Product with id ${id} not found`));
        }
        return res.status(200).json(successResponse(product, `Successfully updated product with id ${id}`));
    } catch (error) {
        return res.status(500).json(errorResponse(error.message));
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productService.deleteProduct(id);
        if (!product) {
            return res.status(404).json(errorResponse(`Product with id ${id} not found`));
        }
        return res.status(200).json(successResponse(product, `Successfully deleted product with id ${id}`));
    } catch (error) {
        return res.status(500).json(errorResponse(error.message));
    }
}

export const searchProduct = async (req, res) => {
    try {
        const { name } = req.query;
        const products = await productService.searchProduct(name);
        return res.status(200).json(successResponse(products, `Successfully searched product with name ${name}`));
    } catch (error) {
        return res.status(500).json(errorResponse(error.message));
    }
}