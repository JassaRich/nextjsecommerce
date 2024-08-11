import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <Link href={`/products/${product.id}`} className="text-blue-500 mt-2 inline-block">
        View Details
      </Link>
    </div>
  );
}
