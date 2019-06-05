import React, {Component} from 'react';
import {Resolutions} from '../../imports/api/resolutions';
import {Accounts} from 'meteor/accounts-base';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import TrackerReact from 'meteor/ultimatejs:tracker-react';
class signup extends TrackerReact(Component) {
  
adduser=(e)=>{
    e.preventDefault();
   
    var email=document.getElementById("email-text").value;
    var password=document.getElementById("pwd-text").value;
    //console.log("sh"); 
    if(email===""||password===""){
        Bert.alert("fill up all the fields",'danger','fixed-top');
    }else
    {
Accounts.createUser({email,password},
    (err)=>{console.log('signup callback',
    Bert.alert(err.reason,'danger','fixed-top')
    );
}
)
}
}

    render(){
        if(Meteor.user()!==null){
            this.props.history.push('/list');
        }
        console.log(Meteor.user());
           return(
                <div className="signup-part container">
                   <div className="row to-do-card">
                <div className="col-md-12">
             <div id="to-do-title">Sign-up here</div>
             <form className="sign-form" >
                 <input type="email" placeholder="enter email" ref="resolution" id="email-text" required="required" />
                 <input type="password" placeholder="enter password" ref="resolution" id="pwd-text" required="required" />
                    <button type="submit"  id="data-btn" 
                  onClick={(event)=>{this.adduser(event)}}
                    >Sign-up</button>
                    <a href='/login'><p>Already have an account? Login here.</p></a>
             </form>
      </div>
          </div>
          </div>
            )
    }
}
export default signup;