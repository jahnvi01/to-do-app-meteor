import React, { Component } from 'react';
import Profile from './profile';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Resolutions } from '../../imports/api/resolutions';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
var login;
Tracker.autorun(() => {
   
    if (Meteor.user() !== null) {
        login = "Log-out";
    }
    else {
        login = "Log-in";
    }
});

class List extends TrackerReact(Component) {
    constructor(props){
        super(props);
        this.state={
            resolutions:[]
        }
    }
   componentDidMount(){
       this.listTracker=Tracker.autorun(()=>{
         Meteor.subscribe('resolutions');
        this.setState({
            resolutions:Resolutions.find().fetch()
        }) 
       });

   }

    getdata = () => {

        return Resolutions.find({}).fetch();
    }
    logout = () => {
        var log = document.getElementById("log-btn").innerText;
        console.log(log);
        if (log === "Log-in") {
            this.props.history.push('/login');
        }
        else {

            Accounts.logout();
            Bert.alert("Logged out from the account", 'info', 'fixed-top');

            this.props.history.push('/');

        }
    }

    adddata = (event) => {

        event.preventDefault();
        var text = document.getElementById("data-text").value;
        //console.log("sh"); 
        if (text === "") {
            Bert.alert("fill up the field", 'danger', 'fixed-top');
        } else {
            Meteor.call('addtext', text, Meteor.userId(),(err, result) => { console.log(result) });
            document.getElementById("data-text").value = "";
        }
    }
    handlecheck = (event, id) => {
        console.log(event.target + id);
        Meteor.call('deletetext', id, (err, result) => { console.log(result) });
    }

    render() {
        if (Meteor.user()=== null) {
            this.props.history.push('/login');
        }
        var list = this.state.resolutions.map(text => {
            return (<div key={text._id} className="list-itembox" style={{ display: "flex" }}>
                <input className="list-check" type="checkbox" onChange={(event) => this.handlecheck(event, text._id)} />
                <li className="list-item">{text.name}</li></div>)
        })
        return (
            <div className="to-do-list container">
                <button id="log-btn" onClick={() => { this.logout() }}>{login}</button>
                <div className="row to-do-card">
                    <div className="col-md-12">
                        <div id="to-do-title">My To-do List</div>
                        <form className="data-form" style={{ display: "flex !important" }}>
                            <input type="text" placeholder="enter text" ref="resolution" id="data-text" required="required" />
                            <button type="submit" id="data-btn"
                                onClick={(event) => { this.adddata(event) }}
                            >ADD </button>
                        </form>

                        <ul style={{ listStyle: "none" }} className="list-card">{list}</ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default List;