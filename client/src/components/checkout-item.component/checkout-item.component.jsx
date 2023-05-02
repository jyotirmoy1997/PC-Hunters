import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem, updateCartItem } from '../../features/cart/cartSlice'
import { selectUser } from '../../features/user/userSlice'
import deleteIcon from "../../assets/icons/trash.png"
import './checkout-item.styles.css'

const CheckOutItem = ({cartItem, products}) => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const {product, quantity} = cartItem
    const {name, price, image, _id} = products.filter((p) => p._id === product)[0]

    const incrementHandler = () => {
        dispatch(updateCartItem({user : user.userId, product : _id, operation : "increment"}))
    }

    const decrementHandler = () => {
        dispatch(updateCartItem({user : user.userId, product : _id, operation : "decrement"}))
    }

    const removeCartItemHandler = () => {
        console.log("Clicked")
        dispatch(removeCartItem({user : user.userId, product : _id}))
    }


    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={image} alt="" />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={decrementHandler} className='arrow' >
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div onClick={incrementHandler} className='arrow' >
                    &#10095;
                </div>
                </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={removeCartItemHandler} >
                <img src={deleteIcon} alt="" height={30} width={30} />
            </div>
        </div>
    )

}

export default CheckOutItem