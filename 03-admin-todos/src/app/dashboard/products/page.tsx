import { ProductCard, products } from '@/productos'
import React from 'react'

export default function Product() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
       {
        products.map((product) => (
          <ProductCard key={ product.id } { ...product } />
        ))
      }

    </div>
  )
}
