import nf from "../../../assets/404.jpg"
import "./not-found.styles.css"

const NotFoundRoute = () => {
    return(
        <div className="not-found">
            <img src={nf} alt="" />
        </div>
    )
}

export default NotFoundRoute