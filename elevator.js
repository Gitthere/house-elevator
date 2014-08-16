/*jslint node: true */
'use strict';

module.exports = {

  goto: function(currentFloor, selectedFloor) {
    if (selectedFloor < currentFloor) {
      return parseInt(selectedFloor-currentFloor);
    }
    return parseInt(selectedFloor); 
  }


};


