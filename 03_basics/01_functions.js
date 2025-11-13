//video 19, functions

function addTwo(num1, num2){ //parameters
    return num1+num2
}

// const result = addTwo(3,7) //arguments
// console.log(result)

// const res = addTwo(3,4)
// console.log(res);

// function didLogin(username){
//     if(!username){
//         console.log("Please write the username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(didLogin("Yash"));

// function didLogin2(username = "default"){
//     if(!username){
//         console.log("Please write the username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(didLogin2());

//===============================D ... video 20

function calculateTotal(val1, val2, ...num1){
    return num1
}
// so ... is spread or rest operator, so this is rest operator 
console.log(calculateTotal(200,400,500,700));

const user = {
    username: "Yash", 
    price: 200
}

function handleObject(myUser){
    console.log(`Username is ${myUser.username} and the price is ${myUser.price} `) 
}

handleObject(user)

const Arr = [100, 200, 300]

function getIndexNum(myArr){
    return myArr[1]
}

//console.log(getIndexNum(Arr))