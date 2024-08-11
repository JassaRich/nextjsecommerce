'use client';

import { useCart } from '../components/CartContext';
import CartItem from '../components/CartItem';
import { useRouter } from 'next/navigation';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const router = useRouter();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <CartItem key={item.id} item={item} onRemove={handleRemove} />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="mt-6 text-right">
          <button 
            onClick={handleCheckout} 
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
