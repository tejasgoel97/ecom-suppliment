import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function Example(props) {


    const { order, index } = props;
    console.log(order)
    const orderDate = order.createdAt;
    const currentAddress = order.currentAddress
    if (orderDate) {
        var dateValue = orderDate.toDate();
        var formattedDate = dateValue.toLocaleString();
    }
    else {
        formattedDate = "no Datr"
    }

    return (
        <div className="mx-auto w-full mt-2 rounded-2xl bg-secondary p-2">
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="w-full rounded-lg bg-primary-lite px-4 py-2 text-left text-sm font-medium text-primary hover:bg-primary hover:text-primary-lite focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                            <div className='flex flex-wrap w-full justify-between items-center'>
                                <div>
                                    <h1>Order Placed</h1>
                                    <h1 className='text-sm font-light'>{formattedDate}</h1>
                                </div>
                                <div>
                                    <h1>Total</h1>
                                    <h1 className='text-sm font-light'>Rs. 222</h1>
                                </div>
                                <div>
                                    <h1>Quantity</h1>
                                    <h1 className='text-sm font-light'>3</h1>
                                </div>
                                <div>
                                    <h1>Status</h1>
                                    <h1 className='text-sm font-light'>{order.status}</h1>
                                </div>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-primary hover:text-primary-lite`}
                                />
                            </div>
                            <div>
                                { }
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className='grid grid-cols-6 border-r'>
                                <div className='col-span-4 border-r-2 border-gray-300'>
                                    {order.cart.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex items-center py-1 border-b">
                                            <img
                                                src={item.imgUrl}
                                                alt={item.name}
                                                className="h-20 w-20 object-cover rounded"
                                            />
                                            <div className="ml-6">
                                                <p className="text-sm font-semibold">{item.name}</p>
                                                <p>
                                                    {item.variant} - {item.subVariant}
                                                </p>
                                                <p className="text-gray-600">Price: ${item.SP}</p>
                                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='col-span-2 m-3'>
                                    <div>
                                        <span className='font-bold'>
                                        Delivered To: 
                                        </span>
                                        <br></br>
                                        {currentAddress.name}
                                        <br></br>
                                        {currentAddress.addressLine1}, 
                                        
                                        {currentAddress.addressLine2},
                                        <br></br>
                                        {currentAddress.city},
                                        <br></br>
                                        {currentAddress.postalCode}, {currentAddress.state},
                                        <br></br>
                                        {currentAddress.phoneNumber}
                                    </div>
                                    <div>
                                        <span className='font-bold'>
                                            Shipping Charges: 
                                        </span> {order.shippingCharges}
                                    </div>
                                    <div>
                                        <span className='font-bold'>
                                            Total Discount
                                        </span> {order.totalDiscount}
                                    </div>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

        </div>

    )
}
