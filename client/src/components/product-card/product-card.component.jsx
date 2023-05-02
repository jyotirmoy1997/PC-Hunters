import { useNavigate } from 'react-router'
import './product-card.styles.css'

const ProductCard = ({product}) => {
    const navigate = useNavigate()
    const {name, image, price} = product
    const navigateToProductPage = () => {
        navigate(`/product/${product._id}`)
    }
    return(
        <div className="product-card-container" >

            <div onClick={navigateToProductPage} className='product-card-box'>
                <img src={image} alt="" />
            </div>
            <div className="product-card-footer">
                <span>
                    {name}
                </span>
                <span className='price-tag'>
                &#8377;{price}
                </span>
            </div>
        </div>
    )
}

export default ProductCard