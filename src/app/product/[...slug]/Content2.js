import React from 'react';
import ProductHeading from '../ProductHeading';
import Rating from '../Rating';
import Price from '../Price';
import NumberButton from '../NumberButton';
import BuyButton from '../BuyButton';
import CartButton from '../CartButton';
import WeighHeading from '../WeightHeading';
import Flavour from '../Flavour';
import ProductBenefit from '../ProductBenefit';
import SpecialOffers from '../SpecialOffers';
import DeliveryServices from '../DeliveryServices';

const Image = [
  { img: 'https://img4.hkrtcdn.com/11959/prd_1195813-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg' },
  { img: 'https://img4.hkrtcdn.com/11959/prd_1195813-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg' },
  { img: 'https://img4.hkrtcdn.com/11959/prd_1195813-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg' },
  { img: 'https://img4.hkrtcdn.com/11959/prd_1195813-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg' },
  { img: 'https://img4.hkrtcdn.com/11959/prd_1195813-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg' },
  { img: 'https://img4.hkrtcdn.com/11959/prd_1195813-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg' },
  { img: 'https://img4.hkrtcdn.com/11959/prd_1195813-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg' },
];

function Content() {
  return (
    <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
      <div className="col-span-6 md:col-span-1">
        <div className="grid grid-cols-7 md:grid-cols-1 gap-2 content-center">
          {Image.map((i, index) => {
            return (
              <div key={index}>
                <img className="h-20 md:h-auto" src={i.img} alt={`Product ${index + 1}`} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-6 md:col-span-5">
        <div className="">
          <img className="w-full" src="https://img4.hkrtcdn.com/11959/prd_1195813-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Rich-Milk-Chocolate_o.jpg" alt="Product Main" />
        </div>
        {/* <ProductBenefit /> */}
      </div>
      <div className="col-span-6 md:col-span-5 pl-8">
        <ProductHeading productHeading="MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate" />
        <Rating reviews="( 3,006 Reviews )" numberRating="4.4" />
        <Price price="₹4,099" mrp="₹5,499" discount="25% off" />
        <div className="flex flex-col md:flex-row gap-3 mt-5">
          <div className="flex-1 md:flex-initial">
            <NumberButton />
          </div>
          <div className="flex-1 md:flex-initial">
            <CartButton className="bg-green-400" cart="Add To Cart" />
          </div>
          <div className="flex-1 md:flex-initial">
            <BuyButton buy="Quick Buy" />
          </div>
        </div>
        <WeighHeading />
        <Flavour />
        <SpecialOffers />
        <DeliveryServices />
      </div>
    </div>
  );
}

export default Content;