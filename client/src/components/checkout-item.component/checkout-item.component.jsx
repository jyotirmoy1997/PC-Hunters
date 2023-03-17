import './checkout-item.styles.css'

const CheckOutItem = ({cartItem, products}) => {
    const {product, quantity} = cartItem
    const {name, price, image} = products.filter((p) => p._id === product)[0]
    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={image} alt="" />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' >
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' >
                    &#10095;
                </div>
                </span>
            <span className='price'>{price}</span>
            <div className='remove-button'>&#10005;</div>
        </div>
    )

}

export default CheckOutItem