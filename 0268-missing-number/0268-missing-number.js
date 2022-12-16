/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let min = Math.min(...nums);
    if (min > 0) return 0;
    while (true) { 
        min += 1; 
        if (nums.indexOf(min) === -1) return min;
    }
};