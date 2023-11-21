// "use client";

import getDocument from "@/firebase/getData";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import Content from "./Content"
import Breadcrumbs from "@/components/Breadcrumbs"
import RelatedProducts from "./RelatedProducts"

const Product = async ({ params }) => {
  // const [err, setErr] = useState(null);
  // const [product, setProduct] = useState({});
  // const [variant, setVariant] = useState("");
  // const [subVariant, setSubVariant] = useState("");
  let variant = null;
  let subVariant = null
  let err = null;
  let product = null
  let SP = null
  let MRP = null
  // const router = useRouter();

  const slug = params.slug;
  let id=slug[0]
  async function getData() {
    let { result, error } = await getDocument("products", id);
    // console.log({result, error})
    err = (error);
    product = (result);

  }

  // useEffect(() => {
    await getData();
  // }, []);

  // useEffect(() => {
    if (!product?.productName) return;
    if (slug.length === 1) {
      console.log("hi there");
      // console.log(product);
      variant = product.variants[0].name;
      subVariant = product.variants[0].subvariants[0].name;
      SP = product.variants[0].subvariants[0].SP
      MRP = product.variants[0].subvariants[0].MRP
      // router.push(`/product/${slug[0]}/${variant}/${subVariant}`);
    }
    if(slug.length === 2){
      variant = decodeURIComponent(slug[1])
      subVariant = ""
      const variantObject = product.variants.find((v)=>v.name === variant)
      if(!variantObject){
        variant = product.variants[0].name;
        subVariant = product.variants[0].subvariants[0].name;
        SP = product.variants[0].subvariants[0].SP
        MRP = product.variants[0].subvariants[0].MRP
      }else{
        subVariant = variantObject.subvariants[0].name
        SP = variantObject.subvariants[0].SP
        MRP = variantObject.subvariants[0].MRP
        
      }
      const route = `/product/${slug[0]}/${variant}/${subVariant}`
      // router.push(route)

      // console.log(variantObject.subvariants[0].name)
    }
    if(slug.length >2){
      console.log("2")
      variant = decodeURIComponent(slug[1])
      subVariant = decodeURIComponent(slug[2]);
      const variantObject = product.variants.find((v)=>v.name === variant);
      // console.log(variantObject)
      if(!variantObject){
        variant = product.variants[0].name;
        subVariant = product.variants[0].subvariants[0].name;
        SP = product.variants[0].subvariants[0].SP
        MRP = product.variants[0].subvariants[0].MRP
        const route = `/product/${slug[0]}/${variant}/${subVariant}`
        // router.push(route)
      }
      else{
        const subVariantObject = variantObject.subvariants.find((sv)=> sv.name === subVariant)
        // console.log({subVariantObject})
        if(!subVariantObject){
          variant = product.variants[0].name;
          subVariant = product.variants[0].subvariants[0].name;
          const route = `/product/${slug[0]}/${variant}/${subVariant}`;
          SP = product.variants[0].subvariants[0].SP
          MRP = product.variants[0].subvariants[0].MRP
        // router.push(route)
        }
        else{
          subVariant = subVariantObject.name
          SP = subVariantObject.SP
          MRP = subVariantObject.MRP
          
          
        }
      }
      
    }
  // }, [product]);

  // if (err) {
  //   return <div>unable to fetch document</div>;
  // }
  // if (!product.productName) {
  //   return <div>Loading</div>;
  // }
  
    if(!product || !variant || !subVariant){
      return <div>Ho Daata</div>
    }
    console.log(product)
  return <div className="container bg-white max-w-5xl mx-auto p-4">
    <Breadcrumbs crumbs={{category:product.mainCategory, subCategory:product.subCategory, product:product.productName}}/>
    <Content product={product} variant={variant} subVariant={subVariant} SP={SP} MRP={MRP} id={id}/>
    <RelatedProducts product={product}/>
  </div>
};

export default Product;
