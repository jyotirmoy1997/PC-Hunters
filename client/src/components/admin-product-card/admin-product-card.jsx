import { Fragment, useState } from "react"
import { useDispatch } from "react-redux"
import ProductUpdateForm from "../product-update-form/product-update-form"
import { deleteProduct } from "../../features/products/productSlice"
import { getAllProducts } from "../../features/products/productSlice"

import "./admin-product-card.styles.css"
        

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

                                <img className="product-card-bg" src={image} alt="" />
                            </div>
                            <div className="admin-product-card-footer">
                                <span>
                                    {name}
                                </span>
                                <span className='admin-price-tag'>
                                    ${price}
                                </span>
                            </div>
                            <div className="admin-product-card-update">
                                <button className="pd-update-btn" onClick={() => updateHandler(product)}>Update</button>
                                <button className="pd-update-btn pd-del" onClick={() => deleteHandler(_id)}>Delete</button>
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
                            <button className="dashboard-btn-back"  onClick={() => setUpdateFlag(false)}> &#8592; Back to Product</button>
                            <ProductUpdateForm product={currentProduct}/>
                    </div> 

               }            
            </div>
        </Fragment>
        
    )
}

export default AdminProductCard