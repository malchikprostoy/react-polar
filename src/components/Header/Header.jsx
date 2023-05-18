import React from 'react'
import Logo from "../../shared/img/logo.svg"
import "../../App.css"
import BtnBuy from '../BtnBuy/BtnBuy'
import st from "./Header.module.scss"

function Header() {
  return (
    <div className="container">
      <header className={st.header}>
        <div className={st.logo}>
            <img src={Logo} alt="" />
        </div>
        <div className={st.links}>
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact Us</a>
        </div>
        <BtnBuy/>
    </header>
    </div>
  )
}

export default Header