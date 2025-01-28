// Fibonacchi series -> 0,1,1,2,3,5,8,13
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2) , for n > 1
// Input: n = 3 -> output: 2

const fib = (number) => {
  const list = [0, 1];

  for (let i = 2; i <= number; i++) {
    list.push(list[i - 1] + list[i - 2]);
  }
  console.log(list[number]);
};

fib(5);

// recursion
// n = 3
const fibRecursion = (num) => {
  if (num <= 1) return num;
  return fibRecursion(num - 1) + fibRecursion(num - 2);
};

console.log(fibRecursion(5));