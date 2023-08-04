import React from 'react'

function ProductHeading({ productHeading, productWheyHeading }) {
    return (
        <div>
            <h1 className="text-sm font-medium text-[#00b5b7] pr-6">{productWheyHeading}</h1>
            <h1 className=" text-xl font-medium leading-tight pr-6">
                {productHeading}
            </h1>
        </div>
    )
}

export default ProductHeading