import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {Resolutions} from '../imports/api/resolutions';
// var mysql=require('mysql');
// var express = require('express');


Meteor.startup(() => {
  
});
///use function() not es6 arrow function coz this.userid is not allowed there
Meteor.publish('resolutions',function(){
 var userId= this.userId;
  return Resolutions.find({userId:userId});

});
Meteor.methods({
  'deletetext'(id){
Resolutions.remove(id);
return "succesfully deleted";
  },

  'addtext'(text,userId) {
   
    console.log("meteor");
    Resolutions.insert({name:text,userId:userId,done:false});
    return text;
  }
}) 
