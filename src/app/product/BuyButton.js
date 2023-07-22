import React from 'react'

function BuyButton({ buy }) {
    return (
        <>
            <button className="border border-orange-300 rounded-lg bg-orange-400 text-white hover:bg-gray-400  font-bold py-4 px-12">{buy}</button>
        </>
    )
}

export default BuyButton