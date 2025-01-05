// primitive

// 7 types:string,number,boolean,null,undifined,symbol,bigint


const id =Symbol('123')
const anotherid =Symbol('123')
console.log(id === anotherid)

const bignumber=123456978546236985n
console.log(typeof(bignumber))
//Reference (non primitive)

//Array,object,function
//object 
 const heros = ["shalktiman","superman","krish"];
 let myobj={
    name: "surya",
    age: 19,
 }

 //function
 const myfunction= function(){
    console.log("Hello world")
 }
 console.log(myfunction)

//


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//stack(primitive),heap(Non-primitive)


//stack based

let myname ="surya"
naam = myname
naam = "surjo"
console.log(myname)
console.log(naam)

//Heap based
let userOne={
   email:"user@google.com",
   upi:"user@oksbi",
}

let userTwo = userOne
userTwo.email = "Santrasurya70@gmail.com"
console.log(userOne)
console.log(userTwo)
 


