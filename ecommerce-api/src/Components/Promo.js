import React, { useEffect, useState } from 'react';

const FeaturedPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=2')
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 p-4">
            <div className="relative">
              <img src={product.image} alt={product.title} className="w-full h-auto mb-4" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-lg font-semibold text-white mb-2">{product.title}</h2>
                <p className="text-gray-200 mb-4">${product.price}</p>
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPage;
