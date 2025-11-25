function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

/*
So here, what call does is ...
Inside createUser is called SetUsername, but it isnt called, just igven the reference
So now we need to use call, which helps us to call methodof an object, substituting another object for current object 
We also need to give this, which is of setUsername
*/
function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);