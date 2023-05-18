import React from 'react'
import BtnBuy from '../BtnBuy/BtnBuy'
import st from "./Jumbotron.module.scss"
import ice from "../../shared/img/ice.png"
import bg from "../../shared/img/bg.svg"

function Jumbotron() {
  return (
    <div className={st.jumbotron}>
        <div className={st.left}>
            <p className={st.head}>
                Sweet fun, full of milk.
            </p>
            <h1>Feel inside cold with our delicious <span>ice-cream.</span></h1>
            <p className={st.info}>Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words.</p>
            <BtnBuy/>
        </div>
        <div className={st.right}>
            <img src={ice} alt="ice" className={st.ice} />
            <img src={bg} alt="bg" className={st.bg} />
            <div className={st.round}></div>
        </div>
    </div>
  )
}

export default Jumbotron