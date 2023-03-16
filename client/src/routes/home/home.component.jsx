import Directory from "../../components/directory/directory.component";
import { categories } from "../../data/categories";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
    
    return(
        <div className="home-wrapper">
            <h1>Home Route</h1>
            <Directory categories={categories} />
        </div>
    )
}

export default Home