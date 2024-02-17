import { useSelector } from "react-redux";
import CategoryPreview from "../category-preview/category-preview.component";
import { selectCategories } from "../../features/categories/categoriesSlice";
import { selectProducts } from "../../features/products/productSlice";
import Footer from "../footer/footer.component";
import { BounceLoader } from "react-spinners"
import './categories-preview.styles.css'

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "grey",
  };

const CategoriesPreview = () => {
    const categories = useSelector(selectCategories)
    const Products = useSelector(selectProducts)
    
    if(!categories){
        return(
            <div className="shop-container" >
                <BounceLoader
                    color="Grey"
                    loading
                    cssOverride={override}
                    size={70}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        )
    }
    return(
    <>
        <div className="shop-container" >
            {
                categories.map((category) => (<CategoryPreview
                    key={category._id}
                    title={category.name} 
                    products={Products} />))
            }
        </div>
        <Footer />
    </>
        
       
    )
}

export default CategoriesPreview;