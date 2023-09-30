'use client'


var myHeaders = new Headers();
myHeaders.append("X-Verify", "d56e09e106c0369bef85621410e40c75055a60e8fae985dfb21118dd6625f656###1");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "request": "ew0KICAibWVyY2hhbnRJZCI6ICJNRVJDSEFOVFVBVCIsDQogICJtZXJjaGFudFRyYW5zYWN0aW9uSWQiOiAiTVQ3ODUwNTkwMDY4MTg4MTA0IiwNCiAgIm1lcmNoYW50VXNlcklkIjogIk1VSUQxMjMiLA0KICAiYW1vdW50IjogMTAwMDAsDQogICJyZWRpcmVjdFVybCI6ICJodHRwOi8vbG9jYWxob3N0OjMwMDAvcGF5bWVudCIsDQogICJyZWRpcmVjdE1vZGUiOiAiUE9TVCIsDQogICJjYWxsYmFja1VybCI6ICJodHRwczovL3BheW1lbnQtcGhvbmVwZS01MmFkYzUzYmY5NWQuaGVyb2t1YXBwLmNvbS9wYXltZW50IiwNCiAgIm1vYmlsZU51bWJlciI6ICI5OTk5OTk5OTk5IiwNCiAgInBheW1lbnRJbnN0cnVtZW50Ijogew0KICAgICJ0eXBlIjogIlBBWV9QQUdFIg0KICB9DQp9"
});

var requestOptions = {
  method: 'POST',
  headers: {
    "X-Verify": "d56e09e106c0369bef85621410e40c75055a60e8fae985dfb21118dd6625f656###1",
    "Content-Type": "application/json"
  },
  body: raw,
  redirect: 'follow'
};



const ButtonClick = () => {
    async function handleSubmit(){
        fetch("https://try.readme.io/https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                const redirectUrl = result.data.instrumentResponse.redirectInfo.url
                console.log(redirectUrl)
                return redirectUrl
                
            }
                ).then((url)=> {
                    console.log("URLLLR", url)
                    window.location.replace(url)
                })
            .catch(error => console.log('error', error));
    }
    return <>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300" onClick={handleSubmit}>Pay Now</button>

    </>
}


export default ButtonClick;