import Image from 'next/image'
import getDocument from "@/firebase/getData"

export default function Home(props:any) {
  const {allPost} = props;
  
  const dataaa = JSON.stringify(props)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hi there</div>
      <div>{allPost}</div>
      <div>{dataaa}</div>

    </main>
  )
}
export async function getServerSideProps() {
  // Get external data from the file system, API, DB, etc.
  const data = getDocument("metaData", "categories" )

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {allPost:"hello"}
  }
}
