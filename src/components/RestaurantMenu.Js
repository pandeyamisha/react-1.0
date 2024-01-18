import {useEffect,useState} from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from './utils/constant';

const RestaurantMenu = ()=> {
  const[restaurantInfo,setrestaurantInfo] = useState(null)
  const {resId} = useParams();
  console.log(resId)
  useEffect(()=>{
    fetchRestaurantMenu();
  },[])

  const url = 'https://corsproxy.org/?' + encodeURIComponent(MENU_URL)+ resId
  console.log("url",url)
  const fetchRestaurantMenu = async ()=>{
   const response = await fetch(url )
    const responseObj = await response.json();
    setrestaurantInfo(responseObj.data);
}
if(restaurantInfo === null){
  return <Shimmer/>
}
const {name, cuisines, costForTwoMessage } = restaurantInfo?.cards[0]?.card?.card.info;
const {itemCards} = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
console.log(itemCards)
return(
  <>
  <h1>{name}</h1>
  <p>
  {cuisines.join(',')} - {costForTwoMessage}
  </p>
  <ul>
  {itemCards.map(items => <li key = {items.card.info.id}>{items.card.info.description} - Rs.{items.card.info.price/100}</li>)}
  </ul>
  </>
)
}


export default RestaurantMenu