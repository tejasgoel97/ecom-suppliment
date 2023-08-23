// import Content from "./Content"

import getDocument, {getDocumentsbyFilter} from "@/firebase/getData";


async function fetchSubCatData(subCategory){
    const {result , error} = await getDocument("metaData", "brands")
    // console.log(result);
    return result
}

const Page = async ({params}) => {
    const brandName = decodeURIComponent(params.brandName);
    const {result} = await getDocumentsbyFilter("products", "brand", brandName);
    const brandData = await fetchSubCatData(brandName);
    console.log({result})
    console.log({brandData})

    // return <Content products={result} subCatData={subCatData} subCategory={subCategory}/>
    return <div>Hi there</div>
}

export default Page;