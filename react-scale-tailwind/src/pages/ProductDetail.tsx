import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { Product } from "@/types/product"
import { productAPI } from "@/services/api"
import { Link } from "react-router"
import { formatPrice } from "@/utils/format"


export default function ProductDetail() {
  
  // ดึงข้อมูล product จาก API โดยใช้ id จาก params
  const { id } = useParams<{ id: string }>()

  // สร้าง state สำหรับเก็บข้อมูล product
  const [product, setProduct] = useState<Product | null>(null)

  // สร้าง loading state
  const [loading, setLoading] = useState(true)

  // สร้าง function สำหรับดึงข้อมูล product จาก API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await productAPI.getById(Number(id))
        setProduct(response.data) // อัพเดทข้อมูล product
      } catch (error) {
        console.error('Failed to fetch product', error)
      } finally {
        setLoading(false) // ปิด loading
      }
    }
    // เรียกใช้ function fetchProduct
    fetchProduct()
  }
  , [id])

  if (loading) {
    return <div className="flex justify-center items-center">Loading...</div>
  }

  if (!product) {
    return <div className="flex justify-center items-center">Product not found</div>
  }

  return (
    <div className="max-w-2xl my-8 mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full aspect-square object-contain bg-white"
        />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-2xl text-gray-800">{formatPrice(product.price)}</p>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Rating: {product.rating.rate}/5</span>
            <span>•</span>
            <span className="text-gray-600">{product.rating.count} reviews</span>
          </div>
          <p className="text-gray-600">{product.description}</p>
          <div className="pt-4">
            <Link to="/addtocart" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}