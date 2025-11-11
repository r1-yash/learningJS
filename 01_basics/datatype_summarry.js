//LECTURE 9

const id = Symbol('123')
const anotherId= Symbol('123')

console.log(id === anotherId) // so the symbol return false coz both are different even though value and type same


//Reference -> non promitive data types
//arrays objects functiosn 

const heros = ["a" , "b" , "c"];

let myObj = {
    name: "yash",
    age: 21
}

const myFunction = function(){
    console.log("hello world"); 
}

//so non primitive data types are functions data type but functions themselves are ' object functions'

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/



//==========================================================
 

//stacks - changes in copy sort if 

let a = 5
let b = a

console.log(b)
b=10;
console.log(b)


//heaps ,changes by reference 

let userOne = {
    email: "abc"
}

let userTwo = userOne

userTwo.email = "123"

console.log(userOne)
console.log(userTwo)