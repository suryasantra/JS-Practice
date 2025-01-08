//Array

const myArray = [0,3,4,"Surya"]


console.log(myArray[0]);

myArray.push(6) //Insert an Element
myArray.push("Santra") 

myArray.pop()
myArray.unshift(10)
myArray.shift()
console.log(myArray.includes(6));
console.log(myArray.indexOf(6));

const newArray = myArray.join()
 

console.log(myArray);
console.log(newArray);


console.log(typeof myArray); //type of array is Object
console.log(typeof newArray);


//slice , splice

console.log("A ", myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3)
console.log("c ", myArray);
console.log(myn2);


//Slice: 
//splice:Its manupulate original array



