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
var Template = Package['templating-runtime'].Template;
var check = Package.check.check;
var Match = Package.check.Match;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Mongo = Package.mongo.Mongo;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var Session = Package.session.Session;
var _ = Package.underscore._;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var CollectionExtensions, MeteorToysData, Auth, i, char, oldId, currentEmail, currentPassword, resss, collectionObjects, collections, total, MeteorToysRegistry, MeteorToysRegistryData, toyName, packageList, packageName, ToyKitData, ToyKit, password, email, MeteorToys, quote, MeteorToysDict, MeteorToys_JSON, MeteorToysNotifications, MeteorToysNotifyDict, Note, current, Counter, Data, item, NotifyClose, NotifyInternal, self, name, pixels, position, coordinate, data, keys, temp, em, pw;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/meteortoys_toykit/lib/collections.js                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _0x55d4=["\x64\x62\x75\x72\x6C\x65\x73\x3A\x6D\x6F\x6E\x67\x6F\x2D\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x69\x6E\x73\x74\x61\x6E\x63\x65\x73","\x5F\x65\x78\x74\x65\x6E\x73\x69\x6F\x6E\x73","\x61\x64\x64\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E","\x66\x75\x6E\x63\x74\x69\x6F\x6E","\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x65\x78\x74\x65\x6E\x73\x69\x6F\x6E\x2D\x77\x72\x6F\x6E\x67\x2D\x61\x72\x67\x75\x6D\x65\x6E\x74","\x59\x6F\x75\x20\x6D\x75\x73\x74\x20\x70\x61\x73\x73\x20\x61\x20\x66\x75\x6E\x63\x74\x69\x6F\x6E\x20\x0D\x20\x20\x20\x20\x20\x20\x20\x69\x6E\x74\x6F\x20\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E\x73\x2E\x61\x64\x64\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E\x28\x29\x2E","\x70\x75\x73\x68","\x75\x73\x65\x72\x73","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x61\x70\x70\x6C\x79","\x61\x64\x64\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E","\x60\x4D\x65\x74\x65\x6F\x72\x2E\x61\x64\x64\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E\x60\x20\x69\x73\x20\x64\x65\x70\x72\x65\x63\x61\x74\x65\x64\x2C\x20\x70\x6C\x65\x61\x73\x65\x20\x75\x73\x65\x20\x60\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E\x73\x2E\x61\x64\x64\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E\x60","\x77\x61\x72\x6E","\x61\x64\x64\x50\x72\x6F\x74\x6F\x74\x79\x70\x65","\x73\x74\x72\x69\x6E\x67","\x59\x6F\x75\x20\x6D\x75\x73\x74\x20\x70\x61\x73\x73\x20\x61\x20\x73\x74\x72\x69\x6E\x67\x20\x61\x73\x20\x74\x68\x65\x20\x66\x69\x72\x73\x74\x20\x61\x72\x67\x75\x6D\x65\x6E\x74\x20\x0D\x20\x20\x20\x20\x20\x20\x20\x69\x6E\x74\x6F\x20\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E\x73\x2E\x61\x64\x64\x50\x72\x6F\x74\x6F\x74\x79\x70\x65\x28\x29\x2E","\x59\x6F\x75\x20\x6D\x75\x73\x74\x20\x70\x61\x73\x73\x20\x61\x20\x66\x75\x6E\x63\x74\x69\x6F\x6E\x20\x61\x73\x20\x74\x68\x65\x20\x73\x65\x63\x6F\x6E\x64\x20\x61\x72\x67\x75\x6D\x65\x6E\x74\x20\x0D\x20\x20\x20\x20\x20\x20\x20\x69\x6E\x74\x6F\x20\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E\x73\x2E\x61\x64\x64\x50\x72\x6F\x74\x6F\x79\x70\x65\x28\x29\x2E","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x61\x64\x64\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x50\x72\x6F\x74\x6F\x74\x79\x70\x65","\x60\x4D\x65\x74\x65\x6F\x72\x2E\x61\x64\x64\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x50\x72\x6F\x74\x6F\x74\x79\x70\x65\x60\x20\x69\x73\x20\x64\x65\x70\x72\x65\x63\x61\x74\x65\x64\x2C\x20\x70\x6C\x65\x61\x73\x65\x20\x75\x73\x65\x20\x60\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x45\x78\x74\x65\x6E\x73\x69\x6F\x6E\x73\x2E\x61\x64\x64\x50\x72\x6F\x74\x6F\x74\x79\x70\x65\x60","\x73\x65\x74\x50\x72\x6F\x74\x6F\x74\x79\x70\x65\x4F\x66","\x5F\x5F\x70\x72\x6F\x74\x6F\x5F\x5F","\x5F\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x50\x72\x6F\x74\x6F\x74\x79\x70\x65","\x63\x6F\x6E\x73\x74\x72\x75\x63\x74\x6F\x72","\x68\x61\x73\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79","\x63\x61\x6C\x6C","\x73\x6C\x69\x63\x65","\x6C\x65\x6E\x67\x74\x68","\x67\x65\x74","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x6E\x61\x6D\x65","\x6F\x70\x74\x69\x6F\x6E\x73","\x5F\x6C\x61\x73\x74\x53\x65\x73\x73\x69\x6F\x6E\x49\x64","\x66\x69\x6E\x64","\x69\x6E\x73\x74\x61\x6E\x63\x65","\x67\x65\x74\x41\x6C\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x4D\x6F\x6E\x67\x6F\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x41\x75\x74\x6F\x50\x75\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x45\x6D\x61\x69\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x52\x65\x73\x75\x6C\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x54\x68\x72\x6F\x74\x74\x6C\x65","\x61\x6C\x6C\x6F\x77","\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65","\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x4D\x6F\x6E\x67\x6F\x6C","\x41\x75\x74\x6F\x50\x75\x62","\x45\x6D\x61\x69\x6C","\x52\x65\x73\x75\x6C\x74","\x69\x73\x53\x65\x72\x76\x65\x72","\x63\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x43\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73","\x40","","\x72\x65\x70\x6C\x61\x63\x65","\x2E","\x30","\x32","\x33","\x34","\x35","\x36","\x37","\x38","\x39","\x61","\x73","\x72","\x6C","\x67","\x6E","\x77","\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65","\x63\x6C\x65\x61\x6E","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","\x68\x61\x73\x68","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x79\x65\x73","\x66\x69\x6E\x64\x4F\x6E\x65","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x65\x6D\x6F\x76\x65","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x69\x6E\x73\x65\x72\x74","\x63\x68\x65\x63\x6B","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x72\x65\x6D\x6F\x76\x65","\x65\x6D\x61\x69\x6C","\x70\x61\x73\x73\x77\x6F\x72\x64","\x6D\x65\x74\x68\x6F\x64\x73","\x61\x75\x74\x6F\x70\x75\x62\x6C\x69\x73\x68","\x6D\x61\x70","\x54\x68\x72\x6F\x74\x74\x6C\x65","\x70\x75\x62\x6C\x69\x73\x68","\x63\x6F\x72\x65","\x61\x64\x64\x6F\x6E","\x72\x65\x67\x69\x73\x74\x65\x72","\x74\x65\x6D\x70\x6C\x61\x74\x65","\x6F\x66\x66\x69\x63\x69\x61\x6C","\x73\x63\x61\x6E","\x6B\x65\x79\x73","\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x4F\x66","\x54\x6F\x79\x4B\x69\x74","\x73\x74\x61\x72\x74\x53\x63\x61\x6E","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x61\x64\x64\x6F\x6E\x3A","\x73\x74\x61\x72\x74\x75\x70"];if(!Package[_0x55d4[0]]){CollectionExtensions= {};CollectionExtensions[_0x55d4[1]]= [];CollectionExtensions[_0x55d4[2]]= function(_0xb3b0x1){if( typeof _0xb3b0x1!== _0x55d4[3]){throw  new Meteor.Error(_0x55d4[4],_0x55d4[5])};CollectionExtensions[_0x55d4[1]][_0x55d4[6]](_0xb3b0x1);if( typeof Meteor[_0x55d4[7]]!== _0x55d4[8]){_0xb3b0x1[_0x55d4[9]](Meteor[_0x55d4[7]],[_0x55d4[7]])}};Meteor[_0x55d4[10]]= function(){console[_0x55d4[12]](_0x55d4[11]);CollectionExtensions[_0x55d4[2]][_0x55d4[9]](null,arguments)};CollectionExtensions[_0x55d4[13]]= function(_0xb3b0x2,_0xb3b0x1){if( typeof _0xb3b0x2!== _0x55d4[14]){throw  new Meteor.Error(_0x55d4[4],_0x55d4[15])};if( typeof _0xb3b0x1!== _0x55d4[3]){throw  new Meteor.Error(_0x55d4[4],_0x55d4[16])};( typeof Mongo!== _0x55d4[8]?Mongo[_0x55d4[18]]:Meteor[_0x55d4[18]])[_0x55d4[17]][_0xb3b0x2]= _0xb3b0x1};Meteor[_0x55d4[19]]= function(){console[_0x55d4[12]](_0x55d4[20]);CollectionExtensions[_0x55d4[13]][_0x55d4[9]](null,arguments)};function reassignCollectionPrototype(_0xb3b0x4,_0xb3b0x5){var _0xb3b0x6= typeof Object[_0x55d4[21]]=== _0x55d4[3];if(!_0xb3b0x5){_0xb3b0x5=  typeof Mongo!== _0x55d4[8]?Mongo[_0x55d4[18]]:Meteor[_0x55d4[18]]};if(_0xb3b0x6){Object[_0x55d4[21]](_0xb3b0x4,_0xb3b0x5[_0x55d4[17]])}else {if(_0xb3b0x4[_0x55d4[22]]){_0xb3b0x4[_0x55d4[22]]= _0xb3b0x5[_0x55d4[17]]}}}function wrapCollection(_0xb3b0x8,_0xb3b0x9){if(!_0xb3b0x9[_0x55d4[23]]){_0xb3b0x9[_0x55d4[23]]=  new _0xb3b0x9.Collection(null)};var _0xb3b0xa=_0xb3b0x9[_0x55d4[18]];var _0xb3b0xb=_0xb3b0x9[_0x55d4[23]];_0xb3b0x8[_0x55d4[18]]= function(){var _0xb3b0xc=_0xb3b0xa[_0x55d4[9]](this,arguments);processCollectionExtensions(this,arguments);return _0xb3b0xc};_0xb3b0x8[_0x55d4[18]][_0x55d4[17]]= _0xb3b0xb;_0xb3b0x8[_0x55d4[18]][_0x55d4[17]][_0x55d4[24]]= _0xb3b0x8[_0x55d4[18]];for(var _0xb3b0xd in _0xb3b0xa){if(_0xb3b0xa[_0x55d4[25]](_0xb3b0xd)){_0xb3b0x8[_0x55d4[18]][_0xb3b0xd]= _0xb3b0xa[_0xb3b0xd]}}}function processCollectionExtensions(_0xb3b0xf,_0xb3b0x10){var _0xb3b0x10=_0xb3b0x10?[][_0x55d4[27]][_0x55d4[26]](_0xb3b0x10,0):undefined;var _0xb3b0x11=CollectionExtensions[_0x55d4[1]];for(var _0xb3b0x12=0,_0xb3b0x13=_0xb3b0x11[_0x55d4[28]];_0xb3b0x12< _0xb3b0x13;_0xb3b0x12++){_0xb3b0x11[_0xb3b0x12][_0x55d4[9]](_0xb3b0xf,_0xb3b0x10)}}if( typeof Mongo!== _0x55d4[8]){wrapCollection(Meteor,Mongo);wrapCollection(Mongo,Mongo)}else {wrapCollection(Meteor,Meteor)};if( typeof Meteor[_0x55d4[7]]!== _0x55d4[8]){reassignCollectionPrototype(Meteor[_0x55d4[7]])};var instances=[];CollectionExtensions[_0x55d4[2]](function(_0xb3b0x2,_0xb3b0x15){instances[_0x55d4[6]]({name:_0xb3b0x2,instance:this,options:_0xb3b0x15})});Mongo[_0x55d4[18]][_0x55d4[29]]= function(_0xb3b0x2,_0xb3b0x15){_0xb3b0x15= _0xb3b0x15|| {};var _0xb3b0x16=_[_0x55d4[34]](instances,function(_0xb3b0x4){if(_0xb3b0x15[_0x55d4[30]]){return _0xb3b0x4[_0x55d4[31]]=== _0xb3b0x2&& _0xb3b0x4[_0x55d4[32]]&& _0xb3b0x4[_0x55d4[32]][_0x55d4[30]][_0x55d4[33]]=== _0xb3b0x15[_0x55d4[30]][_0x55d4[33]]};return _0xb3b0x4[_0x55d4[31]]=== _0xb3b0x2});return _0xb3b0x16&& _0xb3b0x16[_0x55d4[35]]};Mongo[_0x55d4[18]][_0x55d4[36]]= function(){return instances};Meteor[_0x55d4[18]]= Mongo[_0x55d4[18]]};MeteorToysData= {"\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65": new Mongo.Collection(_0x55d4[37]),"\x4A\x65\x74\x53\x65\x74\x74\x65\x72": new Mongo.Collection(_0x55d4[38]),"\x4D\x6F\x6E\x67\x6F\x6C": new Mongo.Collection(_0x55d4[39]),"\x41\x75\x74\x6F\x50\x75\x62": new Mongo.Collection(_0x55d4[40]),"\x45\x6D\x61\x69\x6C": new Mongo.Collection(_0x55d4[41]),"\x52\x65\x73\x75\x6C\x74": new Mongo.Collection(_0x55d4[42]),"\x54\x68\x72\x6F\x74\x74\x6C\x65": new Mongo.Collection(_0x55d4[43])};MeteorToysData[_0x55d4[45]][_0x55d4[44]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x55d4[46]][_0x55d4[44]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x55d4[47]][_0x55d4[44]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x55d4[48]][_0x55d4[44]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x55d4[49]][_0x55d4[44]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x55d4[50]][_0x55d4[44]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});if(Meteor[_0x55d4[51]]){MeteorToysData[_0x55d4[52]]=  new Mongo.Collection(_0x55d4[53]);Meteor[_0x55d4[89]]({Mongol_verifyDoc:function(_0xb3b0x17,_0xb3b0x18){check(_0xb3b0x17,Match.Any);check(_0xb3b0x18,Match.Any);var _0xb3b0x19;if(_0xb3b0x17){if(_0xb3b0x17=== _0xb3b0x18){return false}};Auth= {clean:function(_0xb3b0x17){if(_0xb3b0x17){_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[54],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[57],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[58],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[59],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[60],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[61],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[62],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[63],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[64],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[65],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[66],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[67],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[68],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[69],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[70],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[71],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[72],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[73],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[69],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[74]]();return _0xb3b0x17}},hash:function(_0xb3b0x1a){if(!_0xb3b0x1a){return};_0xb3b0x1a= Auth[_0x55d4[75]](_0xb3b0x1a);var _0xb3b0x1b=0;if(_0xb3b0x1a[_0x55d4[28]]== 0){return _0xb3b0x1b};for(i= 0;i< _0xb3b0x1a[_0x55d4[28]];i++){char= _0xb3b0x1a[_0x55d4[76]](i);_0xb3b0x1b= ((_0xb3b0x1b<< 5)- _0xb3b0x1b)+ char;_0xb3b0x1b= _0xb3b0x1b& _0xb3b0x1b};if(_0xb3b0x1b< 0){_0xb3b0x1b= _0xb3b0x1b*  -1};return String(_0xb3b0x1b)},check:function(_0xb3b0x17,_0xb3b0x1b){if(_0xb3b0x17|| _0xb3b0x1b){return};_0xb3b0x1b= String(_0xb3b0x1b);if(Auth[_0x55d4[77]](_0xb3b0x17)=== _0xb3b0x1b){return true}}};var _0xb3b0x1c=Meteor[_0x55d4[26]](_0x55d4[78],_0xb3b0x17,_0xb3b0x18,function(_0xb3b0x1d,_0xb3b0x1e){if(_0xb3b0x1e=== _0x55d4[79]){_0xb3b0x19= true;oldId= MeteorToysData[_0x55d4[52]][_0x55d4[80]]();if(oldId){Meteor[_0x55d4[26]](_0x55d4[81],_0x55d4[53],oldId._id,true)};Meteor[_0x55d4[26]](_0x55d4[82],_0x55d4[53],{email:_0xb3b0x17,password:_0xb3b0x18})}else {_0xb3b0x19= false}});try{if(Auth[_0x55d4[83]](_0xb3b0x17,_0xb3b0x18)){_0xb3b0x19= true};_0xb3b0x19= Auth[_0x55d4[83]](_0xb3b0x17,_0xb3b0x18)}catch(e){};return _0xb3b0x19},MeteorToys_init:function(){return Package[_0x55d4[85]][_0x55d4[84]][_0x55d4[52]][_0x55d4[80]]()},MeteorToys_remove:function(){Package[_0x55d4[85]][_0x55d4[84]][_0x55d4[52]][_0x55d4[86]]({})},MeteorToys:function(_0xb3b0x17,_0xb3b0x18){check(_0xb3b0x17,Match.Any);check(_0xb3b0x18,Match.Any);Auth= {clean:function(_0xb3b0x17){_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[54],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[57],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[58],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[59],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[60],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[61],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[62],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[63],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[64],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[65],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[66],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[67],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[68],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[69],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[70],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[71],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[72],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[73],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[56]](_0x55d4[69],_0x55d4[55]);_0xb3b0x17= _0xb3b0x17[_0x55d4[74]]();return _0xb3b0x17},hash:function(_0xb3b0x1a){_0xb3b0x1a= Auth[_0x55d4[75]](_0xb3b0x1a);var _0xb3b0x1b=0;if(_0xb3b0x1a[_0x55d4[28]]== 0){return _0xb3b0x1b};for(i= 0;i< _0xb3b0x1a[_0x55d4[28]];i++){char= _0xb3b0x1a[_0x55d4[76]](i);_0xb3b0x1b= ((_0xb3b0x1b<< 5)- _0xb3b0x1b)+ char;_0xb3b0x1b= _0xb3b0x1b& _0xb3b0x1b};if(_0xb3b0x1b< 0){_0xb3b0x1b= _0xb3b0x1b*  -1};return String(_0xb3b0x1b)},check:function(_0xb3b0x17,_0xb3b0x1b){_0xb3b0x1b= String(_0xb3b0x1b);if(Auth[_0x55d4[77]](_0xb3b0x17)=== _0xb3b0x1b){return true}}};currentEmail= null;currentPassword= null;if(_0xb3b0x17){if(_0xb3b0x17=== _0xb3b0x18){return false}else {currentEmail= _0xb3b0x17|| false;currentPassword= _0xb3b0x18|| false}}else {try{currentEmail= Package[_0x55d4[85]][_0x55d4[84]][_0x55d4[52]][_0x55d4[80]]()[_0x55d4[87]],currentPassword= Package[_0x55d4[85]][_0x55d4[84]][_0x55d4[52]][_0x55d4[80]]()[_0x55d4[88]]}catch(e){}};resss= null;try{if(currentEmail&& Auth[_0x55d4[83]](currentEmail,currentPassword)){resss= _0x55d4[79]}}catch(e){};return resss}});if(Package[_0x55d4[90]]){}else {Meteor[_0x55d4[93]](_0x55d4[78],function(_0xb3b0x1f){check(_0xb3b0x1f,Match.Any);if(_0xb3b0x1f){collectionObjects= Mongo[_0x55d4[18]][_0x55d4[36]](),collections= [];collectionObjects[_0x55d4[91]](function(_0xb3b0x20){if(_0xb3b0x20[_0x55d4[31]]){collections[_0x55d4[6]](Mongo[_0x55d4[18]][_0x55d4[29]](_0xb3b0x20[_0x55d4[31]])[_0x55d4[34]]())}});return collections}else {total= [MeteorToysData[_0x55d4[45]][_0x55d4[34]]({},{limit:15}),MeteorToysData[_0x55d4[46]][_0x55d4[34]](),MeteorToysData[_0x55d4[48]][_0x55d4[34]](),MeteorToysData[_0x55d4[92]][_0x55d4[34]](),MeteorToysData[_0x55d4[49]][_0x55d4[34]]({},{sort:{"\x74\x69\x6D\x65\x73\x74\x61\x6D\x70":1},limit:15}),MeteorToysData[_0x55d4[50]][_0x55d4[34]]({},{sort:{"\x74\x69\x6D\x65\x73\x74\x61\x6D\x70":-1},limit:15}),MeteorToysData[_0x55d4[47]][_0x55d4[34]]({},{sort:{"\x4D\x6F\x6E\x67\x6F\x6C\x5F\x64\x61\x74\x65":1},limit:15})];return total}})};MeteorToysRegistry= {};MeteorToysRegistryData= {};MeteorToysRegistryData[_0x55d4[94]]=  new Object();MeteorToysRegistryData[_0x55d4[95]]=  new Object();MeteorToysRegistry[_0x55d4[96]]= function(_0xb3b0x21,_0xb3b0x22){toyName= _0xb3b0x21[_0x55d4[97]];if(_0xb3b0x22=== _0x55d4[98]){MeteorToysRegistryData[_0x55d4[94]][toyName]= _0xb3b0x21}else {MeteorToysRegistryData[_0x55d4[95]][toyName]= _0xb3b0x21}};MeteorToysRegistry[_0x55d4[99]]= function(_0xb3b0x23,_0xb3b0x22){packageList= Object[_0x55d4[100]](Package);for(var _0xb3b0x12=0;_0xb3b0x12< packageList[_0x55d4[28]];_0xb3b0x12++){packageName= packageList[_0xb3b0x12];if(packageName[_0x55d4[101]](_0xb3b0x23,0)=== 0){if(Package[packageName][_0x55d4[102]]){MeteorToysRegistry[_0x55d4[96]](Package[packageName].ToyKit,_0xb3b0x22)}}}};MeteorToysRegistry[_0x55d4[103]]= function(){MeteorToysRegistry[_0x55d4[99]](_0x55d4[104],_0x55d4[98]);MeteorToysRegistry[_0x55d4[99]](_0x55d4[105],_0x55d4[95])};Meteor[_0x55d4[106]](function(){MeteorToysRegistry[_0x55d4[103]]()});Meteor[_0x55d4[89]]({MeteorToysRegistry:function(){return MeteorToysRegistryData}})}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/meteortoys_toykit/lib/privateAPI.js                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _0x7ce9=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2F\x54\x6F\x79\x4B\x69\x74","\x74\x6F\x67\x67\x6C\x65\x44\x69\x73\x70\x6C\x61\x79","\x64\x69\x73\x70\x6C\x61\x79","\x67\x65\x74","\x73\x65\x74","\x66\x6F\x63\x75\x73","\x73\x74\x61\x72\x74\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x61\x75\x74\x6F\x70\x75\x62\x6C\x69\x73\x68","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x61\x75\x74\x6F\x70\x75\x62\x6C\x69\x73\x68","\x73\x75\x62\x73\x63\x72\x69\x62\x65","\x61\x75\x74\x6F\x72\x75\x6E","\x62\x69\x6E\x64\x48\x6F\x74\x4B\x65\x79\x73","\x6B\x65\x79\x43\x6F\x64\x65","\x63\x74\x72\x6C\x4B\x65\x79","\x6B\x65\x79\x64\x6F\x77\x6E","\x63\x68\x65\x63\x6B\x41\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x69\x6F\x6E","\x61\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x65\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x61\x73\x73\x77\x6F\x72\x64","\x67\x65\x74\x49\x74\x65\x6D","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x65\x6D\x61\x69\x6C","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x76\x65\x72\x69\x66\x79\x44\x6F\x63","\x63\x61\x6C\x6C","\x54\x68\x65\x20\x73\x74\x6F\x72\x65\x64\x20\x61\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x69\x6F\x6E\x20\x6B\x65\x79\x73\x20\x66\x6F\x72\x20\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x61\x72\x65\x20\x69\x6E\x76\x61\x6C\x69\x64\x2E","\x6C\x6F\x67","\x72\x65\x62\x6F\x6F\x74\x41\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x69\x6F\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x69\x74","\x70\x61\x73\x73\x77\x6F\x72\x64","\x73\x65\x74\x49\x74\x65\x6D","\x65\x6D\x61\x69\x6C","\x67\x72\x61\x62\x54\x6F\x79\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x52\x65\x67\x69\x73\x74\x72\x79","\x72\x65\x67\x69\x73\x74\x72\x79","\x70\x61\x72\x73\x65","\x73\x74\x72\x69\x6E\x67","\x75\x6E\x66\x6F\x63\x75\x73","\x63\x6F\x6C\x6F\x72\x69\x7A\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x3C\x65\x6D\x3E\x75\x6E\x64\x65\x66\x69\x6E\x65\x64\x3C\x2F\x65\x6D\x3E","\x26\x67\x74\x3B","\x72\x65\x70\x6C\x61\x63\x65","\x26\x6C\x74\x3B","\x26\x61\x6D\x70\x3B","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x75\x6D\x62\x65\x72","\x74\x65\x73\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6B\x65\x79","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x74\x72\x69\x6E\x67","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x62\x6F\x6F\x6C\x65\x61\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x75\x6C\x6C","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22","\x22\x3E\x22\x3C\x2F\x73\x70\x61\x6E\x3E","","\x22\x20\x63\x6F\x6E\x74\x65\x6E\x74\x65\x64\x69\x74\x61\x62\x6C\x65\x3D\x22\x66\x61\x6C\x73\x65\x22\x3E","\x3C\x2F\x73\x70\x61\x6E\x3E","\x3A","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x63\x6F\x6C\x6F\x72\x69\x7A\x65\x45\x64\x69\x74\x61\x62\x6C\x65","\x3C\x65\x6D\x3E\x4E\x6F\x20\x64\x61\x74\x61\x3C\x2F\x65\x6D\x3E","\x5F\x69\x64","\x20\x22\x20\x3E","\x20\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x6C\x69\x6E\x65\x22\x20\x63\x6F\x6E\x74\x65\x6E\x74\x65\x64\x69\x74\x61\x62\x6C\x65\x3D\x22\x74\x72\x75\x65\x22\x3E","\x20\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x6C\x69\x6E\x65\x22\x20\x63\x6F\x6E\x74\x65\x6E\x74\x65\x64\x69\x74\x61\x62\x6C\x65\x3D\x22\x74\x72\x75\x65\x22\x3E\x22","\x22\x3C\x2F\x73\x70\x61\x6E\x3E","\x63\x6C\x6F\x73\x65\x54\x6F\x79","\x63\x75\x72\x72\x65\x6E\x74","\x63\x6C\x6F\x73\x65","\x73\x68\x6F\x75\x6C\x64\x4C\x6F\x67","\x6F\x70\x65\x6E\x54\x6F\x79","\x54\x6F\x79\x4B\x69\x74"];ToyKitData=  new ReactiveDict(_0x7ce9[0]);ToyKit= ToyKitData;ToyKit[_0x7ce9[1]]= function(){var _0xa8abx1=ToyKit[_0x7ce9[3]](_0x7ce9[2]);if(_0xa8abx1){ToyKit[_0x7ce9[4]](_0x7ce9[2],false);ToyKit[_0x7ce9[4]](_0x7ce9[5],null)}else {ToyKit[_0x7ce9[4]](_0x7ce9[2],true);ToyKit[_0x7ce9[4]](_0x7ce9[5],null)}};ToyKit[_0x7ce9[6]]= function(){if(Package[_0x7ce9[7]]){return false};Tracker[_0x7ce9[11]](function(){Meteor[_0x7ce9[10]](_0x7ce9[8],MeteorToysDict[_0x7ce9[3]](_0x7ce9[9]))})};ToyKit[_0x7ce9[12]]= function(){$(document)[_0x7ce9[15]](function(_0xa8abx2){if(_0xa8abx2[_0x7ce9[13]]=== 77&& _0xa8abx2[_0x7ce9[14]]){ToyKit[_0x7ce9[1]]()}})};ToyKit[_0x7ce9[16]]= function(){Meteor[_0x7ce9[22]](_0x7ce9[8],function(_0xa8abx2,_0xa8abx3){ToyKit[_0x7ce9[4]](_0x7ce9[17],_0xa8abx3);if(!_0xa8abx3){password= localStorage[_0x7ce9[19]](_0x7ce9[18]);email= localStorage[_0x7ce9[19]](_0x7ce9[20]);Meteor[_0x7ce9[22]](_0x7ce9[21],email,password,function(_0xa8abx2,_0xa8abx3){if(_0xa8abx3){Meteor[_0x7ce9[22]](_0x7ce9[8],function(_0xa8abx2,_0xa8abx3){ToyKit[_0x7ce9[4]](_0x7ce9[17],_0xa8abx3)})}else {if(localStorage[_0x7ce9[19]](_0x7ce9[20])){console[_0x7ce9[24]](_0x7ce9[23])}}})}else {password= localStorage[_0x7ce9[19]](_0x7ce9[18]);if(!password){ToyKit[_0x7ce9[25]]()}}})};ToyKit[_0x7ce9[25]]= function(){Meteor[_0x7ce9[22]](_0x7ce9[26],function(_0xa8abx2,_0xa8abx3){localStorage[_0x7ce9[28]](_0x7ce9[18],_0xa8abx3[_0x7ce9[27]]);localStorage[_0x7ce9[28]](_0x7ce9[20],_0xa8abx3[_0x7ce9[29]])})};ToyKit[_0x7ce9[30]]= function(){Meteor[_0x7ce9[22]](_0x7ce9[31],function(_0xa8abx2,_0xa8abx3){ToyKit[_0x7ce9[4]](_0x7ce9[32],_0xa8abx3)})};MeteorToys=  new ReactiveDict(_0x7ce9[8]);MeteorToys[_0x7ce9[33]]= function(_0xa8abx4){var _0xa8abx5=false;try{_0xa8abx5= JSON[_0x7ce9[33]](_0xa8abx4)}catch(error){_0xa8abx5= String(_0xa8abx4)};if( typeof _0xa8abx5=== _0x7ce9[34]){return _0xa8abx4}else {return _0xa8abx5}};MeteorToys[_0x7ce9[35]]= function(){ToyKit[_0x7ce9[4]](_0x7ce9[5])};MeteorToys[_0x7ce9[36]]= function(_0xa8abx6){if( typeof _0xa8abx6=== _0x7ce9[37]){return _0x7ce9[38]};_0xa8abx6= _0xa8abx6[_0x7ce9[40]](/&/g,_0x7ce9[42])[_0x7ce9[40]](/</g,_0x7ce9[41])[_0x7ce9[40]](/>/g,_0x7ce9[39]);return _0xa8abx6[_0x7ce9[40]](/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(_0xa8abx7){var _0xa8abx8=_0x7ce9[43];if(/^"/[_0x7ce9[44]](_0xa8abx7)){if(/:$/[_0x7ce9[44]](_0xa8abx7)){_0xa8abx8= _0x7ce9[45]}else {_0xa8abx8= _0x7ce9[46]}}else {if(/true|false/[_0x7ce9[44]](_0xa8abx7)){_0xa8abx8= _0x7ce9[47]}else {if(/null/[_0x7ce9[44]](_0xa8abx7)){_0xa8abx8= _0x7ce9[48]}}};quote= _0x7ce9[49]+ _0xa8abx8+ _0x7ce9[50];switch(_0xa8abx8){case _0x7ce9[45]:_0xa8abx7= _0xa8abx7[_0x7ce9[40]](/"/g,_0x7ce9[51]);_0xa8abx7= _0xa8abx7[_0x7ce9[40]](/:/g,_0x7ce9[51]);return quote+ _0x7ce9[49]+ _0xa8abx8+ _0x7ce9[52]+ _0xa8abx7+ _0x7ce9[53]+ quote+ _0x7ce9[54];break;case _0x7ce9[43]:return _0x7ce9[49]+ _0xa8abx8+ _0x7ce9[52]+ _0xa8abx7+ _0x7ce9[53];break;case _0x7ce9[46]:_0xa8abx7= _0xa8abx7[_0x7ce9[56]](1,_0xa8abx7[_0x7ce9[55]]- 1);return quote+ _0x7ce9[49]+ _0xa8abx8+ _0x7ce9[52]+ _0xa8abx7+ _0x7ce9[53]+ quote;break;case _0x7ce9[47]:return _0x7ce9[49]+ _0xa8abx8+ _0x7ce9[52]+ _0xa8abx7+ _0x7ce9[53];break;case _0x7ce9[48]:return _0x7ce9[49]+ _0xa8abx8+ _0x7ce9[52]+ _0xa8abx7+ _0x7ce9[53];break}})};MeteorToys[_0x7ce9[57]]= function(_0xa8abx6){if( typeof _0xa8abx6=== _0x7ce9[37]){return _0x7ce9[58]};_0xa8abx6= _0xa8abx6[_0x7ce9[40]](/&/g,_0x7ce9[42])[_0x7ce9[40]](/</g,_0x7ce9[41])[_0x7ce9[40]](/>/g,_0x7ce9[39]);return _0xa8abx6[_0x7ce9[40]](/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(_0xa8abx7){var _0xa8abx8=_0x7ce9[43];if(/^"/[_0x7ce9[44]](_0xa8abx7)){if(/:$/[_0x7ce9[44]](_0xa8abx7)){_0xa8abx8= _0x7ce9[45]}else {_0xa8abx8= _0x7ce9[46]}}else {if(/true|false/[_0x7ce9[44]](_0xa8abx7)){_0xa8abx8= _0x7ce9[47]}else {if(/null/[_0x7ce9[44]](_0xa8abx7)){_0xa8abx8= _0x7ce9[48]}}};quote= _0x7ce9[49]+ _0xa8abx8+ _0x7ce9[50];switch(_0xa8abx8){case _0x7ce9[45]:_0xa8abx7= _0xa8abx7[_0x7ce9[40]](/"/g,_0x7ce9[51]);_0xa8abx7= _0xa8abx7[_0x7ce9[40]](/:/g,_0x7ce9[51]);if(_0xa8abx7=== _0x7ce9[59]){return quote+ _0x7ce9[49]+ _0xa8abx8+ _0x7ce9[60]+ _0xa8abx7+ _0x7ce9[53]+ quote+ _0x7ce9[54]}else {return quote+ _0x7ce9[49]+ _0xa8abx8+ _0x7ce9[61]+ _0xa8abx7+ _0x7ce9[53]+ quote+ _0x7ce9[54]};break;case _0x7ce9[43]:return _0x7ce9[49]+ _0xa8abx8+ _0x7ce9[61]+ _0xa8abx7+ _0x7ce9[53];break;case _0x7ce9[46]:_0xa8abx7= _0xa8abx7[_0x7ce9[56]](1,_0xa8abx7[_0x7ce9[55]]- 1);return _0x7ce9[49]+ _0xa8abx8+ _0x7ce9[62]+ _0xa8abx7+ _0x7ce9[63];break;case _0x7ce9[47]:return _0x7ce9[49]+ _0xa8abx8+ _0x7ce9[61]+ _0xa8abx7+ _0x7ce9[53];break;case _0x7ce9[48]:return _0x7ce9[49]+ _0xa8abx8+ _0x7ce9[61]+ _0xa8abx7+ _0x7ce9[53];break}})};MeteorToys[_0x7ce9[64]]= function(){if(ToyKit[_0x7ce9[3]](_0x7ce9[65])){ToyKit[_0x7ce9[4]](_0x7ce9[65],null)}else {window[_0x7ce9[8]][_0x7ce9[66]]()}};MeteorToys[_0x7ce9[67]]= function(){if( typeof METEORTOYS_DISABLE_LOGGING=== _0x7ce9[37]){return true}else {return false}};MeteorToys[_0x7ce9[68]]= function(_0xa8abx9){MeteorToys[_0x7ce9[4]](_0x7ce9[65],_0xa8abx9)};MeteorToys[_0x7ce9[69]]= ToyKitData;MeteorToysDict= MeteorToys;MeteorToys_JSON= MeteorToys
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/meteortoys_toykit/client/template.main.js                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //

Template.__checkName("MeteorToys");
Template["MeteorToys"] = new Template("Template.MeteorToys", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Meteor Toys Begin -->\n\t"), Blaze.If(function() {
    return Spacebars.call(view.lookup("MeteorToys"));
  }, function() {
    return [ "\n\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("MeteorToysCordova"));
    }, function() {
      return [ "\n\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("MeteorToys_Pro"));
      }, function() {
        return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("MeteorToysMobile")), "\n\t\t\t" ];
      }), "\n\t\t" ];
    }, function() {
      return [ " \n\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("MeteorToys_Pro"));
      }, function() {
        return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("MeteorToys_tooltip")), "\n\t\t\t\t", HTML.DIV({
          class: "MeteorToys_orbs MeteorToysReset"
        }, "\n\t\t\n\t\t\t\t\t", Blaze.Each(function() {
          return Spacebars.call(view.lookup("MeteorToy"));
        }, function() {
          return [ "\n\t\t\t\t\t\t", Blaze._TemplateWith(function() {
            return {
              template: Spacebars.call(view.lookup("."))
            };
          }, function() {
            return Spacebars.include(function() {
              return Spacebars.call(Template.__dynamic);
            });
          }), "\n\t\t\t\t\t" ];
        }), "\n\t\t\n\t\t\t\t\t", Blaze.Each(function() {
          return Spacebars.call(view.lookup("MeteorToy_addon"));
        }, function() {
          return [ "\n\t\t\t\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
            return {
              template: Spacebars.call(view.lookup("."))
            };
          }, function() {
            return Spacebars.include(function() {
              return Spacebars.call(Template.__dynamic);
            });
          }), "\n\t\t\t\n\t\t\t\t\t" ];
        }), "\n\t\t\n\t\t\t\t"), "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("MeteorToys_notifications")), "\n\t\t\t" ];
      }, function() {
        return [ "\n\t\t\t\t", HTML.DIV({
          class: "MeteorToys_orbs MeteorToysReset"
        }, "\n\t\t\t\t\t", Blaze._TemplateWith(function() {
          return {
            template: Spacebars.call(view.lookup("all"))
          };
        }, function() {
          return Spacebars.include(function() {
            return Spacebars.call(Template.__dynamic);
          });
        }), "\n\t\t\t\t\t", Blaze.Each(function() {
          return Spacebars.call(view.lookup("MeteorToy_addon"));
        }, function() {
          return [ "\n\t\t\t\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
            return {
              template: Spacebars.call(view.lookup("."))
            };
          }, function() {
            return Spacebars.include(function() {
              return Spacebars.call(Template.__dynamic);
            });
          }), "\n\t\t\t\n\t\t\t\t\t" ];
        }), "\n\t\t\t\t"), "\n\t\t\t" ];
      }), "\n\n\n\n\t\t\t", Blaze.Each(function() {
        return Spacebars.call(view.lookup("MeteorToysPackage"));
      }, function() {
        return [ "\n\t\t\t\t", Blaze._TemplateWith(function() {
          return {
            template: Spacebars.call(view.lookup("."))
          };
        }, function() {
          return Spacebars.include(function() {
            return Spacebars.call(Template.__dynamic);
          });
        }), "\n\t\t\t" ];
      }), "\n\n\t\t" ];
    }), "\n\t" ];
  }, function() {
    return [ "\n\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("MTtoggle"));
    }, function() {
      return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("MeteorToysToggle")), "\n\t\t" ];
    }), "\n\t" ];
  }), "\n\t\n\t", Spacebars.include(view.lookupTemplate("MeteorToys_notification_widget")), HTML.Raw("\n<!-- Meteor Toys End -->") ];
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/meteortoys_toykit/client/notifications/template.notifications.js                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //

Template.__checkName("MeteorToys_notifications");
Template["MeteorToys_notifications"] = new Template("Template.MeteorToys_notifications", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("notifications_exist"));
  }, function() {
    return [ "\n\t", HTML.DIV({
      id: "MeteorToys_notifications",
      class: "MeteorToys_notifications MeteorToys_hide_Notifications",
      oncontextmenu: '$(".MeteorToys_notification").addClass("MeteorToys_Notifier_hideAnimation"); window.setTimeout(function() {Package["meteortoys:toykit"].MeteorToysNotifications.remove({});}, 300); return false;'
    }, "\n\t\t", Blaze.Each(function() {
      return Spacebars.call(view.lookup("notifications"));
    }, function() {
      return [ "\n\t\t\t", Blaze._TemplateWith(function() {
        return {
          template: Spacebars.call(view.lookup("type"))
        };
      }, function() {
        return Spacebars.include(function() {
          return Spacebars.call(Template.__dynamic);
        });
      }), "\n\t\t" ];
    }), "\n\t"), "\n" ];
  });
}));

Template.__checkName("MeteorToys_notification_counter");
Template["MeteorToys_notification_counter"] = new Template("Template.MeteorToys_notification_counter", (function() {
  var view = this;
  return HTML.DIV({
    class: "MeteorToys_notification MeteorToys_notification_counter",
    id: function() {
      return [ "MeteorToys_", Spacebars.mustache(view.lookup("_id")) ];
    }
  }, "\n\t\t", HTML.DIV({
    class: "MeteorToys_notification_symbol"
  }, HTML.STRONG(Blaze.View("lookup:data", function() {
    return Spacebars.mustache(view.lookup("data"));
  }))), "\n\t\t", HTML.DIV({
    class: "MeteorToys_notification_text"
  }, Blaze.View("lookup:text", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("text")));
  })), "\n\t");
}));

Template.__checkName("MeteorToys_notification_text");
Template["MeteorToys_notification_text"] = new Template("Template.MeteorToys_notification_text", (function() {
  var view = this;
  return HTML.DIV({
    class: "MeteorToys_notification",
    id: function() {
      return [ "MeteorToys_", Spacebars.mustache(view.lookup("_id")) ];
    }
  }, HTML.Raw('\n\t\t<div class="MeteorToys_notification_symbol"><strong></strong></div>\n\t\t'), HTML.DIV({
    class: "MeteorToys_notification_text"
  }, Blaze.View("lookup:text", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("text")));
  })), "\n\t");
}));

Template.__checkName("MeteorToys_notification_data");
Template["MeteorToys_notification_data"] = new Template("Template.MeteorToys_notification_data", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "MeteorToys_notification ", Spacebars.mustache(view.lookup("expanded")) ];
    },
    id: function() {
      return [ "MeteorToys_", Spacebars.mustache(view.lookup("_id")) ];
    }
  }, HTML.Raw('\n\t\t<div class="MeteorToys_notification_symbol">\n\t\t\t<div class="MeteorToys_notification_triangle"></div>\n\t\t</div>\n\t\t'), HTML.DIV({
    class: "MeteorToys_notification_text"
  }, Blaze.View("lookup:text", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("text")));
  })), "\n\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("lazyload"));
  }, function() {
    return [ HTML.DIV({
      class: "MeteorToys_notification_data"
    }, "\n", HTML.PRE(Blaze.View("lookup:data", function() {
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("data")));
    })), "\n\t\t"), "\n\t\t" ];
  }), "\n\t");
}));

Template.__checkName("MeteorToys_notification_widget");
Template["MeteorToys_notification_widget"] = new Template("Template.MeteorToys_notification_widget", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("count"));
  }, function() {
    return [ "\n\t", HTML.DIV({
      class: "MeteorToys_notification_widget"
    }, "\n\t\t", Blaze.View("lookup:count", function() {
      return Spacebars.mustache(view.lookup("count"));
    }), "\n\t"), "\n\t" ];
  });
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/meteortoys_toykit/client/welcome/template.welcome.js                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //

Template.__checkName("MeteorToys_basic");
Template["MeteorToys_basic"] = new Template("Template.MeteorToys_basic", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("MeteorToys_basic")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {
      return [ "\n\t\t", HTML.DIV({
        class: "MeteorToys_Method_header"
      }, "\n\t\t\t", HTML.DIV({
        class: "MeteorToys_name"
      }, HTML.STRONG("Meteor Toys Pro")), "\n\t\t"), "\n\t\t", HTML.DIV({
        style: "padding-left: 8px"
      }, "\n\n\t\t", HTML.FORM("\n\t\t\t", HTML.DIV({
        class: "MeteorToys_row"
      }, "\n\t\t\t\t", HTML.INPUT({
        id: "meteortoyscadf"
      }), "\n\t\t\t\t", HTML.DIV({
        class: "MeteorToys_row_name"
      }, "Email"), "\n\t\t\t"), "\n\n\t\t\t", HTML.DIV({
        class: "MeteorToys_row"
      }, "\n\t\t\t\t", HTML.INPUT({
        id: "meteortoyspass"
      }), "\n\t\t\t\t", HTML.DIV({
        class: "MeteorToys_row_name"
      }, "Key"), "\n\t\t\t"), "\n\n\t\t\t", HTML.INPUT({
        type: "submit",
        value: "Activate",
        style: "margin-top: -4px; padding-right: 8px; margin-left: -8px; border-right: 8px sold transparent;"
      }), "\n\n\t\t\t", HTML.Comment(' <div style="position: absolute; bottom: 14px; left: 12px"> '), "\n\t\t\t", HTML.DIV({
        style: "height: 156px"
      }), "\n\t\t\tExperience the next level", HTML.BR(), " of Mongol and JetSetter. ", HTML.BR(), "\n\t\t\t", HTML.A({
        href: "http://bit.ly/1FqdsPM"
      }, "Upgrade to Meteor Toys Pro ", HTML.CharRef({
        html: "&raquo;",
        str: "»"
      })), "\n\t\t\t", HTML.Comment(" </div> "), "\n\n\t\t"), "\n\t\t"), "\n\t" ];
    });
  });
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/meteortoys_toykit/client/orb/template.orb.js                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //

Template.__checkName("MeteorToy");
Template["MeteorToy"] = new Template("Template.MeteorToy", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "MeteorToys_orb MeteorToys_hide_Orb ", Spacebars.mustache(view.lookup("type")), " ", Spacebars.mustache(view.lookup("state")) ];
    },
    id: function() {
      return Spacebars.mustache(view.lookup("name"));
    },
    oncontextmenu: "Package['meteortoys:toykit'].MeteorToys.closeToy();return false;"
  }, "\n\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("empty"));
  }, function() {
    return [ "\n\t\t\t", Blaze._InOuterTemplateScope(view, function() {
      return Spacebars.include(function() {
        return Spacebars.call(view.templateContentBlock);
      });
    }), "\n\t\t" ];
  }, function() {
    return [ "\n\t\t\t", HTML.DIV({
      class: "MeteorToys_icon"
    }), "\n\t\t\t", HTML.DIV({
      class: "MeteorToys_orb_wrapper"
    }, "\n\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("load"));
    }, function() {
      return [ "\n\t\t\t\t\t", Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      }), "\n\t\t\t\t" ];
    }), "\n\t\t\t"), "\n\t\t" ];
  }), "\n\t");
}));

Template.__checkName("MeteorToys_tooltip");
Template["MeteorToys_tooltip"] = new Template("Template.MeteorToys_tooltip", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("display"));
  }, function() {
    return [ "\n\t", HTML.DIV({
      class: "MeteorToys_tooltip_wrapper MeteorToys_notification_fadeInUp",
      style: function() {
        return [ "left: ", Spacebars.mustache(view.lookup("position")), "px;" ];
      }
    }, "\n\t\t", HTML.DIV({
      class: "MeteorToys_tooltip "
    }, "\n\t\t\t", HTML.DIV({
      class: "MeteorToys_tooltip_arrow1"
    }), "\n\t\t\t", HTML.DIV({
      class: "MeteorToys_tooltip_arrow2"
    }), "\n\t\t\t", Blaze.View("lookup:name", function() {
      return Spacebars.mustache(view.lookup("name"));
    }), "\n\t\t"), "\n\t"), "\n\t" ];
  });
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/meteortoys_toykit/client/main.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _0x604a=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4E\x6F\x74\x69\x66\x79","\x63\x6F\x75\x6E\x74\x65\x72","\x73\x65\x74","\x64\x69\x73\x70\x6C\x61\x79","\x67\x65\x74","\x6C\x6F\x67","\x75\x70\x64\x61\x74\x65","\x69\x6E\x73\x65\x72\x74","\x66\x69\x6E\x64\x4F\x6E\x65","\x5F\x69\x64","\x69\x6E\x63\x72\x65\x6D\x65\x6E\x74\x43\x6F\x75\x6E\x74\x65\x72","\x74\x65\x78\x74","\x75\x6E\x72\x65\x61\x64","\x74\x79\x70\x65","\x64\x61\x74\x61","\x63\x75\x72\x72\x65\x6E\x74","\x66\x6F\x63\x75\x73","\x66\x6F\x63\x75\x73\x32","\x65\x71\x75\x61\x6C\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4E\x6F\x74\x69\x66\x69\x65\x72\x5F\x68\x69\x64\x65\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E","\x61\x64\x64\x43\x6C\x61\x73\x73","\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F","\x72\x65\x6D\x6F\x76\x65","\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74","\x65\x78\x70\x61\x6E\x64","\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E","\x61\x75\x74\x6F\x72\x75\x6E","\x66\x69\x6E\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F","\x68\x65\x6C\x70\x65\x72\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73","\x65\x78\x70\x61\x6E\x64\x4F\x72\x52\x65\x6D\x6F\x76\x65","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x73\x68\x72\x69\x6E\x6B","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x64\x61\x74\x61\x5F\x65\x78\x70\x61\x6E\x64\x65\x64","\x63\x6F\x6C\x6F\x72\x69\x7A\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x64\x61\x74\x61","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x77\x69\x64\x67\x65\x74","\x6B\x65\x79\x43\x6F\x64\x65","\x63\x74\x72\x6C\x4B\x65\x79","\x63\x6C\x65\x61\x72\x41\x6C\x6C\x44\x61\x74\x61","\x6B\x65\x79\x64\x6F\x77\x6E","\x6E\x61\x6D\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x61\x75\x74\x6F\x70\x75\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x65\x6C\x6F\x61\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62\x5F\x61\x63\x74\x69\x76\x65","\x68\x61\x73\x43\x6C\x61\x73\x73","\x23","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79","\x62\x75\x74\x74\x6F\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x62\x75\x74\x74\x6F\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62\x5F\x63\x6F\x6E\x64\x65\x6E\x73\x65\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x65\x6D\x61\x69\x6C","\x63\x6F\x72\x65","\x72\x65\x67\x69\x73\x74\x72\x79","\x61\x64\x64\x6F\x6E","\x55\x4E\x4B\x4E\x4F\x57\x4E","\x6C\x65\x66\x74","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x74\x6F\x6F\x6C\x74\x69\x70","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73","\x4E\x6F\x74\x65","\x54\x6F\x20\x75\x73\x65\x20\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73\x2C\x20\x79\x6F\x75\x20\x6D\x75\x73\x74\x20\x69\x6E\x73\x74\x61\x6C\x6C\x20\x74\x68\x65\x20\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73\x20\x70\x61\x63\x6B\x61\x67\x65\x2E","\x46\x6F\x72\x20\x74\x68\x65\x20\x77\x68\x79\x20\x61\x6E\x64\x20\x68\x6F\x77\x2C\x20\x67\x6F\x20\x74\x6F\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x2F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73","\x62\x6F\x64\x79","\x72\x65\x6E\x64\x65\x72","\x64\x65\x66\x65\x72","\x63\x68\x65\x63\x6B\x41\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x69\x6F\x6E","\x73\x74\x61\x72\x74\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x62\x69\x6E\x64\x48\x6F\x74\x4B\x65\x79\x73","\x67\x72\x61\x62\x54\x6F\x79\x73","\x73\x74\x61\x72\x74\x75\x70","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x50\x72\x6F","\x61\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x65\x64","\x72\x65\x67\x69\x73\x74\x65\x72\x48\x65\x6C\x70\x65\x72","\x6B\x65\x79\x73","\x6D\x73\x61\x76\x69\x6E\x3A\x6D\x6F\x6E\x67\x6F\x6C","\x4D\x6F\x6E\x67\x6F\x6C","\x70\x75\x73\x68","\x6D\x73\x61\x76\x69\x6E\x3A\x6A\x65\x74\x73\x65\x74\x74\x65\x72","\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x61\x6C\x6C\x74\x68\x69\x6E\x67\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x62\x61\x73\x69\x63","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x6D\x6F\x62\x69\x6C\x65","\x6F\x62\x6A\x65\x63\x74","\x70\x6C\x61\x74\x66\x6F\x72\x6D","\x69\x50\x68\x6F\x6E\x65","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x67\x67\x6C\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x63\x6C\x65\x61\x72","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x61\x73\x73\x77\x6F\x72\x64","\x67\x65\x74\x49\x74\x65\x6D","\x73\x65\x74\x49\x74\x65\x6D","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x65\x6D\x6F\x76\x65","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x20\x72\x65\x6D\x6F\x76\x69\x6E\x67\x20\x74\x68\x65\x20\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x6B\x65\x79\x73\x2E","\x72\x65\x6D\x6F\x76\x65\x49\x74\x65\x6D","\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x72\x65\x6D\x6F\x76\x65\x64\x20\x66\x72\x6F\x6D\x20\x74\x68\x69\x73\x20\x62\x72\x6F\x77\x73\x65\x72\x2E\x20\x42\x65\x20\x73\x75\x72\x65\x20\x74\x6F\x20\x72\x75\x6E\x20\x74\x68\x69\x73\x20\x66\x6F\x72\x20\x65\x61\x63\x68\x20\x62\x72\x6F\x77\x73\x65\x72\x20\x79\x6F\x75\x20\x75\x73\x65\x20\x66\x6F\x72\x20\x64\x65\x62\x75\x67\x67\x69\x6E\x67\x2E","\x72\x65\x6C\x6F\x61\x64","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x63\x61\x6C\x6C","\x6F\x70\x65\x6E","\x63\x6C\x6F\x73\x65","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x76\x61\x6C","\x23\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x63\x61\x64\x66","\x23\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x70\x61\x73\x73","","\x50\x6C\x65\x61\x73\x65\x20\x65\x6E\x74\x65\x72\x20\x61\x6E\x20\x65\x6D\x61\x69\x6C","\x50\x6C\x65\x61\x73\x65\x20\x65\x6E\x74\x65\x72\x20\x61\x20\x6C\x69\x63\x65\x6E\x73\x65","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x76\x65\x72\x69\x66\x79\x44\x6F\x63","\x54\x68\x61\x6E\x6B\x73\x20\x66\x6F\x72\x20\x62\x75\x79\x69\x6E\x67\x20\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x21","\x49\x6E\x76\x61\x6C\x69\x64\x20\x43\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73\x2E\x20\x50\x6C\x65\x61\x73\x65\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6E\x2E"];MeteorToysNotifications=  new Mongo.Collection(null);MeteorToysNotifyDict=  new ReactiveDict(_0x604a[0]);MeteorToysNotifyDict[_0x604a[2]](_0x604a[1],0);Note= function(_0xa577x1,_0xa577x2){if(_0xa577x2=== _0x604a[1]){Counter(_0xa577x1)}else {Data(_0xa577x1,_0xa577x2)};if(ToyKit[_0x604a[4]](_0x604a[3])=== false){current= MeteorToysNotifyDict[_0x604a[4]](_0x604a[1]);MeteorToysNotifyDict[_0x604a[4]](_0x604a[1],current+ 1);console[_0x604a[5]](MeteorToysNotifyDict[_0x604a[4]](_0x604a[1]))}};Counter= function(_0xa577x1){var _0xa577x3;var _0xa577x4=function(){MeteorToysNotifications[_0x604a[6]]({type:_0x604a[1],text:_0xa577x1},{$inc:{data:+1}})};var _0xa577x5=function(){var _0xa577x6=MeteorToysNotifications[_0x604a[7]]({type:_0x604a[1],data:1,text:_0xa577x1,unread:true});_0xa577x3= _0xa577x6};var _0xa577x2=MeteorToysNotifications[_0x604a[8]]({"\x74\x79\x70\x65":_0x604a[1],"\x74\x65\x78\x74":_0xa577x1});if(_0xa577x2){_0xa577x4();_0xa577x3= _0xa577x2[_0x604a[9]]}else {_0xa577x5()};NotifyInternal[_0x604a[10]]()};Data= function(_0xa577x1,_0xa577x2){item= {};item[_0x604a[11]]= _0xa577x1;item[_0x604a[12]]= true;if(_0xa577x2){item[_0x604a[13]]= _0x604a[14];item[_0x604a[14]]= _0xa577x2}else {item[_0x604a[13]]= _0x604a[11]};var _0xa577x7=MeteorToysNotifications[_0x604a[7]](item);NotifyInternal[_0x604a[10]]()};NotifyClose= function(){MeteorToysNotifyDict[_0x604a[2]](_0x604a[15],null);MeteorToysNotifyDict[_0x604a[2]](_0x604a[16],null);MeteorToysNotifyDict[_0x604a[2]](_0x604a[17],null)};NotifyInternal= {"\x65\x78\x70\x61\x6E\x64":function(){MeteorToysNotifyDict[_0x604a[2]](_0x604a[15],self._id)},"\x72\x65\x6D\x6F\x76\x65":function(){if(MeteorToysNotifyDict[_0x604a[18]](_0x604a[15],self._id)){MeteorToysNotifyDict[_0x604a[2]](_0x604a[15],false)};$(_0x604a[21]+ self[_0x604a[9]])[_0x604a[20]](_0x604a[19]);window[_0x604a[23]](function(){MeteorToysNotifications[_0x604a[22]](self._id)},300)},"\x65\x78\x70\x61\x6E\x64\x4F\x72\x52\x65\x6D\x6F\x76\x65":function(){if(MeteorToysNotifyDict[_0x604a[18]](_0x604a[15],self._id)){NotifyInternal[_0x604a[22]](self._id)}else {NotifyInternal[_0x604a[24]]()}},"\x73\x68\x72\x69\x6E\x6B":function(){MeteorToysNotifyDict[_0x604a[2]](_0x604a[15],false)},"\x63\x6C\x65\x61\x72\x41\x6C\x6C\x44\x61\x74\x61":function(){$(_0x604a[25])[_0x604a[20]](_0x604a[19]);window[_0x604a[23]](function(){MeteorToysNotifications[_0x604a[22]]({})},300)},"\x69\x6E\x63\x72\x65\x6D\x65\x6E\x74\x43\x6F\x75\x6E\x74\x65\x72":function(){if(ToyKit[_0x604a[4]](_0x604a[3])){return};current= MeteorToysNotifyDict[_0x604a[4]](_0x604a[1]);if(current){MeteorToysNotifyDict[_0x604a[2]](_0x604a[1],current+ 1)}else {MeteorToysNotifyDict[_0x604a[2]](_0x604a[1],1)}}};Tracker[_0x604a[26]](function(){if(ToyKit[_0x604a[4]](_0x604a[3])){MeteorToysNotifyDict[_0x604a[2]](_0x604a[1],0)}});Template[_0x604a[30]][_0x604a[29]]({"\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73\x5F\x65\x78\x69\x73\x74":function(){if(MeteorToysNotifications[_0x604a[8]]()){return true}},"\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73":function(){return MeteorToysNotifications[_0x604a[27]]()},"\x74\x79\x70\x65":function(){return _0x604a[28]+ this[_0x604a[13]]}});Template[_0x604a[30]][_0x604a[34]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E":function(){self= this;if(self[_0x604a[13]]=== _0x604a[14]){NotifyInternal[_0x604a[31]]()}else {NotifyInternal[_0x604a[22]]()}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x73\x79\x6D\x62\x6F\x6C":function(_0xa577x8){_0xa577x8[_0x604a[32]]();self= this;if(MeteorToysNotifyDict[_0x604a[18]](_0x604a[15],this._id)){NotifyInternal[_0x604a[33]]()}else {if(self[_0x604a[13]]=== _0x604a[14]){NotifyInternal[_0x604a[24]]()}}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x64\x61\x74\x61":function(_0xa577x8){_0xa577x8[_0x604a[32]]()},"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E":function(){MeteorToysNotifyDict[_0x604a[2]](_0x604a[16],this._id)},"\x6D\x6F\x75\x73\x65\x6F\x75\x74\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E":function(){MeteorToysNotifyDict[_0x604a[2]](_0x604a[16],false);current= MeteorToysNotifyDict[_0x604a[4]](_0x604a[15]);MeteorToysNotifyDict[_0x604a[2]](_0x604a[17],current)}});Template[_0x604a[37]][_0x604a[29]]({"\x65\x78\x70\x61\x6E\x64\x65\x64":function(){if(MeteorToysNotifyDict[_0x604a[18]](_0x604a[15],this._id)){return _0x604a[35]}else {return false}},"\x6C\x61\x7A\x79\x6C\x6F\x61\x64":function(){if(MeteorToysNotifyDict[_0x604a[18]](_0x604a[15],this._id)){return true};if(MeteorToysNotifyDict[_0x604a[18]](_0x604a[16],this._id)){return true};if(MeteorToysNotifyDict[_0x604a[18]](_0x604a[17],this._id)){return true}},"\x64\x61\x74\x61":function(){return MeteorToys[_0x604a[36]](this[_0x604a[14]])}});Template[_0x604a[38]][_0x604a[29]]({"\x63\x6F\x75\x6E\x74":function(){return MeteorToysNotifyDict[_0x604a[4]](_0x604a[1])}});Template[_0x604a[38]][_0x604a[34]]({"\x63\x6C\x69\x63\x6B":function(){ToyKit[_0x604a[2]](_0x604a[3],true)}});$(document)[_0x604a[42]](function(_0xa577x8){if(_0xa577x8[_0x604a[39]]=== 67&& _0xa577x8[_0x604a[40]]){NotifyInternal[_0x604a[41]]();MeteorToysNotifyDict[_0x604a[2]](_0x604a[15])}});Template[_0x604a[49]][_0x604a[34]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62":function(){if(this[_0x604a[43]]=== _0x604a[44]){return false};if(this[_0x604a[43]]=== _0x604a[45]){return false};if(ToyKit[_0x604a[4]](_0x604a[15])=== this[_0x604a[43]]){ToyKit[_0x604a[2]](_0x604a[15],false)}else {ToyKit[_0x604a[2]](_0x604a[15],this[_0x604a[43]])}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62\x5F\x77\x72\x61\x70\x70\x65\x72":function(_0xa577x9,_0xa577xa){if($(_0x604a[48]+ this[_0x604a[43]])[_0x604a[47]](_0x604a[46])){_0xa577x9[_0x604a[32]]()}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x61\x6D\x65":function(){ToyKit[_0x604a[2]](_0x604a[15],false)},"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62":function(){ToyKit[_0x604a[2]](_0x604a[16],this[_0x604a[43]])},"\x6D\x6F\x75\x73\x65\x6F\x75\x74\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62":function(){ToyKit[_0x604a[2]](_0x604a[16])}});Template[_0x604a[49]][_0x604a[29]]({type:function(){if(this[_0x604a[13]]=== _0x604a[50]){return _0x604a[51]}},state:function(){if(ToyKit[_0x604a[18]](_0x604a[15],this[_0x604a[43]])){return _0x604a[46]}else {return _0x604a[52]}},load:function(){if(this[_0x604a[43]]=== _0x604a[53]){return true};if(ToyKit[_0x604a[18]](_0x604a[15],this[_0x604a[43]])){return true};if(ToyKit[_0x604a[18]](_0x604a[16],this[_0x604a[43]])){return true}},tmpName:function(){}});Template[_0x604a[60]][_0x604a[29]]({display:function(){var _0xa577xb=ToyKit[_0x604a[4]](_0x604a[16]);if(ToyKit[_0x604a[18]](_0x604a[15],_0xa577xb)){return false};if(ToyKit[_0x604a[4]](_0x604a[16])){return true}},name:function(){var _0xa577xb=ToyKit[_0x604a[4]](_0x604a[16]);if(_0xa577xb){if(ToyKit[_0x604a[4]](_0x604a[55])[_0x604a[54]][_0xa577xb]){return ToyKit[_0x604a[4]](_0x604a[55])[_0x604a[54]][_0xa577xb][_0x604a[43]]}else {if(ToyKit[_0x604a[4]](_0x604a[55])[_0x604a[56]][_0xa577xb]){return ToyKit[_0x604a[4]](_0x604a[55])[_0x604a[56]][_0xa577xb][_0x604a[43]]}else {return _0x604a[57]}}}},position:function(){name= ToyKit[_0x604a[4]](_0x604a[16]);pixels= $(_0x604a[48]+ name)[_0x604a[59]]()[_0x604a[58]];current= ToyKit[_0x604a[4]](_0x604a[16]);position= $(_0x604a[48]+ name)[_0x604a[59]]()[_0x604a[58]]+ 7,coordinate= (200- 46)*  -0.5,pixels= coordinate+ position;return pixels}});if(Package[_0x604a[61]]){}else {window[_0x604a[62]]= function(){console[_0x604a[5]](_0x604a[63]);console[_0x604a[5]](_0x604a[64])}};Meteor[_0x604a[72]](function(){Meteor[_0x604a[67]](function(){Blaze[_0x604a[66]](Template.MeteorToys,document[_0x604a[65]])});ToyKit[_0x604a[68]]();ToyKit[_0x604a[69]]();ToyKit[_0x604a[2]](_0x604a[16],null);ToyKit[_0x604a[70]]();ToyKit[_0x604a[71]]()});UI[_0x604a[75]](_0x604a[73],function(_0xa577xc){return ToyKit[_0x604a[4]](_0x604a[74])});Template[_0x604a[89]][_0x604a[29]]({MeteorToys:function(){return ToyKit[_0x604a[4]](_0x604a[3])},MeteorToy:function(){data= ToyKit[_0x604a[4]](_0x604a[55])[_0x604a[54]];keys= Object[_0x604a[76]](data);return keys},MeteorToy_addon:function(){data= ToyKit[_0x604a[4]](_0x604a[55])[_0x604a[56]];keys= Object[_0x604a[76]](data);return keys},MeteorToysPackage:function(){temp= [];if(Package[_0x604a[77]]){temp[_0x604a[79]](_0x604a[78])};if(Package[_0x604a[80]]){temp[_0x604a[79]](_0x604a[81])};if(ToyKit[_0x604a[4]](_0x604a[74])){temp[_0x604a[79]](_0x604a[30])};return temp},all:function(){if(Package[_0x604a[82]]){return _0x604a[83]}},MeteorToysCordova:function(){if(Package[_0x604a[84]]){if( typeof cordova=== _0x604a[85]|| navigator[_0x604a[86]]=== _0x604a[87]){return true}}},MTtoggle:function(){if(Package[_0x604a[88]]){return true}}});window[_0x604a[89]]= {};window[_0x604a[89]][_0x604a[90]]= function(){password= localStorage[_0x604a[92]](_0x604a[91]);email= localStorage[_0x604a[92]](_0x604a[53]);localStorage[_0x604a[90]]();localStorage[_0x604a[93]](_0x604a[91],password);localStorage[_0x604a[93]](_0x604a[53],email)};window[_0x604a[89]][_0x604a[22]]= function(){Meteor[_0x604a[100]](_0x604a[94],function(_0xa577x8,_0xa577xd){if(_0xa577x8){alert(_0x604a[95])}else {localStorage[_0x604a[96]](_0x604a[91]);localStorage[_0x604a[96]](_0x604a[53]);alert(_0x604a[97]);window[_0x604a[99]][_0x604a[98]]()}})};window[_0x604a[89]][_0x604a[101]]= function(){ToyKit[_0x604a[2]](_0x604a[3],true);ToyKit[_0x604a[2]](_0x604a[16],null)};window[_0x604a[89]][_0x604a[102]]= function(){ToyKit[_0x604a[2]](_0x604a[3],false);ToyKit[_0x604a[2]](_0x604a[16],null)};Template[_0x604a[83]][_0x604a[34]]({"\x73\x75\x62\x6D\x69\x74":function(_0xa577x8,_0xa577xa){_0xa577x8[_0x604a[103]]();em= $(_0x604a[105])[_0x604a[104]](),pw= $(_0x604a[106])[_0x604a[104]]();if(em=== _0x604a[107]){alert(_0x604a[108]);return false};if(pw=== _0x604a[107]){alert(_0x604a[109]);return false};Meteor[_0x604a[100]](_0x604a[110],em,pw,function(_0xa577x8,_0xa577xd){if(!_0xa577x8){Meteor[_0x604a[100]](_0x604a[89],function(_0xa577x8,_0xa577xd){ToyKit[_0x604a[2]](_0x604a[74],_0xa577xd)});alert(_0x604a[111]);localStorage[_0x604a[93]](_0x604a[53],em);localStorage[_0x604a[93]](_0x604a[91],pw)}else {alert(_0x604a[112])}})}})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("meteortoys:toykit", {
  MeteorToysData: MeteorToysData,
  MeteorToys: MeteorToys,
  ToyKit: ToyKit,
  Note: Note,
  MeteorToys_JSON: MeteorToys_JSON,
  MeteorToysDict: MeteorToysDict
});

})();
