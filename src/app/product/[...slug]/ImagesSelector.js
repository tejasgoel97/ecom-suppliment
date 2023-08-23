'use client'

import { useState } from "react";

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


const ImageSelector = (props) => {
    const { allImages } = props;
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
    const handleImageClick = (index) => {
      setSelectedImageIndex(index);
    };
  
    return (
        <>
      <div className="md:col-span-1">
        <div className="grid grid-cols-6 md:grid-cols-1 gap-3">
          {allImages.map((i, index) => (
            <div
              key={index}
              className={` ${selectedImageIndex === index ? 'border-2 border-[#00b5b7]' : ''}`}
            >
              <img
                className="h-full "
                src={i.imgUrl}
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='md:col-span-5'>
        <div className='bg-[#f7f7f7] items-center p-3'>
          <img className='mix-blend-multiply' src={allImages[selectedImageIndex].imgUrl} />
        </div>
        <div className='border rounded-lg border-[#dbdee9] mt-16 hidden md:block'>
          <div className='py-3 px-5'>
            <p className='text-[#1c1c28] text-sm font-semibold'>Product Benefits</p>
            <div className='flex gap-5 my-3'>
              <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/Vector.svg" />
              <p className='text-[#1C1C28] text-xs'>Helps in Muscle Building</p>
            </div>
          </div>
          <div className='bg-[#f7f7f7] p-5 rounded-b-lg grid grid-cols-3 justify-center items-center gap-8 py-8 '>
            {
              productBenefits.map((i) => {
                return (
                  <>
                    <div className='text-center'>
                      <div className='text-[#77777d] text-xs font-medium py-1'>{i.benefitName}</div>
                      <div className='text-[#494952] text-xl font-semibold'>{i.benefitGram}</div>
                    </div>

                  </>
                )
              })
            }
          </div>
        </div>
      </div>
      </>
    );
  };

export default ImageSelector;