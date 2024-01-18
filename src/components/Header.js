import { LOGO_URL } from "./utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () =>{
  const[loginVal,setLoginVal] = useState('LogIn');

  useEffect(()=>{
  
  },[])
  return(
  <div className="header" >
    <div className='logo-container'>
      <img className="logo" src={LOGO_URL}alt= "Logo"/>
    </div>
    <div className='nav-items'>
    <ul>
     <li><Link to='/'>Home</Link></li>
     <li><Link to='/aboutUs'>About Us</Link></li>
     <li><Link to='/contactUs'>Contact Us</Link> </li>
      <li>Cart</li>
      <button onClick={()=>{
      (loginVal ==='LogIn')? setLoginVal("LogOut") : setLoginVal("LogIn")
      }}>{loginVal}
      </button>
    </ul>
    </div>
  </div>
  )
}

export default Header;