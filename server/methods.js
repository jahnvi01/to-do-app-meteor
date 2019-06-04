import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {Resolutions} from '../imports/api/resolutions';
// var mysql=require('mysql');
// var express = require('express');


Meteor.startup(() => {
  
});



Meteor.methods({
  'deletetext'(id){
Resolutions.remove(id);
return "succesfully deleted";
  },

  'addtext'(text) {
   
    console.log("meteor");
    Resolutions.insert({name:text,done:false});
    return text;
  }
}) 