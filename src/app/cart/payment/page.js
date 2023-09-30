'use client'

import addData from "../../../firebase/addData"
import { useOrderContext } from "@/context/OrderContext";



const PaymentPage = () => {
    const { currentOrder, dispatch:dispatchOrder } = useOrderContext();


    async function placeOrder(){
        console.log(currentOrder)
       const {result, error} =  await addData("orders",currentOrder)
       console.log(result, error)
        window.alert("Order created")
    }

    return <div onClick={placeOrder}>payment Page</div>
}

export default PaymentPage