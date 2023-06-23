/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {

    for(let i = 0; i < arr.length; i++){
      if(arr.includes(arr[i]*2) && arr[i] !== 0){
            return true;
        }
      if(arr[i] === 0 && arr.lastIndexOf(0) !== i){
          return true;
      }

    }
    return false;
};