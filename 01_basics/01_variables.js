const accountId = 154236
let accountMail = "surya@yahoo.com"
var accountPassword = "123456789"
accountCity ="Kolkata"

// accountId = 3 (not allowed)

console.log(accountId);
console.table([accountId,accountMail,accountPassword,accountCity])

accountMail = "santrasurya13@re-issue.com"
accountPassword = "28242013"
accountCity = "Pune"

/*
  prefer not use var 
   because of issue in block scope and functional scope
*/


console.table([accountId,accountMail,accountPassword,accountCity])

//Not use Var
