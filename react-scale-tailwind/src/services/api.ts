import axios from 'axios'
import { Product } from '@/types/product'
import { API_CONFIG } from '@/constants/config'

const api = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    timeout: API_CONFIG.TIMEOUT,
})

export const productAPI = {
    getAll: () => api.get<Product[]>('/products'),
    getById: (id: number) => api.get<Product>(`/products/${id}`),
}