import React from 'react';

const brandObj = [
  {
    "name": "Muscle Blaze",
    "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-ecom-suppliment.appspot.com/o/images%2Ftejaswhey.jpg?alt=media&token=2325aba9-af99-4a92-92c8-3e666ff306dc"
  },
  {
    "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-ecom-suppliment.appspot.com/o/images%2Ftejaswhey2.jpg?alt=media&token=9a43dfc6-caad-4a6c-a690-9906a3959048",
    "name": "ONN"
  },
  {
    "name": "ATOM",
    "imageUrl": "https://firebasestorage.googleapis.com/v0/b/test-ecom-suppliment.appspot.com/o/images%2Ftejasatom.jpeg?alt=media&token=7d89c43d-6cd0-4cc1-a0cf-6f77154a72ab"
  }
];

const BrandCard = ({ name, imageUrl }) => {
    return (
      <div className="bg-white border rounded-lg shadow-md overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-36 object-cover" />
        {/* <div className="">
          <h3 className="font-semibold">{name}</h3>
        </div> */}
      </div>
    );
  };

  const AllBrands = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {brandObj.map((brand, index) => (
          <BrandCard key={index} {...brand} />
        ))}
      </div>
    );
  };

export default AllBrands;
