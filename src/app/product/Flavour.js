import React from 'react'


const Flavours = [
    {
        flavourName: 'Rich Chocolate',
    },
    {
        flavourName: 'Blue Tokai Coffee',
    },
    {
        flavourName: 'Choco Banana Smoothie',
    },
    {
        flavourName: 'Rich Chocolate',
    },
    {
        flavourName: 'Blue Tokai Coffee',
    }
]

function Flavour() {
    return (
        <>
            <div className='mt-12 flex gap-8'>
                <div>dbc</div>
                <div className='mr-3 font-bold text-3xl '>Flavour</div>
            </div>
            <div className="flex flex-wrap gap-3 mt-12">
                {
                    Flavours.map((flavour) => {
                        return (
                            <div className="cursor-pointer border border-orange-300 rounded-lg bg-orange-100 font-bold py-5 px-6">
                                <p>{flavour.flavourName}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Flavour




