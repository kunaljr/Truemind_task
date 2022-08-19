import React,{useEffect,useState} from 'react'

//Helpers
import {getData} from "./../helpers/Home"

const Cart = () => {
  return (
    <div className='wrapper'>
      <div className="cart_container">
        <div className="schema_detail">
          <div className="schema_detail_wrapper">
            <div className="schema_info">
              <header><h3>Name</h3></header>
              <ul className="schema_info_list">
                <li>Equity</li>
                <li>Focused Fund</li>
              </ul>
            </div>
            <div>
              Min.Amount: 5000
            </div>
          </div>
          
          <p>Amount</p>
          <input type="number" placeholder="0"/>
          <p>Min. Amount: 5000</p>
        </div>
        <button className='cart_invest_btn'>Invest Now</button>
      </div>
    </div>
  )
}

export default Cart