import React from 'react'
import st from "./Contact.module.scss"
import app from "../../shared/img/app.png"
import select from "../../shared/img/select.svg"
import add from "../../shared/img/add.svg"
import order from "../../shared/img/order.svg"
import android from "../../shared/img/android.svg"
import iphone from "../../shared/img/iphone.svg"

function Contact() {
  return (
    <div className={st.contact}>
        <div className={st.left}>
            <img src={app} alt="App" />
        </div>

        <div className={st.right}>
            <h1>Simple Way To Order Your Food</h1>
            <p>Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts.</p>
            <div className={st.items}>
                <div className={st.item}>
                    <img src={select} alt="" />
                    <span>Select Your Food</span>
                </div>
                <div className={st.item}>
                    <img src={add} alt="" />
                    <span>Add To Cart</span>
                </div>
                <div className={st.item}>
                    <img src={order} alt="" />
                    <span>Order Your Food</span>
                </div>
            </div>
            <div className={st.img}>
                <img src={android} alt="" className={st.android}/>
                <img src={iphone} alt=""  className={st.iphone}/>
            </div>
        </div>
    </div>
  )
}

export default Contact