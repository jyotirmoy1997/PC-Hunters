import Directory from "../../components/directory/directory.component";
import { categories } from "../../data/categories";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Home = () => {
    const user = useSelector(selectUser)
    const navigate = useNavigate()
    useEffect(() => {
        if(user.role === 'admin'){
            navigate('/admin')
        }
    }, [])
    return(
        <div className="home-wrapper">
            <h1>Home Route</h1>
            <Directory categories={categories} />
        </div>
    )
}

export default Home