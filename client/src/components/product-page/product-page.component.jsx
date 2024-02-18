import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectProducts } from "../../features/products/productSlice"
import { useParams, useNavigate } from "react-router"
import { selectUser } from "../../features/user/userSlice"
import { addCartItem } from "../../features/cart/cartSlice"
import Footer from "../../components/footer/footer.component"
import { BounceLoader } from "react-spinners"
import "./product-page.styles.css"

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "grey",
  };

const ProductPage = () => {
    const [quantity, setQuantity] = useState(1)
    const { productId } = useParams()
    const allProducts = useSelector(selectProducts)
    
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const addProductToCart = () => {
        dispatch(addCartItem({user : user.userId, product : product._id, quantity : quantity}))
    }
    const incrementQuantity = () => {
        setQuantity(quantity + 1)
    }
    const decrementQuantity = () => {
        if(quantity === 1)
            return
        else
            setQuantity(quantity - 1)
    }

    if(!allProducts || !Array.isArray(allProducts)){
        return(
            <div className="product-page-wrapper">
                <BounceLoader
                    color="Grey"
                    loading
                    cssOverride={override}
                    size={70}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>)
    }

    const productsInfo = allProducts.filter((p) => p._id === productId)
    if(productsInfo.length < 1){
        return(
            <div className="product-page-wrapper-404">
                <h1>404</h1>
                <h2>Error : Product Not Found !</h2>
            </div>)
    }

    const product = productsInfo[0]
    return(
        <div className="product-page-outer">
            <div className="product-page-wrapper">
                <h1>{product.name}</h1>
                <div className="product-info-container">
                    <img src={product.image} alt="" />
                    <div>
                        <h2 className="prod-desc">Product Description</h2>
                        <h3 className="product-description">{product.description}</h3>
                        <div className="quantity-info-wrap" >
                            <h3>Select Quantity</h3>
                            <div className="quantity-info-outer">
                                <div className="quantity-info">
                                    <button onClick={decrementQuantity}>-</button>
                                    <div>{quantity}</div>
                                    <button onClick={incrementQuantity}>+</button>
                                </div>
                                <h3>Price : &#8377;{product.price * quantity}</h3>
                            </div>
                            {
                                Object.keys(user).length === 0 ? 
                                <button id="cart-add-btn" onClick={() => navigate('/log-in')}>Sign In to Buy</button> :
                                <button id="cart-add-btn" onClick={addProductToCart}>Add to Cart</button>
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
    
}

export default ProductPage