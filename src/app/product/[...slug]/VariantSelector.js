import Link from "next/link";

const VariantSelector = (props) => {

    const {variant, subVariant, variants, id} = props;
    // const [selectedVariant, setSelectedVariant] = useState()
    
    const subVarOptions = variants.find(vari => vari.name === variant)?.subvariants;
    console.log(variant)

    return <><div className='flex flex-col gap-9 mb-6'>
    {/* Weight */}
    <div className='flex flex-col gap-7'>
      <div className='flex gap-5 items-center'>
        <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/weight.svg" />
        <span className='text-[#1c1c28] text-lg font-semibold'>Weight</span>

      </div>
      <div className='flex flex-wrap gap-2 items-center text-center cursor-pointer'>
        {variants.map((v)=>{
            return <Link href={`/product/${id}/${v.name}`} key={v.name}>
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
        return <Link href={`/product/${id}/${variant}/${subVar.name}`} key={subVar.name}>
                <div className={`items-center text-center border ${subVariant === subVar.name ? "bg-[#ff8914] text-white" : "border-[#ff8914] bg-[#fff9f4] text-[#1c1c28]"} px-5 py-1 rounded w-max`}>
        <div className='text-[#1c1c28] text-sm pt-1 font-medium'>{subVar.name}</div>
      </div>
        </Link>
      })}
       
      </div>
    </div>
  </div>

  {/* Weights and Falvour in Min screen */}
 
  </>
}

export default VariantSelector;