import {useSelector} from "react-redux"
import { selectCartCount } from '../../features/cart/cartSlice'
import cartLogo from "../../assets/icons/cart-icon.png"
import './cart-icon.styles.css'

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