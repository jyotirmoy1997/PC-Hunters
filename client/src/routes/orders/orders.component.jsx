import { Fragment } from "react"
import { useSelector } from "react-redux"
import { selectOrderItems } from "../../features/order/orderSlice"
import { nanoid } from "nanoid"
import OrderItem from "../../components/order-items/order-items.component"
import "./orders.styles.css"


const Orders = () => {
    const userOrders = useSelector(selectOrderItems)
    return(
        <div className="order-page-outer">
            <h1>My Orders</h1>
            <Fragment>
                {
                    userOrders.length === 0 ? <h2>You don't have any orders</h2> :
                        <div className="checkout-container">
                            <div className="checkout-header order-ch-head">
                                <div >Product
                                </div>
                                <div >Description
                                </div>
                                <div >Quantity
                                </div>
                            </div>
                            <div className="order-items">
                                    {
                                        userOrders.map(order => <OrderItem key={nanoid()} order={order} />)
                                    }
                            </div>
                        </div>
                }
            </Fragment>
        </div>
        
    )
}

export default Orders