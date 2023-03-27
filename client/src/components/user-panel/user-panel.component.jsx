import { Fragment, useState } from "react"
import { getAllCartItems } from "../../features/cart/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import "./user-panel.styles.css"
import DashboardCart from "../dashboard-cart/dashboard-cart.component"

const UserPanel = ({users}) => {
    const [currentUser, setCurrentUser] = useState({})
    const [cartOpen, setCartOpen] = useState(false)
    const onCartClickHandler = (user) => {
        setCurrentUser(user)
        setCartOpen(true)
    }
    return(
        <div className="user-panel">
            {
                !cartOpen && 
                <Fragment>
                    <div className="user-panel-header">
                        <span>Name</span>
                        <span>Email</span>
                        <span>Cart</span>
                    </div>
                    <Fragment>
                        {
                            users.map((user) => {
                                return(
                                <div key={user._id} className="user-panel-rows">
                                    <span>{user.name}</span>
                                    <span>{user.email}</span>
                                    <button onClick={() => onCartClickHandler(user)}>Cart</button>
                                </div>
                                )
                            })
                        }
                    </Fragment>
                </Fragment>
            }
           {
             cartOpen &&
             <div>
                <button onClick={() => setCartOpen(false)}>Back</button>
                <DashboardCart user={currentUser._id} />
             </div>
             
           } 
        
            
        </div>
    )
}

export default UserPanel