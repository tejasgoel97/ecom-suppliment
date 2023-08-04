import React from 'react'


const WeightPrice = [
    {
        weightLb: '0.079 Lb',
        weightPrice: '₹139'
    },
    {
        weightLb: '0.079 Lb',
        weightPrice: '₹139'
    },
    {
        weightLb: '0.079 Lb',
        weightPrice: '₹139'
    },
    {
        weightLb: '0.079 Lb',
        weightPrice: '₹139'
    },
    {
        weightLb: '0.079 Lb',
        weightPrice: '₹139'
    }
]

function WeighHeading() {
    return (
        <>
            <div className='mt-12 flex gap-8'>
                <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/weight.svg" />
                <div className='font-bold text-3xl'>Weight</div>
                <div className="flex border border-green-200">
                    <button className=" bg-green-200 text-gray-800 px-4">KG</button>
                    <button className=" text-gray-800 px-4 ">LB</button>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-12">
                {
                    WeightPrice.map((weight) => {
                        return (
                            <div className="cursor-pointer border border-orange-300 rounded-lg bg-orange-100 font-bold py-2 px-6">
                                <p>{weight.weightLb}</p>
                                <p className='text-center'>{weight.weightPrice}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>)
}

export default WeighHeading