import "./order-items.styles.css"

const OrderItem = ({order}) => {
    const {image, name, quantity} = order
    return(
        <div className='order-item-container'>
            <div className='order-image-container'>
                <img src={image} alt="" />
            </div>
            <div className='order-name'>{name}</div>
            <div className='order-quantity'>{quantity}</div>
        </div>
    )
}

export default OrderItem