"use client";

import getDocument from "@/firebase/getData";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Content from "./Content"
import Breadcrumbs from "@/components/Breadcrumbs"

const Product = ({ params }) => {
  const [err, setErr] = useState(null);
  const [product, setProduct] = useState({});
  const [variant, setVariant] = useState("");
  const [subVariant, setSubVariant] = useState("");

  const router = useRouter();

  const slug = params.slug;
  async function getData() {
    let { result, error } = await getDocument("products", slug[0]);
    console.log({result, error})
    setErr(err);
    setProduct(result);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!product?.productName) return;
    if (slug.length === 1) {
      console.log("hi there");
      console.log(product);
      const variant = product.variants[0].name;
      const subVariant = product.variants[0].subvariants[0].name;
      router.push(`/product/${slug[0]}/${variant}/${subVariant}`);
    }
    if(slug.length === 2){
      let variant = decodeURIComponent(slug[1])
      let subVariant = ""
      const variantObject = product.variants.find((v)=>v.name === variant)
      if(!variantObject){
        variant = product.variants[0].name;
        subVariant = product.variants[0].subvariants[0].name;
      }else{
        subVariant = variantObject.subvariants[0].name
      }
      const route = `/product/${slug[0]}/${variant}/${subVariant}`
      router.push(route)

      console.log(variantObject.subvariants[0].name)
    }
    if(slug.length >2){
      console.log("2")
      let variant = decodeURIComponent(slug[1])
      let subVariant = decodeURIComponent(slug[2]);
      const variantObject = product.variants.find((v)=>v.name === variant);
      console.log(variantObject)
      if(!variantObject){
        variant = product.variants[0].name;
        subVariant = product.variants[0].subvariants[0].name;
      }
      else{
        const subVariantObject = variantObject.subvariants.find((sv)=> sv.name === subVariant)
        console.log({subVariantObject})
        if(!subVariantObject){
          subVariant = product.variants[0].subvariants[0].name;
        }
        else{
          subVariant = subVariantObject.name
          return
          
        }
      }
      const route = `/product/${slug[0]}/${variant}/${subVariant}`
      router.push(route)
    }
  }, [product]);

  // if (err) {
  //   return <div>unable to fetch document</div>;
  // }
  // if (!product.productName) {
  //   return <div>Loading</div>;
  // }

  return <div className="container bg-white max-w-5xl mx-auto p-4">
    {/* <Breadcrumbs crumbs={5}/> */}
    <Content product={product}/>
  </div>
};

export default Product;
