import { headers } from 'next/headers';
import ButtonClick from './ButtonClick'


const payload = {
    "merchantId": "Tejas",
    "merchantTransactionId": "112",
    "merchantUserId": "Tejasgo97",
    "amount": 10000,
    "redirectUrl": "https://webhook.site/redirect-url",
    "redirectMode": "POST",
    "callbackUrl": "https://webhook.site/callback-url",
    "mobileNumber": "9999999999",
    "paymentInstrument": {
      "type": "PAY_PAGE"
    }
  }







 



const Page = () => {
    const headerList = headers()
    console.log(headerList)
   
    return <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
    <h2 className="text-2xl font-semibold mb-4">Payment Form</h2>
    
    <>
      <div className="mb-4">
        <label for="amount" className="block text-sm font-medium text-gray-700">Amount</label>
        <input type="text" id="amount" name="amount" className="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-indigo-300"/>
      </div>
      
    <ButtonClick/>
    </>
  </div>
}


export default Page