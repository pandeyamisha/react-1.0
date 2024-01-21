import { LOGO_URL } from "./utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
const Header = () =>{
  const[loginVal,setLoginVal] = useState('LogIn');
  const onlineStatus = useOnlineStatus();
  return(
  <div className="flex justify-between" >
    <div className='logo-container'>
      <img className="w-40" src={LOGO_URL}alt= "Logo"/>
    </div>
    <div>
    <ul className='flex p-4 m-4 item-align'>
     <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
     <li className="px-4"><Link to='/'>Home</Link></li>
     <li className="px-4"><Link to='/aboutUs'>About Us</Link></li>
     <li className="px-4"><Link to='/contactUs'>Contact Us</Link> </li>
    <li className="px-4">Cart</li>
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