var require = meteorInstall({"client":{"main.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// client/main.html                                                                            //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
module.link("./template.main.js", { "*": "*+" });

/////////////////////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// client/template.main.js                                                                     //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //

Template.body.addContent((function() {
  var view = this;
  return HTML.Raw('<div id="root">  </div>\n\n<!--   \n  <h1>Welcome to Meteor!</h1>\n<h2>sss</h2> -->\n  <!-- {{> hello}}\n  {{> info}} -->');
}));
Meteor.startup(Template.body.renderToDocument);

/////////////////////////////////////////////////////////////////////////////////////////////////

},"components":{"list.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// client/components/list.js                                                                   //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React, Component;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var Profile;
module.link("./profile", {
  "default": function (v) {
    Profile = v;
  }
}, 1);
var Accounts;
module.link("meteor/accounts-base", {
  Accounts: function (v) {
    Accounts = v;
  }
}, 2);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 3);
var Resolutions;
module.link("../../imports/api/resolutions", {
  Resolutions: function (v) {
    Resolutions = v;
  }
}, 4);
var TrackerReact;
module.link("meteor/ultimatejs:tracker-react", {
  "default": function (v) {
    TrackerReact = v;
  }
}, 5);
var login;
Tracker.autorun(function () {
  if (Meteor.user() !== null) {
    login = "Log-out";
  } else {
    login = "Log-in";
  }
});

var List =
/*#__PURE__*/
function (_TrackerReact) {
  (0, _inheritsLoose2.default)(List, _TrackerReact);

  function List() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _TrackerReact.call.apply(_TrackerReact, [this].concat(args)) || this;

    _this.getdata = function () {
      return Resolutions.find().fetch();
    };

    _this.logout = function () {
      var log = document.getElementById("log-btn").innerText;
      console.log(log);

      if (log === "Log-in") {
        _this.props.history.push('/login');
      } else {
        Accounts.logout();
        Bert.alert("Logged out from the account", 'info', 'fixed-top');

        _this.props.history.push('/list');
      }
    };

    _this.adddata = function (event) {
      event.preventDefault();
      var text = document.getElementById("data-text").value; //console.log("sh"); 

      if (text === "") {
        Bert.alert("fill up the field", 'danger', 'fixed-top');
      } else {
        Meteor.call('addtext', text, function (err, result) {
          console.log(result);
        });
        document.getElementById("data-text").value = "";
      }
    };

    _this.handlecheck = function (event, id) {
      console.log(event.target + id);
      Meteor.call('deletetext', id, function (err, result) {
        console.log(result);
      });
    };

    return _this;
  }

  var _proto = List.prototype;

  _proto.render = function () {
    function render() {
      var _this2 = this;

      var list = this.getdata().map(function (text) {
        return React.createElement("div", {
          key: text._id,
          className: "list-itembox",
          style: {
            display: "flex"
          }
        }, React.createElement("input", {
          className: "list-check",
          type: "checkbox",
          onChange: function (event) {
            return _this2.handlecheck(event, text._id);
          }
        }), React.createElement("li", {
          className: "list-item"
        }, text.name));
      });
      return React.createElement("div", {
        className: "to-do-list container"
      }, React.createElement("button", {
        id: "log-btn",
        onClick: function () {
          _this2.logout();
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
        onClick: function (event) {
          _this2.adddata(event);
        }
      }, "ADD ")), React.createElement("ul", {
        style: {
          listStyle: "none"
        },
        className: "list-card"
      }, list))));
    }

    return render;
  }();

  return List;
}(TrackerReact(Component));

module.exportDefault(List);
/////////////////////////////////////////////////////////////////////////////////////////////////

},"login.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// client/components/login.js                                                                  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React, Component;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var Resolutions;
module.link("../../imports/api/resolutions", {
  Resolutions: function (v) {
    Resolutions = v;
  }
}, 1);
var Accounts;
module.link("meteor/accounts-base", {
  Accounts: function (v) {
    Accounts = v;
  }
}, 2);
var BrowserRouter, Route, Link;
module.link("react-router-dom", {
  BrowserRouter: function (v) {
    BrowserRouter = v;
  },
  Route: function (v) {
    Route = v;
  },
  Link: function (v) {
    Link = v;
  }
}, 3);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 4);
var TrackerReact;
module.link("meteor/ultimatejs:tracker-react", {
  "default": function (v) {
    TrackerReact = v;
  }
}, 5);

var login =
/*#__PURE__*/
function (_TrackerReact) {
  (0, _inheritsLoose2.default)(login, _TrackerReact);

  function login() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _TrackerReact.call.apply(_TrackerReact, [this].concat(args)) || this;

    _this.verifyuser = function (e) {
      e.preventDefault();
      var email = document.getElementById("email-text").value;
      var password = document.getElementById("pwd-text").value;

      if (email === "" || password === "") {
        Bert.alert("fill up all the fields", 'danger', 'fixed-top');
      } else {
        Meteor.loginWithPassword({
          email: email
        }, password, function (err) {
          Bert.alert(err.reason, 'danger', 'fixed-top');
        });
      }
    };

    return _this;
  }

  var _proto = login.prototype;

  _proto.render = function () {
    function render() {
      var _this2 = this;

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
        onClick: function (event) {
          _this2.verifyuser(event);
        }
      }, "Log-in"), React.createElement("a", {
        href: "/",
        style: {
          textAlign: "center"
        }
      }, React.createElement("p", null, "Sign-up here."))))));
    }

    return render;
  }();

  return login;
}(TrackerReact(Component));

module.exportDefault(login);
/////////////////////////////////////////////////////////////////////////////////////////////////

},"profile.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// client/components/profile.js                                                                //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React, Component;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);

var Profile =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(Profile, _Component);

  function Profile() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Profile.prototype;

  _proto.render = function () {
    function render() {
      return React.createElement("div", null, "hi from profile..");
    }

    return render;
  }();

  return Profile;
}(Component);

module.exportDefault(Profile);
/////////////////////////////////////////////////////////////////////////////////////////////////

},"signup.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// client/components/signup.js                                                                 //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React, Component;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var Resolutions;
module.link("../../imports/api/resolutions", {
  Resolutions: function (v) {
    Resolutions = v;
  }
}, 1);
var Accounts;
module.link("meteor/accounts-base", {
  Accounts: function (v) {
    Accounts = v;
  }
}, 2);
var BrowserRouter, Route, Link;
module.link("react-router-dom", {
  BrowserRouter: function (v) {
    BrowserRouter = v;
  },
  Route: function (v) {
    Route = v;
  },
  Link: function (v) {
    Link = v;
  }
}, 3);
var TrackerReact;
module.link("meteor/ultimatejs:tracker-react", {
  "default": function (v) {
    TrackerReact = v;
  }
}, 4);

var signup =
/*#__PURE__*/
function (_TrackerReact) {
  (0, _inheritsLoose2.default)(signup, _TrackerReact);

  function signup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _TrackerReact.call.apply(_TrackerReact, [this].concat(args)) || this;

    _this.adduser = function (e) {
      e.preventDefault();
      var email = document.getElementById("email-text").value;
      var password = document.getElementById("pwd-text").value; //console.log("sh"); 

      if (email === "" || password === "") {
        Bert.alert("fill up all the fields", 'danger', 'fixed-top');
      } else {
        Accounts.createUser({
          email: email,
          password: password
        }, function (err) {
          console.log('signup callback', Bert.alert(err.reason, 'danger', 'fixed-top'));
        });
      }
    };

    return _this;
  }

  var _proto = signup.prototype;

  _proto.render = function () {
    function render() {
      var _this2 = this;

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
        onClick: function (event) {
          _this2.adduser(event);
        }
      }, "Sign-up"), React.createElement("a", {
        href: "/login"
      }, React.createElement("p", null, "Already have an account? Login here."))))));
    }

    return render;
  }();

  return signup;
}(TrackerReact(Component));

module.exportDefault(signup);
/////////////////////////////////////////////////////////////////////////////////////////////////

}},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// client/main.js                                                                              //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 0);
var ReactiveVar;
module.link("meteor/reactive-var", {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 1);
var Router, Route, Switch;
module.link("react-router", {
  Router: function (v) {
    Router = v;
  },
  Route: function (v) {
    Route = v;
  },
  Switch: function (v) {
    Switch = v;
  }
}, 2);
var createBrowserHistory;
module.link("history/createBrowserHistory", {
  "default": function (v) {
    createBrowserHistory = v;
  }
}, 3);
module.link("./main.html");
module.link("bootstrap/dist/css/bootstrap.css");
module.link("bootstrap/dist/css/bootstrap.min.css");
var TrackerReact;
module.link("meteor/ultimatejs:tracker-react", {
  "default": function (v) {
    TrackerReact = v;
  }
}, 4);
var List;
module.link("./components/list", {
  "default": function (v) {
    List = v;
  }
}, 5);
var Signup;
module.link("./components/signup.js", {
  "default": function (v) {
    Signup = v;
  }
}, 6);
var Login;
module.link("./components/login.js", {
  "default": function (v) {
    Login = v;
  }
}, 7);
var React, Component;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 8);
var Profile;
module.link("./components/profile", {
  "default": function (v) {
    Profile = v;
  }
}, 9);
var ReactDOM;
module.link("react-dom", {
  "default": function (v) {
    ReactDOM = v;
  }
}, 10);
var mount;
module.link("react-mounter", {
  mount: function (v) {
    mount = v;
  }
}, 11);
var browserHistory = createBrowserHistory();

var App =
/*#__PURE__*/
function (_TrackerReact) {
  (0, _inheritsLoose2.default)(App, _TrackerReact);

  function App() {
    return _TrackerReact.apply(this, arguments) || this;
  }

  var _proto = App.prototype;

  _proto.render = function () {
    function render() {
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

    return render;
  }();

  return App;
}(TrackerReact(Component));

if (Meteor.isClient) {
  Meteor.startup(function () {
    console.log("enter");
    ReactDOM.render(React.createElement(Router, {
      history: browserHistory
    }, React.createElement(App, null)), document.getElementById('root'));
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"api":{"resolutions.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// imports/api/resolutions.js                                                                  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
module.export({
  Resolutions: function () {
    return Resolutions;
  }
});
var Resolutions = new Mongo.Collection("resolution");
/////////////////////////////////////////////////////////////////////////////////////////////////

}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});

var exports = require("/client/main.js");