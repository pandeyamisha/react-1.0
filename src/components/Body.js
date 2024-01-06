import RestaurantCard from './RestaurantCard'
import restaurants from './utils/mockData';
import { useState } from '../../node_modules/react';
import { useEffect } from 'react';
import Shimmer from './Shimmer';
const Body =() =>{
  const [filterRes,setFilterRes] = useState([]);
  const [searchText,setSearchText] = useState("");
  useEffect(() =>{
    fetchData();
  }
,[])
const fetchData = async()=>{
  const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D23.022505%26lng%3D72.5713621%26page_type%3DDESKTOP_WEB_LISTING")
  const dataObj = await data.json();
  console.log("dataObj",dataObj)
  console.log("data1",dataObj.data.cards[5].card.card.gridElements
  .infoWithStyle.restaurants)
  setFilterRes(dataObj?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return filterRes.length === 0 ?(
   <Shimmer/> ): (
    <div>
      <div className='search-bar'>
       <input type='text' 
       placeholder='enter your restaurant name' 
       value={searchText} 
       onChange={(e) => {
       setSearchText(e.target.value)
       //setFilterRes(filterRes)
       }
      } 
      /> 
       <button onClick={()=>{
        console.log(searchText)
        const filteredResaurants = filterRes.filter((res) =>res.info.name.toLowerCase().includes(searchText))
        setFilterRes(filteredResaurants)

       }}>Search</button>
      </div>
      <button onClick={() =>{setFilterRes(restaurants.filter(i => i.info.avgRating > 4))}}>Top rated restaurant</button>
      <div className='res-container'>
      {filterRes.map(restaurant=>(<RestaurantCard key={restaurant.info.id} resData = {restaurant}/>))}
    
      </div>
    </div>
  )
}


export default Body;