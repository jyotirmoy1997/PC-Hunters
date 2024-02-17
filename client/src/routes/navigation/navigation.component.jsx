import {Outlet, Link} from 'react-router-dom';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userStatus, logOutUser, selectUser } from '../../features/user/userSlice';
import Logo from "../../assets/LOGO.png"
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartIconZero from '../../components/cart-icon/cart-icon-zero.component';
import './navigation.styles.css';
import { clearCart } from '../../features/cart/cartSlice';
import { useRef } from 'react';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navigation = () => {
    const navRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userLoggedIn = useSelector(userStatus) === "loggedIn"
    const user = useSelector(selectUser)

    const logOutHandler = () => {
        showNavBar()
        dispatch(logOutUser())
        dispatch(clearCart())
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive-nav")
    }

    return (
    <Fragment>
      <div className='navigation'>
        <Link className="logo-container" to="/">
            <img src={Logo} alt="" srcSet="" height={100} width={262} />
        </Link>
        <div ref={navRef} className='nav-links-container'>
            {
                user.role === 'admin' ? 
                (<Fragment>
                    <Link className="nav-link" to="/admin">
                        Admin
                    </Link>
                </Fragment>) :
                (<Fragment>
                    <Link className="nav-link" to="/" onClick={showNavBar}>
                        Home
                    </Link>
                    <Link className="nav-link" to="/shop" onClick={showNavBar}>
                        Shop
                    </Link>
                    
                </Fragment>)
            }
            {
                (userLoggedIn) ? 
                (
                    <Fragment>
                        {
                            user.role === 'user' ? 
                            <Link className="nav-link" to="/orders" onClick={showNavBar}>
                                My Orders
                            </Link> : null
                        }
                        
                        <Link className="nav-link" onClick={logOutHandler}>
                            Log Out
                        </Link>
                    </Fragment>
                ) : 
                (<>
                    <Link className="nav-link" to="/log-in" onClick={showNavBar}>
                        Log In
                    </Link>
                    <Link className="nav-link" to="/checkout" onClick={showNavBar}>
                        <CartIconZero/>
                    </Link>
                </>
                
                )
            }
            {
                 user.role !== 'admin' && userLoggedIn && 
                 <Link className="nav-link" to="/checkout" onClick={showNavBar}>
                    <CartIcon/>
                 </Link>
            }
             <button className="nav-btn nav-close-btn" onClick={showNavBar} >
                <GrClose/>
            </button>
            
        </div>
        <button className="nav-btn" onClick={showNavBar}>
            <GiHamburgerMenu/>
        </button>
      </div>
      <Outlet/>
    </Fragment>
    
    )
  }

export default Navigation;