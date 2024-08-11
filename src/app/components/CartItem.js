export default function CartItem({ item, onRemove }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-4">
            {/* Placeholder for product image if needed */}
            <img src="https://via.placeholder.com/64" alt={item.name} className="w-16 h-16 object-cover rounded" />
          </div>
          <div>
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-gray-600">${item.price}</p>
          </div>
        </div>
        <button 
          onClick={() => onRemove(item.id)} 
          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    );
  }
  