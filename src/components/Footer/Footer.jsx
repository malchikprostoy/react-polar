import React from 'react'
import st from "./Footer.module.scss"
import logo from "../../shared/img/logo.svg"
import fb from "../../shared/img/fb.svg"
import insta from "../../shared/img/insta.svg"
import twit from "../../shared/img/twit.svg"
import link from "../../shared/img/link.svg"
import pp from "../../shared/img/paypal.svg"
import master from "../../shared/img/master.svg"
import viza from "../../shared/img/viza.svg"

function Footer() {
  return (
    <div className={st.footer}>
        <div className={st.info}>
            <img src={logo} alt="" />
            <p>Some food has looked so awful that it's looked like something that the dog's brought home.</p>
            <span>Follow Us</span>
            <div className={st.imginfo}>
                <img src={fb} alt="Facebook" />
                <img src={twit} alt="Twitter" />
                <img src={insta} alt="Instagram" />
                <img src={link} alt="Linkedin" />
            </div>
        </div>
        <div className={st.nav}>
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact Us</a>
        </div>
        <div className={st.links}>
            <a href="">Delivery Information</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms & Condition</a>
            <a href="">Search Terms</a>
            <a href="">Order & Return</a>
        </div>
        <div className={st.pay}>
            <p>Newsletter</p>
            <form action="">
                <input type="text" placeholder='Your Email'/>
                <button type='button'>Subscribe</button>
            </form>
            <div className={st.payimg}>
                <img src={pp} alt="" />
                <img src={master} alt="" />
                <img src={viza} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer