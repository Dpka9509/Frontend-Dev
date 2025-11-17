// 5 expense categories
let expenses = [8000, 1500, 12000, 3000, 2000]; 
// food, travel, rent, bills, leisure

// Calculate total
let total = 0;
for (let amount of expenses) {
    total += amount;
}

// Calculate average
let average = total / expenses.length;

// Add 10% tax using assignment operator
let finalAmount = total;
finalAmount += finalAmount * 0.10;  // Add 10% tax

// Display results
console.log("Total Expenses: ₹" + total.toFixed(2));
console.log("Average Expense: ₹" + average.toFixed(2));
console.log("Final Amount After 10% Tax: ₹" + finalAmount.toFixed(2));
