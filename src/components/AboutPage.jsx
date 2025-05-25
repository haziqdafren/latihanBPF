import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function AboutPage() {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 flex justify-between items-center">
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
          <div className="flex space-x-6">
            <div className="text-gray-600">
              <span>Email: </span>
              <a href="mailto:info@organik.com" className="text-green-500">info@organik.com</a>
            </div>
            <div className="text-gray-600">
              <span>Phone: </span>
              <a href="tel:926668880000" className="text-green-500">92 666 888 0000</a>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="container mx-auto py-12">
        {/* About Us Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-600 mb-4">Get to Know Us</h1>
          <p className="text-xl text-gray-600">We’re Selling Quality Organic Products</p>
        </div>

        {/* About Us Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-green-600 mb-4">About Us</h2>
            <p className="text-gray-700 text-lg mb-4">
              We're committed to bringing you the freshest organic products straight from local farmers. Our mission is to support sustainable farming practices while providing you with top-quality food.
            </p>
            <p className="text-gray-600 text-md">
              There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour or words even slightly believable.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-green-600 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg mb-4">
              We aim to make organic products accessible and affordable for everyone, ensuring that each product is of the highest quality while promoting sustainable practices.
            </p>
            <div className="relative">
  
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-green-600 mb-6">Our Core Values</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-4">
              <strong className="font-semibold">Sustainability:</strong> We are committed to sustainable farming practices and eco-friendly packaging.
            </li>
            <li className="mb-4">
              <strong className="font-semibold">Freshness:</strong> Our products are sourced locally to ensure maximum freshness and quality.
            </li>
            <li className="mb-4">
              <strong className="font-semibold">Transparency:</strong> We provide complete transparency about the sourcing and production of our products.
            </li>
          </ul>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Join Our Organic Revolution</h2>
          <p className="text-lg text-gray-600 mb-6">
            Become a part of our growing community of health-conscious individuals and enjoy organic, fresh, and locally sourced products delivered right to your door.
          </p>
          <button className="bg-green-500 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-green-600 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
