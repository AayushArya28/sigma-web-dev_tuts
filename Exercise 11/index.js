console.log("Print Factorial of a Number");
let no = prompt("Enter Number");

//Method 1: using for Loops 
let element = 1;
for (let index = 1; index <= no; index++) {
    element = index*element;
}
console.log(`Factorial of ${no} is ${element} using for Loops`)

//Method 2: using reduce
let arr = [];
for (let index = 1; index <= no; index++) {
    arr.push(index);
}
const fact = (a,b)=>{
    return a*b
}
console.log("Factorial of", no, "is using reduce method is: ", arr.reduce(fact));

//Additional method using reduce funtion but not working
// let arrN = Array.from(Array(no+1).keys())
// console.log(arrN);
// //Array(no+1).keys()-->   this part gives an array of 0 to n number
// let c = arrN.slice(1,).reduce((a,b)=>{ 
//     return a*b})
// console.log("Factorial of", no, "is using Additional Reduce method is:", arr.reduce(fact));