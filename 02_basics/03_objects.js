//when declared as literals, not singleton 
//by constrcutor its singleton

//obj literals

const myAdd = Symbol("add1")

const JsUser = {
    name: "Yash", //name is declared as string by sysem
    age: 18,
    [myAdd]: "myAdd1sd", //syntax for adding an symbol is like this .. IMPORTANT for INTERVIEW
    email: "chciken.@gmail.com",
    isLog: false
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[myAdd])

// JsUser.email = "I can change values like this"
// //Object.freeze(JsUser)
// JsUser.email = "Now after freeze it wont be changed"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hi JS user")

}

JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`)

}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())