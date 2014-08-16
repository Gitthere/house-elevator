/*jslint node: true */
'use strict';

module.exports = {

  goto: function(currentFloor, selectedFloor) {
    if (selectedFloor > 3 || (selectedFloor-currentFloor) < -3) {
      return 0;
    }
    // console.log(typeof currentFloor);
    // console.log(typeof selectedFloor);

    if (typeof currentFloor !== 'number' || typeof selectedFloor !== 'string') {
      return 0;
    }

    if (selectedFloor < currentFloor) {
      return parseInt(selectedFloor-currentFloor);
    }

    return parseInt(selectedFloor); 
  }


};


