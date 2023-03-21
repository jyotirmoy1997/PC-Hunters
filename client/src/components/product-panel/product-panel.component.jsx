import { categories } from "../../data/categories"
import { useState } from "react"
import "./product-panel.styles.css"

const ProductPanel = () => {
    const [showCategory, setShowCategory] = useState(false)
    const [currentCategory, setCurrentCategory] = useState(null)
    const navigateToCategory = (category) => {
        setShowCategory(true)
        setCurrentCategory(category)
    }
    console.log(currentCategory)
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
                <div>
                    <button onClick={() => setShowCategory(false)}>Back</button>
                    <h2>Category</h2> 
                </div>
            }
            
        </div>
        
    )
}

export default ProductPanel