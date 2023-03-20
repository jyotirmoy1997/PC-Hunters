import {useSelector, useDispatch} from "react-redux"
import { getAllProducts } from "../../features/products/productSlice"
import axios from "axios"
import { selectUser } from "../../features/user/userSlice"

const AdminDashBoard = () => {
    const onClickHandler = async () => {
        
    }

    return(
        <div>
            <h1>Admin Dashboard</h1>
            <div>
                Side Panel
            </div>
            <div>
                Main Panel
            </div>
            <button onClick={onClickHandler}>Populate</button>
        </div>

    )
}

export default AdminDashBoard