import { useSelector } from "react-redux";
import CategoryPreview from "../category-preview/category-preview.component";
import { selectCategories } from "../../features/categories/categoriesSlice";
import { selectProducts } from "../../features/products/productSlice";
import './categories-preview.styles.css'

const CategoriesPreview = () => {
    const categories = useSelector(selectCategories)
    const Products = useSelector(selectProducts)
    return(
        <div className="shop-container" >
            {
                categories.map((category) => (<CategoryPreview
                    key={category._id}
                    title={category.name} 
                    products={Products} />))
            }
        </div>
       
    )
}

export default CategoriesPreview;