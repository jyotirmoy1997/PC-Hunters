import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dropdown } from 'primereact/dropdown';
import { updateProduct } from '../../features/products/productSlice';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";   
import "./product-update-form.styles.css"
     

const categories = [
    {name : 'Processors', code : "PROC"},
    {name : 'Cooling System', code : "CS"},
    {name : 'RAM', code : "RAM"},
    {name : 'Mother Boards', code : "MB"},
    {name : 'Graphics Cards', code : "GPU"},
    {name : 'Storage', code : "PSU"},
    {name : 'Cabinets', code : "CAB"},
]


        
const ProductUpdateForm = ({product}) => {
    const dispatch = useDispatch()
    const [selectedCategory, setSelectedCategory] = useState(categories.filter((p) => p.name === product.category)[0])
    const [formData, setFormData] = useState({
        name : product.name,
        category : product.category,
        image : product.image,
        price : product.price,
        description : product.description
    })

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        const newValue = name === "price" ? parseFloat(value) : value;
        setFormData({ ...formData, [name]: newValue, category: selectedCategory.name });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault()
        dispatch(updateProduct({productId : product._id, product :formData}))
    }


    return(
        <div className='product-update-form-wrapper'>
            <form action="">
                <label className='ele1' htmlFor="">Name</label>
                <input className='ele2' type="text" name='name' value={formData.name} onChange={onChangeHandler} />
                <label className='ele3' htmlFor="">Category</label>
                <Dropdown 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.value)} 
                    options={categories} 
                    optionLabel="name" 
                    placeholder="Select a Category" 
                    className="className='ele4'" 
                />
                <label className='ele5' htmlFor="">ImageURL</label>
                <input className='ele6' type="text" name='imageURL' value={formData.imageURL} onChange={onChangeHandler} />
                <label className='ele7' htmlFor="">Price</label>
                <input className='ele8' type="number" name='price' value={formData.price} onChange={onChangeHandler} />
                <label className='ele9' htmlFor="">Description</label>
                <textarea className='ele10' name="description" id="" cols="30" rows="10" value={formData.description }
                onChange={onChangeHandler}></textarea>
                <button className='ele11' onClick={onSubmitHandler}>Update Product</button>
            </form>
        </div>
    )
}

export default ProductUpdateForm