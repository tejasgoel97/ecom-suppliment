import React from 'react'

function CartButton({ cart, cartImage }) {
  return (
    <>
        <button className='flex items-center justify-center border rounded-lg border-red-200 bg-red-100 p-3 w-full hover:bg-red-500 hover:text-white'>
          <img src={cartImage} /> {cart}
        </button>
              {/* <button className="border border-orange-300 rounded-lg bg-yellow-50 text-orange-500 font-bold py-2 px-6 hover:bg-gray-400 hover:text-white">
        {cart}
      </button> */}
    </>
  )
}

export default CartButton