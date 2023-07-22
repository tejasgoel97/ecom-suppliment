import React from 'react'

function CartButton({ cart, className }) {
    
    if(!className){
        className = " "
    }
    console.log(className)
    const classss = "border border-orange-300 rounded-lg bg-yellow-50 text-orange-500 font-bold py-4 px-12" + className
    console.log(classss)
  return (
    <div>
      <button className={"border border-orange-300 rounded-lg bg-yellow-50 text-orange-500 font-bold py-4 px-12" + " " + className} >
        <span className='mr-2'>bnc</span>{cart}
      </button>
    </div>
  )
}

export default CartButton