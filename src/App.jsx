import React from 'react'
import Header from "./components/Header/Header"
import Jumbotron from "./components/Jumbotron/Jumbotron"
import Offer from "./components/Offer/Offer"
import Product from './components/Product/Product'
import Contact from './components/Contact/Contact'
import Question from './components/Question/Question'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Header/>
      <Jumbotron/>
      <Offer/>
      <Product/>
      <Contact/>
      <Question/>
      <Footer/>
    </div>
  )
}

export default App