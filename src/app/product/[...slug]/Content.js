
import React from 'react'
import ImageSelector from "./ImagesSelector"
import VariantSelector from "./VariantSelector"
import CartSelector from "./CartSelector"






const Image = [
  { imgUrl: 'https://img5.hkrtcdn.com/26733/prd_2673294-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Magical-Mango_o.jpg' },
  { imgUrl: 'https://img5.hkrtcdn.com/26733/prd_2673294-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Magical-Mango_o.jpg' },
  { imgUrl: 'https://img5.hkrtcdn.com/26733/prd_2673294-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Magical-Mango_o.jpg' },
  { imgUrl: 'https://img5.hkrtcdn.com/26733/prd_2673294-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Magical-Mango_o.jpg' },
  { imgUrl: 'https://img5.hkrtcdn.com/26733/prd_2673294-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Magical-Mango_o.jpg' },
  { imgUrl: 'https://img5.hkrtcdn.com/26733/prd_2673294-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Magical-Mango_o.jpg' },
  { imgUrl: 'https://img5.hkrtcdn.com/26733/prd_2673294-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Magical-Mango_o.jpg' },
]
function ProductNewComponent(props) {

    const {product, variant, subVariant, MRP , SP, id} = props;
    const allImages = [{imgUrl:product.featureImage, altText:product.featureImage}, ...product.images]
    console.log(allImages)
    const productDisplayName = `${product.productName}, ${variant}, ${subVariant}`
    
  return (<>
    <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>
     <ImageSelector allImages={allImages}/>
      
      <div className='md:col-span-6'>
        <div className=''>
          <div className='flex flex-col'>
            <div className='text-[#00b5b7] font-semibold text-sm'>Whey Proteins</div>
            <div className='text-[#1c1c28] font-semibold text-2xl leading-normal'>{productDisplayName}</div>
            <div className='flex items-center gap-2 my-1 text-[#77777e] font-medium -mt-1 mb-3'>
              By <span className='text-[#00b5b7] font-semibold'>MuscleBlaze</span>
              <img className='pt-1' src="https://static1.hkrtcdn.com/hknext/static/media/pdp/arrow-right-blue.svg" />
            </div>
            <div className='flex items-center mb-3 gap-2'>
              <div className='flex'>
                <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/blue_filled_star.svg" />
                <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/blue_filled_star.svg" />
                <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/blue_filled_star.svg" />
                <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/blue_filled_star.svg" />
                <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/blue_filled_star.svg" />
              </div>
              <div className='flex gap-1'>
                <div className='text-[#000] text-base font-semibold'>4.4</div>
                <div className='text-[#494952] text-sm font-medium'>( 3,090 Reviews )</div>
              </div>
            </div>
            <div className=''>
              <div className='text-[#77777e] text-sm font-medium'>MRP : <span className='text-[#77777e] font-medium line-through text-sm'>₹{MRP}</span></div>
            </div>
            <div className='flex gap-2'>
              <div className='text-[#1c1c28] text-base font-semibold'>Price: <span className='text-xl'>₹{SP}</span></div>
              <div className='text-[#00a856] text-sm font-semibold'>25% Off</div>
            </div>
            <span className='text-[#00a856] font-medium text-xs'>Inclusive of all taxes</span>
            <div className='my-3'>
              <span className='text-[#1c1c28] text-xs font-medium'>Get it by 8 Aug</span>
              <span className='text-[#1c1c28] text-xs font-semibold'> + Free Shipping</span>
            </div>
          </div>
          <CartSelector id={id} variant={variant} subVariant={subVariant} name={product.productName} SP={SP} imgUrl={product.featureImage} MRP={MRP}/>


          {/* Weight And Flavour in Full screen */}
          <VariantSelector variants ={product.variants} id={id} variant={variant} subVariant={subVariant}/>
         


          {/* Special Offers */}
          <div className='mt-8'>
            <div className='text-[#1c1c28] text-lg font-semibold mb-1'>Special Offers</div>
            <p className='text-[#77777e] text-xs font-medium md:block hidden'>With these offers and coupons</p>
            <div className='flex flex-col gap-3 mt-4 mb-5'>
              <div className='flex items-center p-4 border rounded-lg border-[#dbdee9] gap-4'>
                <img src="https://img5.hkrtcdn.com/payment_img/bank/icici.jpg" />
                <div className='text-[#000] text-sm font-medium'>Flat Rs 300/- cashback on a minimum transaction value of Rs 3,000/-  <label className="text-[#00b5b7]">T&C.</label></div>
              </div>
            </div>
            <div className='flex flex-col gap-3 mt-4 mb-5'>
              <div className='flex items-center p-4 border rounded-lg border-[#dbdee9] gap-4'>
                <img src="https://img5.hkrtcdn.com/payment_img/bank/icici.jpg" />
                <div className='text-[#000] text-sm font-medium'>Flat Rs 500/- cashback on a minimum transaction value of Rs 5,000/-  <label className="text-[#00b5b7]">T&C.</label></div>
              </div>
            </div>
          </div>

          {/* Delivery and Services */}
          <div className='border border-[#dbdee9] py-4 pl-4 mt-8 rounded-md'>
            <div className='text-[#1c1c28] text-lg font-semibold mb-4'>Delivery & Services</div>
            <div className="flex items-center w-max border border-[#dbdee9]  rounded-lg p-4 h-12">
              <input className=" border-none text-gray-700 focus:outline-none" type="text" placeholder="Enter Pincode" aria-label="Pincode" />
              <button className="border-transparent border-4 text-[#0165b9] font-semibold text-sm" type="button"> Check </button>
            </div>
            <div className='flex flex-col gap-5 mb-5 mt-4'>
              <div className='flex items-center gap-4'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.2578 4.1803C15.9918 4.58267 16.6551 5.59662 17.4867 6.99219H14.2578V4.1803ZM4.12415 7.10938C4.46365 7.10938 4.71008 7.27325 4.71008 7.65625C4.71008 7.97928 4.4487 8.24127 4.12582 8.24219H0.585938C0.262299 8.24219 0 8.50464 0 8.82812C0 9.15176 0.262299 9.41406 0.585938 9.41406H5.85938C6.18607 9.41406 6.4476 9.67621 6.4476 10C6.4476 10.3236 6.1853 10.5859 5.86166 10.5859H0.585938C0.262299 10.5859 0 10.8482 0 11.1719C0 11.4955 0.262299 11.7578 0.585938 11.7578H1.875V13.5156C1.875 13.8393 2.1373 14.1016 2.46094 14.1016H3.63876C3.84872 15.1358 4.76257 15.8984 5.83984 15.8984C6.91711 15.8984 7.83096 15.1358 8.04092 14.1016H13.9903C14.2003 15.1358 15.1141 15.8984 16.1914 15.8984C17.2687 15.8984 18.1825 15.1358 18.3925 14.1016H19.4141C19.7377 14.1016 20 13.8393 20 13.5156V10C20 8.28079 18.1866 8.16666 18.185 8.16406H13.6719C13.3482 8.16406 13.0859 7.90176 13.0859 7.57812V4.0625H2.46094C2.1373 4.0625 1.875 4.3248 1.875 4.64844V5.9375H1.17188C0.848236 5.9375 0.585938 6.1998 0.585938 6.52344C0.585938 6.84708 0.848236 7.10938 1.17188 7.10938H4.12415ZM16.951 12.8928C17.3705 13.3122 17.3705 13.9926 16.951 14.4121C16.2762 15.0868 15.1172 14.6068 15.1172 13.6523C15.1172 12.6981 16.2762 12.218 16.951 12.8928ZM6.59943 12.8928C7.01889 13.3122 7.01889 13.9926 6.59943 14.4121C5.92468 15.0868 4.76562 14.6068 4.76562 13.6523C4.76562 12.6981 5.92468 12.218 6.59943 12.8928Z" fill="#AEB1BD"></path></svg>
                <div className='text-[#1c1c28] text-sm font-normal'>Cash On Delivery Available</div>
              </div>
              <div className='flex items-center gap-4'>
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none"><path d="M19.375 4.5C19.3755 4.58226 19.3597 4.6638 19.3286 4.73995C19.2975 4.81609 19.2517 4.88535 19.1938 4.94375L15.4438 8.69375C15.3854 8.75168 15.3161 8.79751 15.24 8.82861C15.1638 8.85971 15.0823 8.87548 15 8.875C14.9188 8.876 14.8381 8.86114 14.7625 8.83125C14.6474 8.78396 14.549 8.70338 14.48 8.59982C14.4109 8.49627 14.3744 8.37446 14.375 8.25V6.375H8.75001C8.58425 6.375 8.42528 6.30916 8.30807 6.19195C8.19086 6.07474 8.12501 5.91576 8.12501 5.75V3.25C8.12501 3.08424 8.19086 2.92527 8.30807 2.80806C8.42528 2.69085 8.58425 2.625 8.75001 2.625H14.375V0.750004C14.3755 0.626396 14.4127 0.505718 14.4818 0.403228C14.5509 0.300738 14.6488 0.22104 14.7632 0.174212C14.8776 0.127383 15.0033 0.115527 15.1245 0.140143C15.2456 0.164759 15.3567 0.224741 15.4438 0.312504L19.1938 4.0625C19.3092 4.17892 19.3743 4.33604 19.375 4.5ZM11.25 7.625H5.62501V5.75C5.62439 5.62661 5.58727 5.50617 5.51831 5.40384C5.44935 5.30152 5.35165 5.22189 5.23751 5.175C5.12369 5.12714 4.99825 5.11406 4.877 5.13742C4.75576 5.16078 4.64415 5.21953 4.55626 5.30625L0.80626 9.05625C0.748335 9.11465 0.702506 9.18391 0.671403 9.26006C0.640301 9.33621 0.624535 9.41775 0.62501 9.5C0.624535 9.58226 0.640301 9.6638 0.671403 9.73995C0.702506 9.81609 0.748335 9.88535 0.80626 9.94375L4.55626 13.6938C4.61466 13.7517 4.68392 13.7975 4.76007 13.8286C4.83622 13.8597 4.91776 13.8755 5.00001 13.875C5.082 13.8771 5.16334 13.86 5.23751 13.825C5.35165 13.7781 5.44935 13.6985 5.51831 13.5962C5.58727 13.4938 5.62439 13.3734 5.62501 13.25V11.375H11.25C11.4158 11.375 11.5747 11.3092 11.692 11.1919C11.8092 11.0747 11.875 10.9158 11.875 10.75V8.25C11.875 8.08424 11.8092 7.92527 11.692 7.80806C11.5747 7.69085 11.4158 7.625 11.25 7.625Z" fill="#AEB1BD"></path></svg>
                <div className='text-[#1c1c28] text-sm font-normal'>14 days Return policy</div>
              </div>
            </div>
            <div className='flex -ml-4 -mb-4'>
              <div className='flex flex-col justify-center items-center h-20  w-2/4 border-r border-r-[#dbdee9] border-t border-t-[#dbdee9]'>
                <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/fassai_logo.svg" />
                <div className='text-[#000] mt-3 text-sm font-medium'>Lic. No. 10015064000576</div>
              </div>
              <div className='flex flex-col justify-center items-center h-20  w-2/4 border-l border-l-[#dbdee9] border-t border-t-[#dbdee9]'>
                <div className='text-[#000] mt-3 text-sm font-medium'>Country of Origin</div>
                <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/fassai_logo.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>)
}

export default ProductNewComponent