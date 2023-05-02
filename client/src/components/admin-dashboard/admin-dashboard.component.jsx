import {useSelector, useDispatch} from "react-redux"
import { useState, useEffect } from "react"
import { selectAllUser, getAllUsers } from "../../features/user/userSlice"
import UserPanel from "../user-panel/user-panel.component"
import ProductPanel from "../product-panel/product-panel.component"
import "./admin-dashboard.styles.css"
import usersLogo from "../../assets/icons/users.png"
import productsLogo from "../../assets/icons/products.png"

const AdminDashBoard = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUser)
    const [currentPage, setCurrentPage] = useState("user")
    const setUserPage = () => {
        setCurrentPage("user")
    }
    const setProductPage = () => {
        setCurrentPage("product")
    }

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    return(
        <div className="admin-dashboard-outer">
            <div className="admin-dashboard-sidebar">
                {
                    window.innerWidth < 500 ? null : <h1>Welcome Admin</h1>
                }
                
                <div className="sidebar-components" onClick={setUserPage}>
                    <img src={usersLogo} height={50} width={50} />
                    <h4 >Users</h4>
                </div>
                <div className="sidebar-components" onClick={setProductPage}>
                    <img src={productsLogo} height={50} width={50} />
                    <h4 >Products</h4>
                </div>
            </div>
            <div className="admin-dashboard-main">
                <h1>Admin Dashboard</h1>
                {
                    currentPage === "user" ? <UserPanel users={users}/> : <ProductPanel/>
                }
            </div>
        </div>

    )
}

export default AdminDashBoard