import CategoriesDropdown from "./CategoriesDropdown"
import BrandsDropdown from "./BrandsDropdown"

const NavBarDown = () => {

    return <div className="px-3 pb-3 flex gap-3 z-16">
        <BrandsDropdown/> 
        <CategoriesDropdown/>
    </div>
}

export default NavBarDown;