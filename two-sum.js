/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. */

var twoSum = function (nums, target) {
  let sum = 0;
  const indices = [];

  for (const [i, x] of nums.entries()) {
    for (const [ii, y] of nums.entries()) {
      if (ii != i) {
        sum = x + y;
      }
      if (sum === target) {
        indices.push(i, ii);
        return indices;
      }
    }
  }
};

twoSum([2, 7, 11, 15], 9);
