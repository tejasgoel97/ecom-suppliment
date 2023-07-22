import React from 'react'

function Price({ price, mrp, discount }) {
    return (
        <div className='mt-5'>
            <p>MRP : {mrp}</p>
            <div className='flex'>
                <div className='mr-3 font-bold text-xl '>Price : {price}</div>
                <div>{discount}</div>
            </div>
        </div>
    )
}

export default Price