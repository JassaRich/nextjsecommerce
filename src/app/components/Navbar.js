import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-white text-xl font-bold">
          Store
        </Link>
        <div>
          <Link href="/cart" className="text-white">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
