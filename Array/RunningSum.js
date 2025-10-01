function runningSum(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }
  return nums;
}

console.log(runningSum([2, 3, 5, 1, 6]));
