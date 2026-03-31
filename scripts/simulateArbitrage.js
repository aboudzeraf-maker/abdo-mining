// Simulate Arbitrage Profit
const borrowAmount = 100000; // USDC borrowed amount
const fees = { buy: 0.003, sell: 0.003 }; // 0.3% trading fees

// Example prices from different exchanges
const priceExchangeA = 1.01; // Price on Exchange A
const priceExchangeB = 0.99; // Price on Exchange B

// Function to calculate arbitrage profit
function calculateArbitrageProfit(borrowedAmount, priceA, priceB, fees) {
    const buyPrice = priceA * (1 + fees.buy);
    const sellPrice = priceB * (1 - fees.sell);
    const canBuy = Math.floor(borrowedAmount / buyPrice);
    const totalGained = canBuy * sellPrice;
    const profit = totalGained - borrowedAmount;
    return profit;
}

// Calculate the profit
const arbitrageProfit = calculateArbitrageProfit(borrowAmount, priceExchangeA, priceExchangeB, fees);

console.log(`Arbitrage Profit: $${arbitrageProfit.toFixed(2)}`);