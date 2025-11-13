//video 23

const detail = {
    name: "Yash",
    age:21,

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to the website`);
    }
}

detail.welcomeMessage()

detail.name = "Sam"

detail.welcomeMessage()
 
console.log(this) 
// on browser its window object but here its empty object 
