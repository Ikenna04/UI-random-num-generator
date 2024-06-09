// Generating A Random Number From The Number Inputed By The User

const myNum = prompt('Enter Yoiur Prefered Max Number');

let randomNum = Math.floor(Math.random() * myNum) + 1;

console.log(randomNum);
alert(`The random number is ${randomNum}`);
