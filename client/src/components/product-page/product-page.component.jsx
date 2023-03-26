import { useSelector, useDispatch } from "react-redux"
import { selectProducts } from "../../features/products/productSlice"
import { useParams, useNavigate } from "react-router"
import { useState } from "react"
import { selectUser } from "../../features/user/userSlice"
import { addCartItem } from "../../features/cart/cartSlice"
import "./product-page.styles.css"

const ProductPage = () => {
    const [quantity, setQuantity] = useState(1)
    const { productId } = useParams()
    const product = useSelector(selectProducts).filter((p) => p._id === productId)[0]
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addProductToCart = () => {
        dispatch(addCartItem({user : user.userId, product : product._id, quantity : quantity}))
    }

    console.log(product)
    const incrementQuantity = () => {
        setQuantity(quantity + 1)
    }
    const decrementQuantity = () => {
        if(quantity === 1)
            return
        else
            setQuantity(quantity - 1)
    }
    return(
        <div className="product-page-outer">
            <div className="product-page-wrapper">
                <h1>{product.name}</h1>
                <div className="product-info-container">
                    <img src={product.image} alt="" />
                    <div>
                        <h3>{product.description}</h3>
                        <div>
                            <h3>Select Quantity</h3>
                            <div className="quantity-info">
                                <button onClick={decrementQuantity}>-</button>
                                <div>{quantity}</div>
                                <button onClick={incrementQuantity}>+</button>
                            </div>
                            <h3>Price : ${product.price * quantity}</h3>
                        </div>
                        <button onClick={addProductToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default ProductPage