/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const sortedNums = Array.isArray(nums) && nums.sort((a,b)=> a-b);
    let min = 0;
    for(item of sortedNums) {
        if(item > min){
            return min;
        }
        min += 1;
    }
    return min;
};