import { useState } from 'react';
const User = ({name,location,contact}) =>{
  const [count1,setCount1] = useState(1)
  const [count2] = useState(2)
  return (
    <div className="member-info">
      <h3>Count1 : {count1}</h3>
      <h3>Count2 : {count2}</h3>
      <h4>Name : {name}</h4>
      <h5>Location : {location}</h5>
      <h5>Contact : {contact}</h5>
      <button onClick={()=>{
        setCount1(count1+1)
      }}>Click me to increse count</button>
    </div>
  )
}

export default User;
