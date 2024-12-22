import Head from "next/head";
export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="text-2xl font-bold text-gray-800">
        <a href="#" className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Furniro Logo" className="w-8 h-8" />
          <span>Furniro</span>
        </a>
      </div>
      <nav className="hidden md:flex space-x-8 text-gray-700">
        <a href="/" className="hover:text-yellow-600">Home</a>
        <a href="/shop" className="hover:text-yellow-600">Shop</a>
        <a href="/blog" className="hover:text-yellow-600">Blog</a>
        <a href="/contact" className="hover:text-yellow-600">Contact</a>
      </nav>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-700 hover:text-yellow-600">
          <i className="fas fa-user"></i>
        </a>
        <a href="#" className="text-gray-700 hover:text-yellow-600">
          <i className="fas fa-search"></i>
        </a>
        <a href="#" className="text-gray-700 hover:text-yellow-600">
          <i className="fas fa-heart"></i>
        </a>
        <a href="#" className="text-gray-700 hover:text-yellow-600">
          <i className="fas fa-shopping-cart"></i>
        </a>
      </div>
    </header>


  );
}