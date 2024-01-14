import {Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import LogIn from "./components/log-in/log-in.component"
import AdminDashBoard from './components/admin-dashboard/admin-dashboard.component';
import Shop from './routes/shop/shop.routes';
import CheckOut from './routes/checkout/checkout.component';
import PaymentPage from "./routes/payment-page/payment-page.component"
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { getAllProducts } from './features/products/productSlice';
import { getAllCategories } from './features/categories/categoriesSlice';
import { selectUser, userStatus} from './features/user/userSlice'
import { getAllCartItems } from './features/cart/cartSlice';
import { getAllOrderItems } from './features/order/orderSlice';
import ProductPage from './components/product-page/product-page.component';
import NotFoundRoute from "./routes/not-found/not-found.routes"
import Orders from './routes/orders/orders.component';

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
      dispatch(getAllOrderItems(userId))
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
            <Route index={true} element={<Home/>}/>
          </Fragment> ) : (
          <Fragment>
            <Route index={true} element={<Home/>}/>
            <Route path='/shop/*' element={<Shop/>}/> 
            <Route path='/checkout' element={<CheckOut/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='product'>
              <Route path=':productId' element={<ProductPage/>}/>
            </Route>
            <Route path='/payment' element={<PaymentPage/>}/>
          </Fragment>)
        }
       </Route>
       <Route path='*' element={<NotFoundRoute />}/>
    </Routes>
  );
}

export default App;