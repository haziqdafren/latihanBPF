import { useState } from "react";
import products from "../data/products.json"; // Importing products data

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Sorting logic (sort by price or popularity)
  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    if (sortValue === "price") {
      setFilteredProducts((prevProducts) =>
        [...prevProducts].sort((a, b) => a.price - b.price)
      );
    } else if (sortValue === "popular") {
      // Sorting by popularity, assuming popularity is tracked in 'rating'
      setFilteredProducts((prevProducts) =>
        [...prevProducts].sort((a, b) => b.rating - a.rating)
      );
    }
  };

  return (
    <div className="bg-gray-100 py-8 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar for filters */}
        <div className="col-span-1 md:col-span-1 bg-white p-6 rounded-lg shadow-md">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search products"
              className="w-full p-3 border rounded-md"
            />
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Price</h3>
            <input
              type="range"
              min="0"
              max="150"
              step="1"
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>$30</span>
              <span>$150</span>
            </div>
            <button className="w-full bg-green-500 text-white py-2 mt-4 rounded-full">
              Filter
            </button>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-green-600 hover:text-green-800">
                  Vegetables
                </a>
              </li>
              <li>
                <a href="#" className="text-green-600 hover:text-green-800">
                  Fresh Fruits
                </a>
              </li>
              <li>
                <a href="#" className="text-green-600 hover:text-green-800">
                  Dairy Products
                </a>
              </li>
              <li>
                <a href="#" className="text-green-600 hover:text-green-800">
                  Tomatoes
                </a>
              </li>
              <li>
                <a href="#" className="text-green-600 hover:text-green-800">
                  Oranges
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Product Grid */}
        <div className="col-span-1 md:col-span-3">
          {/* Sort by */}
          <div className="flex justify-between mb-6">
            <p className="text-gray-700">
              Showing {filteredProducts.length} results
            </p>
            <select
              className="border px-4 py-2 rounded-md"
              onChange={handleSortChange}
            >
              <option value="popular">Sort by Popularity</option>
              <option value="price">Sort by Price</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative">
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  {/* Sale Badge */}
                  {product.sale && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Sale
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                  <p className="text-green-600 font-medium">${product.price}</p>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  {/* Ratings */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, index) => (
                      <i
                        key={index}
                        className={`fa fa-star ${
                          index < product.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                      Add to Cart
                    </button>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8">
            <button className="bg-green-500 text-white px-6 py-2 rounded-full">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
