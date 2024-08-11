'use client';

import { useParams, useRouter } from 'next/navigation';
import { products } from '../../data/products';
import { useCart } from '@/app/components/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="mt-4">{product.description}</p>
      <p className="mt-4 text-xl">${product.price}</p>
      <button 
        onClick={handleAddToCart} 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
