import React from 'react';
import Search from './Search';
import IconButton from "@/components/IconButton"
import { SearchIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/solid';
import Link from 'next/link';


const logo = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"




const Navbar = () => {

  return (
    <>
    <div className="hidden md:block">
    <nav className="p-4 flex items-center justify-between">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
        {/* <span className=" text-lg font-semibold ml-2">My Website</span> */}
      </div>
      {/* Search component in the center */}
      <div>
        <Search />
      </div>
      {/* Login button and cart button on the right */}
      <div className="flex gap-4">
      <IconButton icon={<SearchIcon className="h-5 w-5" />} label="Search" />
      <Link href="/cart">
        <IconButton icon={<ShoppingCartIcon className="h-5 w-5" />} label="Cart" />
      </Link>
      <IconButton icon={<UserIcon className="h-5 w-5" />} label="Profile" />
    </div>
    </nav>
    </div>
    <div className="block md:hidden">
    <nav className="p-4 flex items-center justify-between">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
        {/* <span className=" text-lg font-semibold ml-2">My Website</span> */}
      </div>
      {/* Search component in the center */}
      
      {/* Login button and cart button on the right */}
      <div className="flex items-center space-x-4">
        
        <button className="bg-blue-500  py-2 px-4 rounded-lg">Search</button>
        <button className="bg-blue-500  py-2 px-4 rounded-lg">Cart</button>
        <button className="bg-blue-500  py-2 px-4 rounded-lg">Login</button>
      </div>
    </nav>
    </div>
    </>

  );
};

export default Navbar;
