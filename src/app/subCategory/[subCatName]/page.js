import Content from "./Content"

import getDocument, {getDocumentsbyFilter} from "@/firebase/getData";


async function fetchSubCatData(subCategory){
    const {result , error} = await getDocument("metaData", "categories")
    // console.log(result);
    let subCatData = {}
    result.categories.forEach((cat)=> {
        let subCat = cat.subCategories.find(subCat => subCat.name === subCategory)
        if(subCat){
            subCatData={subCatName:subCat.name,subCatImg:subCat.imgUrl, catName:cat.name, catImag:cat.imgUrl}
        }

    });
     
    return subCatData;
}

const Page = async ({params}) => {
    const subCategory = decodeURIComponent(params.subCatName);
    const {result} = await getDocumentsbyFilter("products", "subCategory", subCategory)
    const subCatData = await fetchSubCatData(subCategory)
    // console.log(result)

    return <Content products={result} subCatData={subCatData} subCategory={subCategory}/>
}

export default Page;