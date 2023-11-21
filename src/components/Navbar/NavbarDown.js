import CategoriesDropdown from "./CategoriesDropdown"
import BrandsDropdown from "./BrandsDropdown"
import {useMetaDataContext} from "@/context/MetaDataContext"


const NavBarDown = () => {
    const {metaData} = useMetaDataContext();
    console.warn(metaData)
    let brands =[];
    let categories = []
    const brandsObj = metaData.find(i => i.id === "brands");
    if(brandsObj){
        brands = brandsObj.brands
    }
    const categoriesObj = metaData.find(i => i.id === "categories");
    if(categoriesObj){
        categories = categoriesObj.categories
    }
    console.warn(categories)
    return <div className="px-3 pb-3 flex gap-3 z-16">
        <BrandsDropdown brands={brands}/> 
        <CategoriesDropdown categories={categories}/>
    </div>
}

export default NavBarDown;