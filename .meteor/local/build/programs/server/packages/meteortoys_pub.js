(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var check = Package.check.check;
var Match = Package.check.Match;

/* Package-scope variables */
var ToyKit, canRun;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/meteortoys_pub/server/main.js                            //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var _0xfbf9=["\x50\x75\x62","\x31\x2E\x30\x2E\x30","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x50\x75\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x63\x61\x6C\x6C","\x73\x74\x61\x72\x74\x75\x70","\x70\x75\x62\x6C\x69\x73\x68\x5F\x68\x61\x6E\x64\x6C\x65\x72\x73","\x73\x65\x72\x76\x65\x72","\x6B\x65\x79\x73","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72","\x73\x70\x6C\x69\x63\x65","\x76\x65\x6C\x6F\x63\x69\x74\x79","\x56\x65\x6C\x6F\x63\x69\x74\x79","\x6D\x61\x74\x63\x68","\x28","\x69\x6E\x64\x65\x78\x4F\x66","\x29","\x73\x6C\x69\x63\x65","\x6D\x65\x74\x68\x6F\x64\x73"];ToyKit= {name:_0xfbf9[0],version:_0xfbf9[1],template:_0xfbf9[2]};canRun= false;Meteor[_0xfbf9[5]](function(){Meteor[_0xfbf9[4]](_0xfbf9[3],function(_0x41dfx1,_0x41dfx2){canRun= _0x41dfx2})});Meteor[_0xfbf9[19]]({MeteorToy_d:function(){if(!canRun){return};var _0x41dfx3=Object[_0xfbf9[8]](Meteor[_0xfbf9[7]][_0xfbf9[6]]);var _0x41dfx4=function(_0x41dfx5,_0x41dfx6){var _0x41dfx7=_0x41dfx6[_0xfbf9[9]];for(var _0x41dfx8=0;_0x41dfx8< _0x41dfx5[_0xfbf9[9]];_0x41dfx8++){if(_0x41dfx5[_0x41dfx8][_0xfbf9[10]](0,_0x41dfx7)=== _0x41dfx6){_0x41dfx5[_0xfbf9[11]](_0x41dfx8,1);_0x41dfx8--}};return _0x41dfx5};_0x41dfx3= _0x41dfx4(_0x41dfx3,_0xfbf9[3]);_0x41dfx3= _0x41dfx4(_0x41dfx3,_0xfbf9[12]);_0x41dfx3= _0x41dfx4(_0x41dfx3,_0xfbf9[13]);return _0x41dfx3},MeteorToy_f:function(_0x41dfx9){check(_0x41dfx9,Match.Any);if(!canRun){return};function _0x41dfxa(_0x41dfxb){var _0x41dfxc=_0x41dfxb.toString();return _0x41dfxc[_0xfbf9[18]](_0x41dfxc[_0xfbf9[16]](_0xfbf9[15])+ 1,_0x41dfxc[_0xfbf9[16]](_0xfbf9[17]))[_0xfbf9[14]](/([^\s,]+)/g)}var _0x41dfxd=String(Meteor[_0xfbf9[7]][_0xfbf9[6]][_0x41dfx9]),_0x41dfxe=_0x41dfxa(_0x41dfxd);return _0x41dfxe}})
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("meteortoys:pub", {
  ToyKit: ToyKit
});

})();
