import { React, useState } from 'react'
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Link } from 'react-router-dom';
import MyRouter from './components/MyRouter';
import ProductContext from './/components/ProductContext'

function App() {

  return (
    <>
      <ProductContext>
        <BrowserRouter>
          {/* {localStorage.getItem('user') && */}
            <header>
              <img id="img" src="./assets/logo.jpg" />
              <nav>
                <ul>
                <li>  <Link to="login">התחברות</Link> </li>
                <li>  <Link to="register">הרשמה</Link> </li>
                  <li>  <Link to="allProducts">כל המוצרים </Link> </li>
                  <li onClick={() => { localStorage.removeItem('user') }}> <Link to="login">  ליציאה </Link> </li>
                  {localStorage.getItem('user')?.username === "manager" && localStorage.getItem('user').password === "1234" && <li>  <Link to="allDonations"> כל התרומות  </Link> </li>}
                  <li>   <Link to="donation">  <img id="donation" src="./assets/button.jpg" /> </Link> </li>
                </ul>
              </nav>
            </header>
          {/* }
          {
            localStorage.getItem('user') && */}
            <img id="img" src="./assets/full.jpg" />
          {/* } */}
          <MyRouter />
          {/* {!(localStorage.getItem('user')) && <Login/>} */}
        </BrowserRouter>
      </ProductContext>
    </>
  );
}
export default App;