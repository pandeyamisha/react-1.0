import RestaurantCard from './RestaurantCard'
import restaurants from './utils/mockData';
import { useState } from '../../node_modules/react';
const Body =() =>{
  const [filterRes,setFilterRes] = useState(restaurants);
  return(
    <div>
      <div className='search-bar'>
        Search
      </div>
      <button onClick={() =>{setFilterRes(restaurants.filter(i => i.info.avgRating > 4))}}>Top rated restaurant</button>
      <div className='res-container'>
      {filterRes.map(restaurant=>(<RestaurantCard key={restaurant.info.id} resData = {restaurant}/>))}
    
      </div>
    </div>
  )
}


export default Body;