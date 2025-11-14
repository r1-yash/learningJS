//temp 25

const temp = 43

if(temp == "43"){
    console.log("all good");
}
else{
    console.log("not good, triple = checks variable type also");
}

let loggedIn = true
let upi = true
let loggedInfromGoogle = false
let loggedInfromEmail = true;

if(loggedIn && upi){
    console.log("can buy");
}

if(loggedInfromEmail || loggedInfromGoogle){
    console.log("can buy")
}