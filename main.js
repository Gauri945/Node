const greet = require('./greetings');
const math = require('./mathOperations');


const userName = 'Alice';
console.log(greet(userName));


const a = 10;
const b = 5;

console.log(`Add: ${math.add(a, b)}`);
console.log(`Subtract: ${math.subtract(a, b)}`);
console.log(`Multiply: ${math.multiply(a, b)}`);
console.log(`Divide: ${math.divide(a, b)}`);
