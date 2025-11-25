//lecture 45


// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPasss(){
//         return `${this.password}abc`
//     }

// }

// const chai = new User("chai", "chai@gmail", "123") 

// console.log(chai.encryptPasss());

//we can do the same using function and prototype

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPasss = function() {
    return `${this.password}abc`
}

const tea = new User("tea", "tea@gmail", "123") 

console.log(tea.encryptPasss());