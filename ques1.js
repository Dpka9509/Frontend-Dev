// Declare variables
let userName = "Deepika";  
let currentHour = new Date().getHours();

// Time-based greeting
let greeting = "";

if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} 
else if (currentHour >= 12 && currentHour < 17) {
    greeting = `Good Afternoon ${userName}!`;
} 
else {
    greeting = `Good Evening ${userName}!`;
}

// Output
console.log(greeting);
