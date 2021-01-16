import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserSignUp from './Components/UserSignUp'
import MemberHome from './Components/MemberHome';
ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>

<div>

            <Switch>
            <Route path="/" exact component={App}/>
             <Route path="/UserSignUp" exact component={UserSignUp}/>
             <Route path="/MemberHome" exact component={MemberHome}/>

           </Switch>
        </div> 


</BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
