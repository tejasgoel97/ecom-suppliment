import CardList from "@/components/Card/CardList"
import AllBrands from "@/app/home/AllBrands"
import { getDocuments } from "@/firebase/getData";


async function fetchBrandData() {
  const { result, error } = await getDocuments("metaData")
  // console.log(result);
  return { result, error }
}

export default async function Home() {

  const networkImageUrl = 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-21112023-MainBannerDailyChanging-Z1-P7-TOGCFortCollins-min45.jpg';
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
  console.log(brands)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <div className="relative">
        <img
          src={networkImageUrl}
          alt="Banner"
          className="object-cover object-center h-full w-full"
        />
      </div>
      <CardList value={1}/>
      <div className="bg-secondary w-full container p-3">
        <div className="container">
        <img
          src={"https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-25102023-Trust%20Marker.jpg"}
          alt="Banner"
          className="object-cover object-center h-full w-full"
        />
        </div>
        <h1 className="font-sans text-lg p-2 font-bold">Popular Brands</h1>
        <div className="p-2">
          <AllBrands brands={brands}/>
        </div>
      </div>
      <CardList value={2}/>

      
      
    </main>
  )
}
