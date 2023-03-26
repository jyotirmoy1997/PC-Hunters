import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import { updateProduct } from '../../features/products/productSlice';
import { useDispatch } from 'react-redux';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";   
     

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
                <button onClick={onSubmitHandler}>Update Product</button>
            </form>
        </div>
    )
}

export default ProductUpdateForm