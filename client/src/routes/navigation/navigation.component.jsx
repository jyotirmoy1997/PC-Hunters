import {Outlet, Link} from 'react-router-dom';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userStatus, logOutUser, selectUser } from '../../features/user/userSlice';
import Logo from "../../assets/LOGO.png"
import CartIcon from '../../components/cart-icon/cart-icon.component';
import './navigation.styles.css';
import { clearCart } from '../../features/cart/cartSlice';


const Navigation = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userLoggedIn = useSelector(userStatus) === "loggedIn"
    const user = useSelector(selectUser)

    const logOutHandler = () => {
        dispatch(logOutUser())
        dispatch(clearCart())
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }
    console.log(user)
    return (
    <Fragment>
      <div className='navigation'>
        <Link className="logo-container" to="/">
            <img src={Logo} alt="" srcSet="" height={100} width={262} />
        </Link>
        <div className='nav-links-container'>
            {
                user.role === 'admin' ? 
                (<Fragment>
                    <Link className="nav-link" to="/admin">
                        Admin
                    </Link>
                </Fragment>) :
                (<Fragment>
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                </Fragment>)
            }
            {
                (userLoggedIn) ? 
                (<Link className="nav-link" onClick={logOutHandler}>
                    Log Out
                </Link>) : 
                (<Link className="nav-link" to="/log-in">
                    Log In
                </Link>)
            }
            {
                 user.role !== 'admin' && 
                 <Link className="nav-link" to="/checkout">
                    <CartIcon/>
                 </Link>
            }
            
            
        </div>
      </div>
      <Outlet/>
    </Fragment>
    
    )
  }

export default Navigation;