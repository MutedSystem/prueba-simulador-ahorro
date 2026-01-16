import { Product } from '@/src/entities/Product';
import React from 'react'

type ProductCardProps = {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <li className="bg-white rounded-lg shadow-md p-4">{product.nombre}</li>
  )
}

export default ProductCard