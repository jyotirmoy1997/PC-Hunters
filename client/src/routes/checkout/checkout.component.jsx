import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"
import CheckOutItem from "../../components/checkout-item.component/checkout-item.component";
import { selectAllCartItems, selectCartTotal } from "../../features/cart/cartSlice";
import { selectProducts } from "../../features/products/productSlice";
import { selectUser } from "../../features/user/userSlice";
import { nanoid } from 'nanoid'
import axios from "axios";
import './checkout.styles.css'


const CheckOut = () => {
    const cartItems = useSelector(selectAllCartItems)
    const cartTotal = useSelector(selectCartTotal)
    const products = useSelector(selectProducts)
    const {userId} = useSelector(selectUser)
    const navigate = useNavigate()
    const makePayment = async (token) => {
        try {
            const response = await axios.post("http://localhost:5000/api/v1/payment", { user : userId, products : cartItems})
            window.location.href = response.data.url
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <Fragment>
            {
                cartItems.length === 0 ? 
                <div className="empty-checkout-page">
                    <h1>Cart is Empty</h1>
                    <button className="back-to-shop" onClick={() => navigate("/shop")}>Go Back to Shopping</button>
                </div> :
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
                            <span>Price (&#8377;)</span>
                        </div>
                        <div className="header-block">
                            <span>Remove</span>
                        </div>
                    </div>
                    <div className="checkout-items">
                        {
                            cartItems.map((cartItem) => <CheckOutItem key={nanoid()} products={products} cartItem={cartItem} />)
                        }
                    </div>
                    <div className="total">&#8377; {cartTotal}</div>
                    <button className="payment-btn" onClick={makePayment}>Go to Payment</button>
                </div>
            }
        </Fragment>
        
    )
}

export default CheckOut;