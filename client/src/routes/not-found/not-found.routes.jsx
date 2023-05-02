import notFoundImage from "../../assets/404.png"
import "./not-found.styles.css"

const NotFoundRoute = () => {
    return(
        <div className="not-found">
            <img src={notFoundImage} alt="" />
        </div>
    )
}

export default NotFoundRoute