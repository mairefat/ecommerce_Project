import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";
import NavBar from './navbar';
import Home from './home';
import About from './about';
import ContactUs from './contactUs';
import Category from './category';
import Footer from './footer';
import Categories from './categories';
import { Navigate } from "react-router-dom";


function App() {

  const [cartCount, setCartCount] = useState(0);

  function increamentCount() {
    setCartCount(prevCount => prevCount + 1)
  }
  // increamentCount()
  // console.log(cartCount);

  // const [count, setCount] = useState(4);

  // function decrementCount() {
  //   setCount(preCount => preCount -1);

  // }

  // function increaseCount() {
  //   setCount(preCount => preCount +1);

  //}

  return (
    <>
      <HashRouter>
        <NavBar cartCount={cartCount} />
        <Routes>
       
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/categories/:mailabua' element={<Category increamentCount={increamentCount} />} />
          <Route path='/categories' element={<Home/>} />
          <Route path='/categories/about' element={<Home/>} />
          <Route path='/categories/contactUs' element={<Home/>} />
          

          {/* <Route path="categories/:mailabua" element={<Category  />} /> */}
        </Routes>

      </HashRouter>


      <Footer />


      {/* <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button> */}
    </>
  )
}

export default App;
