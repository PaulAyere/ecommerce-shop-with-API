import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setFilteredProducts(json);
      })
      .catch(error => console.log(error));
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackButtonClick = () => {
    setSelectedProduct(null);
  };

  const handleCategoryFilter = (category) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
    setSelectedCategory(category);
  };

  if (selectedProduct) {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Product Details</h1>
        <div className="border rounded-lg p-4">
          <img src={selectedProduct.image} alt={selectedProduct.title} className="mb-2" />
          <h2 className="text-lg font-bold">{selectedProduct.title}</h2>
          <p className="text-gray-600">{selectedProduct.description}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-700">${selectedProduct.price}</span>
            <span className="text-sm text-gray-500">{selectedProduct.category}</span>
          </div>
          <button
            className="mt-4 bg-gray-800 text-white hover:bg-orange-300 hover:text-black py-2 px-4 rounded-lg transition-colors duration-300"
            onClick={handleBackButtonClick}
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="flex items-center mb-4">
        <span className="text-lg font-bold">Filter by Category:</span>
        <select
          className="ml-2 px-2 py-1 border border-gray-400 rounded-lg focus:outline-none"
          value={selectedCategory}
          onChange={(e) => handleCategoryFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Beauty">Beauty</option>
          {/* Add more category options as needed */}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded-lg p-4">
            <img src={product.image} alt={product.title} className="mb-10" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-700 font-bold">${product.price}</span>
              <span className="text-sm text-gray-500 font-bold">{product.category}</span>
            </div>
            <button
              className="mt-8 bg-gray-800 text-white hover:bg-orange-300 hover:text-black py-2 px-4 rounded-lg transition-colors duration-300"
              onClick={() => handleProductClick(product)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
