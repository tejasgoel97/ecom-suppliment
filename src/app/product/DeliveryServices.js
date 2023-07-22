import React from 'react'



function DeliveryServices() {
    return (
        <>
            <div className="mt-10 border border-gray-200 rounded-lg">
                <div className="p-8">
                    <div className="font-bold text-xl mb-2">Delivery & Services</div>
                    <div className=' border border-gray-200 rounded-lg w-96'>
                        <div className='flex justify-between p-5'>
                            <input className="" id="grid-first-name" type="text" placeholder="Enter Pincode" style={{ outline: 'none' }} />
                            <div>Check</div>
                        </div>
                    </div>
                    <div className='my-5'>
                        <div className='flex my-5 gap-5'>
                            <img src="https://static1.hkrtcdn.com/hknext/static/media/homepage/Goal.svg" />
                            <div>Use My Location</div>
                        </div>
                        <div className='flex my-5 gap-5'>
                            <img src="https://static1.hkrtcdn.com/hknext/static/media/homepage/Goal.svg" />
                            <div>Free Shipping</div>
                        </div>
                        <div className='flex my-5 gap-5'>
                            <img src="https://static1.hkrtcdn.com/hknext/static/media/homepage/Goal.svg" />
                            <div>Cash on Delivery Available</div>
                        </div>
                        <div className='flex my-5 gap-5'>
                            <img src="https://static1.hkrtcdn.com/hknext/static/media/homepage/Goal.svg" />
                            <div>14 days Return policy</div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 place-content-between justify-items-center border border-collapse border-gray-200'>
                    <div className='py-5'>
                        <div className='mb-3'><img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/fassai_logo.svg" /></div>
                        <div>Lic. No. 10015064000576</div>
                    </div>
                    <div className='py-5'>
                        <div className='mb-3'>Country of Origin</div>
                        <div className='flex gap-2'><img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/indian_flag.svg" />
                            <span>India</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeliveryServices