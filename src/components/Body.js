import RestaurantCard from './RestaurantCard'
import restaurants from './utils/mockData';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from './utils/useOnlineStatus';
const Body = () =>{
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
  setTotalRestaurants(dataObj?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilteredRestaurants(dataObj?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const onlineStatus = useOnlineStatus();
  
  if(onlineStatus === false){
    return <h1>OOPS!! Disconnected! Kindly Check your Internet Connection</h1>
  }
  return totalRestaurants.length === 0 ?(
   <Shimmer/> ): (
    <div className='m-4 p-4'>
      <div>
       <input className='border border-solid border-black'type='text' 
       placeholder='enter restaurant name' 
       value={searchText} 
       onChange={(e) => {
       setSearchText(e.target.value)
       }
      } 
      /> 
       <button className='m-4 px-4 button border border-solid border-orange-300  bg-orange-300 rounded-lg' onClick={()=>{
        console.log(searchText)
        const filteredRestaurants = totalRestaurants.filter((res) =>res.info.name.toLowerCase().includes(searchText).toLowerCase())
        setFilteredRestaurants(filteredRestaurants)

       }}>Search</button>
      
      <button className ='px-5 button border border-solid border-orange-300  bg-orange-300 rounded-lg' onClick={() =>{setTotalRestaurants(restaurants.filter(i => i.info.avgRating > 4))}}>Top Rated Restaurant</button>
      </div>
      <div className='flex flex-wrap'>
      {filteredRestaurants.map(restaurant=>(
      <Link key={restaurant.info.id}  to ={'/restaurants/' + restaurant.info.id} ><RestaurantCard resData = {restaurant}/>
      </Link>
      ))}
    
      </div>
    </div>
  )
}


export default Body;