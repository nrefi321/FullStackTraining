import { useState, useEffect } from "react"
import { Link } from "react-router"
import { productAPI } from "@/services/api"
import { Product } from "@/types/product"
import { formatPrice } from "@/utils/format"
import { useCounterStore } from "@/stores/counterStore"
import { useCartStore } from "@/stores/cartStore"


export default function Home() {

  const CartItemCount = useCartStore(state => state.items.length)
  // ดึงค่า addToCart จาก useCartStore
  const addToCart = useCartStore(state => state.add)
  // ดึงค่า count, increment, decrement จาก useCounterStore
  const { count, increment, decrement } = useCounterStore()
  // สร้าง state สำหรับเก็บข้อมูล products
  const [products, setProducts] = useState<Product[]>([])

  // สร้าง loading state
  const [loading, setLoading] = useState(true)

  // สร้าง function สำหรับดึงข้อมูล products จาก API
  useEffect(() => {
    document.title = 'Home - E-commerce'
    const fetchProducts = async () => {
      try {
        const response = await productAPI.getAll()
        setProducts(response.data) // อัพเดทข้อมูล products
      } catch (error) {
        console.error('Failed to fetch products', error)
      } finally {
        setLoading(false) // ปิด loading
      }
    }
    // เรียกใช้ function fetchProducts
    fetchProducts()
  }, [])

  // ถ้า loading แสดง Loading...
  if (loading) {
    return <div className="flex justify-center items-center">Loading...</div>
  }

  return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          
          <div className="flex flex-col items-center justify-between my-4">
            <button
            onClick={increment}
            className="bg-blue-700 text-white px-4 rounded cursor-pointer">+ Increment</button>
            <h2 className="text-2xl 
                          font-semibold 
                          tracking-tight 
                          text-gray-900
                          py-2">Counter: {count}</h2>
            <button 
            onClick={decrement}
            className="bg-red-600 text-white px-4 rounded cursor-pointer">- Decrement</button>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Ours Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="p-6 bg-white rounded-lg shadow-md">
                <img
                  alt={product.title}
                  src={product.image}
                  className="w-full h-48 object-contain mb-4"
                />
                <h2 className="text-xl font-semibold truncate">{product.title}</h2>
                <p className="text-gray-600">{formatPrice(product.price)}</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span>Rating: {product.rating.rate}/5</span>
                  <span className="mx-2">•</span>
                  <span>{product.rating.count} reviews</span>
                </div>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-4 space-x-2">
                  <Link to={`/products/${product.id}`} className="mt-4 bg-blue-500 text-sm font-semibold text-white py-3 px-4 rounded-lg">
                    View Details
                  </Link>
                  <button 
                    onClick={() => addToCart(product)}
                    className="mt-4 cursor-pointer bg-green-500 text-sm font-semibold text-white py-3 px-4 rounded-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}