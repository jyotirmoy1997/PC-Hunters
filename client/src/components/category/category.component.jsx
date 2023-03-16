import ProductCard from "../product-card/product-card.component"
import './category.styles.css'
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { Fragment } from "react"
import { selectCategories } from "../../features/categories/categoriesSlice"
import { selectProducts } from "../../features/products/productSlice"

const Category = () => {
    const { category } = useParams()
    const products = useSelector(selectProducts).filter((product) => product.category === category)

    return(
        <Fragment>
            <h1 className="category-title">{category.toUpperCase()}</h1>
            <div className="category-container"> 
                {
                    products && products.map((product) => (<ProductCard key={product._id} product={product} />))
                }
            </div>
        </Fragment>
        
    )
}

export default Category