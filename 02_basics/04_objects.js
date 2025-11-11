

const tinderUser = new Object() //singleton object
const tinderUser2 = {} //non singelon

tinderUser.id = "123abc"
tinderUser.name = "wiwi"
//can access keys or balues 
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) //array in array
console.log(tinderUser.hasOwnProperty('email')) //check if it has it 

//console.log(tinderUser)

const regUser = {
    fullname: {
        userfullname: {
            firstName: "yash",
            lastName: "Singhal"
        }
    }
}
//we can write and access several nested components
//console.log(regUser.fullname.userfullname.firstName)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2}. same problem, it will make a new object and put bnoth objects in it

//const obj3 = Object.assign({}, obj1, obj2), less used still used
const obj3 = {... obj1, ...obj2}
//onsole.log(obj3)

// 8==================D video 18

const course = {
    vidName: "de-const",
    number: "18",
}

//can be acceses simply like 
console.log(course.vidName)

//i can reconstruct and re write name
const {vidName : Vid} = course

console.log(Vid)

 