'use client'

import { getDocuments } from "@/firebase/getData";
import { useEffect, useState } from "react";
import ProductList from "@/components/ProductList/ProductList";



const SearchPage = ({ params }) => {
    const searchTerm = params.term;
    const [products, setProducts] = useState([]);

    async function fetchSearchProducts() {
        const { error, result } = await getDocuments("products");
        if (error) {
            console.log(error)
            return
        }
        console.log(result)
        const productsArray = result;
        // let searchTerm = "On Gold";

        const filteredProducts = productsArray.filter(product => {
            const searchTermWords = searchTerm.toLowerCase().split(' ');

            return searchTermWords.some(word => {
                const productNameLower = product.productName.toLowerCase();
                const subCategoryLower = product.subCategory.toLowerCase();
                const brandLabelLower = product.brand.label.toLowerCase();
                const mainCategoryLower = product.mainCategory.toLowerCase();

                return (
                    productNameLower.includes(word) ||
                    subCategoryLower.includes(word) ||
                    brandLabelLower.includes(word) ||
                    mainCategoryLower.includes(word) ||
                    productNameLower.includes(word) ||
                    subCategoryLower.includes(word) ||
                    brandLabelLower.includes(word) ||
                    mainCategoryLower.includes(word)
                );
            });
        });

        console.log(filteredProducts);
        setProducts(filteredProducts)

    }

    useEffect(() => {
        fetchSearchProducts()

    }, [])



    console.log("products", products)
    return <div>
        <h1>
            Search page {searchTerm}
        </h1>
        <ProductList 
            heading={""}
            longDescription={"longDescription"}
            subForms={[]}
            products={products}
        />
    </div>
}


export default SearchPage;