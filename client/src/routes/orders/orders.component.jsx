import { useSelector, useDispatch } from "react-redux"
import { selectUser } from "../../features/user/userSlice"
import { getAllOrderItems, selectOrderItems, selectOrderStatus } from "../../features/order/orderSlice"
import { selectProducts } from "../../features/products/productSlice"
import { useState } from "react"
import { nanoid } from "nanoid"
import OrderItem from "../../components/order-items/order-items.component"
import "./orders.styles.css"
import { Fragment } from "react"

const Orders = () => {
    const userOrders = useSelector(selectOrderItems)
    console.log(userOrders)
    return(
        <div>
            <h1>My Orders</h1>
            <Fragment>
                {
                    userOrders.length === 0 ? <h2>You don't have any orders</h2> :
                        <div className="checkout-container">
                            <div className="checkout-header">
                                <div className="header-block">
                                    <span>Product</span>
                                </div>
                                <div className="header-block">
                                    <span>Description</span>
                                </div>
                                <div className="header-block">
                                    <span>Quantity</span>
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