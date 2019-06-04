import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './main.html';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import List from './components/list';
import React, {Component} from 'react';
import Profile from './components/profile';
import ReactDOM from 'react-dom';
import { mount } from 'react-mounter';
const browserHistory = createBrowserHistory();
class App extends TrackerReact(Component){
  
    render(){
            return(
             <div className="App">
             
              <Switch>
      <Route exact path="/" component={List}/>
      <Route  path="/profile" component={Profile}/>
    </Switch>
    </div>
            )
    }
}

if(Meteor.isClient){
    Meteor.startup(function(){
        console.log("enter");
       
        ReactDOM.render( <Router history={browserHistory}><App /></Router>, document.getElementById('root'));
    })
}
