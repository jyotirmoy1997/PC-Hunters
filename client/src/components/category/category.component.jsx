import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { Fragment } from "react"
import ProductCard from "../product-card/product-card.component"
import { selectProducts } from "../../features/products/productSlice"
import Footer from "../footer/footer.component"
import NotFoundRoute from "../../routes/not-found/not-found.routes"
import { BounceLoader } from "react-spinners"
import './category.styles.css'

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "grey",
  };

const Category = () => {
    const { category } = useParams()
    const products = useSelector(selectProducts).filter((product) => product.category === category)
    
    if(!products){
        return(
            <div>
                <BounceLoader
                    color="Grey"
                    loading
                    cssOverride={override}
                    size={70}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>)
    }
    else if(category && products.length < 1){
        return <NotFoundRoute /> 
    }
    return(
        <Fragment>
            <h1 className="category-title">{category.toUpperCase()}</h1>
            <div className="category-container"> 
                {
                    products && products.map((product) => (<ProductCard key={product._id} product={product} />))
                }
            </div>
            <Footer />
        </Fragment>
        
    )
}

export default Category