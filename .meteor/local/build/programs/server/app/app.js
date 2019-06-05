var require = meteorInstall({"imports":{"api":{"resolutions.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// imports/api/resolutions.js                                        //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.export({
  Resolutions: () => Resolutions
});
const Resolutions = new Mongo.Collection("resolution");
///////////////////////////////////////////////////////////////////////

}}},"server":{"methods.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/methods.js                                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 1);
let Resolutions;
module.link("../imports/api/resolutions", {
  Resolutions(v) {
    Resolutions = v;
  }

}, 2);
// var mysql=require('mysql');
// var express = require('express');
Meteor.startup(() => {});
Meteor.methods({
  'deletetext'(id) {
    Resolutions.remove(id);
    return "succesfully deleted";
  },

  'addtext'(text) {
    console.log("meteor");
    Resolutions.insert({
      name: text,
      done: false
    });
    return text;
  }

});
///////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.link("./methods");
let Resolutions;
module.link("../imports/api/resolutions", {
  Resolutions(v) {
    Resolutions = v;
  }

}, 1);
Meteor.startup(() => {});
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvcmVzb2x1dGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnQiLCJSZXNvbHV0aW9ucyIsIk1vbmdvIiwiQ29sbGVjdGlvbiIsIk1ldGVvciIsImxpbmsiLCJ2Iiwic3RhcnR1cCIsIm1ldGhvZHMiLCJpZCIsInJlbW92ZSIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiaW5zZXJ0IiwibmFtZSIsImRvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUNDLGFBQVcsRUFBQyxNQUFJQTtBQUFqQixDQUFkO0FBQU8sTUFBTUEsV0FBVyxHQUFDLElBQUlDLEtBQUssQ0FBQ0MsVUFBVixDQUFxQixZQUFyQixDQUFsQixDOzs7Ozs7Ozs7OztBQ0FQLElBQUlDLE1BQUo7QUFBV0wsTUFBTSxDQUFDTSxJQUFQLENBQVksZUFBWixFQUE0QjtBQUFDRCxRQUFNLENBQUNFLENBQUQsRUFBRztBQUFDRixVQUFNLEdBQUNFLENBQVA7QUFBUzs7QUFBcEIsQ0FBNUIsRUFBa0QsQ0FBbEQ7QUFBcUQsSUFBSUosS0FBSjtBQUFVSCxNQUFNLENBQUNNLElBQVAsQ0FBWSxjQUFaLEVBQTJCO0FBQUNILE9BQUssQ0FBQ0ksQ0FBRCxFQUFHO0FBQUNKLFNBQUssR0FBQ0ksQ0FBTjtBQUFROztBQUFsQixDQUEzQixFQUErQyxDQUEvQztBQUFrRCxJQUFJTCxXQUFKO0FBQWdCRixNQUFNLENBQUNNLElBQVAsQ0FBWSw0QkFBWixFQUF5QztBQUFDSixhQUFXLENBQUNLLENBQUQsRUFBRztBQUFDTCxlQUFXLEdBQUNLLENBQVo7QUFBYzs7QUFBOUIsQ0FBekMsRUFBeUUsQ0FBekU7QUFHNUk7QUFDQTtBQUdBRixNQUFNLENBQUNHLE9BQVAsQ0FBZSxNQUFNLENBRXBCLENBRkQ7QUFNQUgsTUFBTSxDQUFDSSxPQUFQLENBQWU7QUFDYixlQUFhQyxFQUFiLEVBQWdCO0FBQ2xCUixlQUFXLENBQUNTLE1BQVosQ0FBbUJELEVBQW5CO0FBQ0EsV0FBTyxxQkFBUDtBQUNHLEdBSlk7O0FBTWIsWUFBVUUsSUFBVixFQUFnQjtBQUVkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FaLGVBQVcsQ0FBQ2EsTUFBWixDQUFtQjtBQUFDQyxVQUFJLEVBQUNKLElBQU47QUFBV0ssVUFBSSxFQUFDO0FBQWhCLEtBQW5CO0FBQ0EsV0FBT0wsSUFBUDtBQUNEOztBQVhZLENBQWYsRTs7Ozs7Ozs7Ozs7QUNiQSxJQUFJUCxNQUFKO0FBQVdMLE1BQU0sQ0FBQ00sSUFBUCxDQUFZLGVBQVosRUFBNEI7QUFBQ0QsUUFBTSxDQUFDRSxDQUFELEVBQUc7QUFBQ0YsVUFBTSxHQUFDRSxDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBQXFEUCxNQUFNLENBQUNNLElBQVAsQ0FBWSxXQUFaO0FBQXlCLElBQUlKLFdBQUo7QUFBZ0JGLE1BQU0sQ0FBQ00sSUFBUCxDQUFZLDRCQUFaLEVBQXlDO0FBQUNKLGFBQVcsQ0FBQ0ssQ0FBRCxFQUFHO0FBQUNMLGVBQVcsR0FBQ0ssQ0FBWjtBQUFjOztBQUE5QixDQUF6QyxFQUF5RSxDQUF6RTtBQUd6R0YsTUFBTSxDQUFDRyxPQUFQLENBQWUsTUFBTSxDQUdwQixDQUhELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBSZXNvbHV0aW9ucz1uZXcgTW9uZ28uQ29sbGVjdGlvbihcInJlc29sdXRpb25cIik7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbmltcG9ydCB7UmVzb2x1dGlvbnN9IGZyb20gJy4uL2ltcG9ydHMvYXBpL3Jlc29sdXRpb25zJztcbi8vIHZhciBteXNxbD1yZXF1aXJlKCdteXNxbCcpO1xuLy8gdmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5cblxuTWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuICBcbn0pO1xuXG5cblxuTWV0ZW9yLm1ldGhvZHMoe1xuICAnZGVsZXRldGV4dCcoaWQpe1xuUmVzb2x1dGlvbnMucmVtb3ZlKGlkKTtcbnJldHVybiBcInN1Y2Nlc2Z1bGx5IGRlbGV0ZWRcIjtcbiAgfSxcblxuICAnYWRkdGV4dCcodGV4dCkge1xuICAgXG4gICAgY29uc29sZS5sb2coXCJtZXRlb3JcIik7XG4gICAgUmVzb2x1dGlvbnMuaW5zZXJ0KHtuYW1lOnRleHQsZG9uZTpmYWxzZX0pO1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG59KSAiLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCAnLi9tZXRob2RzJztcbmltcG9ydCB7UmVzb2x1dGlvbnN9IGZyb20gJy4uL2ltcG9ydHMvYXBpL3Jlc29sdXRpb25zJztcbk1ldGVvci5zdGFydHVwKCgpID0+IHtcbiAgIFxuXG59KTtcblxuIl19
