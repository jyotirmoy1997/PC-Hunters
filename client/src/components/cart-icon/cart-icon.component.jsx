import './cart-icon.styles.css'
import cartLogo from '../../assets/cart-icon.png'

const CartIcon = () => {
    return(
        <div className='cart-icon' >
            <img src={cartLogo} alt="" srcSet="" />
            <span>0</span>
        </div>
    )
}

export default CartIcon