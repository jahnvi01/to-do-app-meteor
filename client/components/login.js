import React, { Component } from 'react';
import { Resolutions } from '../../imports/api/resolutions';
import { Accounts } from 'meteor/accounts-base';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
class login extends TrackerReact(Component) {




    verifyuser = (e) => {
        e.preventDefault();
        var email = document.getElementById("email-text").value;
        var password = document.getElementById("pwd-text").value;

        if (email === "" || password === "") {
            Bert.alert("fill up all the fields", 'danger', 'fixed-top');
        } else {
            Meteor.loginWithPassword({ email }, password, (err) => {
                Bert.alert(err.reason, 'danger', 'fixed-top');
            })
        }
    }

    render() {
        if (Meteor.user() !== null) {
            this.props.history.push('/list');
        }
        console.log(Meteor.user());
        return (
            <div className="signup-part container">
                <div className="row to-do-card">
                    <div className="col-md-12">
                        <div id="to-do-title">Log-in here</div>
                        <form className="sign-form" >
                            <input type="email" placeholder="enter email" ref="resolution" id="email-text" required="required" />
                            <input type="password" placeholder="enter password" ref="resolution" id="pwd-text" required="required" />
                            <button type="submit" id="data-btn"
                                onClick={(event) => { this.verifyuser(event) }}
                            >Log-in</button>
                            <a href='/' style={{ textAlign: "center" }}><p>Sign-up here.</p></a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default login;