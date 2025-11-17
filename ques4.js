// Marks of 5 subjects stored in an array
let marks = [78, 85, 92, 66, 74];   // Example input

// Step 1: Check validation — any subject < 35 → Detained
let hasFail = marks.some(m => m < 35);

// Step 2: Calculate total and average
let total = 0;
for (let m of marks) {
    total += m;
}

let average = total / marks.length;

// Step 3: Calculate percentage (out of 500)
let percentage = (total / 500) * 100;

// Step 4: Apply promotion conditions
let status = "";

if (hasFail) {
    status = "Detained";  // Automatic detention
} else if (percentage >= 85) {
    status = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    status = "Promoted";
} else {
    status = "Detained";
}

// Step 5: Show results
console.log("Total Marks:", total);
console.log("Average Marks:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Status:", status);
