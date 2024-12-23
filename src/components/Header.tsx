'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart, faSearch, } from "@fortawesome/free-solid-svg-icons";
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
        <a href="#" className="text-black-700 hover:text-yellow-600">
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="#" className="text-black-700 hover:text-yellow-600">
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <a href="#" className="text-black-700 hover:text-yellow-600">
          <FontAwesomeIcon icon={faHeart} />
        </a>
        <a href="/cart" className="text-black-700 hover:text-yellow-600">
          <FontAwesomeIcon icon={faShoppingCart} />
        </a>
      </div>
    </header>


  );
}