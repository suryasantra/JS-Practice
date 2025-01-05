 const name = "Surya"
 const repoCount = 50


// console.log(name + repoCount + " value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`)


const gameName = new String('Play-mad')

console.log(gameName)
console.log(gameName[5])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf("a"))
console.log(gameName.split("-"));

const newString = gameName.substring(0,3) //here we can't use negative values.
console.log(newString)

const anotherString = gameName.slice(0,4) //here we can use negative values.
console.log(anotherString)

const newStringOne ="   surya   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://surya.com/surya%13santra"
console.log(url.replace("%13","-"))
console.log(url.includes("surya"))

//More infomation about string please read the MDN of string and prototype of string 
