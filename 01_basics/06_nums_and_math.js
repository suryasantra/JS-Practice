const score = 300
console.log(score)


const balance = new Number(500)
console.log(balance)


console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 24.8576
console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString());


//++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,5,6,8,2,9));
console.log(Math.max(4,3,5,6,8,2,9));


console.log(Math.random()) //It's give random value between 0&1
console.log((Math.random()*10 )+ 1)//It's return positive value less than 10 and greater than 0.
console.log(Math.floor(Math.random()*10 )+ 1)


const min = 10
const max = 20

console.log(Math.random() * (max - min + 1))
console.log(Math.floor(Math.random() * (max - min + 1)) + min)




