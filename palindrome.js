// 121 - plaindrome
// 20 - not a palindrome

const isPalindrome = (number) => {
  return number === +number.toString().split('').reverse().join('');
  // 121 -> "121" -> ['1','2','1'] -> ['1','2','1'] -> '121'
};

const result = isPalindrome(20);
console.log(result);
