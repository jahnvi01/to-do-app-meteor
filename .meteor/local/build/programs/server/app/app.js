var require = meteorInstall({"imports":{"api":{"resolutions.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// imports/api/resolutions.js                                                                           //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
module.export({
  Resolutions: () => Resolutions
});
const Resolutions = new Mongo.Collection("resolution");
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"methods.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// server/methods.js                                                                                    //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
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
Meteor.startup(() => {}); ///use function() not es6 arrow function coz this.userid is not allowed there

Meteor.publish('resolutions', function () {
  var userId = this.userId;
  return Resolutions.find({
    userId: userId
  });
});
Meteor.methods({
  'deletetext'(id) {
    Resolutions.remove(id);
    return "succesfully deleted";
  },

  'addtext'(text, userId) {
    console.log("meteor");
    Resolutions.insert({
      name: text,
      userId: userId,
      done: false
    });
    return text;
  }

});
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// server/main.js                                                                                       //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvcmVzb2x1dGlvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnQiLCJSZXNvbHV0aW9ucyIsIk1vbmdvIiwiQ29sbGVjdGlvbiIsIk1ldGVvciIsImxpbmsiLCJ2Iiwic3RhcnR1cCIsInB1Ymxpc2giLCJ1c2VySWQiLCJmaW5kIiwibWV0aG9kcyIsImlkIiwicmVtb3ZlIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJpbnNlcnQiLCJuYW1lIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsYUFBVyxFQUFDLE1BQUlBO0FBQWpCLENBQWQ7QUFDTyxNQUFNQSxXQUFXLEdBQUMsSUFBSUMsS0FBSyxDQUFDQyxVQUFWLENBQXFCLFlBQXJCLENBQWxCLEM7Ozs7Ozs7Ozs7O0FDRFAsSUFBSUMsTUFBSjtBQUFXTCxNQUFNLENBQUNNLElBQVAsQ0FBWSxlQUFaLEVBQTRCO0FBQUNELFFBQU0sQ0FBQ0UsQ0FBRCxFQUFHO0FBQUNGLFVBQU0sR0FBQ0UsQ0FBUDtBQUFTOztBQUFwQixDQUE1QixFQUFrRCxDQUFsRDtBQUFxRCxJQUFJSixLQUFKO0FBQVVILE1BQU0sQ0FBQ00sSUFBUCxDQUFZLGNBQVosRUFBMkI7QUFBQ0gsT0FBSyxDQUFDSSxDQUFELEVBQUc7QUFBQ0osU0FBSyxHQUFDSSxDQUFOO0FBQVE7O0FBQWxCLENBQTNCLEVBQStDLENBQS9DO0FBQWtELElBQUlMLFdBQUo7QUFBZ0JGLE1BQU0sQ0FBQ00sSUFBUCxDQUFZLDRCQUFaLEVBQXlDO0FBQUNKLGFBQVcsQ0FBQ0ssQ0FBRCxFQUFHO0FBQUNMLGVBQVcsR0FBQ0ssQ0FBWjtBQUFjOztBQUE5QixDQUF6QyxFQUF5RSxDQUF6RTtBQUc1STtBQUNBO0FBR0FGLE1BQU0sQ0FBQ0csT0FBUCxDQUFlLE1BQU0sQ0FFcEIsQ0FGRCxFLENBR0E7O0FBQ0FILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLGFBQWYsRUFBNkIsWUFBVTtBQUN0QyxNQUFJQyxNQUFNLEdBQUUsS0FBS0EsTUFBakI7QUFDQyxTQUFPUixXQUFXLENBQUNTLElBQVosQ0FBaUI7QUFBQ0QsVUFBTSxFQUFDQTtBQUFSLEdBQWpCLENBQVA7QUFFRCxDQUpEO0FBS0FMLE1BQU0sQ0FBQ08sT0FBUCxDQUFlO0FBQ2IsZUFBYUMsRUFBYixFQUFnQjtBQUNsQlgsZUFBVyxDQUFDWSxNQUFaLENBQW1CRCxFQUFuQjtBQUNBLFdBQU8scUJBQVA7QUFDRyxHQUpZOztBQU1iLFlBQVVFLElBQVYsRUFBZUwsTUFBZixFQUF1QjtBQUVyQk0sV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBZixlQUFXLENBQUNnQixNQUFaLENBQW1CO0FBQUNDLFVBQUksRUFBQ0osSUFBTjtBQUFXTCxZQUFNLEVBQUNBLE1BQWxCO0FBQXlCVSxVQUFJLEVBQUM7QUFBOUIsS0FBbkI7QUFDQSxXQUFPTCxJQUFQO0FBQ0Q7O0FBWFksQ0FBZixFOzs7Ozs7Ozs7OztBQ2hCQSxJQUFJVixNQUFKO0FBQVdMLE1BQU0sQ0FBQ00sSUFBUCxDQUFZLGVBQVosRUFBNEI7QUFBQ0QsUUFBTSxDQUFDRSxDQUFELEVBQUc7QUFBQ0YsVUFBTSxHQUFDRSxDQUFQO0FBQVM7O0FBQXBCLENBQTVCLEVBQWtELENBQWxEO0FBQXFEUCxNQUFNLENBQUNNLElBQVAsQ0FBWSxXQUFaO0FBQXlCLElBQUlKLFdBQUo7QUFBZ0JGLE1BQU0sQ0FBQ00sSUFBUCxDQUFZLDRCQUFaLEVBQXlDO0FBQUNKLGFBQVcsQ0FBQ0ssQ0FBRCxFQUFHO0FBQUNMLGVBQVcsR0FBQ0ssQ0FBWjtBQUFjOztBQUE5QixDQUF6QyxFQUF5RSxDQUF6RTtBQUd6R0YsTUFBTSxDQUFDRyxPQUFQLENBQWUsTUFBTSxDQUdwQixDQUhELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IFJlc29sdXRpb25zPW5ldyBNb25nby5Db2xsZWN0aW9uKFwicmVzb2x1dGlvblwiKTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuaW1wb3J0IHtSZXNvbHV0aW9uc30gZnJvbSAnLi4vaW1wb3J0cy9hcGkvcmVzb2x1dGlvbnMnO1xuLy8gdmFyIG15c3FsPXJlcXVpcmUoJ215c3FsJyk7XG4vLyB2YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcblxuXG5NZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG4gIFxufSk7XG4vLy91c2UgZnVuY3Rpb24oKSBub3QgZXM2IGFycm93IGZ1bmN0aW9uIGNveiB0aGlzLnVzZXJpZCBpcyBub3QgYWxsb3dlZCB0aGVyZVxuTWV0ZW9yLnB1Ymxpc2goJ3Jlc29sdXRpb25zJyxmdW5jdGlvbigpe1xuIHZhciB1c2VySWQ9IHRoaXMudXNlcklkO1xuICByZXR1cm4gUmVzb2x1dGlvbnMuZmluZCh7dXNlcklkOnVzZXJJZH0pO1xuXG59KTtcbk1ldGVvci5tZXRob2RzKHtcbiAgJ2RlbGV0ZXRleHQnKGlkKXtcblJlc29sdXRpb25zLnJlbW92ZShpZCk7XG5yZXR1cm4gXCJzdWNjZXNmdWxseSBkZWxldGVkXCI7XG4gIH0sXG5cbiAgJ2FkZHRleHQnKHRleHQsdXNlcklkKSB7XG4gICBcbiAgICBjb25zb2xlLmxvZyhcIm1ldGVvclwiKTtcbiAgICBSZXNvbHV0aW9ucy5pbnNlcnQoe25hbWU6dGV4dCx1c2VySWQ6dXNlcklkLGRvbmU6ZmFsc2V9KTtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxufSkgXG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCAnLi9tZXRob2RzJztcbmltcG9ydCB7UmVzb2x1dGlvbnN9IGZyb20gJy4uL2ltcG9ydHMvYXBpL3Jlc29sdXRpb25zJztcbk1ldGVvci5zdGFydHVwKCgpID0+IHtcbiAgIFxuXG59KTtcblxuIl19
