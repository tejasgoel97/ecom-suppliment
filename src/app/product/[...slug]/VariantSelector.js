import Link from "next/link";

const VariantSelector = (props) => {

    const {variant, subVariant, variants, id} = props;
    // const [selectedVariant, setSelectedVariant] = useState()
    
    const subVarOptions = variants.find(vari => vari.name === variant)?.subvariants;
    console.log(variant)

    return <><div className='md:flex flex-col gap-9 mb-6 hidden'>
    {/* Weight */}
    <div className='flex flex-col gap-7'>
      <div className='flex gap-5 items-center'>
        <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/weight.svg" />
        <span className='text-[#1c1c28] text-lg font-semibold'>Weight</span>
        <div className='flex cursor-pointer'>
          <div className='cursor-pointer text-xs font-medium bg-white rounded-l py-1 px-3 border border-[#00b5b7] text-[#77777e]'>KG</div>
          <div className='cursor-pointer text-xs font-medium bg-[#00b5b7] rounded-r py-1 px-3 border border-[#00b5b7] text-white'>LB</div>
        </div>
      </div>
      <div className='flex flex-wrap gap-2 items-center text-center cursor-pointer'>
        {variants.map((v)=>{
            return <Link href={`/product/${id}/${v.name}`}>
                <div className={`items-center text-center border ${variant === v.name ? "bg-[#ff8914] text-white" : "border-[#ff8914] bg-[#fff9f4] text-[#1c1c28]"} px-5 py-1 rounded w-max`}>
            <div className='text-[#1c1c28] text-sm font-medium'>{v.name}</div>
            {/* <div className='text-[#77777d] text-xs font-normal'>₹4099</div> */}
          </div>
            </Link>
        })}
        
      </div>
    </div>
    {/* Flavour */}
    <div className='flex flex-col gap-7'>
      <div className='flex gap-5'>
        <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/weight.svg" />
        <span className='text-[#1c1c28] text-lg font-semibold'>Flavour</span>
      </div>
      
      <div className='flex flex-wrap gap-2 items-center text-center cursor-pointer'>
      {subVarOptions.map((subVar)=>{
        return <Link href={`/product/${id}/${variant}/${subVar.name}`}>
                <div className={`items-center text-center border ${subVariant === subVar.name ? "bg-[#ff8914] text-white" : "border-[#ff8914] bg-[#fff9f4] text-[#1c1c28]"} px-5 py-1 rounded w-max`}>
        <div className='text-[#1c1c28] text-sm pt-1 font-medium'>{subVar.name}</div>
      </div>
        </Link>
      })}
       
      </div>
    </div>
  </div>

  {/* Weights and Falvour in Min screen */}
  <div className='block md:hidden py-4 mt-8'>
    <div className='flex flex-col gap-4'>
      <div className='text-[#1c1c28] text-lg font-semibold'>Select Variant</div>
      {/* Weight */}
      <div className='flex justify-between items-center border border-[#dbdee9] rounded-lg p-3'>
        <div className='flex items-center cursor-pointer gap-4'>
          <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/weight.svg" />
          <span className='text-[#494953] text-xs font-normal'>Weight: <span className='text-[#1c1c28] text-xs font-medium'>2.2Lb</span></span>
        </div>
        <div className='flex gap-3 items-center text-[#494953] text-sm font-medium'>4 More
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M1 13L7 7L1 1" stroke="#77777E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
      </div>
      {/* Flavour */}
      <div className='flex justify-between items-center border border-[#dbdee9] rounded-lg p-3'>
        <div className='flex items-center cursor-pointer gap-4'>
          <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/weight.svg" />
          <span className='text-[#494953] text-xs font-normal'>Flavour: <span className='text-[#1c1c28] text-xs font-medium'>Chocolate</span></span>
        </div>
        <div className='flex gap-3 items-center text-[#494953] text-sm font-medium'>7 More
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M1 13L7 7L1 1" stroke="#77777E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
      </div>
    </div>
  </div>
  </>
}

export default VariantSelector;