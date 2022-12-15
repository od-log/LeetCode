function twoSum(nums: number[], target: number): number[] {
    let answer = [];
    for (const item of nums) {
        const num = target-item;
        if(nums.indexOf(num)>-1) {
            const index = nums.indexOf(num);
            const itemIndex = nums.lastIndexOf(item);
            answer = [index, itemIndex];
            if(index !== itemIndex) break;
        }
    }
    return answer;
};