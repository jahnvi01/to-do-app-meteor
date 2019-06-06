var require = meteorInstall({"client":{"main.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// client/main.html                                                                      //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
module.link("./template.main.js", { "*": "*+" });

///////////////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// client/template.main.js                                                               //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //

Template.body.addContent((function() {
  var view = this;
  return HTML.Raw('<div id="root">  </div>\n\n<!--   \n  <h1>Welcome to Meteor!</h1>\n<h2>sss</h2> -->\n  <!-- {{> hello}}\n  {{> info}} -->');
}));
Meteor.startup(Template.body.renderToDocument);

///////////////////////////////////////////////////////////////////////////////////////////

},"components":{"list.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// client/components/list.js                                                             //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let Profile;
module.link("./profile", {
  default(v) {
    Profile = v;
  }

}, 1);
let Accounts;
module.link("meteor/accounts-base", {
  Accounts(v) {
    Accounts = v;
  }

}, 2);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 3);
let Resolutions;
module.link("../../imports/api/resolutions", {
  Resolutions(v) {
    Resolutions = v;
  }

}, 4);
let TrackerReact;
module.link("meteor/ultimatejs:tracker-react", {
  default(v) {
    TrackerReact = v;
  }

}, 5);
var login;
Tracker.autorun(() => {
  if (Meteor.user() !== null) {
    login = "Log-out";
  } else {
    login = "Log-in";
  }
});

class List extends TrackerReact(Component) {
  constructor(props) {
    super(props);

    this.getdata = () => {
      return Resolutions.find({}).fetch();
    };

    this.logout = () => {
      var log = document.getElementById("log-btn").innerText;
      console.log(log);

      if (log === "Log-in") {
        this.props.history.push('/login');
      } else {
        Accounts.logout();
        Bert.alert("Logged out from the account", 'info', 'fixed-top');
        this.props.history.push('/');
      }
    };

    this.adddata = event => {
      event.preventDefault();
      var text = document.getElementById("data-text").value; //console.log("sh"); 

      if (text === "") {
        Bert.alert("fill up the field", 'danger', 'fixed-top');
      } else {
        Meteor.call('addtext', text, Meteor.userId(), (err, result) => {
          console.log(result);
        });
        document.getElementById("data-text").value = "";
      }
    };

    this.handlecheck = (event, id) => {
      console.log(event.target + id);
      Meteor.call('deletetext', id, (err, result) => {
        console.log(result);
      });
    };

    this.state = {
      resolutions: []
    };
  }

  componentDidMount() {
    this.listTracker = Tracker.autorun(() => {
      Meteor.subscribe('resolutions');
      this.setState({
        resolutions: Resolutions.find().fetch()
      });
    });
  }

  render() {
    if (Meteor.user() === null) {
      this.props.history.push('/login');
    }

    var list = this.state.resolutions.map(text => {
      return React.createElement("div", {
        key: text._id,
        className: "list-itembox",
        style: {
          display: "flex"
        }
      }, React.createElement("input", {
        className: "list-check",
        type: "checkbox",
        onChange: event => this.handlecheck(event, text._id)
      }), React.createElement("li", {
        className: "list-item"
      }, text.name));
    });
    return React.createElement("div", {
      className: "to-do-list container"
    }, React.createElement("button", {
      id: "log-btn",
      onClick: () => {
        this.logout();
      }
    }, login), React.createElement("div", {
      className: "row to-do-card"
    }, React.createElement("div", {
      className: "col-md-12"
    }, React.createElement("div", {
      id: "to-do-title"
    }, "My To-do List"), React.createElement("form", {
      className: "data-form",
      style: {
        display: "flex !important"
      }
    }, React.createElement("input", {
      type: "text",
      placeholder: "enter text",
      ref: "resolution",
      id: "data-text",
      required: "required"
    }), React.createElement("button", {
      type: "submit",
      id: "data-btn",
      onClick: event => {
        this.adddata(event);
      }
    }, "ADD ")), React.createElement("ul", {
      style: {
        listStyle: "none"
      },
      className: "list-card"
    }, list))));
  }

}

module.exportDefault(List);
///////////////////////////////////////////////////////////////////////////////////////////

},"login.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// client/components/login.js                                                            //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let Resolutions;
module.link("../../imports/api/resolutions", {
  Resolutions(v) {
    Resolutions = v;
  }

}, 1);
let Accounts;
module.link("meteor/accounts-base", {
  Accounts(v) {
    Accounts = v;
  }

}, 2);
let BrowserRouter, Route, Link;
module.link("react-router-dom", {
  BrowserRouter(v) {
    BrowserRouter = v;
  },

  Route(v) {
    Route = v;
  },

  Link(v) {
    Link = v;
  }

}, 3);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 4);
let TrackerReact;
module.link("meteor/ultimatejs:tracker-react", {
  default(v) {
    TrackerReact = v;
  }

}, 5);

class login extends TrackerReact(Component) {
  constructor() {
    super(...arguments);

    this.verifyuser = e => {
      e.preventDefault();
      var email = document.getElementById("email-text").value;
      var password = document.getElementById("pwd-text").value;

      if (email === "" || password === "") {
        Bert.alert("fill up all the fields", 'danger', 'fixed-top');
      } else {
        Meteor.loginWithPassword({
          email
        }, password, err => {
          Bert.alert(err.reason, 'danger', 'fixed-top');
        });
      }
    };
  }

  render() {
    if (Meteor.user() !== null) {
      this.props.history.push('/list');
    }

    console.log(Meteor.user());
    return React.createElement("div", {
      className: "signup-part container"
    }, React.createElement("div", {
      className: "row to-do-card"
    }, React.createElement("div", {
      className: "col-md-12"
    }, React.createElement("div", {
      id: "to-do-title"
    }, "Log-in here"), React.createElement("form", {
      className: "sign-form"
    }, React.createElement("input", {
      type: "email",
      placeholder: "enter email",
      ref: "resolution",
      id: "email-text",
      required: "required"
    }), React.createElement("input", {
      type: "password",
      placeholder: "enter password",
      ref: "resolution",
      id: "pwd-text",
      required: "required"
    }), React.createElement("button", {
      type: "submit",
      id: "data-btn",
      onClick: event => {
        this.verifyuser(event);
      }
    }, "Log-in"), React.createElement("a", {
      href: "/",
      style: {
        textAlign: "center"
      }
    }, React.createElement("p", null, "Sign-up here."))))));
  }

}

module.exportDefault(login);
///////////////////////////////////////////////////////////////////////////////////////////

},"profile.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// client/components/profile.js                                                          //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);

class Profile extends Component {
  render() {
    return React.createElement("div", null, "hi from profile..");
  }

}

module.exportDefault(Profile);
///////////////////////////////////////////////////////////////////////////////////////////

},"signup.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// client/components/signup.js                                                           //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let Resolutions;
module.link("../../imports/api/resolutions", {
  Resolutions(v) {
    Resolutions = v;
  }

}, 1);
let Accounts;
module.link("meteor/accounts-base", {
  Accounts(v) {
    Accounts = v;
  }

}, 2);
let BrowserRouter, Route, Link;
module.link("react-router-dom", {
  BrowserRouter(v) {
    BrowserRouter = v;
  },

  Route(v) {
    Route = v;
  },

  Link(v) {
    Link = v;
  }

}, 3);
let TrackerReact;
module.link("meteor/ultimatejs:tracker-react", {
  default(v) {
    TrackerReact = v;
  }

}, 4);

class signup extends TrackerReact(Component) {
  constructor() {
    super(...arguments);

    this.adduser = e => {
      e.preventDefault();
      var email = document.getElementById("email-text").value;
      var password = document.getElementById("pwd-text").value; //console.log("sh"); 

      if (email === "" || password === "") {
        Bert.alert("fill up all the fields", 'danger', 'fixed-top');
      } else {
        Accounts.createUser({
          email,
          password
        }, err => {
          console.log('signup callback', Bert.alert(err.reason, 'danger', 'fixed-top'));
        });
      }
    };
  }

  render() {
    if (Meteor.user() !== null) {
      this.props.history.push('/list');
    }

    console.log(Meteor.user());
    return React.createElement("div", {
      className: "signup-part container"
    }, React.createElement("div", {
      className: "row to-do-card"
    }, React.createElement("div", {
      className: "col-md-12"
    }, React.createElement("div", {
      id: "to-do-title"
    }, "Sign-up here"), React.createElement("form", {
      className: "sign-form"
    }, React.createElement("input", {
      type: "email",
      placeholder: "enter email",
      ref: "resolution",
      id: "email-text",
      required: "required"
    }), React.createElement("input", {
      type: "password",
      placeholder: "enter password",
      ref: "resolution",
      id: "pwd-text",
      required: "required"
    }), React.createElement("button", {
      type: "submit",
      id: "data-btn",
      onClick: event => {
        this.adduser(event);
      }
    }, "Sign-up"), React.createElement("a", {
      href: "/login"
    }, React.createElement("p", null, "Already have an account? Login here."))))));
  }

}

module.exportDefault(signup);
///////////////////////////////////////////////////////////////////////////////////////////

}},"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// client/main.js                                                                        //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 0);
let ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar(v) {
    ReactiveVar = v;
  }

}, 1);
let Router, Route, Switch;
module.link("react-router", {
  Router(v) {
    Router = v;
  },

  Route(v) {
    Route = v;
  },

  Switch(v) {
    Switch = v;
  }

}, 2);
let createBrowserHistory;
module.link("history/createBrowserHistory", {
  default(v) {
    createBrowserHistory = v;
  }

}, 3);
module.link("./main.html");
module.link("bootstrap/dist/css/bootstrap.css");
module.link("bootstrap/dist/css/bootstrap.min.css");
let TrackerReact;
module.link("meteor/ultimatejs:tracker-react", {
  default(v) {
    TrackerReact = v;
  }

}, 4);
let List;
module.link("./components/list", {
  default(v) {
    List = v;
  }

}, 5);
let Signup;
module.link("./components/signup.js", {
  default(v) {
    Signup = v;
  }

}, 6);
let Login;
module.link("./components/login.js", {
  default(v) {
    Login = v;
  }

}, 7);
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 8);
let Profile;
module.link("./components/profile", {
  default(v) {
    Profile = v;
  }

}, 9);
let ReactDOM;
module.link("react-dom", {
  default(v) {
    ReactDOM = v;
  }

}, 10);
let mount;
module.link("react-mounter", {
  mount(v) {
    mount = v;
  }

}, 11);
const browserHistory = createBrowserHistory();

class App extends TrackerReact(Component) {
  render() {
    return React.createElement("div", {
      className: "App"
    }, React.createElement(Switch, null, React.createElement(Route, {
      exact: true,
      path: "/",
      component: Signup
    }), React.createElement(Route, {
      path: "/login",
      component: Login
    }), React.createElement(Route, {
      exact: true,
      path: "/list",
      component: List
    }), React.createElement(Route, {
      path: "/profile",
      component: Profile
    })));
  }

}

if (Meteor.isClient) {
  Meteor.startup(function () {
    console.log("enter");
    ReactDOM.render(React.createElement(Router, {
      history: browserHistory
    }, React.createElement(App, null)), document.getElementById('root'));
  });
}
///////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"api":{"resolutions.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// imports/api/resolutions.js                                                            //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
module.export({
  Resolutions: () => Resolutions
});
const Resolutions = new Mongo.Collection("resolution");
///////////////////////////////////////////////////////////////////////////////////////////

}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});

var exports = require("/client/main.js");