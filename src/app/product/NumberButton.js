import React from 'react'

function NumberButton() {
    return (
        <div className="flex ">
            <button className="w-full border border-gray-200 bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded-l">-</button>
            <button className="w-full border border-gray-200 bg-gray-100 hover:bg-gray-400 text-green-400 font-bold py-2 px-3">2</button>
            <button className="w-full border border-gray-200 bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded-r">+</button>
        </div>
    )
}

export default NumberButton 