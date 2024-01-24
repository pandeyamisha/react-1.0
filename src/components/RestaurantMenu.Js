import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from './utils/useResaurantMenu';
import RestaurantCategory from './RestautantCategory';

const RestaurantMenu = ()=> {
  const {resId} = useParams();
  const restaurantInfo = useRestaurantMenu(resId)
  console.log("res",restaurantInfo)
if(restaurantInfo === null){
  return <Shimmer/>
}
const {name, cuisines, costForTwoMessage } = restaurantInfo?.cards[0]?.card?.card.info;
const {itemCards} = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
console.log(restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
const result = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((i) => i.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
console.log(result)
return(
  <div className="text-center">
  <h1 className="font-bold my-6 text-2xl">{name}</h1>
  <span className='font-medium text-lg;'>
  {cuisines.join(',')} - {costForTwoMessage}
  {result.map((i )=> <RestaurantCategory data ={i.card.card}/>)}
  </span>
  </div>
)
}



export default RestaurantMenu