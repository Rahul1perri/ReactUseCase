import React, { Component } from 'react'
import './UserSignUp.css'
import {getcomments,savecomments} from './Service'



 class  UserSignUp extends Component{
    constructor(props) {
        super(props);
        
        this.state={
            userName:"",
            password:""
        }
    }
 onchange=(event)=>{
this.setState({
  userName: [event.target.value] 
});

}

 onChange1=(event)=>{
    this.setState({
        password: [event.target.value] 
      });
}

 Click=()=>{
const obj={
    "userName":this.state.userName[0],
    "password":this.state.password[0]
}
savecomments(obj);
alert("You have succesfully Registered!!! You will be redirected now to Sign in");
}
render() {
    const value1= getcomments();
    return (
        <div className="UserSign">
           <form action="/" className="form-div" onSubmit={this.Click}>
             
           <h1 className="miss">Register</h1>
    <p className="miss">Please fill in this form to create an account.</p>

    <label className="label"><b className="miss">UserName</b></label>
    <input type="text" placeholder="Enter UserName" name="email" id="email" required onChange={this.onchange}/>

    <label className="label"><b className="miss">Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required onChange={this.onChange1}/>

    <button type="submit" class="registerbtn">Register</button>
   
           </form>

        </div>
    )
}
}



export default UserSignUp