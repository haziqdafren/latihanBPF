import { BiStore } from "react-icons/bi"; 
import { TbFreeRights } from "react-icons/tb"; 
import { FaShippingFast } from "react-icons/fa"; 
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';

const HomePage = () => {
  const products = [
    {
      id: 1,
      name: "Organic Bananas",
      price: 4.99,
      image: "img/product-2-1.jpg",
      category: "Fruits",
      sale: true
    },
    {
      id: 2,
      name: "Olive Oil",
      price: 12.50,
      image: "img/product-2-2.jpg",
      category: "Pantry"
    },
    {
      id: 3,
      name: "Fresh Eggs",
      price: 6.99,
      image: "img/product-2-3.jpg",
      category: "Dairy"
    },
    {
      id: 4,
      name: "Organic Carrots",
      price: 3.49,
      image: "img/product-2-4.jpg",
      category: "Vegetables"
    },
    {
      id: 5,
      name: "Grass-Fed Beef",
      price: 18.99,
      image: "img/product-2-5.jpg",
      category: "Meat"
    },
    {
      id: 6,
      name: "Organic Spinach",
      price: 4.99,
      image: "img/product-2-6.jpg",
      category: "Vegetables"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
     
      text: "I've been ordering from Organik for over a year now, and the quality of produce is consistently excellent. It's great to know where my food is coming from!"
    },
    {
      id: 2,
      name: "Michael Chen",
  
      text: "The variety of organic products available is impressive. My family has noticed a real difference in taste compared to conventional supermarket options."
    },
    {
      id: 3,
      name: "Emma Davis",
  
      text: "Fast delivery and always fresh! I love the seasonal produce boxes - they inspire me to try new recipes and eat healthier."
    },
    {
      id: 4,
      name: "James Wilson",
   
      text: "The customer service is exceptional. When I had an issue with an order, they resolved it immediately and even threw in some extra items as an apology."
    },
    {
      id: 5,
      name: "Olivia Martinez",
    
      text: "I appreciate their commitment to sustainable packaging. It's wonderful to support a business that cares about both quality food and the environment."
    }
  ];

  const [activeCategory, setActiveCategory] = React.useState('All');
  const categories = ['All', 'Dairy', 'Pantry', 'Meat', 'Fruits', 'Vegetables'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <>
    {/* Hero Section */}
{/* Hero Section */}
<div className="relative h-96 md:h-[600px]">
  <img 
    src="/img/main-slider-1-2.jpg" 
    alt="Hero background"
    className="w-full h-full object-cover absolute inset-0" 
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="container mx-auto px-4 text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Organic Food Market</h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Fresh, sustainable, and locally sourced produce delivered straight to your door</p>
      <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors">
        Order Now
      </button>
    </div>
  </div>
</div>


      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
        
                <FaShippingFast/>
              </div>
              <h3 className="text-xl font-bold mb-2">Return Policy</h3>
              <p className="text-gray-600">Money back guarantee</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
              <TbFreeRights />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On all orders over $25.00</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <BiStore />
              </div>
              <h3 className="text-xl font-bold mb-2">Store Locator</h3>
              <p className="text-gray-600">Find your nearest store</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Products Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-2">
            <FaLeaf className="text-green-500 mr-2" />
            <span className="text-green-600 font-medium">Recently Added</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">New Products</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md ${
                  activeCategory === category 
                    ? 'bg-green-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md group">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.sale && (
                    <div className="absolute top-4 left-4 bg-gray-800 text-white text-sm font-medium px-2 py-1">
                      Sale
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="bg-white text-gray-800 hover:bg-green-500 hover:text-white transition-colors px-4 py-2 rounded-md font-medium mx-2">
                      Quick View
                    </button>
                    <button className="bg-white text-gray-800 hover:bg-green-500 hover:text-white transition-colors px-4 py-2 rounded-md font-medium mx-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-green-600 font-medium">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-2">
            <FaLeaf className="text-green-500 mr-2" />
            <span className="text-green-600 font-medium">Get to Know</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">We're Selling Quality Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-4">

            </div>
            
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 mb-4">
                There are many variations of passages of available but the majority have suffered alteration in some form, by injected humour or words even slightly believable.
              </p>
              <p className="text-gray-600 mb-6">
                There are many variations of passages of available but the majority have suffered alteration in some form, by injected humour or words even slightly believable.
              </p>
              <Link to="/about" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium inline-block self-start transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-2">
            <FaLeaf className="text-green-500 mr-2" />
            <span className="text-green-600 font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map(testimonial => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
        
                  <h3 className="font-medium">{testimonial.name}</h3>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on new products, special offers, and seasonal recipes.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;