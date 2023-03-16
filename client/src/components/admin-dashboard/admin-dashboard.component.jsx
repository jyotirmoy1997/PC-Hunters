import {useSelector, useDispatch} from "react-redux"
import { getAllProducts } from "../../features/products/productSlice"
import axios from "axios"

const AdminDashBoard = () => {
    
    const onClickHandler = async () => {
        const response = await axios.post("http://localhost:5000/api/v1/categories/uploadCategories", {id : 1})
        console.log(response)
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