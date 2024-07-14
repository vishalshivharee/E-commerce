import React, {lazy, Suspense} from 'react'
import {
   BrowserRouter as Router,
   Route,
   Routes, 
   Navigate,
  } from 'react-router-dom'
  
  import { Toaster } from 'react-hot-toast'
  import store from '../src/redux/store';
  import { Provider } from 'react-redux';
const Home = lazy(() => import('./pages/home/Home'));
// import Home from './pages/home/Home'
const Order = lazy(() => import('./pages/order/Order'));
// import Order from './pages/order/Order'
const Nopage = lazy(() => import('./pages/nopage/Nopage'));
// import Nopage from './pages/nopage/Nopage'
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Cart = lazy(() => import('./pages/cart/Cart'));

const Mystate = lazy(() => import('./context/data/Mystate'));

const Allproducts = lazy(() => import('./pages/allproducts/Allproducts'));

const Signup = lazy(() => import('./pages/registration/Signup'));
const Login = lazy(() => import('./pages/registration/Login'));

const ProductInfo = lazy(() => import('./pages/productinfo/ProductInfo'));

const AddProduct = lazy(() => import('./pages/admin/page/AddProduct'));

const UpdateProduct = lazy(() => import('./pages/admin/page/UpdateProduct'));



// import Dashboard from './pages/admin/Dashboard'
// import Cart from './pages/cart/Cart'
// import Mystate from './context/data/Mystate'
// import Allproducts from './pages/allproducts/Allproducts'
// import Login from './pages/registration/Login'
// import Signup from './pages/registration/Signup'
// import ProductInfo from './pages/productinfo/ProductInfo'
// import AddProduct from './pages/admin/page/AddProduct'
// import UpdateProduct from './pages/admin/page/UpdateProduct'
// const Toaster = lazy(() => import('react-hot-toast'));

// const Provider = lazy(() => import('react-redux'));
// const store = lazy(() => import('../src/redux/store'));
function App() {
  return (
    <Mystate>
      <Provider store={store}>
      <Router>
      <Suspense fallback={<h1>loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/order' element={
            <ProductedRoute>
              <Order/>
            </ProductedRoute>
          } />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/dashboard' element={
            <ProtectedRouteForAdmin>
              <Dashboard/>
            </ProtectedRouteForAdmin>
          } />
          <Route path='/allproducts' element={<Allproducts/>} />
          <Route path='/productinfo/:id' element={<ProductInfo/>} />
          <Route path='/addproduct' element={
            <ProtectedRouteForAdmin>
              <AddProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path='/Updateproduct' element={
            <ProtectedRouteForAdmin>
              <UpdateProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path='/*' element={<Nopage/>} />
        </Routes>
        <Toaster/>
      </Suspense>
      </Router>
      </Provider>
    </Mystate>
  )
}

export default App

//user

export const ProductedRoute = ({children}) =>{
  const user = localStorage.getItem('user')
  if(user){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }
}

//admin

export const ProtectedRouteForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'));

  if(admin.user.email === 'work.vishalshivhare@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }
}