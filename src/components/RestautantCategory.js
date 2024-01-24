const RestaurantCategory = ({data}) =>{
  return (
    <div>
    <div className="w-6/12 bg-slate-500">
    <span>{data.title}</span>
     <span>🔽</span>
    </div>
    </div>
  )

}

export default RestaurantCategory;