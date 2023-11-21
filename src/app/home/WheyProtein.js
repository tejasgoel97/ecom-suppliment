'use client'

const WheyProtein = async () => {

    const {result, error} = await getDocumentsbyFilter("products", "mainCategory", category)

    console.log(result);
    
    return (
        <div className="bg-secondary w-full">
            <h1 className="font-sans text-lg p-2">Whey Protein</h1>
            <div className="p-2">

            </div>
        </div>
    )
}

export default WheyProtein