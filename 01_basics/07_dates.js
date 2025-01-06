//Dates


let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());
// console.log(myDate.toString());

console.log(typeof(mydate))



let myCreatedDate = new Date(2025,0,6) // js has 1st month start as zero
console.log(myCreatedDate.toDateString());

let myCreateDate1 = new Date("2025-01-07")//when format is yyyy-mm-dd then the month is satrt from zero
console.log(myCreateDate1.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(Date.now())

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
