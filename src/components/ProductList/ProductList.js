"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
// import Select from 'react-dropdown-select';
import StarRating from "@/components/StarRating"

const options = [
  {
    value: 1,
    label: "Leanne Graham",
  },
  {
    value: 2,
    label: "Ervin Howell",
  },
];

const productList = [
  {
    productImage:
      "https://img6.hkrtcdn.com/14057/prd_1405695-Natures-Velvet-Garcinia-Cambogia-Pure-Extract-500-mg-60-capsules_c_s.jpg",
    productsName: "NutraFirst Garcinia Cambogia",
  },
  {
    productImage:
      "https://img9.hkrtcdn.com/21116/prd_2111558-Sunaova-Bioslim-60-tablets_c_s.jpg",
    productsName: "NutraFirst Garcinia Cambogia",
  },
  {
    productImage:
      "https://img6.hkrtcdn.com/14057/prd_1405695-Natures-Velvet-Garcinia-Cambogia-Pure-Extract-500-mg-60-capsules_c_s.jpg",
    productsName: "NutraFirst Garcinia Cambogia",
  },
  {
    productImage:
      "https://img9.hkrtcdn.com/21116/prd_2111558-Sunaova-Bioslim-60-tablets_c_s.jpg",
    productsName: "NutraFirst Garcinia Cambogia",
  },
  {
    productImage:
      "https://img6.hkrtcdn.com/14057/prd_1405695-Natures-Velvet-Garcinia-Cambogia-Pure-Extract-500-mg-60-capsules_c_s.jpg",
    productsName: "NutraFirst Garcinia Cambogia",
  },
  {
    productImage:
      "https://img9.hkrtcdn.com/21116/prd_2111558-Sunaova-Bioslim-60-tablets_c_s.jpg",
    productsName: "NutraFirst Garcinia Cambogia",
  },
  {
    productImage:
      "https://img6.hkrtcdn.com/14057/prd_1405695-Natures-Velvet-Garcinia-Cambogia-Pure-Extract-500-mg-60-capsules_c_s.jpg",
    productsName: "NutraFirst Garcinia Cambogia",
  },
  {
    productImage:
      "https://img9.hkrtcdn.com/21116/prd_2111558-Sunaova-Bioslim-60-tablets_c_s.jpg",
    productsName: "NutraFirst Garcinia Cambogia",
  },
];

const productCard = [
  {
    featureImage:
      "https://img6.hkrtcdn.com/14057/prd_1405695-Natures-Velvet-Garcinia-Cambogia-Pure-Extract-500-mg-60-capsules_c_s.jpg",
    productName: "NutraFirst Garcinia Cambogia - 60 tablet(s) ",
    reviewNumber: "4.3",
    productNewPrice: "₹352",
    productPrice: "₹2352",
    productDiscount: "87% Off",
  },
  {
    featureImage:
      "https://img9.hkrtcdn.com/21116/prd_2111558-Sunaova-Bioslim-60-tablets_c_s.jpg",
    productName: "Nirvasa Garcinia Cambogia - 60 tablet(s) ",
    reviewNumber: "4.3",
    productNewPrice: "₹352",
    productPrice: "₹2352",
    productDiscount: "87% Off",
  },
  {
    featureImage:
      "https://img2.hkrtcdn.com/6638/prd_663751-INLIFE-Garcinia-Cambogia-60-HCA-1600-mg-120-capsules_c_s.jpg",
    productName:
      "Morpheme Remedies Garcinia (500 mg) - 60 tablet(s)Morpheme Remedies Garcinia (500 mg) - 60 tablet(s) ",
    reviewNumber: "4.3",
    productNewPrice: "₹352",
    productPrice: "₹2352",
    productDiscount: "87% Off",
  },
  {
    featureImage:
      "https://img1.hkrtcdn.com/23216/prd_2321550-Dr.-Morepen-Fat-Burner-60-tablets_c_s.jpg",
    productName: "NutraFirst Garcinia Cambogia - 60 tablet(s) ",
    reviewNumber: "4.3",
    productNewPrice: "₹352",
    productPrice: "₹2352",
    productDiscount: "87% Off",
  },
];

function ProductPage(props) {
  const { heading, longDescription, subForms, products, type } = props;

  const [values, setValues] = useState("");

  const router = useRouter();

  return (
    <div className="container max-w-5xl mx-auto p-4">
      <div className="mb-5">
        <img
          src="https://img4.hkrtcdn.com/10922/bnr_1092113_o.jpg"
          width="100%"
        />
      </div>
      <div className="flex justify-between">
        <h1 className="text-#aeb1bd font-semibold text-3xl">{heading}</h1>
        <div className="flex gap-2 items-center justify-center">
          <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/authentic-plp.svg" />
          <span className="text-#aeb1bd font-medium text-sm">
            100% Original & Authentic
          </span>
        </div>
      </div>
      <div className="my-5">
        <p className="text-#212121 text-sm leading-relaxed">
          {longDescription}
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-8 gap-8">
        {subForms.map((item) => {
          return (
            <div
              className="text-center cursor-pointer col-span-1"
              onClick={() => {
                if(type === "ALL_CATEGORY"){
                  return router.push(`/category/${item.name}`)
                }
                router.push(`/subCategory/${item.name}`)
              }
              }
            >
              {/* <Image
                className="rounded-full shadow-lg"
                alt="Mountains"
                // Importing an image will
                // automatically set the width and height
                src={item.imgUrl || item.imageUrl}
                sizes="100vw"
                width={500}
                height={500}
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "auto",
                }}
              /> */}
              <img src={item.imgUrl || item.imageUrl} className="rounded-full shadow-lg" />
              <p className="mt-2  text-#49586e">{item.name}</p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between my-5">
        <div className="text-#aeb1bd font-medium text-lg">({products.length} items)</div>
        {/* <Select options={options} onChange={(values) => setValues(values)} /> */}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
        {products.map((i) => {
          console.log(i);
          const productUrl = `/product/${i.id}`
          const productName = `${i.productName}, ${i.variants[0].name}`
          const SP = i.variants[0].subvariants[0].SP
          const MRP = i.variants[0].subvariants[0].MRP
          return (
            
            <Link href={productUrl} className="col-span-1">
              <div className="relative w-full max-w-lg shadow cursor-pointer rounded-t-lg rounded-b-lg hover:shadow-2xl mx-auto" >
                <div className="bg-gray-200 rounded-t-lg">
                  <div className="flex justify-center overflow-hidden">
                    <img className="" src={i.featureImage} style={{width:"auto", height:"100%"}}/>
                  </div>
                </div>
                <div className="px-5 py-5 border border-gray-200 rounded-b-lg ">
                  <div className="md:h-40 h-44">
                    <h5 className="text-base font-semibold text-gray-600 mb-2">
                        {productName}
                    </h5>
                    <StarRating rating={3.7}/>
                    <div className="flex gap-3 mb-3">
                      <div>{SP}</div>
                      <div className="line-through align-middle text-#aeb1bd">
                        {MRP}
                      </div>
                      <div className="text-green-500">{i.productDiscount}</div>
                    </div>
                  </div>
                  <div className="">
                    <button className="flex items-center gap-3 justify-center border rounded-lg border-red-200 bg-red-100 p-3 w-full hover:bg-red-500 hover:text-white">
                      <img src="https://static1.hkrtcdn.com/hknext/static/media/common/cartNew.svg" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
        </Link>

          );
        })}
      </div>
    </div>

  );
}

export default ProductPage;
