import { LOGO_URL } from "./utils/constant";
import { useState } from "react";
const Header = () =>{
  const[loginVal,setLoginVal] = useState('LogIn');
  return(
  <div className="header" >
    <div className='logo-container'>
      <img className="logo" src={LOGO_URL}alt= "Logo"/>
    </div>
    <div className='nav-items'>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Offers</li>
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