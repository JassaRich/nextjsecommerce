'use client';

import { useCart } from '../components/CartContext';

export default function Checkout() {
  const { cartItems } = useCart();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <div className="mt-4">
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map(item => (
              <div key={item.id} className="mb-4">
                <p className="text-lg">{item.name} - ${item.price}</p>
              </div>
            ))}
            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
              Complete Purchase
            </button>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
