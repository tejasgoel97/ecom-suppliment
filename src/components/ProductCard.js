import React from 'react'

function ProductCard() {
    return (
        <div>
            <h4 className="text-4xl font-medium dark:text-white mb-5">Price Slash Alert</h4>
            <div className="relative w-full max-w-sm shadow cursor-pointer rounded-t-lg hover:shadow-2xl">
                <div className='bg-gray-200 rounded-t-lg'>
                    <div className='absolute right-0 p-5'>
                        <img src="https://static1.hkrtcdn.com/hknext/static/media/common/variant/wishlist/heart.svg" />
                    </div>
                    <div className='flex justify-center p-12'>
                        <img className='' src="https://img8.hkrtcdn.com/28892/pck_2889177_c_s.jpg" />
                    </div>
                </div>
                <div className="px-5 py-5 border border-gray-200 rounded-b-lg ">
                    <div className='flex items-center justify-between mb-5'>
                        <div className='flex gap-4'>
                            <div className='bg-teal-500 py-1 px-3 rounded text-white flex'>
                                4.3 <svg aria-hidden="true" className="w-5 h-4 mt-1 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>
                            <div className='align-center'>14 Reviews</div>
                        </div>
                        <div className='border border-green-500 p-1'><div className='h-3 w-3 rounded-full bg-green-500 text-center'></div></div>
                    </div>
                    <h5 className="text-xl font-semibold leading-loose text-gray-900 dark:text-white mb-3">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                    <div className='flex gap-3 mb-5'>
                        <div>₹5,625</div>
                        <div className='line-through align-middle text-#aeb1bd'>₹5,625</div>
                        <div className='text-green-500'>35% Off</div>
                    </div>
                    <div className='mb-5'>
                        <button className='flex items-center gap-2 border rounded-lg border-gray-100 bg-gray-100 p-2 px-5 w-full'>
                            <img src="https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg" />
                            <span> ₹5,625 </span>
                            <span> for Premium Member</span>
                        </button>
                    </div>
                    <div className=''>
                        <button className='flex items-center gap-3 justify-center border rounded-lg border-red-200 bg-red-100 p-4 w-full hover:bg-red-500 hover:text-white'>
                            <img src="https://static1.hkrtcdn.com/hknext/static/media/common/cartNew.svg" />Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard