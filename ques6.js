// Input: total purchase amount
let totalPurchase = 7200;  

let discountPercent = 0;

// Apply discount tiers
if (totalPurchase >= 10000) {
    discountPercent = 25;
}
else if (totalPurchase >= 5000) {
    discountPercent = 15;
}
else if (totalPurchase >= 2000) {
    discountPercent = 5;
}
else {
    discountPercent = 0;
}

// Calculate discount amount
let discountAmount = (totalPurchase * discountPercent) / 100;

// Final price after discount
let finalPrice = totalPurchase - discountAmount;

// Rounding values
discountAmount = Math.round(discountAmount);
finalPrice = Math.round(finalPrice);

// Output results
console.log("Original Total: ₹" + totalPurchase);
console.log("Discount Applied: " + discountPercent + "%");
console.log("Final Price After Discount: ₹" + finalPrice);
