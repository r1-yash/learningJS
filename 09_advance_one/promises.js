//bluebird and q are now natively part of js due to theperformance and stuff

const promiseOne = new Promise(function(resolve, reject){
    //Do async tasks -> DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000);
})

//reject, resolve has direct correlation with .then
promiseOne.then(function(){
    console.log("Promise consumed");
})

//did this in single part rather than 2 like above 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("ASync task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("ASync 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Yash", email: "wiwiwi@gmail.com"})
    }, 1000);
})

promiseThree.then(function(e){
    console.log(e);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "Yash",email: "wiwiwi@gmail.com" })
        }
        else{
            reject("ERROR: Something went wrong")
        }
    }, 1000);
})  

//here we will learn about chaining 
promiseFour.then((user) =>{
    console.log((user));
    return user.username
}).then((myUsername) => {
    console.log(myUsername);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise has been completed");
})

const promiseFive = new Promise(function (resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "Yash5",email: "wiwiwi@gmail.com" })
        }
        else{
            reject("ERROR: JS5 went wrong")
        }
    }, 1000); 
})

//another method 
async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
    
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
