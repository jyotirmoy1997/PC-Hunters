import "./not-found.styles.css"
import notFoundImage from "../../assets/404.png"

const NotFoundRoute = () => {
    return(
        <div className="not-found">
            <img src={notFoundImage} alt="" />
        </div>
    )
}

export default NotFoundRoute