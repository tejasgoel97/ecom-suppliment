import React from 'react'

function NumberButton() {
    return (
        <div className="inline-flex ">
            <button className="border border-gray-200 bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-4 px-4 rounded-l">-</button>
            <button className="border border-gray-200 bg-gray-100 hover:bg-gray-400 text-green-400 font-bold py-4 px-4">2</button>
            <button className="border border-gray-200 bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-4 px-4 rounded-r">+</button>
        </div>
    )
}

export default NumberButton 