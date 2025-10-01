function findDifferenceArray(nums) {
  const n = nums.length;
  const differenceArray = new Array(n).fill(0);
  let leftSum = 0;
  let rightSum = 0;
  for (let num of nums) {
    rightSum += num;
  }
  for(let i=0; i<nums.length; i++) {
    rightSum -= nums[i];
    differenceArray[i] = Math.abs(leftSum - rightSum);
    leftSum += nums[i];
  }
  return differenceArray;
}

console.log(findDifferenceArray([2, 5, 1, 6, 1])); // [13, 6, 0, 7, 14]
console.log(findDifferenceArray([3, 3, 3])); // [6, 0, 6]
console.log(findDifferenceArray([1, 2, 3, 4, 5])); // [14, 11, 6, 1, 10]
