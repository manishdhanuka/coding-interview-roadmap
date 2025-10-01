function runningSum(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }
  return nums;
}

console.log(runningSum([2, 3, 5, 1, 6])); // [2, 5, 10, 11, 17]
console.log(runningSum([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]
console.log(runningSum([-1, 2, -3, 4, -5])); // [-1, 1, -2, 2, -3]
