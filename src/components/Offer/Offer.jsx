import React from 'react'
import st from "./Offer.module.scss"
import truck from "../../shared/img/offer_logo1.svg"
import pack from "../../shared/img/offer_logo2.svg"
import money from "../../shared/img/offer_logo3.svg"
import car from "../../shared/img/offer_logo4.svg"
import offer from "../../shared/img/offer.png"

function Offer() {
  return (
    <div className={st.offer}>
        <div className={st.first}>
            <div className={st.item}>
                    <img src={truck} className={st.truck} />
                    <h2>Free Shipping</h2>
                    <p>Last Chance! Free shipping on all orders ends today.</p>
                </div>
                <div className={st.item}>
                    <img src={pack} className={st.pack} />
                    <h2>Quick Packaging</h2>
                    <p>Last Chance! Free shipping on all orders ends today.</p>
                </div>
                <div className={st.item}>
                    <img src={money} className={st.money} />
                    <h2>100% Money Back</h2>
                    <p>Last Chance! Free shipping on all orders ends today.</p>
                </div>
                <div className={st.item}>
                    <img src={car} className={st.car} />
                    <h2>Fast Delivery</h2>
                    <p>Last Chance! Free shipping on all orders ends today.</p>
                </div>
        </div>
        <div className={st.second}>
            <div className={st.sleft}>
                <h1>Brown Sugar Oatmea</h1>
                <p>Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.Together with McDonald’s, Burger King has grown to become synonymous.</p>
                <button>See Details</button>
            </div>
            <div className={st.sright}>
                <img src={offer} className={st.offer} />
            </div>
        </div>
    </div>
  )
}

export default Offer