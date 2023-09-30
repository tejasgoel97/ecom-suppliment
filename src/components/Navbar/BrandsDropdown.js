import {useState, useEffect} from 'react'

import Popover from "./Popover";
import getDocument from "@/firebase/getData";


async function fetchBrandData(subCategory){
    const {result , error} = await getDocument("metaData", "brands")
    // console.log(result);
    return result.brands
}


const BrandDropdown = () => {
    const [brands, setBrands] = useState([])

    useEffect(()=>{
        async function formatbrands(){
            let brands = await fetchBrandData();
            
            console.log(brands)
            setBrands(brands)
        }
        formatbrands()
    },[])

    console.log(brands)

    return <div className='flex gap-3'>
        
            <Popover color="black"name={"Shop by Brands"} options={brands}/>
        
        {/* <Popover category={category}/>
      <Popover category={category}/> */}

    </div>
}
export default BrandDropdown

 