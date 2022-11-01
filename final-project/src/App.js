import React from "react";
import Home from "./components/home/Home";
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer'
import Navbar from './components/header/Navbar';
import Basket from "./components/basket/Basket";
import Products from "./components/Productspage/Products";
import Cart from "./components/cart/Product";
import Payment from './components/payment/Payment';
import Signin from "./components/Signin/Signin";
import Login from "./components/login/Login";
import RestrictLogin from "./routes/RestrictLogin";
import Myprofile from "./components/myprofile/Myprofile";
import RestrictedPage from '../src/routes/RestrictedPage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UnAuthorize from "./components/Unauthorize/UnAuthorize";

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/basket" element={<Basket/>}></Route> */}
        <Route path="/products/:id" element={<Products />}></Route>
        <Route path={`/product/:id`} element={<Cart/>}></Route>


        <Route >
          <Route path={`/signin`} element={<Signin />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>

        <Route element={<RestrictedPage roles={['admin','guide','user']} />}>
          <Route path="/my-profile" element={<Myprofile />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Route>
        <Route element={<RestrictedPage roles={['admin']}  />}>
          <Route path="/unauthorize" element={<UnAuthorize />}></Route>
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
