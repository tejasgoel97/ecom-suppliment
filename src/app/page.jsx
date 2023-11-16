import CardList from "@/components/Card/CardList"
import AllBrands from "@/app/home/AllBrands"
import { getDocuments } from "@/firebase/getData";


async function fetchBrandData() {
  const { result, error } = await getDocuments("metaData")
  // console.log(result);
  return { result, error }
}

export default async function Home() {

  const networkImageUrl = 'https://img6.hkrtcdn.com/30048/bnr_3004765_o.jpg';
  const { result, error } = await fetchBrandData()
  let brands = [];
  let categories = []
  console.log(result)
  if (result) {
    const brandObj = result.find(r => r.id === "brands")
    if (brandObj) brands = brandObj.brands;
    const categoriesObj = result.find(r => r.id === "categories")
    if (categoriesObj) categories = categoriesObj.categories;
  }
  console.log(categories)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div className="relative">
        <img
          src={networkImageUrl}
          alt="Banner"
          className="object-cover object-center h-full w-full"
        />
      </div>
      <CardList />
      <div className="bg-secondary w-full">
        <h1 className="font-sans text-lg p-2">Shop By Brands</h1>
        <div className="p-2">
          <AllBrands />
        </div>
      </div>
      
      
    </main>
  )
}
