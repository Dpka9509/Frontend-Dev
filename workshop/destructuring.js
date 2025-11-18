const user={
    name:"Aakash",
    age:22,
    city:"Delhi",
    country:"India"
};

const {name , ...others} =user;
console.log(name);
console.log(others);