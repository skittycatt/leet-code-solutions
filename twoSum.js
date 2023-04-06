/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // while the first number 
    for (let i = 0; i < nums.length; i++) {
        let ind1 = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            let ind2 = nums[j]
            if (ind1 + ind2 === target) {
                return [i, j]
            }
        }
    }
};

console.log(twoSum([-7,20,2,15], -5))