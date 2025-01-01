console.log("Faulty Calculator");
let random = Math.random();
console.log("Random:", random);

let a = prompt("Enter First Number : ");
let b = prompt("Enter Second Number : ");
let op = prompt("Enter Operation : ");

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if (random < 0.1) {
    console.log(`Numbers are : ${a} ${obj[op]} ${b}`);
    alert(`Result is : ${eval(`${a} ${obj[op]}${b}`)}`);

}else {
    console.log(`Numbers are : ${a} ${op} ${b}`);
    alert(`Result is : ${eval(`${a} ${op} ${b}`)}`);
    };