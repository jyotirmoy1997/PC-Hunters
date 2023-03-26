import "./admin-product-card.styles.css"
import { Fragment, useState } from "react"
import ProductUpdateForm from "../product-update-form/product-update-form"

const AdminProductCard = ({products}) => {
    const [currentProduct, setCurrentProduct] = useState({})
    const [updateFlag, setUpdateFlag] = useState(false)
    console.log(products)
    const updateHandler = (product) => {
        setUpdateFlag(true)
        setCurrentProduct(product)
    }
    return(
        <Fragment>
            {
                !updateFlag && <div className="admin-product-card">
                {
                    products.map((product) => {
                    const  {name, image, price, _id} = product
                    return(
                        <div key={_id} className="admin-product-card-container" >
                
                            <div className='admin-product-card-box'>
                                <img src={image} alt="" />
                                <button onClick={() => updateHandler(product)}>Update</button>
                            </div>
                            <div className="admin-product-card-footer">
                                <span>
                                    {name}
                                </span>
                                <span className='admin-price-tag'>
                                    ${price}
                                </span>
                            </div>
                        </div>
                    )})
                }
            </div>
            }
            
            <div>
               {
                    updateFlag && 
                    <div>
                            <button onClick={() => setUpdateFlag(false)}>Back to Product</button>
                            <ProductUpdateForm product={currentProduct}/>
                    </div> 

               }            
            </div>
        </Fragment>
        
    )
}

export default AdminProductCard