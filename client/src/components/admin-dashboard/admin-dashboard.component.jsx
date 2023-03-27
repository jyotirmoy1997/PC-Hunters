import {useSelector, useDispatch} from "react-redux"
import { getAllProducts } from "../../features/products/productSlice"
import axios from "axios"
import { selectAllUser, getAllUsers } from "../../features/user/userSlice"
import "./admin-dashboard.styles.css"
import UserPanel from "../user-panel/user-panel.component"
import ProductPanel from "../product-panel/product-panel.component"
import { useState, useEffect } from "react"

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
                <h3>Hello Admin</h3>
                <h4 onClick={setUserPage}>Users</h4>
                <h4 onClick={setProductPage}>Products</h4>
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