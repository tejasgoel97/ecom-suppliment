import Content from "./Content"

import getDocument, {getDocumentsbyFilter} from "@/firebase/getData";

async function fetchCategory(category){
    const {result , error} = await getDocument("metaData", "categories")
    console.log(result);
    const categoryObject = result.categories.find((cat)=> cat.name === category);
     
    return categoryObject;
}
async function fetchProducts(category){

}


 const Page = async ({params}) => {
    const category = decodeURIComponent(params.catName)
    const data = await fetchCategory(category);
    const subCategories = data?.subcategory
    const {result} = await getDocumentsbyFilter("products", "mainCategory", category)
    console.log("hi",result)
    
    return <Content category={category} products={result} catData={data}/>
}

export default Page;