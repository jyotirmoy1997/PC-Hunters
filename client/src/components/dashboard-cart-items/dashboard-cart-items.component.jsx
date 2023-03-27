
const DashboardCartItem = ({cartItem, products}) => {
    const {product, quantity} = cartItem
    const {name, price, image, _id} = products.filter((p) => p._id === product)[0]


    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={image} alt="" />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='value'>{quantity}</span>
                </span>
            <span className='price'>{price}</span>
        </div>
    )

}

export default DashboardCartItem