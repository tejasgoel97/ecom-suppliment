import getDocument from "@/firebase/getData";

async function fetchCategories(){
    const {result , error} = await getDocument("metaData", "categories")
    console.log(result);
    return result.categories;
}


 const Page = async () => {

    const data = await fetchCategories()
    
    return <div>{JSON.stringify(data)}</div>
}

export default Page;