/* You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself. */

/* Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807. */

function convertToNum(array) {
  const x = Number(array.reverse().join(""));
  return x;
}

function convertToArray(num) {
  let array = String(num).split("").map(Number);
  return array;
}

var addTwoNumbers = function (l1, l2) {
  let sum = convertToNum(l1) + convertToNum(l2);
  let finalArray = convertToArray(sum);
  return finalArray;
};

addTwoNumbers([2, 4, 3], [5, 6, 4]);
