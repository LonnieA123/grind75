//Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers
// such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the
// same element twice.

// You can return the answer in any order.

//Examples

//Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//Input: nums = [3,2,4], target = 6
// Output: [1,2]

//Input: nums = [3,3], target = 6
// Output: [0,1]


//array 1
let array = [1,6,7,4]

//array 2
let array3 = [1,5,6,7,4]

let twoSum = function(nums, target) {
    let output = []
    for (let i = 0; i < nums.length; i++){

    for (let y = i + 1; y < nums.length; y++){
        if (nums[y] + nums[i] === target){
            output.push(y)
            output.push(i)

        }
    }

    }
    return output;
};

console.log(twoSum(array,5))
console.log(twoSum(array2,9))