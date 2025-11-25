const user = {
    username: "yash",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){    
        //console.log("Got username from database");
        //console.log(`user: ${this.username}`); // need to put this because it doesnt know we are talking about own username
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());

//calling this in global context 
console.log(this);

//importance of new, we will learn now

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this;
}

const user1 = new User("Yash", 8, true)
const user2 = new User("yohoho", 120, false)
console.log(user1.constructor);
console.log(user2);
//so here if I do without new, then user2 will overwrite user1 as well