//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Retry = Package.retry.Retry;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var SockJS;

var require = meteorInstall({"node_modules":{"meteor":{"socket-stream-client":{"sockjs-0.3.4.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/socket-stream-client/sockjs-0.3.4.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

// XXX METEOR changes in <METEOR>

/* SockJS client, version 0.3.4, http://sockjs.org, MIT License

Copyright (c) 2011-2012 VMware, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
// <METEOR> Commented out JSO implementation (use json package instead).
// JSON2 by Douglas Crockford (minified).
// var JSON;JSON||(JSON={}),function(){function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g;return e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)typeof rep[c]=="string"&&(d=rep[c],e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g;return e}}function quote(a){escapable.lastIndex=0;return escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function f(a){return a<10?"0"+a:a}"use strict",typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver=="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")})}()
// </METEOR>
//     [*] Including lib/index.js
// Public object
SockJS = function () {
  var _document = document;
  var _window = window;
  var utils = {}; //         [*] Including lib/reventtarget.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */

  /* Simplified implementation of DOM2 EventTarget.
   *   http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget
   */

  var REventTarget = function () {};

  REventTarget.prototype.addEventListener = function (eventType, listener) {
    if (!this._listeners) {
      this._listeners = {};
    }

    if (!(eventType in this._listeners)) {
      this._listeners[eventType] = [];
    }

    var arr = this._listeners[eventType];

    if (utils.arrIndexOf(arr, listener) === -1) {
      arr.push(listener);
    }

    return;
  };

  REventTarget.prototype.removeEventListener = function (eventType, listener) {
    if (!(this._listeners && eventType in this._listeners)) {
      return;
    }

    var arr = this._listeners[eventType];
    var idx = utils.arrIndexOf(arr, listener);

    if (idx !== -1) {
      if (arr.length > 1) {
        this._listeners[eventType] = arr.slice(0, idx).concat(arr.slice(idx + 1));
      } else {
        delete this._listeners[eventType];
      }

      return;
    }

    return;
  };

  REventTarget.prototype.dispatchEvent = function (event) {
    var t = event.type;
    var args = Array.prototype.slice.call(arguments, 0);

    if (this['on' + t]) {
      this['on' + t].apply(this, args);
    }

    if (this._listeners && t in this._listeners) {
      for (var i = 0; i < this._listeners[t].length; i++) {
        this._listeners[t][i].apply(this, args);
      }
    }
  }; //         [*] End of lib/reventtarget.js
  //         [*] Including lib/simpleevent.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */


  var SimpleEvent = function (type, obj) {
    this.type = type;

    if (typeof obj !== 'undefined') {
      for (var k in meteorBabelHelpers.sanitizeForInObject(obj)) {
        if (!obj.hasOwnProperty(k)) continue;
        this[k] = obj[k];
      }
    }
  };

  SimpleEvent.prototype.toString = function () {
    var r = [];

    for (var k in meteorBabelHelpers.sanitizeForInObject(this)) {
      if (!this.hasOwnProperty(k)) continue;
      var v = this[k];
      if (typeof v === 'function') v = '[function]';
      r.push(k + '=' + v);
    }

    return 'SimpleEvent(' + r.join(', ') + ')';
  }; //         [*] End of lib/simpleevent.js
  //         [*] Including lib/eventemitter.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */


  var EventEmitter = function (events) {
    var that = this;
    that._events = events || [];
    that._listeners = {};
  };

  EventEmitter.prototype.emit = function (type) {
    var that = this;

    that._verifyType(type);

    if (that._nuked) return;
    var args = Array.prototype.slice.call(arguments, 1);

    if (that['on' + type]) {
      that['on' + type].apply(that, args);
    }

    if (type in that._listeners) {
      for (var i = 0; i < that._listeners[type].length; i++) {
        that._listeners[type][i].apply(that, args);
      }
    }
  };

  EventEmitter.prototype.on = function (type, callback) {
    var that = this;

    that._verifyType(type);

    if (that._nuked) return;

    if (!(type in that._listeners)) {
      that._listeners[type] = [];
    }

    that._listeners[type].push(callback);
  };

  EventEmitter.prototype._verifyType = function (type) {
    var that = this;

    if (utils.arrIndexOf(that._events, type) === -1) {
      utils.log('Event ' + JSON.stringify(type) + ' not listed ' + JSON.stringify(that._events) + ' in ' + that);
    }
  };

  EventEmitter.prototype.nuke = function () {
    var that = this;
    that._nuked = true;

    for (var i = 0; i < that._events.length; i++) {
      delete that[that._events[i]];
    }

    that._listeners = {};
  }; //         [*] End of lib/eventemitter.js
  //         [*] Including lib/utils.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */


  var random_string_chars = 'abcdefghijklmnopqrstuvwxyz0123456789_';

  utils.random_string = function (length, max) {
    max = max || random_string_chars.length;
    var i,
        ret = [];

    for (i = 0; i < length; i++) {
      ret.push(random_string_chars.substr(Math.floor(Math.random() * max), 1));
    }

    return ret.join('');
  };

  utils.random_number = function (max) {
    return Math.floor(Math.random() * max);
  };

  utils.random_number_string = function (max) {
    var t = ('' + (max - 1)).length;
    var p = Array(t + 1).join('0');
    return (p + utils.random_number(max)).slice(-t);
  }; // Assuming that url looks like: http://asdasd:111/asd


  utils.getOrigin = function (url) {
    url += '/';
    var parts = url.split('/').slice(0, 3);
    return parts.join('/');
  };

  utils.isSameOriginUrl = function (url_a, url_b) {
    // location.origin would do, but it's not always available.
    if (!url_b) url_b = _window.location.href;
    return url_a.split('/').slice(0, 3).join('/') === url_b.split('/').slice(0, 3).join('/');
  }; // <METEOR>
  // https://github.com/sockjs/sockjs-client/issues/79


  utils.isSameOriginScheme = function (url_a, url_b) {
    if (!url_b) url_b = _window.location.href;
    return url_a.split(':')[0] === url_b.split(':')[0];
  }; // </METEOR>


  utils.getParentDomain = function (url) {
    // ipv4 ip address
    if (/^[0-9.]*$/.test(url)) return url; // ipv6 ip address

    if (/^\[/.test(url)) return url; // no dots

    if (!/[.]/.test(url)) return url;
    var parts = url.split('.').slice(1);
    return parts.join('.');
  };

  utils.objectExtend = function (dst, src) {
    for (var k in meteorBabelHelpers.sanitizeForInObject(src)) {
      if (src.hasOwnProperty(k)) {
        dst[k] = src[k];
      }
    }

    return dst;
  };

  var WPrefix = '_jp';

  utils.polluteGlobalNamespace = function () {
    if (!(WPrefix in _window)) {
      _window[WPrefix] = {};
    }
  };

  utils.closeFrame = function (code, reason) {
    return 'c' + JSON.stringify([code, reason]);
  };

  utils.userSetCode = function (code) {
    return code === 1000 || code >= 3000 && code <= 4999;
  }; // See: http://www.erg.abdn.ac.uk/~gerrit/dccp/notes/ccid2/rto_estimator/
  // and RFC 2988.


  utils.countRTO = function (rtt) {
    var rto;

    if (rtt > 100) {
      rto = 3 * rtt; // rto > 300msec
    } else {
      rto = rtt + 200; // 200msec < rto <= 300msec
    }

    return rto;
  };

  utils.log = function () {
    if (_window.console && console.log && console.log.apply) {
      console.log.apply(console, arguments);
    }
  };

  utils.bind = function (fun, that) {
    if (fun.bind) {
      return fun.bind(that);
    } else {
      return function () {
        return fun.apply(that, arguments);
      };
    }
  };

  utils.flatUrl = function (url) {
    return url.indexOf('?') === -1 && url.indexOf('#') === -1;
  }; // `relativeTo` is an optional absolute URL. If provided, `url` will be
  // interpreted relative to `relativeTo`. Defaults to `document.location`.
  // <METEOR>


  utils.amendUrl = function (url, relativeTo) {
    var baseUrl;

    if (relativeTo === undefined) {
      baseUrl = _document.location;
    } else {
      var protocolMatch = /^([a-z0-9.+-]+:)/i.exec(relativeTo);

      if (protocolMatch) {
        var protocol = protocolMatch[0].toLowerCase();
        var rest = relativeTo.substring(protocol.length);
        var hostMatch = /[a-z0-9\.-]+(:[0-9]+)?/.exec(rest);
        if (hostMatch) var host = hostMatch[0];
      }

      if (!protocol || !host) throw new Error("relativeTo must be an absolute url");
      baseUrl = {
        protocol: protocol,
        host: host
      };
    }

    if (!url) {
      throw new Error('Wrong url for SockJS');
    }

    if (!utils.flatUrl(url)) {
      throw new Error('Only basic urls are supported in SockJS');
    } //  '//abc' --> 'http://abc'


    if (url.indexOf('//') === 0) {
      url = baseUrl.protocol + url;
    } // '/abc' --> 'http://localhost:1234/abc'


    if (url.indexOf('/') === 0) {
      url = baseUrl.protocol + '//' + baseUrl.host + url;
    } // </METEOR>
    // strip trailing slashes


    url = url.replace(/[/]+$/, ''); // We have a full url here, with proto and host. For some browsers
    // http://localhost:80/ is not in the same origin as http://localhost/
    // Remove explicit :80 or :443 in such cases. See #74

    var parts = url.split("/");

    if (parts[0] === "http:" && /:80$/.test(parts[2]) || parts[0] === "https:" && /:443$/.test(parts[2])) {
      parts[2] = parts[2].replace(/:(80|443)$/, "");
    }

    url = parts.join("/");
    return url;
  }; // IE doesn't support [].indexOf.


  utils.arrIndexOf = function (arr, obj) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === obj) {
        return i;
      }
    }

    return -1;
  };

  utils.arrSkip = function (arr, obj) {
    var idx = utils.arrIndexOf(arr, obj);

    if (idx === -1) {
      return arr.slice();
    } else {
      var dst = arr.slice(0, idx);
      return dst.concat(arr.slice(idx + 1));
    }
  }; // Via: https://gist.github.com/1133122/2121c601c5549155483f50be3da5305e83b8c5df


  utils.isArray = Array.isArray || function (value) {
    return {}.toString.call(value).indexOf('Array') >= 0;
  };

  utils.delay = function (t, fun) {
    if (typeof t === 'function') {
      fun = t;
      t = 0;
    }

    return setTimeout(fun, t);
  }; // Chars worth escaping, as defined by Douglas Crockford:
  //   https://github.com/douglascrockford/JSON-js/blob/47a9882cddeb1e8529e07af9736218075372b8ac/json2.js#L196


  var json_escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      json_lookup = {
    "\0": "\\u0000",
    "\x01": "\\u0001",
    "\x02": "\\u0002",
    "\x03": "\\u0003",
    "\x04": "\\u0004",
    "\x05": "\\u0005",
    "\x06": "\\u0006",
    "\x07": "\\u0007",
    "\b": "\\b",
    "\t": "\\t",
    "\n": "\\n",
    "\x0B": "\\u000b",
    "\f": "\\f",
    "\r": "\\r",
    "\x0E": "\\u000e",
    "\x0F": "\\u000f",
    "\x10": "\\u0010",
    "\x11": "\\u0011",
    "\x12": "\\u0012",
    "\x13": "\\u0013",
    "\x14": "\\u0014",
    "\x15": "\\u0015",
    "\x16": "\\u0016",
    "\x17": "\\u0017",
    "\x18": "\\u0018",
    "\x19": "\\u0019",
    "\x1A": "\\u001a",
    "\x1B": "\\u001b",
    "\x1C": "\\u001c",
    "\x1D": "\\u001d",
    "\x1E": "\\u001e",
    "\x1F": "\\u001f",
    "\"": "\\\"",
    "\\": "\\\\",
    "\x7F": "\\u007f",
    "\x80": "\\u0080",
    "\x81": "\\u0081",
    "\x82": "\\u0082",
    "\x83": "\\u0083",
    "\x84": "\\u0084",
    "\x85": "\\u0085",
    "\x86": "\\u0086",
    "\x87": "\\u0087",
    "\x88": "\\u0088",
    "\x89": "\\u0089",
    "\x8A": "\\u008a",
    "\x8B": "\\u008b",
    "\x8C": "\\u008c",
    "\x8D": "\\u008d",
    "\x8E": "\\u008e",
    "\x8F": "\\u008f",
    "\x90": "\\u0090",
    "\x91": "\\u0091",
    "\x92": "\\u0092",
    "\x93": "\\u0093",
    "\x94": "\\u0094",
    "\x95": "\\u0095",
    "\x96": "\\u0096",
    "\x97": "\\u0097",
    "\x98": "\\u0098",
    "\x99": "\\u0099",
    "\x9A": "\\u009a",
    "\x9B": "\\u009b",
    "\x9C": "\\u009c",
    "\x9D": "\\u009d",
    "\x9E": "\\u009e",
    "\x9F": "\\u009f",
    "\xAD": "\\u00ad",
    "\u0600": "\\u0600",
    "\u0601": "\\u0601",
    "\u0602": "\\u0602",
    "\u0603": "\\u0603",
    "\u0604": "\\u0604",
    "\u070F": "\\u070f",
    "\u17B4": "\\u17b4",
    "\u17B5": "\\u17b5",
    "\u200C": "\\u200c",
    "\u200D": "\\u200d",
    "\u200E": "\\u200e",
    "\u200F": "\\u200f",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
    "\u202A": "\\u202a",
    "\u202B": "\\u202b",
    "\u202C": "\\u202c",
    "\u202D": "\\u202d",
    "\u202E": "\\u202e",
    "\u202F": "\\u202f",
    "\u2060": "\\u2060",
    "\u2061": "\\u2061",
    "\u2062": "\\u2062",
    "\u2063": "\\u2063",
    "\u2064": "\\u2064",
    "\u2065": "\\u2065",
    "\u2066": "\\u2066",
    "\u2067": "\\u2067",
    "\u2068": "\\u2068",
    "\u2069": "\\u2069",
    "\u206A": "\\u206a",
    "\u206B": "\\u206b",
    "\u206C": "\\u206c",
    "\u206D": "\\u206d",
    "\u206E": "\\u206e",
    "\u206F": "\\u206f",
    "\uFEFF": "\\ufeff",
    "\uFFF0": "\\ufff0",
    "\uFFF1": "\\ufff1",
    "\uFFF2": "\\ufff2",
    "\uFFF3": "\\ufff3",
    "\uFFF4": "\\ufff4",
    "\uFFF5": "\\ufff5",
    "\uFFF6": "\\ufff6",
    "\uFFF7": "\\ufff7",
    "\uFFF8": "\\ufff8",
    "\uFFF9": "\\ufff9",
    "\uFFFA": "\\ufffa",
    "\uFFFB": "\\ufffb",
    "\uFFFC": "\\ufffc",
    "\uFFFD": "\\ufffd",
    "\uFFFE": "\\ufffe",
    "\uFFFF": "\\uffff"
  }; // Some extra characters that Chrome gets wrong, and substitutes with
  // something else on the wire.

  var extra_escapable = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
      extra_lookup; // JSON Quote string. Use native implementation when possible.

  var JSONQuote = JSON && JSON.stringify || function (string) {
    json_escapable.lastIndex = 0;

    if (json_escapable.test(string)) {
      string = string.replace(json_escapable, function (a) {
        return json_lookup[a];
      });
    }

    return '"' + string + '"';
  }; // This may be quite slow, so let's delay until user actually uses bad
  // characters.


  var unroll_lookup = function (escapable) {
    var i;
    var unrolled = {};
    var c = [];

    for (i = 0; i < 65536; i++) {
      c.push(String.fromCharCode(i));
    }

    escapable.lastIndex = 0;
    c.join('').replace(escapable, function (a) {
      unrolled[a] = "\\u" + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
      return '';
    });
    escapable.lastIndex = 0;
    return unrolled;
  }; // Quote string, also taking care of unicode characters that browsers
  // often break. Especially, take care of unicode surrogates:
  //    http://en.wikipedia.org/wiki/Mapping_of_Unicode_characters#Surrogates


  utils.quote = function (string) {
    var quoted = JSONQuote(string); // In most cases this should be very fast and good enough.

    extra_escapable.lastIndex = 0;

    if (!extra_escapable.test(quoted)) {
      return quoted;
    }

    if (!extra_lookup) extra_lookup = unroll_lookup(extra_escapable);
    return quoted.replace(extra_escapable, function (a) {
      return extra_lookup[a];
    });
  };

  var _all_protocols = ['websocket', 'xdr-streaming', 'xhr-streaming', 'iframe-eventsource', 'iframe-htmlfile', 'xdr-polling', 'xhr-polling', 'iframe-xhr-polling', 'jsonp-polling'];

  utils.probeProtocols = function () {
    var probed = {};

    for (var i = 0; i < _all_protocols.length; i++) {
      var protocol = _all_protocols[i]; // User can have a typo in protocol name.

      probed[protocol] = SockJS[protocol] && SockJS[protocol].enabled();
    }

    return probed;
  };

  utils.detectProtocols = function (probed, protocols_whitelist, info) {
    var pe = {},
        protocols = [];
    if (!protocols_whitelist) protocols_whitelist = _all_protocols;

    for (var i = 0; i < protocols_whitelist.length; i++) {
      var protocol = protocols_whitelist[i];
      pe[protocol] = probed[protocol];
    }

    var maybe_push = function (protos) {
      var proto = protos.shift();

      if (pe[proto]) {
        protocols.push(proto);
      } else {
        if (protos.length > 0) {
          maybe_push(protos);
        }
      }
    }; // 1. Websocket


    if (info.websocket !== false) {
      maybe_push(['websocket']);
    } // 2. Streaming


    if (pe['xhr-streaming'] && !info.null_origin) {
      protocols.push('xhr-streaming');
    } else {
      if (pe['xdr-streaming'] && !info.cookie_needed && !info.null_origin) {
        protocols.push('xdr-streaming');
      } else {
        maybe_push(['iframe-eventsource', 'iframe-htmlfile']);
      }
    } // 3. Polling


    if (pe['xhr-polling'] && !info.null_origin) {
      protocols.push('xhr-polling');
    } else {
      if (pe['xdr-polling'] && !info.cookie_needed && !info.null_origin) {
        protocols.push('xdr-polling');
      } else {
        maybe_push(['iframe-xhr-polling', 'jsonp-polling']);
      }
    }

    return protocols;
  }; //         [*] End of lib/utils.js
  //         [*] Including lib/dom.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */
  // May be used by htmlfile jsonp and transports.


  var MPrefix = '_sockjs_global';

  utils.createHook = function () {
    var window_id = 'a' + utils.random_string(8);

    if (!(MPrefix in _window)) {
      var map = {};

      _window[MPrefix] = function (window_id) {
        if (!(window_id in map)) {
          map[window_id] = {
            id: window_id,
            del: function () {
              delete map[window_id];
            }
          };
        }

        return map[window_id];
      };
    }

    return _window[MPrefix](window_id);
  };

  utils.attachMessage = function (listener) {
    utils.attachEvent('message', listener);
  };

  utils.attachEvent = function (event, listener) {
    if (typeof _window.addEventListener !== 'undefined') {
      _window.addEventListener(event, listener, false);
    } else {
      // IE quirks.
      // According to: http://stevesouders.com/misc/test-postmessage.php
      // the message gets delivered only to 'document', not 'window'.
      _document.attachEvent("on" + event, listener); // I get 'window' for ie8.


      _window.attachEvent("on" + event, listener);
    }
  };

  utils.detachMessage = function (listener) {
    utils.detachEvent('message', listener);
  };

  utils.detachEvent = function (event, listener) {
    if (typeof _window.addEventListener !== 'undefined') {
      _window.removeEventListener(event, listener, false);
    } else {
      _document.detachEvent("on" + event, listener);

      _window.detachEvent("on" + event, listener);
    }
  };

  var on_unload = {}; // Things registered after beforeunload are to be called immediately.

  var after_unload = false;

  var trigger_unload_callbacks = function () {
    for (var ref in meteorBabelHelpers.sanitizeForInObject(on_unload)) {
      on_unload[ref]();
      delete on_unload[ref];
    }

    ;
  };

  var unload_triggered = function () {
    if (after_unload) return;
    after_unload = true;
    trigger_unload_callbacks();
  }; // 'unload' alone is not reliable in opera within an iframe, but we
  // can't use `beforeunload` as IE fires it on javascript: links.


  utils.attachEvent('unload', unload_triggered);

  utils.unload_add = function (listener) {
    var ref = utils.random_string(8);
    on_unload[ref] = listener;

    if (after_unload) {
      utils.delay(trigger_unload_callbacks);
    }

    return ref;
  };

  utils.unload_del = function (ref) {
    if (ref in on_unload) delete on_unload[ref];
  };

  utils.createIframe = function (iframe_url, error_callback) {
    var iframe = _document.createElement('iframe');

    var tref, unload_ref;

    var unattach = function () {
      clearTimeout(tref); // Explorer had problems with that.

      try {
        iframe.onload = null;
      } catch (x) {}

      iframe.onerror = null;
    };

    var cleanup = function () {
      if (iframe) {
        unattach(); // This timeout makes chrome fire onbeforeunload event
        // within iframe. Without the timeout it goes straight to
        // onunload.

        setTimeout(function () {
          if (iframe) {
            iframe.parentNode.removeChild(iframe);
          }

          iframe = null;
        }, 0);
        utils.unload_del(unload_ref);
      }
    };

    var onerror = function (r) {
      if (iframe) {
        cleanup();
        error_callback(r);
      }
    };

    var post = function (msg, origin) {
      try {
        // When the iframe is not loaded, IE raises an exception
        // on 'contentWindow'.
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage(msg, origin);
        }
      } catch (x) {}

      ;
    };

    iframe.src = iframe_url;
    iframe.style.display = 'none';
    iframe.style.position = 'absolute';

    iframe.onerror = function () {
      onerror('onerror');
    };

    iframe.onload = function () {
      // `onload` is triggered before scripts on the iframe are
      // executed. Give it few seconds to actually load stuff.
      clearTimeout(tref);
      tref = setTimeout(function () {
        onerror('onload timeout');
      }, 2000);
    };

    _document.body.appendChild(iframe);

    tref = setTimeout(function () {
      onerror('timeout');
    }, 15000);
    unload_ref = utils.unload_add(cleanup);
    return {
      post: post,
      cleanup: cleanup,
      loaded: unattach
    };
  };

  utils.createHtmlfile = function (iframe_url, error_callback) {
    var doc = new ActiveXObject('htmlfile');
    var tref, unload_ref;
    var iframe;

    var unattach = function () {
      clearTimeout(tref);
    };

    var cleanup = function () {
      if (doc) {
        unattach();
        utils.unload_del(unload_ref);
        iframe.parentNode.removeChild(iframe);
        iframe = doc = null;
        CollectGarbage();
      }
    };

    var onerror = function (r) {
      if (doc) {
        cleanup();
        error_callback(r);
      }
    };

    var post = function (msg, origin) {
      try {
        // When the iframe is not loaded, IE raises an exception
        // on 'contentWindow'.
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage(msg, origin);
        }
      } catch (x) {}

      ;
    };

    doc.open();
    doc.write('<html><s' + 'cript>' + 'document.domain="' + document.domain + '";' + '</s' + 'cript></html>');
    doc.close();
    doc.parentWindow[WPrefix] = _window[WPrefix];
    var c = doc.createElement('div');
    doc.body.appendChild(c);
    iframe = doc.createElement('iframe');
    c.appendChild(iframe);
    iframe.src = iframe_url;
    tref = setTimeout(function () {
      onerror('timeout');
    }, 15000);
    unload_ref = utils.unload_add(cleanup);
    return {
      post: post,
      cleanup: cleanup,
      loaded: unattach
    };
  }; //         [*] End of lib/dom.js
  //         [*] Including lib/dom2.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */


  var AbstractXHRObject = function () {};

  AbstractXHRObject.prototype = new EventEmitter(['chunk', 'finish']);

  AbstractXHRObject.prototype._start = function (method, url, payload, opts) {
    var that = this;

    try {
      that.xhr = new XMLHttpRequest();
    } catch (x) {}

    ;

    if (!that.xhr) {
      try {
        that.xhr = new _window.ActiveXObject('Microsoft.XMLHTTP');
      } catch (x) {}

      ;
    }

    if (_window.ActiveXObject || _window.XDomainRequest) {
      // IE8 caches even POSTs
      url += (url.indexOf('?') === -1 ? '?' : '&') + 't=' + +new Date();
    } // Explorer tends to keep connection open, even after the
    // tab gets closed: http://bugs.jquery.com/ticket/5280


    that.unload_ref = utils.unload_add(function () {
      that._cleanup(true);
    });

    try {
      that.xhr.open(method, url, true);
    } catch (e) {
      // IE raises an exception on wrong port.
      that.emit('finish', 0, '');

      that._cleanup();

      return;
    }

    ;

    if (!opts || !opts.no_credentials) {
      // Mozilla docs says https://developer.mozilla.org/en/XMLHttpRequest :
      // "This never affects same-site requests."
      that.xhr.withCredentials = 'true';
    }

    if (opts && opts.headers) {
      for (var key in meteorBabelHelpers.sanitizeForInObject(opts.headers)) {
        that.xhr.setRequestHeader(key, opts.headers[key]);
      }
    }

    that.xhr.onreadystatechange = function () {
      if (that.xhr) {
        var x = that.xhr;

        switch (x.readyState) {
          case 3:
            // IE doesn't like peeking into responseText or status
            // on Microsoft.XMLHTTP and readystate=3
            try {
              var status = x.status;
              var text = x.responseText;
            } catch (x) {}

            ; // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450

            if (status === 1223) status = 204; // IE does return readystate == 3 for 404 answers.

            if (text && text.length > 0) {
              that.emit('chunk', status, text);
            }

            break;

          case 4:
            var status = x.status; // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450

            if (status === 1223) status = 204;
            that.emit('finish', status, x.responseText);

            that._cleanup(false);

            break;
        }
      }
    };

    that.xhr.send(payload);
  };

  AbstractXHRObject.prototype._cleanup = function (abort) {
    var that = this;
    if (!that.xhr) return;
    utils.unload_del(that.unload_ref); // IE needs this field to be a function

    that.xhr.onreadystatechange = function () {};

    if (abort) {
      try {
        that.xhr.abort();
      } catch (x) {}

      ;
    }

    that.unload_ref = that.xhr = null;
  };

  AbstractXHRObject.prototype.close = function () {
    var that = this;
    that.nuke();

    that._cleanup(true);
  };

  var XHRCorsObject = utils.XHRCorsObject = function () {
    var that = this,
        args = arguments;
    utils.delay(function () {
      that._start.apply(that, args);
    });
  };

  XHRCorsObject.prototype = new AbstractXHRObject();

  var XHRLocalObject = utils.XHRLocalObject = function (method, url, payload) {
    var that = this;
    utils.delay(function () {
      that._start(method, url, payload, {
        no_credentials: true
      });
    });
  };

  XHRLocalObject.prototype = new AbstractXHRObject(); // References:
  //   http://ajaxian.com/archives/100-line-ajax-wrapper
  //   http://msdn.microsoft.com/en-us/library/cc288060(v=VS.85).aspx

  var XDRObject = utils.XDRObject = function (method, url, payload) {
    var that = this;
    utils.delay(function () {
      that._start(method, url, payload);
    });
  };

  XDRObject.prototype = new EventEmitter(['chunk', 'finish']);

  XDRObject.prototype._start = function (method, url, payload) {
    var that = this;
    var xdr = new XDomainRequest(); // IE caches even POSTs

    url += (url.indexOf('?') === -1 ? '?' : '&') + 't=' + +new Date();

    var onerror = xdr.ontimeout = xdr.onerror = function () {
      that.emit('finish', 0, '');

      that._cleanup(false);
    };

    xdr.onprogress = function () {
      that.emit('chunk', 200, xdr.responseText);
    };

    xdr.onload = function () {
      that.emit('finish', 200, xdr.responseText);

      that._cleanup(false);
    };

    that.xdr = xdr;
    that.unload_ref = utils.unload_add(function () {
      that._cleanup(true);
    });

    try {
      // Fails with AccessDenied if port number is bogus
      that.xdr.open(method, url);
      that.xdr.send(payload);
    } catch (x) {
      onerror();
    }
  };

  XDRObject.prototype._cleanup = function (abort) {
    var that = this;
    if (!that.xdr) return;
    utils.unload_del(that.unload_ref);
    that.xdr.ontimeout = that.xdr.onerror = that.xdr.onprogress = that.xdr.onload = null;

    if (abort) {
      try {
        that.xdr.abort();
      } catch (x) {}

      ;
    }

    that.unload_ref = that.xdr = null;
  };

  XDRObject.prototype.close = function () {
    var that = this;
    that.nuke();

    that._cleanup(true);
  }; // 1. Is natively via XHR
  // 2. Is natively via XDR
  // 3. Nope, but postMessage is there so it should work via the Iframe.
  // 4. Nope, sorry.


  utils.isXHRCorsCapable = function () {
    if (_window.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()) {
      return 1;
    } // XDomainRequest doesn't work if page is served from file://


    if (_window.XDomainRequest && _document.domain) {
      return 2;
    }

    if (IframeTransport.enabled()) {
      return 3;
    }

    return 4;
  }; //         [*] End of lib/dom2.js
  //         [*] Including lib/sockjs.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */


  var SockJS = function (url, dep_protocols_whitelist, options) {
    if (!(this instanceof SockJS)) {
      // makes `new` optional
      return new SockJS(url, dep_protocols_whitelist, options);
    }

    var that = this,
        protocols_whitelist;
    that._options = {
      devel: false,
      debug: false,
      protocols_whitelist: [],
      info: undefined,
      rtt: undefined
    };

    if (options) {
      utils.objectExtend(that._options, options);
    }

    that._base_url = utils.amendUrl(url);
    that._server = that._options.server || utils.random_number_string(1000);

    if (that._options.protocols_whitelist && that._options.protocols_whitelist.length) {
      protocols_whitelist = that._options.protocols_whitelist;
    } else {
      // Deprecated API
      if (typeof dep_protocols_whitelist === 'string' && dep_protocols_whitelist.length > 0) {
        protocols_whitelist = [dep_protocols_whitelist];
      } else if (utils.isArray(dep_protocols_whitelist)) {
        protocols_whitelist = dep_protocols_whitelist;
      } else {
        protocols_whitelist = null;
      }

      if (protocols_whitelist) {
        that._debug('Deprecated API: Use "protocols_whitelist" option ' + 'instead of supplying protocol list as a second ' + 'parameter to SockJS constructor.');
      }
    }

    that._protocols = [];
    that.protocol = null;
    that.readyState = SockJS.CONNECTING;
    that._ir = createInfoReceiver(that._base_url);

    that._ir.onfinish = function (info, rtt) {
      that._ir = null;

      if (info) {
        if (that._options.info) {
          // Override if user supplies the option
          info = utils.objectExtend(info, that._options.info);
        }

        if (that._options.rtt) {
          rtt = that._options.rtt;
        }

        that._applyInfo(info, rtt, protocols_whitelist);

        that._didClose();
      } else {
        that._didClose(1002, 'Can\'t connect to server', true);
      }
    };
  }; // Inheritance


  SockJS.prototype = new REventTarget();
  SockJS.version = "0.3.4";
  SockJS.CONNECTING = 0;
  SockJS.OPEN = 1;
  SockJS.CLOSING = 2;
  SockJS.CLOSED = 3;

  SockJS.prototype._debug = function () {
    if (this._options.debug) utils.log.apply(utils, arguments);
  };

  SockJS.prototype._dispatchOpen = function () {
    var that = this;

    if (that.readyState === SockJS.CONNECTING) {
      if (that._transport_tref) {
        clearTimeout(that._transport_tref);
        that._transport_tref = null;
      }

      that.readyState = SockJS.OPEN;
      that.dispatchEvent(new SimpleEvent("open"));
    } else {
      // The server might have been restarted, and lost track of our
      // connection.
      that._didClose(1006, "Server lost session");
    }
  };

  SockJS.prototype._dispatchMessage = function (data) {
    var that = this;
    if (that.readyState !== SockJS.OPEN) return;
    that.dispatchEvent(new SimpleEvent("message", {
      data: data
    }));
  };

  SockJS.prototype._dispatchHeartbeat = function (data) {
    var that = this;
    if (that.readyState !== SockJS.OPEN) return;
    that.dispatchEvent(new SimpleEvent('heartbeat', {}));
  };

  SockJS.prototype._didClose = function (code, reason, force) {
    var that = this;
    if (that.readyState !== SockJS.CONNECTING && that.readyState !== SockJS.OPEN && that.readyState !== SockJS.CLOSING) throw new Error('INVALID_STATE_ERR');

    if (that._ir) {
      that._ir.nuke();

      that._ir = null;
    }

    if (that._transport) {
      that._transport.doCleanup();

      that._transport = null;
    }

    var close_event = new SimpleEvent("close", {
      code: code,
      reason: reason,
      wasClean: utils.userSetCode(code)
    });

    if (!utils.userSetCode(code) && that.readyState === SockJS.CONNECTING && !force) {
      if (that._try_next_protocol(close_event)) {
        return;
      }

      close_event = new SimpleEvent("close", {
        code: 2000,
        reason: "All transports failed",
        wasClean: false,
        last_event: close_event
      });
    }

    that.readyState = SockJS.CLOSED;
    utils.delay(function () {
      that.dispatchEvent(close_event);
    });
  };

  SockJS.prototype._didMessage = function (data) {
    var that = this;
    var type = data.slice(0, 1);

    switch (type) {
      case 'o':
        that._dispatchOpen();

        break;

      case 'a':
        var payload = JSON.parse(data.slice(1) || '[]');

        for (var i = 0; i < payload.length; i++) {
          that._dispatchMessage(payload[i]);
        }

        break;

      case 'm':
        var payload = JSON.parse(data.slice(1) || 'null');

        that._dispatchMessage(payload);

        break;

      case 'c':
        var payload = JSON.parse(data.slice(1) || '[]');

        that._didClose(payload[0], payload[1]);

        break;

      case 'h':
        that._dispatchHeartbeat();

        break;
    }
  };

  SockJS.prototype._try_next_protocol = function (close_event) {
    var that = this;

    if (that.protocol) {
      that._debug('Closed transport:', that.protocol, '' + close_event);

      that.protocol = null;
    }

    if (that._transport_tref) {
      clearTimeout(that._transport_tref);
      that._transport_tref = null;
    }

    while (1) {
      var protocol = that.protocol = that._protocols.shift();

      if (!protocol) {
        return false;
      } // Some protocols require access to `body`, what if were in
      // the `head`?


      if (SockJS[protocol] && SockJS[protocol].need_body === true && (!_document.body || typeof _document.readyState !== 'undefined' && _document.readyState !== 'complete')) {
        that._protocols.unshift(protocol);

        that.protocol = 'waiting-for-load';
        utils.attachEvent('load', function () {
          that._try_next_protocol();
        });
        return true;
      }

      if (!SockJS[protocol] || !SockJS[protocol].enabled(that._options)) {
        that._debug('Skipping transport:', protocol);
      } else {
        var roundTrips = SockJS[protocol].roundTrips || 1;
        var to = (that._options.rto || 0) * roundTrips || 5000;
        that._transport_tref = utils.delay(to, function () {
          if (that.readyState === SockJS.CONNECTING) {
            // I can't understand how it is possible to run
            // this timer, when the state is CLOSED, but
            // apparently in IE everythin is possible.
            that._didClose(2007, "Transport timeouted");
          }
        });
        var connid = utils.random_string(8);
        var trans_url = that._base_url + '/' + that._server + '/' + connid;

        that._debug('Opening transport:', protocol, ' url:' + trans_url, ' RTO:' + that._options.rto);

        that._transport = new SockJS[protocol](that, trans_url, that._base_url);
        return true;
      }
    }
  };

  SockJS.prototype.close = function (code, reason) {
    var that = this;
    if (code && !utils.userSetCode(code)) throw new Error("INVALID_ACCESS_ERR");

    if (that.readyState !== SockJS.CONNECTING && that.readyState !== SockJS.OPEN) {
      return false;
    }

    that.readyState = SockJS.CLOSING;

    that._didClose(code || 1000, reason || "Normal closure");

    return true;
  };

  SockJS.prototype.send = function (data) {
    var that = this;
    if (that.readyState === SockJS.CONNECTING) throw new Error('INVALID_STATE_ERR');

    if (that.readyState === SockJS.OPEN) {
      that._transport.doSend(utils.quote('' + data));
    }

    return true;
  };

  SockJS.prototype._applyInfo = function (info, rtt, protocols_whitelist) {
    var that = this;
    that._options.info = info;
    that._options.rtt = rtt;
    that._options.rto = utils.countRTO(rtt);
    that._options.info.null_origin = !_document.domain; // Servers can override base_url, eg to provide a randomized domain name and
    // avoid browser per-domain connection limits.

    if (info.base_url) // <METEOR>
      that._base_url = utils.amendUrl(info.base_url, that._base_url); // </METEOR>

    var probed = utils.probeProtocols();
    that._protocols = utils.detectProtocols(probed, protocols_whitelist, info); // <METEOR>
    // https://github.com/sockjs/sockjs-client/issues/79
    // Hack to avoid XDR when using different protocols
    // We're on IE trying to do cross-protocol. jsonp only.

    if (!utils.isSameOriginScheme(that._base_url) && 2 === utils.isXHRCorsCapable()) {
      that._protocols = ['jsonp-polling'];
    } // </METEOR>

  }; //         [*] End of lib/sockjs.js
  //         [*] Including lib/trans-websocket.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */


  var WebSocketTransport = SockJS.websocket = function (ri, trans_url) {
    var that = this;
    var url = trans_url + '/websocket';

    if (url.slice(0, 5) === 'https') {
      url = 'wss' + url.slice(5);
    } else {
      url = 'ws' + url.slice(4);
    }

    that.ri = ri;
    that.url = url;
    var Constructor = _window.WebSocket || _window.MozWebSocket;
    that.ws = new Constructor(that.url);

    that.ws.onmessage = function (e) {
      that.ri._didMessage(e.data);
    }; // Firefox has an interesting bug. If a websocket connection is
    // created after onunload, it stays alive even when user
    // navigates away from the page. In such situation let's lie -
    // let's not open the ws connection at all. See:
    // https://github.com/sockjs/sockjs-client/issues/28
    // https://bugzilla.mozilla.org/show_bug.cgi?id=696085


    that.unload_ref = utils.unload_add(function () {
      that.ws.close();
    });

    that.ws.onclose = function () {
      that.ri._didMessage(utils.closeFrame(1006, "WebSocket connection broken"));
    };
  };

  WebSocketTransport.prototype.doSend = function (data) {
    this.ws.send('[' + data + ']');
  };

  WebSocketTransport.prototype.doCleanup = function () {
    var that = this;
    var ws = that.ws;

    if (ws) {
      ws.onmessage = ws.onclose = null;
      ws.close();
      utils.unload_del(that.unload_ref);
      that.unload_ref = that.ri = that.ws = null;
    }
  };

  WebSocketTransport.enabled = function () {
    return !!(_window.WebSocket || _window.MozWebSocket);
  }; // In theory, ws should require 1 round trip. But in chrome, this is
  // not very stable over SSL. Most likely a ws connection requires a
  // separate SSL connection, in which case 2 round trips are an
  // absolute minumum.


  WebSocketTransport.roundTrips = 2; //         [*] End of lib/trans-websocket.js
  //         [*] Including lib/trans-sender.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */

  var BufferedSender = function () {};

  BufferedSender.prototype.send_constructor = function (sender) {
    var that = this;
    that.send_buffer = [];
    that.sender = sender;
  };

  BufferedSender.prototype.doSend = function (message) {
    var that = this;
    that.send_buffer.push(message);

    if (!that.send_stop) {
      that.send_schedule();
    }
  }; // For polling transports in a situation when in the message callback,
  // new message is being send. If the sending connection was started
  // before receiving one, it is possible to saturate the network and
  // timeout due to the lack of receiving socket. To avoid that we delay
  // sending messages by some small time, in order to let receiving
  // connection be started beforehand. This is only a halfmeasure and
  // does not fix the big problem, but it does make the tests go more
  // stable on slow networks.


  BufferedSender.prototype.send_schedule_wait = function () {
    var that = this;
    var tref;

    that.send_stop = function () {
      that.send_stop = null;
      clearTimeout(tref);
    };

    tref = utils.delay(25, function () {
      that.send_stop = null;
      that.send_schedule();
    });
  };

  BufferedSender.prototype.send_schedule = function () {
    var that = this;

    if (that.send_buffer.length > 0) {
      var payload = '[' + that.send_buffer.join(',') + ']';
      that.send_stop = that.sender(that.trans_url, payload, function (success, abort_reason) {
        that.send_stop = null;

        if (success === false) {
          that.ri._didClose(1006, 'Sending error ' + abort_reason);
        } else {
          that.send_schedule_wait();
        }
      });
      that.send_buffer = [];
    }
  };

  BufferedSender.prototype.send_destructor = function () {
    var that = this;

    if (that._send_stop) {
      that._send_stop();
    }

    that._send_stop = null;
  };

  var jsonPGenericSender = function (url, payload, callback) {
    var that = this;

    if (!('_send_form' in that)) {
      var form = that._send_form = _document.createElement('form');

      var area = that._send_area = _document.createElement('textarea');

      area.name = 'd';
      form.style.display = 'none';
      form.style.position = 'absolute';
      form.method = 'POST';
      form.enctype = 'application/x-www-form-urlencoded';
      form.acceptCharset = "UTF-8";
      form.appendChild(area);

      _document.body.appendChild(form);
    }

    var form = that._send_form;
    var area = that._send_area;
    var id = 'a' + utils.random_string(8);
    form.target = id;
    form.action = url + '/jsonp_send?i=' + id;
    var iframe;

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      iframe = _document.createElement('<iframe name="' + id + '">');
    } catch (x) {
      iframe = _document.createElement('iframe');
      iframe.name = id;
    }

    iframe.id = id;
    form.appendChild(iframe);
    iframe.style.display = 'none';

    try {
      area.value = payload;
    } catch (e) {
      utils.log('Your browser is seriously broken. Go home! ' + e.message);
    }

    form.submit();

    var completed = function (e) {
      if (!iframe.onerror) return;
      iframe.onreadystatechange = iframe.onerror = iframe.onload = null; // Opera mini doesn't like if we GC iframe
      // immediately, thus this timeout.

      utils.delay(500, function () {
        iframe.parentNode.removeChild(iframe);
        iframe = null;
      });
      area.value = ''; // It is not possible to detect if the iframe succeeded or
      // failed to submit our form.

      callback(true);
    };

    iframe.onerror = iframe.onload = completed;

    iframe.onreadystatechange = function (e) {
      if (iframe.readyState == 'complete') completed();
    };

    return completed;
  };

  var createAjaxSender = function (AjaxObject) {
    return function (url, payload, callback) {
      var xo = new AjaxObject('POST', url + '/xhr_send', payload);

      xo.onfinish = function (status, text) {
        callback(status === 200 || status === 204, 'http status ' + status);
      };

      return function (abort_reason) {
        callback(false, abort_reason);
      };
    };
  }; //         [*] End of lib/trans-sender.js
  //         [*] Including lib/trans-jsonp-receiver.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */
  // Parts derived from Socket.io:
  //    https://github.com/LearnBoost/socket.io/blob/0.6.17/lib/socket.io/transports/jsonp-polling.js
  // and jQuery-JSONP:
  //    https://code.google.com/p/jquery-jsonp/source/browse/trunk/core/jquery.jsonp.js


  var jsonPGenericReceiver = function (url, callback) {
    var tref;

    var script = _document.createElement('script');

    var script2; // Opera synchronous load trick.

    var close_script = function (frame) {
      if (script2) {
        script2.parentNode.removeChild(script2);
        script2 = null;
      }

      if (script) {
        clearTimeout(tref); // Unfortunately, you can't really abort script loading of
        // the script.

        script.parentNode.removeChild(script);
        script.onreadystatechange = script.onerror = script.onload = script.onclick = null;
        script = null;
        callback(frame);
        callback = null;
      }
    }; // IE9 fires 'error' event after orsc or before, in random order.


    var loaded_okay = false;
    var error_timer = null;
    script.id = 'a' + utils.random_string(8);
    script.src = url;
    script.type = 'text/javascript';
    script.charset = 'UTF-8';

    script.onerror = function (e) {
      if (!error_timer) {
        // Delay firing close_script.
        error_timer = setTimeout(function () {
          if (!loaded_okay) {
            close_script(utils.closeFrame(1006, "JSONP script loaded abnormally (onerror)"));
          }
        }, 1000);
      }
    };

    script.onload = function (e) {
      close_script(utils.closeFrame(1006, "JSONP script loaded abnormally (onload)"));
    };

    script.onreadystatechange = function (e) {
      if (/loaded|closed/.test(script.readyState)) {
        if (script && script.htmlFor && script.onclick) {
          loaded_okay = true;

          try {
            // In IE, actually execute the script.
            script.onclick();
          } catch (x) {}
        }

        if (script) {
          close_script(utils.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)"));
        }
      }
    }; // IE: event/htmlFor/onclick trick.
    // One can't rely on proper order for onreadystatechange. In order to
    // make sure, set a 'htmlFor' and 'event' properties, so that
    // script code will be installed as 'onclick' handler for the
    // script object. Later, onreadystatechange, manually execute this
    // code. FF and Chrome doesn't work with 'event' and 'htmlFor'
    // set. For reference see:
    //   http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
    // Also, read on that about script ordering:
    //   http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order


    if (typeof script.async === 'undefined' && _document.attachEvent) {
      // According to mozilla docs, in recent browsers script.async defaults
      // to 'true', so we may use it to detect a good browser:
      // https://developer.mozilla.org/en/HTML/Element/script
      if (!/opera/i.test(navigator.userAgent)) {
        // Naively assume we're in IE
        try {
          script.htmlFor = script.id;
          script.event = "onclick";
        } catch (x) {}

        script.async = true;
      } else {
        // Opera, second sync script hack
        script2 = _document.createElement('script');
        script2.text = "try{var a = document.getElementById('" + script.id + "'); if(a)a.onerror();}catch(x){};";
        script.async = script2.async = false;
      }
    }

    if (typeof script.async !== 'undefined') {
      script.async = true;
    } // Fallback mostly for Konqueror - stupid timer, 35 seconds shall be plenty.


    tref = setTimeout(function () {
      close_script(utils.closeFrame(1006, "JSONP script loaded abnormally (timeout)"));
    }, 35000);

    var head = _document.getElementsByTagName('head')[0];

    head.insertBefore(script, head.firstChild);

    if (script2) {
      head.insertBefore(script2, head.firstChild);
    }

    return close_script;
  }; //         [*] End of lib/trans-jsonp-receiver.js
  //         [*] Including lib/trans-jsonp-polling.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */
  // The simplest and most robust transport, using the well-know cross
  // domain hack - JSONP. This transport is quite inefficient - one
  // mssage could use up to one http request. But at least it works almost
  // everywhere.
  // Known limitations:
  //   o you will get a spinning cursor
  //   o for Konqueror a dumb timer is needed to detect errors


  var JsonPTransport = SockJS['jsonp-polling'] = function (ri, trans_url) {
    utils.polluteGlobalNamespace();
    var that = this;
    that.ri = ri;
    that.trans_url = trans_url;
    that.send_constructor(jsonPGenericSender);

    that._schedule_recv();
  }; // Inheritnace


  JsonPTransport.prototype = new BufferedSender();

  JsonPTransport.prototype._schedule_recv = function () {
    var that = this;

    var callback = function (data) {
      that._recv_stop = null;

      if (data) {
        // no data - heartbeat;
        if (!that._is_closing) {
          that.ri._didMessage(data);
        }
      } // The message can be a close message, and change is_closing state.


      if (!that._is_closing) {
        that._schedule_recv();
      }
    };

    that._recv_stop = jsonPReceiverWrapper(that.trans_url + '/jsonp', jsonPGenericReceiver, callback);
  };

  JsonPTransport.enabled = function () {
    return true;
  };

  JsonPTransport.need_body = true;

  JsonPTransport.prototype.doCleanup = function () {
    var that = this;
    that._is_closing = true;

    if (that._recv_stop) {
      that._recv_stop();
    }

    that.ri = that._recv_stop = null;
    that.send_destructor();
  }; // Abstract away code that handles global namespace pollution.


  var jsonPReceiverWrapper = function (url, constructReceiver, user_callback) {
    var id = 'a' + utils.random_string(6);
    var url_id = url + '?c=' + escape(WPrefix + '.' + id); // Unfortunately it is not possible to abort loading of the
    // script. We need to keep track of frake close frames.

    var aborting = 0; // Callback will be called exactly once.

    var callback = function (frame) {
      switch (aborting) {
        case 0:
          // Normal behaviour - delete hook _and_ emit message.
          delete _window[WPrefix][id];
          user_callback(frame);
          break;

        case 1:
          // Fake close frame - emit but don't delete hook.
          user_callback(frame);
          aborting = 2;
          break;

        case 2:
          // Got frame after connection was closed, delete hook, don't emit.
          delete _window[WPrefix][id];
          break;
      }
    };

    var close_script = constructReceiver(url_id, callback);
    _window[WPrefix][id] = close_script;

    var stop = function () {
      if (_window[WPrefix][id]) {
        aborting = 1;

        _window[WPrefix][id](utils.closeFrame(1000, "JSONP user aborted read"));
      }
    };

    return stop;
  }; //         [*] End of lib/trans-jsonp-polling.js
  //         [*] Including lib/trans-xhr.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */


  var AjaxBasedTransport = function () {};

  AjaxBasedTransport.prototype = new BufferedSender();

  AjaxBasedTransport.prototype.run = function (ri, trans_url, url_suffix, Receiver, AjaxObject) {
    var that = this;
    that.ri = ri;
    that.trans_url = trans_url;
    that.send_constructor(createAjaxSender(AjaxObject));
    that.poll = new Polling(ri, Receiver, trans_url + url_suffix, AjaxObject);
  };

  AjaxBasedTransport.prototype.doCleanup = function () {
    var that = this;

    if (that.poll) {
      that.poll.abort();
      that.poll = null;
    }
  }; // xhr-streaming


  var XhrStreamingTransport = SockJS['xhr-streaming'] = function (ri, trans_url) {
    this.run(ri, trans_url, '/xhr_streaming', XhrReceiver, utils.XHRCorsObject);
  };

  XhrStreamingTransport.prototype = new AjaxBasedTransport();

  XhrStreamingTransport.enabled = function () {
    // Support for CORS Ajax aka Ajax2? Opera 12 claims CORS but
    // doesn't do streaming.
    return _window.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest() && !/opera/i.test(navigator.userAgent);
  };

  XhrStreamingTransport.roundTrips = 2; // preflight, ajax
  // Safari gets confused when a streaming ajax request is started
  // before onload. This causes the load indicator to spin indefinetely.

  XhrStreamingTransport.need_body = true; // According to:
  //   http://stackoverflow.com/questions/1641507/detect-browser-support-for-cross-domain-xmlhttprequests
  //   http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/
  // xdr-streaming

  var XdrStreamingTransport = SockJS['xdr-streaming'] = function (ri, trans_url) {
    this.run(ri, trans_url, '/xhr_streaming', XhrReceiver, utils.XDRObject);
  };

  XdrStreamingTransport.prototype = new AjaxBasedTransport();

  XdrStreamingTransport.enabled = function () {
    return !!_window.XDomainRequest;
  };

  XdrStreamingTransport.roundTrips = 2; // preflight, ajax
  // xhr-polling

  var XhrPollingTransport = SockJS['xhr-polling'] = function (ri, trans_url) {
    this.run(ri, trans_url, '/xhr', XhrReceiver, utils.XHRCorsObject);
  };

  XhrPollingTransport.prototype = new AjaxBasedTransport();
  XhrPollingTransport.enabled = XhrStreamingTransport.enabled;
  XhrPollingTransport.roundTrips = 2; // preflight, ajax
  // xdr-polling

  var XdrPollingTransport = SockJS['xdr-polling'] = function (ri, trans_url) {
    this.run(ri, trans_url, '/xhr', XhrReceiver, utils.XDRObject);
  };

  XdrPollingTransport.prototype = new AjaxBasedTransport();
  XdrPollingTransport.enabled = XdrStreamingTransport.enabled;
  XdrPollingTransport.roundTrips = 2; // preflight, ajax
  //         [*] End of lib/trans-xhr.js
  //         [*] Including lib/trans-iframe.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */
  // Few cool transports do work only for same-origin. In order to make
  // them working cross-domain we shall use iframe, served form the
  // remote domain. New browsers, have capabilities to communicate with
  // cross domain iframe, using postMessage(). In IE it was implemented
  // from IE 8+, but of course, IE got some details wrong:
  //    http://msdn.microsoft.com/en-us/library/cc197015(v=VS.85).aspx
  //    http://stevesouders.com/misc/test-postmessage.php

  var IframeTransport = function () {};

  IframeTransport.prototype.i_constructor = function (ri, trans_url, base_url) {
    var that = this;
    that.ri = ri;
    that.origin = utils.getOrigin(base_url);
    that.base_url = base_url;
    that.trans_url = trans_url;
    var iframe_url = base_url + '/iframe.html';

    if (that.ri._options.devel) {
      iframe_url += '?t=' + +new Date();
    }

    that.window_id = utils.random_string(8);
    iframe_url += '#' + that.window_id;
    that.iframeObj = utils.createIframe(iframe_url, function (r) {
      that.ri._didClose(1006, "Unable to load an iframe (" + r + ")");
    });
    that.onmessage_cb = utils.bind(that.onmessage, that);
    utils.attachMessage(that.onmessage_cb);
  };

  IframeTransport.prototype.doCleanup = function () {
    var that = this;

    if (that.iframeObj) {
      utils.detachMessage(that.onmessage_cb);

      try {
        // When the iframe is not loaded, IE raises an exception
        // on 'contentWindow'.
        if (that.iframeObj.iframe.contentWindow) {
          that.postMessage('c');
        }
      } catch (x) {}

      that.iframeObj.cleanup();
      that.iframeObj = null;
      that.onmessage_cb = that.iframeObj = null;
    }
  };

  IframeTransport.prototype.onmessage = function (e) {
    var that = this;
    if (e.origin !== that.origin) return;
    var window_id = e.data.slice(0, 8);
    var type = e.data.slice(8, 9);
    var data = e.data.slice(9);
    if (window_id !== that.window_id) return;

    switch (type) {
      case 's':
        that.iframeObj.loaded();
        that.postMessage('s', JSON.stringify([SockJS.version, that.protocol, that.trans_url, that.base_url]));
        break;

      case 't':
        that.ri._didMessage(data);

        break;
    }
  };

  IframeTransport.prototype.postMessage = function (type, data) {
    var that = this;
    that.iframeObj.post(that.window_id + type + (data || ''), that.origin);
  };

  IframeTransport.prototype.doSend = function (message) {
    this.postMessage('m', message);
  };

  IframeTransport.enabled = function () {
    // postMessage misbehaves in konqueror 4.6.5 - the messages are delivered with
    // huge delay, or not at all.
    var konqueror = navigator && navigator.userAgent && navigator.userAgent.indexOf('Konqueror') !== -1;
    return (typeof _window.postMessage === 'function' || (0, _typeof2.default)(_window.postMessage) === 'object') && !konqueror;
  }; //         [*] End of lib/trans-iframe.js
  //         [*] Including lib/trans-iframe-within.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */


  var curr_window_id;

  var postMessage = function (type, data) {
    if (parent !== _window) {
      parent.postMessage(curr_window_id + type + (data || ''), '*');
    } else {
      utils.log("Can't postMessage, no parent window.", type, data);
    }
  };

  var FacadeJS = function () {};

  FacadeJS.prototype._didClose = function (code, reason) {
    postMessage('t', utils.closeFrame(code, reason));
  };

  FacadeJS.prototype._didMessage = function (frame) {
    postMessage('t', frame);
  };

  FacadeJS.prototype._doSend = function (data) {
    this._transport.doSend(data);
  };

  FacadeJS.prototype._doCleanup = function () {
    this._transport.doCleanup();
  };

  utils.parent_origin = undefined;

  SockJS.bootstrap_iframe = function () {
    var facade;
    curr_window_id = _document.location.hash.slice(1);

    var onMessage = function (e) {
      if (e.source !== parent) return;
      if (typeof utils.parent_origin === 'undefined') utils.parent_origin = e.origin;
      if (e.origin !== utils.parent_origin) return;
      var window_id = e.data.slice(0, 8);
      var type = e.data.slice(8, 9);
      var data = e.data.slice(9);
      if (window_id !== curr_window_id) return;

      switch (type) {
        case 's':
          var p = JSON.parse(data);
          var version = p[0];
          var protocol = p[1];
          var trans_url = p[2];
          var base_url = p[3];

          if (version !== SockJS.version) {
            utils.log("Incompatibile SockJS! Main site uses:" + " \"" + version + "\", the iframe:" + " \"" + SockJS.version + "\".");
          }

          if (!utils.flatUrl(trans_url) || !utils.flatUrl(base_url)) {
            utils.log("Only basic urls are supported in SockJS");
            return;
          }

          if (!utils.isSameOriginUrl(trans_url) || !utils.isSameOriginUrl(base_url)) {
            utils.log("Can't connect to different domain from within an " + "iframe. (" + JSON.stringify([_window.location.href, trans_url, base_url]) + ")");
            return;
          }

          facade = new FacadeJS();
          facade._transport = new FacadeJS[protocol](facade, trans_url, base_url);
          break;

        case 'm':
          facade._doSend(data);

          break;

        case 'c':
          if (facade) facade._doCleanup();
          facade = null;
          break;
      }
    }; // alert('test ticker');
    // facade = new FacadeJS();
    // facade._transport = new FacadeJS['w-iframe-xhr-polling'](facade, 'http://host.com:9999/ticker/12/basd');


    utils.attachMessage(onMessage); // Start

    postMessage('s');
  }; //         [*] End of lib/trans-iframe-within.js
  //         [*] Including lib/info.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */


  var InfoReceiver = function (base_url, AjaxObject) {
    var that = this;
    utils.delay(function () {
      that.doXhr(base_url, AjaxObject);
    });
  };

  InfoReceiver.prototype = new EventEmitter(['finish']);

  InfoReceiver.prototype.doXhr = function (base_url, AjaxObject) {
    var that = this;
    var t0 = new Date().getTime(); // <METEOR>
    // https://github.com/sockjs/sockjs-client/pull/129
    // var xo = new AjaxObject('GET', base_url + '/info');

    var xo = new AjaxObject( // add cachebusting parameter to url to work around a chrome bug:
    // https://code.google.com/p/chromium/issues/detail?id=263981
    // or misbehaving proxies.
    'GET', base_url + '/info?cb=' + utils.random_string(10)); // </METEOR>

    var tref = utils.delay(8000, function () {
      xo.ontimeout();
    });

    xo.onfinish = function (status, text) {
      clearTimeout(tref);
      tref = null;

      if (status === 200) {
        var rtt = new Date().getTime() - t0;
        var info = JSON.parse(text);
        if ((0, _typeof2.default)(info) !== 'object') info = {};
        that.emit('finish', info, rtt);
      } else {
        that.emit('finish');
      }
    };

    xo.ontimeout = function () {
      xo.close();
      that.emit('finish');
    };
  };

  var InfoReceiverIframe = function (base_url) {
    var that = this;

    var go = function () {
      var ifr = new IframeTransport();
      ifr.protocol = 'w-iframe-info-receiver';

      var fun = function (r) {
        if (typeof r === 'string' && r.substr(0, 1) === 'm') {
          var d = JSON.parse(r.substr(1));
          var info = d[0],
              rtt = d[1];
          that.emit('finish', info, rtt);
        } else {
          that.emit('finish');
        }

        ifr.doCleanup();
        ifr = null;
      };

      var mock_ri = {
        _options: {},
        _didClose: fun,
        _didMessage: fun
      };
      ifr.i_constructor(mock_ri, base_url, base_url);
    };

    if (!_document.body) {
      utils.attachEvent('load', go);
    } else {
      go();
    }
  };

  InfoReceiverIframe.prototype = new EventEmitter(['finish']);

  var InfoReceiverFake = function () {
    // It may not be possible to do cross domain AJAX to get the info
    // data, for example for IE7. But we want to run JSONP, so let's
    // fake the response, with rtt=2s (rto=6s).
    var that = this;
    utils.delay(function () {
      that.emit('finish', {}, 2000);
    });
  };

  InfoReceiverFake.prototype = new EventEmitter(['finish']);

  var createInfoReceiver = function (base_url) {
    if (utils.isSameOriginUrl(base_url)) {
      // If, for some reason, we have SockJS locally - there's no
      // need to start up the complex machinery. Just use ajax.
      return new InfoReceiver(base_url, utils.XHRLocalObject);
    }

    switch (utils.isXHRCorsCapable()) {
      case 1:
        // XHRLocalObject -> no_credentials=true
        return new InfoReceiver(base_url, utils.XHRLocalObject);

      case 2:
        // <METEOR>
        // https://github.com/sockjs/sockjs-client/issues/79
        // XDR doesn't work across different schemes
        // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
        if (utils.isSameOriginScheme(base_url)) return new InfoReceiver(base_url, utils.XDRObject);else return new InfoReceiverFake();
      // </METEOR>

      case 3:
        // Opera
        return new InfoReceiverIframe(base_url);

      default:
        // IE 7
        return new InfoReceiverFake();
    }

    ;
  };

  var WInfoReceiverIframe = FacadeJS['w-iframe-info-receiver'] = function (ri, _trans_url, base_url) {
    var ir = new InfoReceiver(base_url, utils.XHRLocalObject);

    ir.onfinish = function (info, rtt) {
      ri._didMessage('m' + JSON.stringify([info, rtt]));

      ri._didClose();
    };
  };

  WInfoReceiverIframe.prototype.doCleanup = function () {}; //         [*] End of lib/info.js
  //         [*] Including lib/trans-iframe-eventsource.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */


  var EventSourceIframeTransport = SockJS['iframe-eventsource'] = function () {
    var that = this;
    that.protocol = 'w-iframe-eventsource';
    that.i_constructor.apply(that, arguments);
  };

  EventSourceIframeTransport.prototype = new IframeTransport();

  EventSourceIframeTransport.enabled = function () {
    return 'EventSource' in _window && IframeTransport.enabled();
  };

  EventSourceIframeTransport.need_body = true;
  EventSourceIframeTransport.roundTrips = 3; // html, javascript, eventsource
  // w-iframe-eventsource

  var EventSourceTransport = FacadeJS['w-iframe-eventsource'] = function (ri, trans_url) {
    this.run(ri, trans_url, '/eventsource', EventSourceReceiver, utils.XHRLocalObject);
  };

  EventSourceTransport.prototype = new AjaxBasedTransport(); //         [*] End of lib/trans-iframe-eventsource.js
  //         [*] Including lib/trans-iframe-xhr-polling.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */

  var XhrPollingIframeTransport = SockJS['iframe-xhr-polling'] = function () {
    var that = this;
    that.protocol = 'w-iframe-xhr-polling';
    that.i_constructor.apply(that, arguments);
  };

  XhrPollingIframeTransport.prototype = new IframeTransport();

  XhrPollingIframeTransport.enabled = function () {
    return _window.XMLHttpRequest && IframeTransport.enabled();
  };

  XhrPollingIframeTransport.need_body = true;
  XhrPollingIframeTransport.roundTrips = 3; // html, javascript, xhr
  // w-iframe-xhr-polling

  var XhrPollingITransport = FacadeJS['w-iframe-xhr-polling'] = function (ri, trans_url) {
    this.run(ri, trans_url, '/xhr', XhrReceiver, utils.XHRLocalObject);
  };

  XhrPollingITransport.prototype = new AjaxBasedTransport(); //         [*] End of lib/trans-iframe-xhr-polling.js
  //         [*] Including lib/trans-iframe-htmlfile.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */
  // This transport generally works in any browser, but will cause a
  // spinning cursor to appear in any browser other than IE.
  // We may test this transport in all browsers - why not, but in
  // production it should be only run in IE.

  var HtmlFileIframeTransport = SockJS['iframe-htmlfile'] = function () {
    var that = this;
    that.protocol = 'w-iframe-htmlfile';
    that.i_constructor.apply(that, arguments);
  }; // Inheritance.


  HtmlFileIframeTransport.prototype = new IframeTransport();

  HtmlFileIframeTransport.enabled = function () {
    return IframeTransport.enabled();
  };

  HtmlFileIframeTransport.need_body = true;
  HtmlFileIframeTransport.roundTrips = 3; // html, javascript, htmlfile
  // w-iframe-htmlfile

  var HtmlFileTransport = FacadeJS['w-iframe-htmlfile'] = function (ri, trans_url) {
    this.run(ri, trans_url, '/htmlfile', HtmlfileReceiver, utils.XHRLocalObject);
  };

  HtmlFileTransport.prototype = new AjaxBasedTransport(); //         [*] End of lib/trans-iframe-htmlfile.js
  //         [*] Including lib/trans-polling.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */

  var Polling = function (ri, Receiver, recv_url, AjaxObject) {
    var that = this;
    that.ri = ri;
    that.Receiver = Receiver;
    that.recv_url = recv_url;
    that.AjaxObject = AjaxObject;

    that._scheduleRecv();
  };

  Polling.prototype._scheduleRecv = function () {
    var that = this;
    var poll = that.poll = new that.Receiver(that.recv_url, that.AjaxObject);
    var msg_counter = 0;

    poll.onmessage = function (e) {
      msg_counter += 1;

      that.ri._didMessage(e.data);
    };

    poll.onclose = function (e) {
      that.poll = poll = poll.onmessage = poll.onclose = null;

      if (!that.poll_is_closing) {
        if (e.reason === 'permanent') {
          that.ri._didClose(1006, 'Polling error (' + e.reason + ')');
        } else {
          that._scheduleRecv();
        }
      }
    };
  };

  Polling.prototype.abort = function () {
    var that = this;
    that.poll_is_closing = true;

    if (that.poll) {
      that.poll.abort();
    }
  }; //         [*] End of lib/trans-polling.js
  //         [*] Including lib/trans-receiver-eventsource.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */


  var EventSourceReceiver = function (url) {
    var that = this;
    var es = new EventSource(url);

    es.onmessage = function (e) {
      that.dispatchEvent(new SimpleEvent('message', {
        'data': unescape(e.data)
      }));
    };

    that.es_close = es.onerror = function (e, abort_reason) {
      // ES on reconnection has readyState = 0 or 1.
      // on network error it's CLOSED = 2
      var reason = abort_reason ? 'user' : es.readyState !== 2 ? 'network' : 'permanent';
      that.es_close = es.onmessage = es.onerror = null; // EventSource reconnects automatically.

      es.close();
      es = null; // Safari and chrome < 15 crash if we close window before
      // waiting for ES cleanup. See:
      //   https://code.google.com/p/chromium/issues/detail?id=89155

      utils.delay(200, function () {
        that.dispatchEvent(new SimpleEvent('close', {
          reason: reason
        }));
      });
    };
  };

  EventSourceReceiver.prototype = new REventTarget();

  EventSourceReceiver.prototype.abort = function () {
    var that = this;

    if (that.es_close) {
      that.es_close({}, true);
    }
  }; //         [*] End of lib/trans-receiver-eventsource.js
  //         [*] Including lib/trans-receiver-htmlfile.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */


  var _is_ie_htmlfile_capable;

  var isIeHtmlfileCapable = function () {
    if (_is_ie_htmlfile_capable === undefined) {
      if ('ActiveXObject' in _window) {
        try {
          _is_ie_htmlfile_capable = !!new ActiveXObject('htmlfile');
        } catch (x) {}
      } else {
        _is_ie_htmlfile_capable = false;
      }
    }

    return _is_ie_htmlfile_capable;
  };

  var HtmlfileReceiver = function (url) {
    var that = this;
    utils.polluteGlobalNamespace();
    that.id = 'a' + utils.random_string(6, 26);
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'c=' + escape(WPrefix + '.' + that.id);
    var constructor = isIeHtmlfileCapable() ? utils.createHtmlfile : utils.createIframe;
    var iframeObj;
    _window[WPrefix][that.id] = {
      start: function () {
        iframeObj.loaded();
      },
      message: function (data) {
        that.dispatchEvent(new SimpleEvent('message', {
          'data': data
        }));
      },
      stop: function () {
        that.iframe_close({}, 'network');
      }
    };

    that.iframe_close = function (e, abort_reason) {
      iframeObj.cleanup();
      that.iframe_close = iframeObj = null;
      delete _window[WPrefix][that.id];
      that.dispatchEvent(new SimpleEvent('close', {
        reason: abort_reason
      }));
    };

    iframeObj = constructor(url, function (e) {
      that.iframe_close({}, 'permanent');
    });
  };

  HtmlfileReceiver.prototype = new REventTarget();

  HtmlfileReceiver.prototype.abort = function () {
    var that = this;

    if (that.iframe_close) {
      that.iframe_close({}, 'user');
    }
  }; //         [*] End of lib/trans-receiver-htmlfile.js
  //         [*] Including lib/trans-receiver-xhr.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */


  var XhrReceiver = function (url, AjaxObject) {
    var that = this;
    var buf_pos = 0;
    that.xo = new AjaxObject('POST', url, null);

    that.xo.onchunk = function (status, text) {
      if (status !== 200) return;

      while (1) {
        var buf = text.slice(buf_pos);
        var p = buf.indexOf('\n');
        if (p === -1) break;
        buf_pos += p + 1;
        var msg = buf.slice(0, p);
        that.dispatchEvent(new SimpleEvent('message', {
          data: msg
        }));
      }
    };

    that.xo.onfinish = function (status, text) {
      that.xo.onchunk(status, text);
      that.xo = null;
      var reason = status === 200 ? 'network' : 'permanent';
      that.dispatchEvent(new SimpleEvent('close', {
        reason: reason
      }));
    };
  };

  XhrReceiver.prototype = new REventTarget();

  XhrReceiver.prototype.abort = function () {
    var that = this;

    if (that.xo) {
      that.xo.close();
      that.dispatchEvent(new SimpleEvent('close', {
        reason: 'user'
      }));
      that.xo = null;
    }
  }; //         [*] End of lib/trans-receiver-xhr.js
  //         [*] Including lib/test-hooks.js

  /*
   * ***** BEGIN LICENSE BLOCK *****
   * Copyright (c) 2011-2012 VMware, Inc.
   *
   * For the license see COPYING.
   * ***** END LICENSE BLOCK *****
   */
  // For testing


  SockJS.getUtils = function () {
    return utils;
  };

  SockJS.getIframeTransport = function () {
    return IframeTransport;
  }; //         [*] End of lib/test-hooks.js


  return SockJS;
}();

if ('_sockjs_onload' in window) setTimeout(_sockjs_onload, 1); // AMD compliance

if (typeof define === 'function' && define.amd) {
  define('sockjs', [], function () {
    return SockJS;
  });
} //     [*] End of lib/index.js
// [*] End of lib/all.js
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"browser.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/socket-stream-client/browser.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  ClientStream: function () {
    return ClientStream;
  }
});
var toSockjsUrl, toWebsocketUrl;
module.link("./urls.js", {
  toSockjsUrl: function (v) {
    toSockjsUrl = v;
  },
  toWebsocketUrl: function (v) {
    toWebsocketUrl = v;
  }
}, 0);
var StreamClientCommon;
module.link("./common.js", {
  StreamClientCommon: function (v) {
    StreamClientCommon = v;
  }
}, 1);
module.link("./sockjs-0.3.4.js");

var ClientStream =
/*#__PURE__*/
function (_StreamClientCommon) {
  (0, _inheritsLoose2.default)(ClientStream, _StreamClientCommon);

  // @param url {String} URL to Meteor app
  //   "http://subdomain.meteor.com/" or "/" or
  //   "ddp+sockjs://foo-**.meteor.com/sockjs"
  function ClientStream(url, options) {
    var _this;

    _this = _StreamClientCommon.call(this, options) || this;

    _this._initCommon(_this.options); //// Constants
    // how long between hearing heartbeat from the server until we declare
    // the connection dead. heartbeats come every 45s (stream_server.js)
    //
    // NOTE: this is a older timeout mechanism. We now send heartbeats at
    // the DDP level (https://github.com/meteor/meteor/pull/1865), and
    // expect those timeouts to kill a non-responsive connection before
    // this timeout fires. This is kept around for compatibility (when
    // talking to a server that doesn't support DDP heartbeats) and can be
    // removed later.


    _this.HEARTBEAT_TIMEOUT = 100 * 1000;
    _this.rawUrl = url;
    _this.socket = null;
    _this.lastError = null;
    _this.heartbeatTimer = null; // Listen to global 'online' event if we are running in a browser.
    // (IE8 does not support addEventListener)

    if (typeof window !== 'undefined' && window.addEventListener) window.addEventListener('online', _this._online.bind((0, _assertThisInitialized2.default)(_this)), false
    /* useCapture. make FF3.6 happy. */
    ); //// Kickoff!

    _this._launchConnection();

    return _this;
  } // data is a utf8 string. Data sent while not connected is dropped on
  // the floor, and it is up the user of this API to retransmit lost
  // messages on 'reset'


  var _proto = ClientStream.prototype;

  _proto.send = function () {
    function send(data) {
      if (this.currentStatus.connected) {
        this.socket.send(data);
      }
    }

    return send;
  }() // Changes where this connection points
  ;

  _proto._changeUrl = function () {
    function _changeUrl(url) {
      this.rawUrl = url;
    }

    return _changeUrl;
  }();

  _proto._connected = function () {
    function _connected() {
      if (this.connectionTimer) {
        clearTimeout(this.connectionTimer);
        this.connectionTimer = null;
      }

      if (this.currentStatus.connected) {
        // already connected. do nothing. this probably shouldn't happen.
        return;
      } // update status


      this.currentStatus.status = 'connected';
      this.currentStatus.connected = true;
      this.currentStatus.retryCount = 0;
      this.statusChanged(); // fire resets. This must come after status change so that clients
      // can call send from within a reset callback.

      this.forEachCallback('reset', function (callback) {
        callback();
      });
    }

    return _connected;
  }();

  _proto._cleanup = function () {
    function _cleanup(maybeError) {
      this._clearConnectionAndHeartbeatTimers();

      if (this.socket) {
        this.socket.onmessage = this.socket.onclose = this.socket.onerror = this.socket.onheartbeat = function () {};

        this.socket.close();
        this.socket = null;
      }

      this.forEachCallback('disconnect', function (callback) {
        callback(maybeError);
      });
    }

    return _cleanup;
  }();

  _proto._clearConnectionAndHeartbeatTimers = function () {
    function _clearConnectionAndHeartbeatTimers() {
      if (this.connectionTimer) {
        clearTimeout(this.connectionTimer);
        this.connectionTimer = null;
      }

      if (this.heartbeatTimer) {
        clearTimeout(this.heartbeatTimer);
        this.heartbeatTimer = null;
      }
    }

    return _clearConnectionAndHeartbeatTimers;
  }();

  _proto._heartbeat_timeout = function () {
    function _heartbeat_timeout() {
      console.log('Connection timeout. No sockjs heartbeat received.');

      this._lostConnection(new this.ConnectionError("Heartbeat timed out"));
    }

    return _heartbeat_timeout;
  }();

  _proto._heartbeat_received = function () {
    function _heartbeat_received() {
      // If we've already permanently shut down this stream, the timeout is
      // already cleared, and we don't need to set it again.
      if (this._forcedToDisconnect) return;
      if (this.heartbeatTimer) clearTimeout(this.heartbeatTimer);
      this.heartbeatTimer = setTimeout(this._heartbeat_timeout.bind(this), this.HEARTBEAT_TIMEOUT);
    }

    return _heartbeat_received;
  }();

  _proto._sockjsProtocolsWhitelist = function () {
    function _sockjsProtocolsWhitelist() {
      // only allow polling protocols. no streaming.  streaming
      // makes safari spin.
      var protocolsWhitelist = ['xdr-polling', 'xhr-polling', 'iframe-xhr-polling', 'jsonp-polling']; // iOS 4 and 5 and below crash when using websockets over certain
      // proxies. this seems to be resolved with iOS 6. eg
      // https://github.com/LearnBoost/socket.io/issues/193#issuecomment-7308865.
      //
      // iOS <4 doesn't support websockets at all so sockjs will just
      // immediately fall back to http

      var noWebsockets = navigator && /iPhone|iPad|iPod/.test(navigator.userAgent) && /OS 4_|OS 5_/.test(navigator.userAgent);
      if (!noWebsockets) protocolsWhitelist = ['websocket'].concat(protocolsWhitelist);
      return protocolsWhitelist;
    }

    return _sockjsProtocolsWhitelist;
  }();

  _proto._launchConnection = function () {
    function _launchConnection() {
      var _this2 = this;

      this._cleanup(); // cleanup the old socket, if there was one.


      var options = (0, _objectSpread2.default)({
        protocols_whitelist: this._sockjsProtocolsWhitelist()
      }, this.options._sockjsOptions);
      var hasSockJS = typeof SockJS === "function";
      this.socket = hasSockJS // Convert raw URL to SockJS URL each time we open a connection, so
      // that we can connect to random hostnames and get around browser
      // per-host connection limits.
      ? new SockJS(toSockjsUrl(this.rawUrl), undefined, options) : new WebSocket(toWebsocketUrl(this.rawUrl));

      this.socket.onopen = function (data) {
        _this2.lastError = null;

        _this2._connected();
      };

      this.socket.onmessage = function (data) {
        _this2.lastError = null;

        _this2._heartbeat_received();

        if (_this2.currentStatus.connected) {
          _this2.forEachCallback('message', function (callback) {
            callback(data.data);
          });
        }
      };

      this.socket.onclose = function () {
        Promise.resolve( // If the socket is closing because there was an error, and we
        // didn't load SockJS before, try loading it dynamically before
        // retrying the connection.
        _this2.lastError && !hasSockJS && module.dynamicImport("./sockjs-0.3.4.js")).done(function () {
          _this2._lostConnection();
        });
      };

      this.socket.onerror = function (error) {
        var lastError = _this2.lastError;
        _this2.lastError = error;
        if (lastError) return;
        console.log('stream error', error, new Date().toDateString());
      };

      this.socket.onheartbeat = function () {
        _this2.lastError = null;

        _this2._heartbeat_received();
      };

      if (this.connectionTimer) clearTimeout(this.connectionTimer);
      this.connectionTimer = setTimeout(function () {
        _this2._lostConnection(new _this2.ConnectionError("DDP connection timed out"));
      }, this.CONNECT_TIMEOUT);
    }

    return _launchConnection;
  }();

  return ClientStream;
}(StreamClientCommon);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"common.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/socket-stream-client/common.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

module.export({
  StreamClientCommon: function () {
    return StreamClientCommon;
  }
});
var Retry;
module.link("meteor/retry", {
  Retry: function (v) {
    Retry = v;
  }
}, 0);
var forcedReconnectError = new Error("forced reconnect");

var StreamClientCommon =
/*#__PURE__*/
function () {
  function StreamClientCommon(options) {
    this.options = (0, _objectSpread2.default)({
      retry: true
    }, options || null);
    this.ConnectionError = options && options.ConnectionError || Error;
  } // Register for callbacks.


  var _proto = StreamClientCommon.prototype;

  _proto.on = function () {
    function on(name, callback) {
      if (name !== 'message' && name !== 'reset' && name !== 'disconnect') throw new Error('unknown event type: ' + name);
      if (!this.eventCallbacks[name]) this.eventCallbacks[name] = [];
      this.eventCallbacks[name].push(callback);
    }

    return on;
  }();

  _proto.forEachCallback = function () {
    function forEachCallback(name, cb) {
      if (!this.eventCallbacks[name] || !this.eventCallbacks[name].length) {
        return;
      }

      this.eventCallbacks[name].forEach(cb);
    }

    return forEachCallback;
  }();

  _proto._initCommon = function () {
    function _initCommon(options) {
      var _this = this;

      options = options || Object.create(null); //// Constants
      // how long to wait until we declare the connection attempt
      // failed.

      this.CONNECT_TIMEOUT = options.connectTimeoutMs || 10000;
      this.eventCallbacks = Object.create(null); // name -> [callback]

      this._forcedToDisconnect = false; //// Reactive status

      this.currentStatus = {
        status: 'connecting',
        connected: false,
        retryCount: 0
      };

      if (Package.tracker) {
        this.statusListeners = new Package.tracker.Tracker.Dependency();
      }

      this.statusChanged = function () {
        if (_this.statusListeners) {
          _this.statusListeners.changed();
        }
      }; //// Retry logic


      this._retry = new Retry();
      this.connectionTimer = null;
    }

    return _initCommon;
  }() // Trigger a reconnect.
  ;

  _proto.reconnect = function () {
    function reconnect(options) {
      options = options || Object.create(null);

      if (options.url) {
        this._changeUrl(options.url);
      }

      if (options._sockjsOptions) {
        this.options._sockjsOptions = options._sockjsOptions;
      }

      if (this.currentStatus.connected) {
        if (options._force || options.url) {
          this._lostConnection(forcedReconnectError);
        }

        return;
      } // if we're mid-connection, stop it.


      if (this.currentStatus.status === 'connecting') {
        // Pretend it's a clean close.
        this._lostConnection();
      }

      this._retry.clear();

      this.currentStatus.retryCount -= 1; // don't count manual retries

      this._retryNow();
    }

    return reconnect;
  }();

  _proto.disconnect = function () {
    function disconnect(options) {
      options = options || Object.create(null); // Failed is permanent. If we're failed, don't let people go back
      // online by calling 'disconnect' then 'reconnect'.

      if (this._forcedToDisconnect) return; // If _permanent is set, permanently disconnect a stream. Once a stream
      // is forced to disconnect, it can never reconnect. This is for
      // error cases such as ddp version mismatch, where trying again
      // won't fix the problem.

      if (options._permanent) {
        this._forcedToDisconnect = true;
      }

      this._cleanup();

      this._retry.clear();

      this.currentStatus = {
        status: options._permanent ? 'failed' : 'offline',
        connected: false,
        retryCount: 0
      };
      if (options._permanent && options._error) this.currentStatus.reason = options._error;
      this.statusChanged();
    }

    return disconnect;
  }() // maybeError is set unless it's a clean protocol-level close.
  ;

  _proto._lostConnection = function () {
    function _lostConnection(maybeError) {
      this._cleanup(maybeError);

      this._retryLater(maybeError); // sets status. no need to do it here.

    }

    return _lostConnection;
  }() // fired when we detect that we've gone online. try to reconnect
  // immediately.
  ;

  _proto._online = function () {
    function _online() {
      // if we've requested to be offline by disconnecting, don't reconnect.
      if (this.currentStatus.status != 'offline') this.reconnect();
    }

    return _online;
  }();

  _proto._retryLater = function () {
    function _retryLater(maybeError) {
      var timeout = 0;

      if (this.options.retry || maybeError === forcedReconnectError) {
        timeout = this._retry.retryLater(this.currentStatus.retryCount, this._retryNow.bind(this));
        this.currentStatus.status = 'waiting';
        this.currentStatus.retryTime = new Date().getTime() + timeout;
      } else {
        this.currentStatus.status = 'failed';
        delete this.currentStatus.retryTime;
      }

      this.currentStatus.connected = false;
      this.statusChanged();
    }

    return _retryLater;
  }();

  _proto._retryNow = function () {
    function _retryNow() {
      if (this._forcedToDisconnect) return;
      this.currentStatus.retryCount += 1;
      this.currentStatus.status = 'connecting';
      this.currentStatus.connected = false;
      delete this.currentStatus.retryTime;
      this.statusChanged();

      this._launchConnection();
    }

    return _retryNow;
  }() // Get current status. Reactive.
  ;

  _proto.status = function () {
    function status() {
      if (this.statusListeners) {
        this.statusListeners.depend();
      }

      return this.currentStatus;
    }

    return status;
  }();

  return StreamClientCommon;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"urls.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/socket-stream-client/urls.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  toSockjsUrl: function () {
    return toSockjsUrl;
  },
  toWebsocketUrl: function () {
    return toWebsocketUrl;
  }
});

// @param url {String} URL to Meteor app, eg:
//   "/" or "madewith.meteor.com" or "https://foo.meteor.com"
//   or "ddp+sockjs://ddp--****-foo.meteor.com/sockjs"
// @returns {String} URL to the endpoint with the specific scheme and subPath, e.g.
// for scheme "http" and subPath "sockjs"
//   "http://subdomain.meteor.com/sockjs" or "/sockjs"
//   or "https://ddp--1234-foo.meteor.com/sockjs"
function translateUrl(url, newSchemeBase, subPath) {
  if (!newSchemeBase) {
    newSchemeBase = 'http';
  }

  if (subPath !== "sockjs" && url.startsWith("/")) {
    url = Meteor.absoluteUrl(url.substr(1));
  }

  var ddpUrlMatch = url.match(/^ddp(i?)\+sockjs:\/\//);
  var httpUrlMatch = url.match(/^http(s?):\/\//);
  var newScheme;

  if (ddpUrlMatch) {
    // Remove scheme and split off the host.
    var urlAfterDDP = url.substr(ddpUrlMatch[0].length);
    newScheme = ddpUrlMatch[1] === 'i' ? newSchemeBase : newSchemeBase + 's';
    var slashPos = urlAfterDDP.indexOf('/');
    var host = slashPos === -1 ? urlAfterDDP : urlAfterDDP.substr(0, slashPos);
    var rest = slashPos === -1 ? '' : urlAfterDDP.substr(slashPos); // In the host (ONLY!), change '*' characters into random digits. This
    // allows different stream connections to connect to different hostnames
    // and avoid browser per-hostname connection limits.

    host = host.replace(/\*/g, function () {
      return Math.floor(Math.random() * 10);
    });
    return newScheme + '://' + host + rest;
  } else if (httpUrlMatch) {
    newScheme = !httpUrlMatch[1] ? newSchemeBase : newSchemeBase + 's';
    var urlAfterHttp = url.substr(httpUrlMatch[0].length);
    url = newScheme + '://' + urlAfterHttp;
  } // Prefix FQDNs but not relative URLs


  if (url.indexOf('://') === -1 && !url.startsWith('/')) {
    url = newSchemeBase + '://' + url;
  } // XXX This is not what we should be doing: if I have a site
  // deployed at "/foo", then DDP.connect("/") should actually connect
  // to "/", not to "/foo". "/" is an absolute path. (Contrast: if
  // deployed at "/foo", it would be reasonable for DDP.connect("bar")
  // to connect to "/foo/bar").
  //
  // We should make this properly honor absolute paths rather than
  // forcing the path to be relative to the site root. Simultaneously,
  // we should set DDP_DEFAULT_CONNECTION_URL to include the site
  // root. See also client_convenience.js #RationalizingRelativeDDPURLs


  url = Meteor._relativeToSiteRootUrl(url);
  if (url.endsWith('/')) return url + subPath;else return url + '/' + subPath;
}

function toSockjsUrl(url) {
  return translateUrl(url, 'http', 'sockjs');
}

function toWebsocketUrl(url) {
  return translateUrl(url, 'ws', 'websocket');
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/node_modules/meteor/socket-stream-client/sockjs-0.3.4.js");

/* Exports */
Package._define("socket-stream-client");

})();
