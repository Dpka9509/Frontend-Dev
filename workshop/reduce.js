const letters=["a","b","a","c","b", "a"];
const counts=letters.reduce((acc,curr)=>{
    console.log(acc);
    console.log(curr);
    console.log("acc[curr] || 0="+ acc[curr] || 0);
    console.log("---------------------------------------------------\n");
    acc[curr]=(acc[curr]||0)+1;
    return acc;
},{});  

console.log(counts);