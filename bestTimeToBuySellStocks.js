// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

//BruteForce solution

// const maxProfit = (prices) => {
// [7, 1, 5, 3, 6, 4];
// 1-7, 5-7, 3-7, 6-7, 4-7 bought at 7
// 5-1 , 3-1, 6-1, 4-1, bought at 1
// 3-5, 6-5 , 4-5 bought at 5
// 6-3, 4-3 bought at 3
// 4-6 bought at 6

//   let globalProfit = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const currentProfit = prices[j] - prices[i];
//       if (currentProfit > globalProfit) {
//         globalProfit = currentProfit;
//       }
//     }
//   }
//   return globalProfit;
// };

// We will use greedy algorithm

const maxProfit = (prices) => {
  let minStockPurchasePrice = prices[0] || 0;
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minStockPurchasePrice) {
      minStockPurchasePrice = prices[i];
    }
    profit = Math.max(profit, prices[i] - minStockPurchasePrice);
  }
  return profit;
};

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));

// [7, 1, 5, 3, 6, 4];

// min = 7 => 1 =>
// profit = 0 => 0 => 5-1 = 4 => 6-1 = 5 =>
