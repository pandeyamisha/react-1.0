import React from "react";

class UserClass extends React.Component{
  constructor(props){
    super(props)
    //NEVER UPDATE STATE VARIABLES DIRECTLY VIA '=', INSTEAD USE THE SETSTATE() GIVEN BY REACT FOR UPDATING STATE IN CASE OF CLASS BASED COMPONENTS 
    
    this.state ={
      count1 : 1,
      count2 : 2 ,
      userInfo:{
        login :
      "Dummy",
      id :
      "DummyLocation" 
    }
  }
    console.log( this.props.name+" constructor is called")
  }
  render(){
    console.log( this.props.name+" render is called")
    const {name,location,contact} = this.props
    const {count1, count2, userInfo} = this.state
    debugger;
    return(
      <div className='member-info'>
      <h3>Count : {count1}</h3>
      <h3>Count2 : {count2}</h3>
      <h4>Name : {userInfo.login}</h4>
      <h5>Id : {userInfo.id}</h5>
      <h5>Contact : {contact}</h5>
      <button onClick={()=>{
       this.setState({
       count1 : this.state.count1+1
       })
      }}>Click me to increse count</button>
      </div>
    )
  }
  async componentDidMount(){
    console.log(this.props.name +"'s ComponentDidMount is called")
    const response = await fetch("https://api.github.com/users/pandeyamisha")
    const responseObj = await response.json();

    this.setState({
      userInfo : responseObj,
    })
  }
}
export default UserClass;