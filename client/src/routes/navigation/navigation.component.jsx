import {Outlet, Link} from 'react-router-dom';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userStatus, logOutUser } from '../../features/user/userSlice';
import Logo from "../../assets/LOGO.png"
import CartIcon from '../../components/cart-icon/cart-icon.component';
import './navigation.styles.css';



const Navigation = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userLoggedIn = useSelector(userStatus) === "loggedIn"
    const logOutHandler = () => {
        dispatch(logOutUser())
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }
    // const {currentUser, setCurrentUser} = useContext(UserContext)
    // const {isCartOpen} = useContext(CartContext)

    // const signOutHandler = async () => {
    //     const res = await signOutUser();
    //     setCurrentUser(null);
    // }
    return (
    <Fragment>
      <div className='navigation'>
        <Link className="logo-container" to="/">
            <img src={Logo} alt="" srcSet="" height={100} width={262} />
        </Link>
        <div className='nav-links-container'>
            <Link className="nav-link" to="/">
                Home
            </Link>
            <Link className="nav-link" to="/shop">
                Shop
            </Link>
            <Link className="nav-link" to="/admin">
                Admin
            </Link>
            {
                (userLoggedIn) ? 
                (<Link className="nav-link" onClick={logOutHandler}>
                    Log Out
                </Link>) : 
                (<Link className="nav-link" to="/log-in">
                    Log In
                </Link>)
            }
            
            <Link className="nav-link">
                <CartIcon/>
            </Link>
        </div>
        {/* {isCartOpen && <CartDropdown/>} */}
      </div>
      <Outlet/>
    </Fragment>
    
    )
  }

export default Navigation;