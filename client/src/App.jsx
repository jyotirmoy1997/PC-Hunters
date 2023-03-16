import {Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import LogIn from "./components/log-in/log-in.component"
import AdminDashBoard from './components/admin-dashboard/admin-dashboard.component';
// import SignInPage from './route/sign-in-page/sign-in-page.component';
// import Cart from './route/cart/cart.component';
import Shop from './routes/shop/shop.routes';
// import CheckOut from './route/checkout/checkout.component';
// import PaymentPage from './route/payment-page/payment-page.component';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from './features/products/productSlice';
import { getAllCategories } from './features/categories/categoriesSlice';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllCategories())
    dispatch(getAllProducts())
  }, [])
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home/>}/>
        <Route path='/log-in' element={<LogIn/>}/>
        <Route path='/admin' element={<AdminDashBoard/>}/>
        <Route path='/shop/*' element={<Shop/>}/> 
        {/* 
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/payment' element={<PaymentPage/>}/> */}
       </Route>
    </Routes>
  );
}

export default App;