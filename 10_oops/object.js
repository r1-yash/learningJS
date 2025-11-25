function zeze(num){
    return num*5
}
//so even a function can reference to object thus can be treated as object 

zeze.zapp = 3
console.log(zeze(5))
console.log(zeze.zapp);
console.log(zeze.prototype);

// function greet(name) {
//     return `Hello, ${name}!`;
//   }
  
//   // Adding a custom property to the function:
//   greet.language = "English";
  
//   // Using the function:
//   console.log(greet("Yash"));       // Output: Hello, Yash!
  
//   // Accessing the custom property:
//   console.log(greet.language);      // Output: English
  

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

//new helps us object creation and prototype linking
//constuctor is called and new object is returned 
const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()
