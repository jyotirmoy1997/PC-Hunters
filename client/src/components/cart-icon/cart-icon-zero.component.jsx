import cartLogo from "../../assets/icons/cart-icon.png"
import './cart-icon.styles.css'

const CartIconZero = () => {
    return(
        <div className='cart-icon' >
            <img src={cartLogo} alt="" srcSet="" />
            <span>0</span>
        </div>
    )
}

export default CartIconZero