import "./dashboard-cart-items.styles.css"

const DashboardCartItem = ({cartItem, products}) => {
    const {product, quantity} = cartItem
    const {name, price, image, _id} = products.filter((p) => p._id === product)[0]


    return(
        <div className='dashboard-checkout-item-container'>
            <div className='dashboard-image-container'>
                <img src={image} alt="" />
            </div>
            <div className='dashboard-name'>{name}</div>
            <div className='dashboard-quantity'>{quantity}</div>
            <div className='dashboard-price'>{price}</div>
        </div>
    )

}

export default DashboardCartItem