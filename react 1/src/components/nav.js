import React from 'react'
import './style.css';
function Nav() {
  return (
    <div class="nav">
        {/* logo */}
        <div class="logo">
            <h1>MyWeb</h1>
        </div>
        {/* buttons */}
        <div class="buttons">
               <a href="#about" class="items">About Us</a>
               <a href="#Services" class="items">Services</a>
               <a href="#contact" class="items">Contact Us</a>
        </div>
        {/* icons */}
        <div class="icons">
            <i class="fa-brands fa-facebook-f icon"></i>
            <i class="fa-brands fa-twitter icon"></i>
            <i class="fa-brands fa-instagram icon"></i>
        </div>
        {/* navbutton */}
        <div class="bntn">
            <input type="submit" value="Get started" class="getstart" />
            <i class="fa-solid fa-circle-chevron-right iccoo"></i>       
         </div>
    </div>
  )
}
export default Nav;
