import React, { Component } from 'react'
import BOOK from './Images/BOOK.png'
import ADMIN from './Images/Admin.png'
import USER from './Images/User.png'
import AdminLogin from './Images/AdminLogin.png'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserSignUp from './Components/UserSignUp'
import axios from 'axios'



class App extends Component {

  constructor(props) {
    super(props);
    
    this.state={
        UserName:"",
        Userpassword:"",
        adminName:"",
        adminpassword:"",
        adminCredentials:[],
        userCredentials:[]
    }
}

adminUserChange=(event)=>{
this.setState({
  adminName:[event.target.value]
});
}

adminPassChange=(event)=>{
  this.setState({
    adminpassword:[event.target.value]
  });
}

 

AdminFormSubmit=(e)=>{
  e.preventDefault();
axios.get("http://localhost:4200/Admin").then(
  result=>{
    const adminUser=this.state.adminName[0];
    const adminPass=this.state.adminpassword[0];

    for (let i = 0; i < result.data.length; i++) {
      if(adminUser===result.data[i].userName){

        if(adminPass===result.data[i].password){
         
          this.props.history.push('')
        }
      }
      
    }
  }
)
}

UserChange=(event)=>{
  this.setState({
    UserName:[event.target.value]
  });
  
  }
  
  PassChange=(event)=>{
    this.setState({
      Userpassword:[event.target.value]
    });
    
  }

  UserSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem("Username",this.state.UserName)
  axios.get("http://localhost:4200/RegisteredUsers").then(
    result=>{
      const UN=this.state.UserName[0]
      const UP=this.state.Userpassword[0]
     
      for (let i = 0; i < result.data.length; i++) {
        if(UN===result.data[i].userName){

          if(UP===result.data[i].password){
          
            this.props.history.push('/MemberHome')
          }
        }
      }
    }
  )
  }





















  render() {
   
    return (
        <div className="Hero-image">
            <h1 className="hero-text">Schrodinger's Library</h1>
         <img className="App-logo" src={BOOK} />
         <br/>
       <br/>
         <hr/>


         <div class="row row-cols-1 row-cols-md-2">
  <div class="col mb-4">
    <div class="card">
      <img src={ADMIN} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-img-top">Admin Login</h5>

     <form onSubmit={this.AdminFormSubmit}>
     <div class="imgcontainer">
    <img src={AdminLogin} alt="Avatar" class="card-img-top"/>
  </div>
  <label className="label"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required  onChange={this.adminUserChange} />

    <label  className="label"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required onChange={this.adminPassChange}/>

    <button className="BuTTon" type="submit">Login</button>
     </form>
      
      </div>
      <div class="card-footer">
      <large className="label-footer">Forgot password? <a href="" className="btn btn-danger">click here</a></large>
    </div>
    </div>
  </div>




  <div class="col mb-4">
    <div class="card">
      <img src={USER} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-img-top">User Login</h5>
        <form onSubmit={this.UserSubmit}>
     <div class="imgcontainer">
    <img src={AdminLogin} alt="Avatar" class="card-img-top"/>
  </div>
  <label  className="label"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required onChange={this.UserChange}/>

    <label  className="label"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required onChange={this.PassChange}/>

    <button className="BuTTon" type="submit">Login</button>
     </form>
      
      </div>
      <div class="card-footer">
      <large className="label-footer">Don't have an account yet? <a href="/UserSignUp" className="btn btn-success">Sign Up</a></large><span> </span>
    
    </div>
    </div>
  </div>
  </div>


  <BrowserRouter>

<div>

            <Switch>
            
             <Route path="/UserSignUp" exact component={UserSignUp}/>
            

           </Switch>
        </div> 


</BrowserRouter>

        </div>




    )
}
}
export default App;
