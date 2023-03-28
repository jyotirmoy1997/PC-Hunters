import {useSelector, useDispatch} from "react-redux"
import {selectUser} from "../../features/user/userSlice"
import { selectAllCartItems } from "../../features/cart/cartSlice"
import { addNewOrder } from "../../features/order/orderSlice"
import axios from "axios"

const PaymentPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const products = useSelector(selectAllCartItems)
    console.log(user, products)
    const makeOrder = () => {
        dispatch(addNewOrder({user, products}))
    }
    return(
    <div className='payment-page-container'>
        <h1>Payment Successful</h1>
        <button onClick={makeOrder}>Order</button>
        <button>Go Back to Shopping</button>
    </div>
    )
    
}

export default PaymentPage