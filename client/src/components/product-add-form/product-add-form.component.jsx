import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import { addNewProduct } from '../../features/products/productSlice';
import { useDispatch } from 'react-redux';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";   

const initialState = {
    name : "",
    category : "",
    imageURL : "",
    price : 0,
    description : ""
}
        

const categories = [
    {name : 'Processors', code : "PROC"},
    {name : 'Cooling System', code : "CS"},
    {name : 'RAM', code : "RAM"},
    {name : 'Mother Boards', code : "MB"},
    {name : 'Graphics Cards', code : "GPU"},
    {name : 'Storage', code : "PSU"},
    {name : 'Cabinets', code : "CAB"},
]


        
const ProductAddForm = () => {
    const dispatch = useDispatch()
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
    const [formData, setFormData] = useState(initialState)

    const onChangeHandler = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value, category : selectedCategory.name})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        dispatch(addNewProduct(formData))
    }

    return(
        <div>
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text" name='name' value={formData.name} onChange={onChangeHandler} />
                <label htmlFor="">Category</label>
                <Dropdown 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.value)} 
                    options={categories} 
                    optionLabel="name" 
                    placeholder="Select a Category" 
                    className="w-full md:w-14rem" 
                />
                <label htmlFor="">ImageURL</label>
                <input type="text" name='imageURL' value={formData.imageURL} onChange={onChangeHandler} />
                <label htmlFor="">Price</label>
                <input type="number" name='price' value={formData.price} onChange={onChangeHandler} />
                <label htmlFor="">Description</label>
                <textarea name="description" id="" cols="30" rows="10" value={formData.description }
                onChange={onChangeHandler}></textarea>
                <button onClick={onSubmitHandler}>Add Product</button>
            </form>
        </div>
    )
}

export default ProductAddForm