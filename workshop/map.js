let arr=[1,2,3,4];
// console.log(arr.map((e)=> e*10));
// console.log(arr);
//arrow fn

arr.map((n,idx)=>{
    console.log(`My number is ${n*2} My index is ${idx}`);
});
