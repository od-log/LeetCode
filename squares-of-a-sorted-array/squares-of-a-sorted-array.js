/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squareNums = nums.map((item, index) => {
        return item*item;
    })
    squareNums.sort((a, b) => a-b);
    return squareNums;
};