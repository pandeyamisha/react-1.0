import React from 'react';
import UserClass from './UserClass.js';
class  AboutUs extends React.Component{
  constructor(props){
    super(props)
    console.log("Parent Constructor is called")
  }
  render(){
    console.log("Parent Render is called")
  return(
    <>
      <h3>About Us</h3>
      <UserClass  name="First Child" location="Mainpuri(From class component)" contact="ap@github.com(From class component)"/>
      </>
  )
}
componentDidMount(){
  console.log("Parent's ComponentDidMount is called")
}
}


export default AboutUs;