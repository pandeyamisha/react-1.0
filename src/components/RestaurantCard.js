import { CDN_URL } from "./utils/constant";
const RestaurantCard = (props) =>{
  const { resData } = props;
  const {name,cuisines,avgRating,costForTwos,cloudinaryImageId} = resData?.info;
  const {deliveryTime} = resData?.info?.sla
  return(
   <div className='m-4 h-150 p-4 w-[250px] break-words rounded-lg hover:shadow-lg'>
    <img src={CDN_URL+cloudinaryImageId} alt="res-logo"
    className='rounded-md'/>
    <h3 className='font-bold py-4 text-lg'>{name}</h3>
    <h4>{cuisines.join(',')}</h4>
    <h4>{avgRating}</h4>
    <h4>{costForTwos}</h4>
    <h4>{deliveryTime} minutes</h4>
   </div>
  ) 
}
export const enhancedRestaurantCard = (RestaurantCard) =>{

  return (props)=>{
    return(
      <div>
    <h4>Promoted</h4>
    <RestaurantCard {...props}/>
    </div>
    )
  }
}

export default RestaurantCard;


