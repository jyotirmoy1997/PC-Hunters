import "./admin-product-card.styles.css"
import { Fragment, useState } from "react"
import ProductUpdateForm from "../product-update-form/product-update-form"
import { deleteProduct } from "../../features/products/productSlice"
import { useDispatch } from "react-redux"
import { getAllProducts } from "../../features/products/productSlice"

const AdminProductCard = ({products}) => {
    const dispatch = useDispatch()
    const [currentProduct, setCurrentProduct] = useState({})
    const [updateFlag, setUpdateFlag] = useState(false)
    console.log(products)
    const updateHandler = (product) => {
        setUpdateFlag(true)
        setCurrentProduct(product)
    }
    const deleteHandler = (id) => {
        const res = confirm("Do you want to delete this product ?")
        if(res){
            dispatch(deleteProduct(id))
            dispatch(getAllProducts())
        }
    }
    console.log("Rendered")
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
                                <button onClick={() => deleteHandler(_id)}>Delete</button>
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