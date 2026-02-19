let prices1 = [7, 1, 5, 3, 6, 4];
let prices2 = [7, 6, 4, 3, 1];

const stockBuySell = (prices) => {
    let maxProfit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
        }
    }
    return maxProfit;
}

console.log("stockBuySell: ", stockBuySell(prices1));
console.log("stockBuySell: ", stockBuySell(prices2));

const stockBuySellOptimal = (prices) => {
    let maxProfit = 0;
    let min = Infinity;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        maxProfit = Math.max(prices[i] - min, maxProfit);
    }
    return maxProfit;
}

console.log("stockBuySellOptimal: ", stockBuySellOptimal(prices1));
console.log("stockBuySellOptimal: ", stockBuySellOptimal(prices2));