// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//Brute force soultion
// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };

const twoSum = (nums, target) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (obj[target - curr] >= 0) {
      return [obj[target - curr], i];
    }
    obj[curr] = i;
  }
};

// {
//     "3": 0, 6-3 = 3
//     "2": 1, 6-2 = 4
//     "4":2, 6-4 = 2
// }

const list = [3, 2, 4];
// combination - [3, 2, 4]->  3+2 , 3+4, 2+4 => 7,7,6
// combination  - [2,7,11,15] -> 2+7, 2+11, 2+15, 7+11, 7+15, 11+15 ->
console.log(twoSum(list, 6));
