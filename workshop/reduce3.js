const students=[
    {name:"Aakash", grade:"A"},
    {name:"Deepak", grade:"B"},
    {name:"Khusboo", grade:"A"}
];

const gradeCount = students.reduce((acc, curr) => {
    console.log(acc);
    console.log(curr);
    console.log("acc[curr] || 0="+ acc[curr] || 0);
    console.log("---------------------------------------------------\n");
    acc[curr.grade] = (acc[curr.grade] || 0) + 1;
    return acc;
}, {});

console.log(gradeCount);



