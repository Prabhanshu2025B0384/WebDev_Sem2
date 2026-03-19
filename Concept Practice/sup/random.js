const add=(a,b)=>a+b;
console.log(add(5,6));


let arr=[1,2,3,4,5,6];
let arrsqua=arr.map(value =>(value*value));
console.log(arrsqua);
let arrfilt=arrsqua.filter(value =>(value>10));
console.log(arrfilt);

let sum = nums.reduce((acc, curr) => {return acc + curr;}, 0);