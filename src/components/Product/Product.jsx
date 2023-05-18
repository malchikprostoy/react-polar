import React from 'react'
import BtnBuy from '../BtnBuy/BtnBuy'
import st from "./Product.module.scss"
import bread from "../../shared/img/bread.png"
import cayenne from "../../shared/img/cayenne.png"
import corn from "../../shared/img/corn.png"
import ava from "../../shared/img/ava.svg"
import ava1 from "../../shared/img/ava1.svg"
import ava2 from "../../shared/img/ava2.svg"
import ava3 from "../../shared/img/ava3.svg"
import ice from "../../shared/img/ice-cream.png"
import vec from "../../shared/img/Vector.svg"
import vec2 from "../../shared/img/Vector2.svg"
import left from "../../shared/img/arrowleft.svg"
import right from "../../shared/img/arrowright.svg"


function Product() {
  return (
    <div className={st.product}>
        <h2>Our Product</h2>
        <div className={st.a}>
            <a href="#">ICE CREAM</a>
            <a href="#">CAYENNE CHOCOLATE</a>
            <a href="#">CAKE BATTER</a>
            <a href="#">CANDY CANE</a>
            <a href="#">PLATTERS</a>
            <a href="#">DESSERT</a>
        </div>
        <div className={st.items}>
            <div className={st.item}>
                <img src={bread} className={st.bread} />
                <div className={st.text}>
                    <h3>Brown bread</h3>
                    <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
                    <div className={st.textspan}>
                        <span >$19.55</span>
                        <span className={st.span}>$22.55</span>
                    </div>
                    <BtnBuy/>
                </div>
                
            </div>
            <div className={st.item}>
                <div className={st.text}>
                    <h3>Cayenne chocolate</h3>
                    <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
                    <div className={st.textspan}>
                        <span >$19.55</span>
                        <span className={st.span}>$22.55</span>
                    </div>
                    <BtnBuy/>
                </div>
                <img src={cayenne} className={st.cayenne} />
            </div>
            <div className={st.item}>
                <img src={corn} className={st.corn} />
                <div className={st.text}>
                    <h3>Sweet corn</h3>
                    <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
                    <div className={st.textspan}>
                        <span >$19.55</span>
                        <span className={st.span}>$22.55</span>
                    </div> 
                    <BtnBuy/>   
                </div>
            </div>
        </div>
        <div className={st.preview}>
            <div className={st.left}>
                <div className={st.avats}>
                    <img src={ava} alt="avatar" />
                    <div className={st.avat}>
                        <h4>Adele A. McNeill</h4>
                        <p>AMIRICAN</p>
                    </div>
                </div>
                <div className={st.text}>
                    <div className={st.p}>
                        <img src={vec} alt="Vector" />
                        <img src={vec} alt="Vector" /> Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments. <img src={vec2} alt="Vector" />
                        <img src={vec2} alt="Vector" />  
                    </div>
                </div>
                <div className={st.navi}>
                    <img src={left} alt="Arrow" />
                    <img src={ava1} alt="Avatar 1" />
                    <img src={ava2} alt="Avatar 2" />
                    <img src={ava3} alt="Avatar 3" />
                    <img src={right} alt="Arrow" />
                </div>
            </div>
            <div className={st.right}>
                <img src={ice} alt="ice cream" className={ice}/>
            </div>
        </div>
    </div>
  )
}

export default Product