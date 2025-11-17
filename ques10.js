// Inputs
let age = 19;
let isCitizen = true;   // true = citizen, false = not a citizen

// Eligibility Logic
if (age >= 18) {  
    // Age criteria met → check citizenship
    if (isCitizen === true) {
        // Citizen + age ≥ 18
        if (age >= 21) {
            console.log("Eligible for all services.");
        } else {
            console.log("Eligible to vote only.");
        }
    } else {
        console.log("Only age criteria met.");
    }
} else {
    console.log("Not eligible yet.");
}
