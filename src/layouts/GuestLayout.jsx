import { RiSecurePaymentFill } from "react-icons/ri"; 
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaSearch, FaShoppingCart } from 'react-icons/fa';

const GuestLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-white border-b py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-green-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-500">
              <FaInstagram />
            </a>
          </div>
          {/* Email and Phone Number */}
          <div className="flex space-x-6">
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@sedap.com</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>92 666 888 0000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            <span className="text-green-600">Sedap</span>.
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-500 font-medium"> <strong>Home</strong></Link>
            <Link to="/about" className="text-gray-700 hover:text-green-500 font-medium"><strong>About </strong></Link>
            <Link to="/shop" className="text-gray-700 hover:text-green-500 font-medium"><strong>Shop</strong></Link>
            <Link to="/check-membership" className="text-gray-700 hover:text-green-500 font-medium"><strong>Membership</strong></Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-500 font-medium"><strong>Contact</strong></Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button className="text-gray-600 hover:text-green-500">
              <FaSearch size={18} />
            </button>

            {/* Cart Button */}
            <button className="text-gray-600 hover:text-green-500 relative">
              <FaShoppingCart size={18} />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">0</span>
            </button>

            {/* Login/Register Button */}
            <Link to="/login" className="flex items-center text-sm font-medium text-gray-700 hover:text-green-500">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Login / Register
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-600 mb-4">
                We're dedicated to providing you with the highest quality organic products for a healthier lifestyle.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
                  <FaTwitter />
                </a>
                <a href="#" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
                  <FaFacebookF />
                </a>
                <a href="#" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 hover:text-green-500">About Us</Link></li>
                <li><Link to="/shop" className="text-gray-600 hover:text-green-500">Shop Products</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-green-500">Blog & Articles</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-green-500">Contact Us</Link></li>
                <li><Link to="/faq" className="text-gray-600 hover:text-green-500">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-gray-600 hover:text-green-500">Help & Support</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-green-500">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="text-gray-600 hover:text-green-500">Privacy Policy</Link></li>
                <li><Link to="/shipping" className="text-gray-600 hover:text-green-500">Shipping & Delivery</Link></li>
                <li><Link to="/refund" className="text-gray-600 hover:text-green-500">Refund Policy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">123 Fresh Street, Organic City, OG 12345</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">info@sedap.com</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600">92 666 888 0000</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600">© 2025 Sedap. All rights reserved.</p>
              <div className="mt-4 md:mt-0">
            <RiSecurePaymentFill />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GuestLayout;
