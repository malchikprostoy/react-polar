import React from 'react'
import st from "./Question.module.scss"

function Question() {
  return (
    <div className={st.question}>
        <h1>Have Question in Mind? Let us help you</h1>
        <form action="">
            <input type="text" placeholder='Enter your question'/>
            <button type='button'>Send</button>
        </form>
        
    </div>
  )
}

export default Question