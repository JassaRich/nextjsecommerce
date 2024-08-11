export default function CheckoutForm() {
    return (
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full border rounded p-2" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input type="text" className="w-full border rounded p-2" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Payment Details</label>
          <input type="text" className="w-full border rounded p-2" />
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Place Order</button>
      </form>
    );
  }
  