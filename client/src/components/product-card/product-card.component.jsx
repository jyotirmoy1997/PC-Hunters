import './product-card.styles.css'
import {useDispatch, useSelector} from "react-redux"
import { selectUser } from '../../features/user/userSlice'
import { addCartItem } from '../../features/cart/cartSlice'


const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const {name, image, price} = product
    console.log(product._id)
    const addProductToCart = () => {
        dispatch(addCartItem({user : user.userId, product : product._id, quantity : 1}))
    }
    return(
        <div className="product-card-container" >
            <div className='product-card-box'>
                <img src={image} alt="" />
                <button onClick={addProductToCart} className='el7'>Add to Cart</button>
            </div>
            <div className="product-card-footer">
                <span>
                    {name}
                </span>
                <span className='price-tag'>
                    ${price}
                </span>
            </div>
        </div>
    )
}

export default ProductCard