import frameworkData from "./product.json";

export default function FrameworkList() {
    return(
    <div className="bg-green-100 p-8 max-w-7xl mx-auto">
      {frameworkData.map((item) => (
        <div
          key={item.id}
          className="bg-white border p-4 mb-4 rounded-lg shadow-md flex flex-col md:flex-row md:space-x-4"
        >
          <div className="md:w-3/4">
            <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-gray-600">Category: {item.category}</p>
            <div className="flex justify-between mt-2">
              <div>
                <p className="text-gray-600">Rating: {item.rating}/5</p>
                <p className="text-gray-600">Stock: {item.stock} units</p>
                <p className="text-gray-600">Tags: {item.tags.join(', ')}</p>
                <p className="text-gray-600">Brand: {item.brand}</p>
                <p className="text-gray-600">
                  Dimensions: {item.dimensions.width}x{item.dimensions.height}x{item.dimensions.depth} mm
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-red-600">Price: ${item.price.toFixed(2)}</p>
                <p className=" text-xl text-green-600">Discount: {item.discountPercentage}%</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}