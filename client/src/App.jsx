import {Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import LogIn from "./components/log-in/log-in.component"
import AdminDashBoard from './components/admin-dashboard/admin-dashboard.component';
import Shop from './routes/shop/shop.routes';
import CheckOut from './routes/checkout/checkout.component';
// import PaymentPage from './route/payment-page/payment-page.component';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { getAllProducts } from './features/products/productSlice';
import { getAllCategories } from './features/categories/categoriesSlice';
import { selectUser, userStatus} from './features/user/userSlice'
import { getAllCartItems } from './features/cart/cartSlice';
import ProductPage from './components/product-page/product-page.component';

const App = () => {
  const dispatch = useDispatch()
  const {userId, role} = useSelector(selectUser)
  const userStat = useSelector(userStatus)
  useEffect(() => {
    dispatch(getAllCategories())
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    if(userStat === "loggedIn" && role === 'user'){
      dispatch(getAllCartItems(userId))
      console.log("Called")
    }
  }, [userStat])

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route path='/log-in' element={<LogIn/>}/>
        {
          (role === 'admin') ? 
          (<Fragment>
            <Route path='/admin' element={<AdminDashBoard/>}/>
          </Fragment> ) : (
          <Fragment>
            <Route index={true} element={<Home/>}/>
            <Route path='/shop/*' element={<Shop/>}/> 
            <Route path='/checkout' element={<CheckOut/>}/>
            <Route path='product'>
              <Route path=':productId' element={<ProductPage/>}/>
            </Route>
          </Fragment>)
        }
        {/* <Route path='/payment' element={<PaymentPage/>}/> */}
       </Route>
    </Routes>
  );
}

export default App;