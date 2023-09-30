import Image from "next/image";
import logo from "./logo.svg"
import CartIcon from "./CartIcon"
import AccountIcon from "./AccountIcon"
import LoginIcon from "./LoginIcon"
import SearchBox from "./SearchBox"
import { useAuthContext } from "@/context/AuthContext";
import NavbarDown from "./NavbarDown"


const Navbar = () => {
    const { user } = useAuthContext()
    console.log(user)
    let isLogin = false
    if (user) {
        isLogin = true
    }


    return <header className=" bg-primary">
        <div className="container max-w-6xl mx-auto gap-3">

        
        <div className="flex justify-between p-4 items-center">
            <div classname="logo-image p-4 m-4">
                <Image
                    src={logo}
                    alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                />
            </div>
            <div className="searchbox flex-1 mx-4 max-w-md">
                <SearchBox/>
            </div>
            <div className="profile_and_cart flex justify-end gap-3">
            <div className="cartIcon">
                    <CartIcon />
                </div>
                {
                    isLogin
                        ?
                        <div className="profileIcon">
                            <AccountIcon />
                        </div>
                        :
                        <div className="loginIcon">
                            <LoginIcon />
                        </div>
                }
                


            </div>
        </div>
        <NavbarDown/>
        </div>
    </header>
}
export default Navbar;