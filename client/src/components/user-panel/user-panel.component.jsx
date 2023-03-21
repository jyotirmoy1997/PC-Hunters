import "./user-panel.styles.css"

const UserPanel = ({users}) => {
    return(
        <div className="user-panel">
            <div className="user-panel-header">
                <span>Name</span>
                <span>Email</span>
                <span>Cart</span>
            </div>
            <div className="user-panel-rows">
                Users
            </div>
        </div>
    )
}

export default UserPanel