import React from 'react'

const productBenefits = [
    {
        benefitName: 'Protein',
        benefitGram: '25 g'
    },
    {
        benefitName: 'BCAA',
        benefitGram: '5.51 g'
    },
    {
        benefitName: 'EAA',
        benefitGram: '11.75 g'
    },
    {
        benefitName: 'Glutamic acid',
        benefitGram: '4.38 g'
    },
    {
        benefitName: 'Kcal',
        benefitGram: '145.68'
    },
    {
        benefitName: 'Protein % per Serving',
        benefitGram: '65.0'
    }
]

function ProductBenefit() {
    return (
        <>
            <div className="mt-10 border border-gray-200 rounded-lg">

                <div className="p-8">
                    <div className="font-bold text-xl mb-2">Product Benefits</div>
                    <p className="text-gray-700 text-base">Helps in Muscle Building</p>
                </div>
                <div className="bg-gray-100 p-16">
                    <div class="grid grid-cols-3 gap-4 items-center justify-center">
                        {
                            productBenefits.map((benefits) => {
                                return (
                                    <>
                                        <div className='mb-10 text-center'>
                                            <p className='text-gray-500 dark:text-gray-400'>{benefits.benefitName}</p>
                                            <p className='mb-2 text-3xl font-bold'>{benefits.benefitGram}</p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductBenefit