import React from 'react'

function ProductHeading({ productHeading }) {
    return (
        <div>
            <h1 className="text-3xl font-medium leading-tight pr-6">
                {productHeading}
            </h1>
        </div>
    )
}

export default ProductHeading