import './product-card.styles.css'



const ProductCard = ({product}) => {
    const {name, image, price} = product

    return(
        <div className="product-card-container" >
            <div className='product-card-box'>
                <img src={image} alt="" />
                <button className='el7'>Add to Cart</button>
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