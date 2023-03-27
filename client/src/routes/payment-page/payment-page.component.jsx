// import './payment-page.styles.css'
import { useState } from "react"
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"
const stripePublic = import.meta.env.VITE_API_KEY;


const PaymentPage = () => {
    const [products, setProducts] = useState(
        [
            {
                name : "RTX 4090",
                price : 1000
            },
            {
                name : "RTX 4080",
                price : 10000
            }
        ]
    )

    const makePayment = async (token) => {
        try {
            const response = await axios.post("http://localhost:5000/api/v1/payment", {products})
            window.location.href = response.data.url
        } catch (error) {
            console.log(error)
        }
    }
    return(
    <div className='payment-page-container'>
        <button onClick={makePayment}>Make Payment</button>
    </div>
    )
    
}

export default PaymentPage