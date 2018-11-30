'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var interventions = exports.interventions = [];

var InterventionClass = function () {
  function InterventionClass() {
    _classCallCheck(this, InterventionClass);
  }

  _createClass(InterventionClass, [{
    key: 'create',


    // eslint-disable-next-line class-methods-use-this
    value: function create(data) {

      var arr = [];
      while (arr.length < 8) {
        var r = Math.floor(Math.random() * 10); // + 1;
        arr.push(r);
      }

      var newIntervention = {
        id: arr.join(''),
        createdOn: new Date().toDateString(),
        createdBy: data.userid,
        type: 'Intervention',
        location: data.latitude + ', ' + data.longitude,
        status: 'Draft',
        Images: 'Images here..', //Videos
        comment: data.comment
      };

      interventions.push(newIntervention);
      var id = newIntervention.id;

      var response = {
        id: id,
        message: "Created Intervention record"
      };
      //return newRedFlag;
      return response;
    }
    /*
      getSpecificRedFlag(id) {
        let userFound = false;
        interventions.forEach((element) =>{
          if((element.id === id)){
            userFound = element;
            return userFound;
          }
        });
        return userFound;
      }
    */
    /*  
     getAllinterventionsRecord() {
         return interventions;
     }
    */
    /*
     editRedFlagLocation(id, latitude, longitude){
        let recordFound = false;
        interventions.forEach((element) =>{
          if((element.id === id)){
            element.location =  `${latitude}, ${longitude}`;
            recordFound = {
                id,
                message: "Updated red-flag record’s location"
            };
            return recordFound;
          }
        });
        return recordFound;
    
     }
    */
    /*
    editRedFlagComment(id, comment){
        let recordFound = false;
        interventions.forEach((element) =>{
          if((element.id === id)){
            element.comment =  comment;
            recordFound = {
                id,
                message: "Updated red-flag record’s comment"
            };
            return recordFound;
          }
        });
        return recordFound;
     }
    */
    /*
     deleteRedFlag(id){
        let recordFound = false;
        interventions.forEach((element, index) =>{
          if((element.id === id)){
            interventions.splice(index, 1);
            recordFound = {
                id,
                message: "red-flag record has been deleted"
            };
            return recordFound;
          }
        });
        return recordFound;
     }
     */

  }]);

  return InterventionClass;
}();

var newInterventionObject = exports.newInterventionObject = new InterventionClass();