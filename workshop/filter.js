const nums3=[1,2,3,4,5];
const even =nums3.filter(n=>n%2==0);
// const reduce=nums3.reduce((acc,currval)=>{},initialval)
const sum=nums3.reduce((acc,curr)=>acc+curr,0);
console.log(even);
console.log(sum);