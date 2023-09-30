'use client'

import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const Breadcrumbs = (props) => {

  const { crumbs } = props;
  console.log(crumbs)
  const category = crumbs.category;
  const subCategory = crumbs.subCategory;
  const brand = crumbs.brand;
  const product = crumbs.product;
  const RightIcon = () => <ChevronRightIcon
    className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
    aria-hidden="true"
  />
  return (
    
    <nav className="flex items-center space-x-2 text-gray-500 text-sm my-3">
      <Link href="/" className="hover:text-gray-600">Home</Link>
      <RightIcon />
      {category && <>
        <Link href={`/category/${category}`} className="hover:text-gray-600">{category}</Link>
        <RightIcon />
      </>
        }
      {subCategory && <>
        <Link href={`/subCategory/${subCategory}`} className="hover:text-gray-600">{subCategory}</Link>
      <RightIcon />
      </>}
      <span className="font-semibold">{product}</span>
    </nav>
  );
};



export default Breadcrumbs;
