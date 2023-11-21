import {useState, useEffect} from 'react'

import Popover from "./Popover";
import getDocument from "@/firebase/getData";


async function fetchCategory(category){
    const {result , error} = await getDocument("metaData", "categories")
    return result.categories
}


const CartegoryDropdown = (props) => {

    let {categories} = props;
    categories= categories.map((cat)=>{
        let options = cat.subCategories.map((subCat)=>{
            return {
                name: subCat.name,
                imageUrl: subCat.imgUrl,
                slug:`/subCategory/${subCat.name}`
            }
        })
        return {
            name: cat.name,
            options: options
        }

        
    })

    // const [categories, setCategories] = useState([])

    // useEffect(()=>{
    //     async function formatCategories(){
    //         let categories = await fetchCategory();
    //         console.log(categories)
    //         categories= categories.map((cat)=>{
    //             let options = cat.subCategories.map((subCat)=>{
    //                 return {
    //                     name: subCat.name,
    //                     imageUrl: subCat.imgUrl,
    //                     slug:`/subCategory/${subCat.name}`
    //                 }
    //             })
    //             return {
    //                 name: cat.name,
    //                 options: options
    //             }

                
    //         })
    //         console.log(categories)
    //         setCategories(categories)
    //     }
    //     formatCategories()
    // },[])

    // console.log(categories)

    return <div className='flex gap-3'>
        {categories.map((cat)=>{
            return <Popover key={cat.name} name={cat.name} options={cat.options}/>
        })}
        {/* <Popover category={category}/>
      <Popover category={category}/> */}

    </div>
}
export default CartegoryDropdown

