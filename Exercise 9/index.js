console.log('Faulty Calculator Exercise');
console.log('-------------------------------------------');

console.log("For Addition : 1")
console.log("For Subtract : 2")
console.log("For Multiple : 3")
console.log("For Division : 4")

let pro = Math.random();
console.log("Random:",pro);


let a = parseInt(prompt("Enter First Number : "));
let b =  parseInt(prompt("Enter Second Number : "));
let op =  parseInt(prompt("Enter Operation : "));


if (pro < 0.1) {
    console.log(`Numbers are : ${a}, ${b}`);
    faultycalc(a,b,op);
}
else{
    console.log(`Numbers are : ${a}, ${b}`);
    calc(a,b,op);
}

function calc(a,b,op){
    if (op == 1) {
        console.log("Addition is : ",  a+b);
    }
    else if (op == 2) {
        console.log("Subtraction is : ", a-b);
    }
    else if (op == 3) {
        console.log("Multiplication is : ", a*b);
    }
    else if (op == 4) {
        console.log("Division is : ", a/b);
    }
    else{
        console.log("Invalid Operation");
    }
}


function faultycalc(a,b,op){
    if (op == 1) {
        console.log("Addition is : ", a-b);
    }
    else if (op == 2) {
        console.log("Subtraction is : ", a/b);
    }
    else if (op == 3) {
        console.log("Multiplication is : ", a+b);
    }
    else if (op == 4) {
        console.log("Division is : ", Math.pow(a,b));
    }
    else{
        console.log("Invalid Operation");
    }
}