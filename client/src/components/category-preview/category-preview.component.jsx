import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component'
import './category-preview.styles.css'

const CategoryPreview = ({title, products}) => {
    const productsToShow = products.filter((product) => product.category === title)
    return(
    <div className='category-preview-container'>
        <h2>
            <Link className='title' to={title}>{title.toUpperCase()}</Link>
        </h2>
        <div className='preview'>
            {
                productsToShow.filter((value, index) => index < 4).map((product) => (
                    <ProductCard key={product._id} product={product}/>
                ))
            }
        </div>
    </div>)
    
}

export default CategoryPreview;