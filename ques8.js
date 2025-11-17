// Current salary and increment rate (%)
let currentSalary = 50000;      // monthly or yearly (your choice)
let incrementRate = 10;         // 10% increment

// Array to store projection data
let projection = [];

let salary = currentSalary;

// 5-year projection
for (let year = 1; year <= 5; year++) {

    // Apply increment using assignment operator
    salary += salary * (incrementRate / 100);

    // Push formatted record
    projection.push({
        Year: "Year " + year,
        Salary: Math.round(salary)    // Apply rounding
    });
}

// Print table
console.table(projection);
