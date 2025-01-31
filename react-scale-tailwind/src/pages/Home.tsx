import React from 'react'
import MainLayout from '@/layouts/MainLayout'
import { Link } from 'react-router'

const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '/products/1',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '/products/2',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Aspen white',
      },
      {
        id: 3,
        name: 'Basic Tee',
        href: '/products/3',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Charcoal',
      },
      {
        id: 4,
        name: 'Basic Tee',
        href: '/products/4',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Iso Dot',
      }
    // More products...
  ]
  
  export default function Home() {
    return (
        <div>
        {/* <MainLayout> */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Ours Product</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        {/* </MainLayout> */}
        </div>
    )
  }
  
