'use client'

import ProductCard from "@/components/Card/ProductCard";
import { getDocumentsbyFilter } from "@/firebase/getData";
import { useEffect, useState } from "react";

const RelatedProducts = ({product}) => {
    const [productList, setProductList] = useState([]);
    async function getProducts(){
        const {result} = await getDocumentsbyFilter("products", "mainCategory", product.mainCategory)
        if(result?.length){
            setProductList(result)
        }
    }
    useEffect(()=>{
        getProducts()
    },[])
    return <div className="bg-white shadow-xl">
        <h1>Similar Products</h1>
        <div className="overflow-x-scroll flex gap-3">
            {productList.map((product)=>{
                return <div className="w-screen">
                    <ProductCard product={product} />
                    </div>
            })}
        </div>
    </div>
}

export default RelatedProducts;