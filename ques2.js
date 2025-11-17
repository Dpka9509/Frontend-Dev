// Declare variables of different data types
let userName = "Deepika";          // string
let age = 21;                      // number
let isLoggedIn = true;             // boolean
let hobbies = ["music", "coding"]; // array
let userDetails = { city: "Delhi", pin: 110001 }; // object
let dataNull = null;               // null
let dataUndefined;                 // undefined

const summary = [
    { label: "userName",      value: userName,      type: typeof userName },
    { label: "age",           value: age,           type: typeof age },
    { label: "isLoggedIn",    value: isLoggedIn,    type: typeof isLoggedIn },
    { label: "hobbies",       value: hobbies,       type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    { label: "userDetails",   value: userDetails,   type: typeof userDetails },
    { label: "dataNull",      value: dataNull,      type: dataNull === null ? "null" : typeof dataNull },
    { label: "dataUndefined", value: dataUndefined, type: typeof dataUndefined }
];

console.table(summary);
