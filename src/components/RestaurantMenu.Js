import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from './utils/useResaurantMenu';

const RestaurantMenu = ()=> {
  const {resId} = useParams();
  const restaurantInfo = useRestaurantMenu(resId)
  console.log("res",restaurantInfo)
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