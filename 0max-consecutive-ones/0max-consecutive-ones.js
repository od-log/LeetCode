/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let max = 0;
    nums.map((item, index) => {
        if(item === 1){
            count += 1; 
        }else{
            if(max < count){
                max = count;
            }
           count = 0;
        }      
    });
    if(max < count){
        max = count;
    }
    return max;
};