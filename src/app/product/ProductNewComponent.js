import React from 'react'
import ProductBenefit from './ProductBenefit'
import ProductHeading from './ProductHeading'
import Rating from './Rating'
import Price from './Price'
import NumberButton from './NumberButton'
import CartButton from './CartButton'
import BuyButton from './BuyButton'
import WeighHeading from './WeighHeading'
import Flavour from './Flavour'
import SpecialOffers from './SpecialOffers'
import DeliveryServices from './DeliveryServices'
const Image = [
  { img: 'https://th.bing.com/th/id/OIP.tIq1DWDQehhIuuyXEbm8rQHaHa?pid=ImgDet&rs=1' },
  { img: 'https://th.bing.com/th/id/OIP.tIq1DWDQehhIuuyXEbm8rQHaHa?pid=ImgDet&rs=1' },
  { img: 'https://th.bing.com/th/id/OIP.tIq1DWDQehhIuuyXEbm8rQHaHa?pid=ImgDet&rs=1' },
  { img: 'https://th.bing.com/th/id/OIP.tIq1DWDQehhIuuyXEbm8rQHaHa?pid=ImgDet&rs=1' },
  { img: 'https://th.bing.com/th/id/OIP.tIq1DWDQehhIuuyXEbm8rQHaHa?pid=ImgDet&rs=1' },

]
function ProductNewComponent() {
  return (<>
    <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>
      <div className="md:col-span-1">
        <div className='grid grid-cols-6 md:grid-cols-1 gap-3'>
          {
            Image.map((i) => {
              return (
                <>
                  <div className=''><img className='h-full' src={i.img} /></div>
                </>
              )
            })
          }
        </div>
      </div>
      <div className='md:col-span-5'>
        <div className=' bg-red-400'>
          <img className='md:h-96' src="https://i5.walmartimages.com/asr/243c4a01-4b87-4800-a124-686f0e982d10_3.35bd4c6a417dd1bfafb73c291c94b673.png" />
        </div>
        <ProductBenefit />
      </div>

      <div className='md:col-span-5'>
        <ProductHeading productHeading="MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate" productWheyHeading="Pre-Workout" />
        <Rating reviews="( 3,006 Reviews )" numberRating="4.4" />
        <Price price="₹4,099" mrp="₹5,499" discount="25% off" />
        <div className="grid-cols-3 gap-3 mt-5 hidden md:grid">
          <div><NumberButton /></div>
          <div><CartButton cart="Add To Cart" cartImage="https://static1.hkrtcdn.com/hknext/static/media/common/cartNew.svg" /></div>
          <div><CartButton cart="Quick Buy" /></div>

          {/* <div><BuyButton buy="Quick Buy" /></div> */}
        </div>
        <WeighHeading />
        <Flavour />
        <SpecialOffers />
        <DeliveryServices />

      </div>
    </div>

  </>)
}

export default ProductNewComponent