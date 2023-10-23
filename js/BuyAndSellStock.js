 // You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.








// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input:
//     prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

     prices =
         [    7
             ,1
             ,5
             ,3
             ,6
             ,3
         ]

 let maxProfit = function(prices) {

   //initialize our max profit
   let maxProfit = 0;

   //create our min price
   let minPrice = prices[0]

     //loop through our prices parameter
     for (let i = 1; i < prices.length; i++){

         //create currentProfit (which is our minPrice subtracted by the current price we are on)
         //minPrice starts off as the first price in our array
         let currentProfit =  prices[i] - minPrice ;

         //if our max profit is less than our current profit our max profit would now be equal to the current profit
         if (maxProfit < currentProfit){
             maxProfit = currentProfit
         }

         //if our minPrice (which starts at the first price in the array) is greater than the price our minPrice would now equal our current price
         if (minPrice > prices[i]){
             minPrice = prices[i]
         }
     }

     //return our end profit
     return maxProfit;
 };
console.log(maxProfit(prices))



