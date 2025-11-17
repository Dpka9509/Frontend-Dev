// Weather variables
let temperature = 28;      // in °C
let isRaining = false;     
let windSpeed = 12;        // in km/h

let activity = "";

// Conditions
if (isRaining === true) {
    activity = "Stay indoors with hot coffee.";
}
else if (temperature > 35) {
    activity = "Go swimming.";
}
else if (temperature < 15 && windSpeed > 20) {
    activity = "Too cold and windy — stay home.";
}
else {
    activity = "Perfect day for a walk.";
}

// Output
console.log(activity);
