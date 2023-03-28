import { useNavigate } from "react-router-dom";
import CheckOutItem from "../../components/checkout-item.component/checkout-item.component";
import './checkout.styles.css'
import {useSelector, useDispatch} from "react-redux"
import { selectAllCartItems, selectCartTotal } from "../../features/cart/cartSlice";
import { selectProducts } from "../../features/products/productSlice";
import { nanoid } from 'nanoid'
import axios from "axios";
import { selectUser } from "../../features/user/userSlice";

const CheckOut = () => {
    const cartItems = useSelector(selectAllCartItems)
    const cartTotal = useSelector(selectCartTotal)
    const products = useSelector(selectProducts)
    const {userId} = useSelector(selectUser)
    const navigate = useNavigate()

    console.log(cartItems)
    const makePayment = async (token) => {
        try {
            const response = await axios.post("http://localhost:5000/api/v1/payment", { user : userId, products : cartItems})
            window.location.href = response.data.url
        } catch (error) {
            console.log(error)
        }
    }
    return(
        
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            <div>
            {
                cartItems.map((cartItem) => <CheckOutItem key={nanoid()} products={products} cartItem={cartItem} />)
            }
            </div>
           <div className="total">${cartTotal}</div>
           <button className="el7" onClick={makePayment}>Go to Payment</button>
        </div>
    )
}

export default CheckOut;