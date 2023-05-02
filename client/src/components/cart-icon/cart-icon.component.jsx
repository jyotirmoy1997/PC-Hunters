import './cart-icon.styles.css'
import cartLogo from "../../assets/icons/cart-icon.png"
import {useSelector} from "react-redux"
import { selectCartCount } from '../../features/cart/cartSlice'

const CartIcon = () => {
    const cartCount = useSelector(selectCartCount)
    return(
        <div className='cart-icon' >
            <img src={cartLogo} alt="" srcSet="" />
            <span>{cartCount}</span>
        </div>
    )
}

export default CartIcon