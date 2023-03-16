import CategoryItem from "../directory-item/directory-item-component";
import './directory.styles.css'

const Directory = ({categories}) => {
    return(
    <div className="directory">
        {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
        ))}
    </div>
    )
}

export default Directory;