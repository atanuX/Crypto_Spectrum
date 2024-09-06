import React, { useContext } from 'react'
import "./Navbar.css"
import dog_icon from "../../assets/logo.png"
import home_icon from "../../assets/home_icon.png"
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext);
  const currencyHandler = (event) => {
    switch (event.target.value){
      case "usd": {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
      case "eur": {
        setCurrency({name: "eur", symbol: "€"})
        break;
      }
      case "inr": {
        setCurrency({name: "inr", symbol: "₹"})
        break;
      }
      default : {
        setCurrency({name: "usd", symbol: "$"})
        break;
      }
    }
  }

  return (
    <div className='navbar'>
      <Link to={"/"}>
      <p style={{display:"flex", justifyContent:"center" ,gap:15, alignItems:"center"}} className='logo '>CryptoSpectrum<img src={dog_icon} alt="" /></p>
      </Link>
      <div className='nav-right'>
        <select onChange={currencyHandler} className='selectbar'>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
        </select>
        <Link to={"/"}>
        <button><img src={home_icon} alt="" /></button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
