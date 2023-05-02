import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { Fragment } from "react"
import ProductCard from "../product-card/product-card.component"
import { selectProducts } from "../../features/products/productSlice"
import './category.styles.css'

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