import CheckOutItem from "../../components/checkout-item.component/checkout-item.component";
import {useSelector, useDispatch} from "react-redux"
import { getAllCartItems, selectAllCartItems, selectCartTotal } from "../../features/cart/cartSlice";
import { selectProducts } from "../../features/products/productSlice";
import { nanoid } from 'nanoid'
import DashboardCartItem from "../dashboard-cart-items/dashboard-cart-items.component";
import { useEffect } from "react";

const DashboardCart = ({user}) => {
    console.log(user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCartItems(user))
    }, [])


    const cartItems = useSelector(selectAllCartItems)
    const cartTotal = useSelector(selectCartTotal)
    const products = useSelector(selectProducts)

    console.log(cartItems, cartTotal, products)
    return(
        
        <div className="checkout-container">
            <h2>Cart</h2>
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
            </div>

            <div>
            {
                cartItems.map((cartItem) => <DashboardCartItem key={nanoid()} products={products} cartItem={cartItem} />)
            }
            </div>
           <div className="total">${cartTotal}</div>
        </div>
    )
}

export default DashboardCart