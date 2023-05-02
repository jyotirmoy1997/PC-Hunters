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