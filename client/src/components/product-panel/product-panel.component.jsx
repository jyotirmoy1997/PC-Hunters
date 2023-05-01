import { categories } from "../../data/categories"
import { useState, useEffect } from "react"
import {useSelector} from "react-redux"
import { selectProducts } from "../../features/products/productSlice"
import AdminProductCard from "../admin-product-card/admin-product-card"
import ProductAddForm from "../product-add-form/product-add-form.component"
import "./product-panel.styles.css"

const ProductPanel = () => {
    const products = useSelector(selectProducts)
    const [showCategory, setShowCategory] = useState(false)
    const [currentCategory, setCurrentCategory] = useState(null)
    const [currentProducts, setCurrentProducts] = useState([])
    const [updateProductFlag, setUpdateProductFlag] = useState(false)

    const navigateToCategory = (category) => {
        setShowCategory(true)
        setCurrentCategory(category)
    }

    useEffect(() => {
        if(currentCategory){
            let p = products.filter((p) => p.category === currentCategory)
            setCurrentProducts(p)
        }
    }, [currentCategory])

    return(
        <div>
            {
                !showCategory && 
                <div className="product-panel-wrapper">
                    {
                        categories.map((category) => {
                            return(
                                <div key={category.id} 
                                onClick={() => navigateToCategory(category.title)} className="product-panel-product" style={
                                    {
                                    backgroundImage: `url(${category.image})`,
                                    backgroundSize: 'cover'
                                    }
                                }>
                                <div className="product-panel-product-body">
                                    <h2>{category.title.toUpperCase()}</h2>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
            {
                showCategory && 
                <div className="product-panel-alternate" >
                    <button className="dashboard-btn-back" onClick={() => setShowCategory(false)}> &#8592; Back</button>
                    <AdminProductCard products={currentProducts} />
                </div>
            }
            
        </div>
        
    )
}

export default ProductPanel