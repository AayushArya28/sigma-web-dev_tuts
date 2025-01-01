console.log('Faulty Calculator Exercise');
console.log('-------------------------------------------');

console.log("For Addition : 1")
console.log("For Subtract : 2")
console.log("For Multiple : 3")
console.log("For Division : 4")

function calc(a,b,op){
    let result = 0;
    switch(op){
        case 1:
            result = a+b;
            console.log("Addition : ",result);
            break;
        case 2:
            result = a-b;
            console.log("Subtract : ",result);
            break;
        case 3:
            result = a*b;
            console.log("Multiple : ",result);
            break;
        case 4:
            result = a/b;
            console.log("Division : ",result);
            break;
        default:
            console.log("Invalid Operation");
    }
}

function faultycalc(a,b,op){
    let result = 0;
    switch(op){
        case 1:
            result = a-b;
            console.log("Addition : ",result);
            break;
        case 2:
            result = a/b;
            console.log("Subtract : ",result);
            break;
        case 3:
            result = a+b;
            console.log("Multiple : ",result);
            break;
        case 4:
            result = Math.pow(a,b);
            console.log("Division : ",result);
            break;
        default:
            console.log("Invalid Operation");
    }
}

let a = 10;
let b = 5;
let op = 1;

let pro = Math.random();
if (pro < 0.1) {
    console.log(`Numbers are : ${a}, ${b}`);
    faultycalc(a,b,op);
}
else{
    console.log(`Numbers are : ${a}, ${b}`);
    calc(a,b,op);
}