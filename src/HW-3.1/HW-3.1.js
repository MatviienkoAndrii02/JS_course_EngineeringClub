// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

var twoSum = function (nums, target) {
  for (i in nums) {
    for (let j = 0; j < i; j++) {
      if (nums[j] + nums[i] === target) {
        return [j, Number(i)];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 26));

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

var lengthOfLastWord = function (s) {
  let words = s.split(" ");
  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i].length > 0) {
      return words[i].length;
    }
  }
  return 0;
};

console.log(lengthOfLastWord("Hello World"));
