import { CDN_URL } from "./utils/constant";
const RestaurantCard =(props) =>{
  const { resData } = props;
  const {name,cuisines,avgRating,costForTwos,cloudinaryImageId} = resData?.info;
  const {deliveryTime} = resData?.info?.sla
  return(
   <div className='res-card'>
    <img src={CDN_URL+cloudinaryImageId} alt="res-logo"
    className='res-img'/>
    <h3>{name}</h3>
    <h4>{cuisines.join(',')}</h4>
    <h4>{avgRating}</h4>
    <h4>{costForTwos}</h4>
    <h4>{deliveryTime} minutes</h4>
   </div>
  ) 
}

export default RestaurantCard;


