import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (resId) =>{
  const [restaurantInfo ,setRestaurantInfo ] = useState(null)
  useEffect(()=>{
   fetchMenuData();
  },[])
const fetchMenuData = async () =>{
    const response = await fetch('https://corsproxy.org/?' + encodeURIComponent(MENU_URL)+ resId);
    const responseObj =await response.json();
    setRestaurantInfo(responseObj.data)
  }
  return restaurantInfo;
}

export default useRestaurantMenu;