import { Link } from 'react-router-dom';
import './category-item.styles.css'

const DirectoryItem = ({category}) => {
    const {title, image} = category;
    return (
        <div className="directory-container" style={
            {
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover'
            }
          }>
          <div className="directory-body-container">
            <h2>{title.toUpperCase()}</h2>
            <p><Link to={`/shop/${title}`}>Shop Now</Link></p>
          </div>
        </div>
    )
}

export default DirectoryItem;