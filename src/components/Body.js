import RestaurantCard from './RestaurantCard'
import restaurants from './utils/mockData';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
const Body =() =>{
  const [totalRestaurants,setTotalRestaurants] = useState([]);
  const[filteredRestaurants,setFilteredRestaurants] = useState([]);
  const [searchText,setSearchText] = useState("");
  useEffect(() =>{
    fetchData();
  }
,[])
const fetchData = async()=>{
  const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9715987%26lng%3D77.5945627%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING%22")
  const dataObj = await data.json();
  console.log("dataObj",dataObj)
  setTotalRestaurants(dataObj?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilteredRestaurants(dataObj?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return totalRestaurants.length === 0 ?(
   <Shimmer/> ): (
    <div>
      <div className='search-bar'>
       <input type='text' 
       placeholder='enter your restaurant name' 
       value={searchText} 
       onChange={(e) => {
       setSearchText(e.target.value)
       }
      } 
      /> 
       <button onClick={()=>{
        console.log(searchText)
        const filteredRestaurants = totalRestaurants.filter((res) =>res.info.name.toLowerCase().includes(searchText).toLowerCase())
        setFilteredRestaurants(filteredRestaurants)

       }}>Search</button>
      </div>
      <button onClick={() =>{setTotalRestaurants(restaurants.filter(i => i.info.avgRating > 4))}}>Top rated restaurant</button>
      <div className='res-container'>
      {filteredRestaurants.map(restaurant=>(
      <Link key={restaurant.info.id}  to ={'/restaurants/' + restaurant.info.id} ><RestaurantCard resData = {restaurant}/>
      </Link>
      ))}
    
      </div>
    </div>
  )
}


export default Body;