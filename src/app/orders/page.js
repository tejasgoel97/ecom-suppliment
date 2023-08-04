import React from 'react';

const ProductDetailsPage = () => {
  const product = {
    name: 'Sample Product',
    price: 999,
    description: 'Add product description here...',
    image: 'path_to_image.jpg',
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-3xl bg-white p-6 rounded-md shadow-md flex">
        <div className="w-1/3 pr-6">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-md" />
        </div>
        <div className="w-2/3">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <div className="mt-2 text-gray-600">Price: {product.price} PKR</div>
          <p className="mt-4">{product.description}</p>
          <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
