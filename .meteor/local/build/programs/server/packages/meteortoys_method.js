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
// packages/meteortoys_method/server/main.js                         //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var _0xe834=["\x4D\x65\x74\x68\x6F\x64","\x31\x2E\x30\x2E\x30","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x63\x61\x6C\x6C","\x73\x74\x61\x72\x74\x75\x70","\x6D\x65\x74\x68\x6F\x64\x73","\x6B\x65\x79\x73","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72","\x73\x70\x6C\x69\x63\x65","\x4D\x6F\x6E\x67\x6F\x6C","\x53\x75\x70\x65\x72\x4D\x6F\x6E\x67\x6F\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79","\x4D\x65\x74\x65\x6F\x72\x43\x61\x6E\x64\x79","\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x76\x65\x6C\x6F\x63\x69\x74\x79","\x2F\x6D\x65\x74\x65\x6F\x72\x5F\x61\x63\x63\x6F\x75\x6E\x74\x73\x5F","\x2F\x6D\x65\x74\x65\x6F\x72","\x2F\x75\x70\x64\x61\x74\x65","\x2F\x69\x6E\x73\x65\x72\x74","\x2F\x72\x65\x6D\x6F\x76\x65","\x4D\x65\x74\x65\x6F\x72\x2E","\x6C\x6F\x67\x6F\x75\x74","\x6C\x6F\x67\x6F\x75\x74\x4F\x74\x68\x65\x72\x43\x6C\x69\x65\x6E\x74\x73","\x72\x65\x6D\x6F\x76\x65\x4F\x74\x68\x65\x72\x54\x6F\x6B\x65\x6E\x73","\x63\x6F\x6E\x66\x69\x67\x75\x72\x65\x4C\x6F\x67\x69\x6E\x53\x65\x72\x76\x69\x63\x65","\x6C\x6F\x67\x69\x6E","\x67\x65\x74\x4E\x65\x77\x54\x6F\x6B\x65\x6E","\x63\x68\x61\x6E\x67\x65\x50\x61\x73\x73\x77\x6F\x72\x64","\x66\x6F\x72\x67\x6F\x74\x50\x61\x73\x73\x77\x6F\x72\x64","\x76\x65\x72\x69\x66\x79\x45\x6D\x61\x69\x6C","\x63\x72\x65\x61\x74\x65\x55\x73\x65\x72","\x72\x65\x73\x65\x74\x50\x61\x73\x73\x77\x6F\x72\x64","\x6D\x65\x74\x68\x6F\x64\x5F\x68\x61\x6E\x64\x6C\x65\x72\x73","\x73\x65\x72\x76\x65\x72","\x69\x6E\x64\x65\x78\x4F\x66","\x6D\x61\x74\x63\x68","\x28","\x29","\x73\x6C\x69\x63\x65"];ToyKit= {name:_0xe834[0],version:_0xe834[1],template:_0xe834[2]};canRun= false;Meteor[_0xe834[5]](function(){Meteor[_0xe834[4]](_0xe834[3],function(_0x61efx1,_0x61efx2){canRun= _0x61efx2})});Meteor[_0xe834[6]]({MeteorToy_4:function(_0x61efx3){check(argument,Match.Any);if(!canRun){return};var _0x61efx4=Object[_0xe834[7]](Meteor[_0xe834[6]]);var _0x61efx5=function(_0x61efx6,_0x61efx7){var _0x61efx8=_0x61efx7[_0xe834[8]];for(var _0x61efx9=0;_0x61efx9< _0x61efx6[_0xe834[8]];_0x61efx9++){if(_0x61efx6[_0x61efx9][_0xe834[9]](0,_0x61efx8)=== _0x61efx7){_0x61efx6[_0xe834[10]](_0x61efx9,1);_0x61efx9--}};return _0x61efx6};_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[11]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[12]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[13]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[14]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[15]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[16]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[17]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[18]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[19]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[20]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[21]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[22]);_0x61efx4= arrayRemover(_0x61efx4,_0xe834[23]);_0x61efx4= arrayRemover(_0x61efx4,_0xe834[24]);_0x61efx4= arrayRemover(_0x61efx4,_0xe834[25]);_0x61efx4= arrayRemover(_0x61efx4,_0xe834[26]);_0x61efx4= arrayRemover(_0x61efx4,_0xe834[27]);_0x61efx4= arrayRemover(_0x61efx4,_0xe834[28]);_0x61efx4= arrayRemover(_0x61efx4,_0xe834[29]);_0x61efx4= arrayRemover(_0x61efx4,_0xe834[30]);_0x61efx4= arrayRemover(_0x61efx4,_0xe834[31]);_0x61efx4= arrayRemover(_0x61efx4,_0xe834[32]);_0x61efx4= arrayRemover(_0x61efx4,_0xe834[33]);return _0x61efx4},MeteorToys_x:function(_0x61efxa){check(_0x61efxa,Match.Any);if(!canRun){return};var _0x61efx4=Object[_0xe834[7]](Meteor[_0xe834[35]][_0xe834[34]]);var _0x61efx5=function(_0x61efx6,_0x61efx7){var _0x61efx8=_0x61efx7[_0xe834[8]];for(var _0x61efx9=0;_0x61efx9< _0x61efx6[_0xe834[8]];_0x61efx9++){if(_0x61efx6[_0x61efx9][_0xe834[36]](_0x61efx7)>  -1){_0x61efx6[_0xe834[10]](_0x61efx9,1);_0x61efx9--}};return _0x61efx6};var _0x61efxb=function(_0x61efx6,_0x61efx7){var _0x61efx8=_0x61efx7[_0xe834[8]];for(var _0x61efx9=0;_0x61efx9< _0x61efx6[_0xe834[8]];_0x61efx9++){if(_0x61efx6[_0x61efx9]=== _0x61efx7){_0x61efx6[_0xe834[10]](_0x61efx9,1);_0x61efx9--}};return _0x61efx6};_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[11]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[12]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[13]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[15]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[16]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[17]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[14]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[18]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[19]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[20]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[21]);_0x61efx4= _0x61efx5(_0x61efx4,_0xe834[22]);_0x61efx4= _0x61efxb(_0x61efx4,_0xe834[23]);_0x61efx4= _0x61efxb(_0x61efx4,_0xe834[24]);_0x61efx4= _0x61efxb(_0x61efx4,_0xe834[25]);_0x61efx4= _0x61efxb(_0x61efx4,_0xe834[26]);_0x61efx4= _0x61efxb(_0x61efx4,_0xe834[27]);_0x61efx4= _0x61efxb(_0x61efx4,_0xe834[28]);_0x61efx4= _0x61efxb(_0x61efx4,_0xe834[29]);_0x61efx4= _0x61efxb(_0x61efx4,_0xe834[30]);_0x61efx4= _0x61efxb(_0x61efx4,_0xe834[31]);_0x61efx4= _0x61efxb(_0x61efx4,_0xe834[32]);_0x61efx4= _0x61efxb(_0x61efx4,_0xe834[33]);return _0x61efx4},MeteorToy_y:function(_0x61efxc){check(_0x61efxc,Match.Any);if(!canRun){return};function _0x61efxd(_0x61efxe){var _0x61efxf=_0x61efxe.toString();return _0x61efxf[_0xe834[40]](_0x61efxf[_0xe834[36]](_0xe834[38])+ 1,_0x61efxf[_0xe834[36]](_0xe834[39]))[_0xe834[37]](/([^\s,]+)/g)}var _0x61efx10=String(Meteor[_0xe834[35]][_0xe834[34]][_0x61efxc]),_0x61efx11=_0x61efxd(_0x61efx10);return _0x61efx11}})
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("meteortoys:method", {
  ToyKit: ToyKit
});

})();
