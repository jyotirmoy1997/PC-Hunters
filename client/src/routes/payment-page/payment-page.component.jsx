import { useNavigate } from "react-router"
import "./payment-page.styles.css"

const PaymentPage = () => {
    const navigate = useNavigate()
    return(
    <div className='payment-page-container'>
        <h1>Payment Successful</h1>
        <button onClick={() => navigate("/shop")}>Go Back to Shopping</button>
    </div>
    )
    
}

export default PaymentPage