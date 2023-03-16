import reactIcon from "../../../assets/icons/react-icon.png"
import mongoDBIcon from "../../../assets/icons/mongodb-icon.png"
import expressIcon from "../../../assets/icons/express-js-icon.png"
import nodeIcon from "../../../assets/icons/node-js-icon.png"
import linkedInIcon from "../../../assets/icons/linkedIn.png"
import githubIcon from "../../../assets/icons/github.png"
import "./footer.styles.css"

const Footer = () => {
    return(
        <div className="footer">
            <span>
                Built using
            </span>
            <span className="footer-icons">
                <img id="mongo-icon" src={mongoDBIcon} alt="" />
                <img id="express-icon" src={expressIcon} alt="" />
                <img id="react-icon" src={reactIcon} alt="" />
                <img id="node-icon" src={nodeIcon} alt="" />
            </span>
            <span>
                By Jyotirmoy Das
            </span>
            <span className="footer-icons">
                <a href="https://github.com/jyotirmoy1997" target="_blank">
                    <img id="github-icon" src={githubIcon} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/jyotirmoy-das/" target="_blank">
                    <img id="linked-in-icon" src={linkedInIcon} alt="" />
                </a>
            </span>
        </div>
    )
}

export default Footer