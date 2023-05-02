import { Fragment, useState } from "react"
import DashboardCart from "../dashboard-cart/dashboard-cart.component"
import "./user-panel.styles.css"


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
                                    <button className="dashboard-cart-btn" onClick={() => onCartClickHandler(user)}>Check Cart</button>
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
                <button className="dashboard-btn-back" onClick={() => setCartOpen(false)}>&#8592; Back To Users</button>
                <DashboardCart user={currentUser._id} />
             </div>
             
           } 
        
            
        </div>
    )
}

export default UserPanel