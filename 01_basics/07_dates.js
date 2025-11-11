// //date is an object 

// let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// let MyCreatedDate = new Date(2025, 0, 18)
// let MyCreatedDate2 = new Date("2025-09-24")
// let MyCreatedDate3 = new Date("09-24-2025")

// console.log(MyCreatedDate.toDateString())
// console.log(MyCreatedDate2.toDateString())
// console.log(MyCreatedDate3.toDateString())

let myTimeStamp = Date.now()

//console.log(myTimeStamp.toDateString)
//console.log(MyCreatedDate.getTime())
console.log(Date.now())

//to convert to seconds divide by 1000
console.log(Math.floor(Date.now()/1000))

//I can apply functions to it to get like hours months etc
let newMyDate = new Date()
console.log(newMyDate.getFullYear())
console.log(newMyDate.getMonth()+1)

//** 
newMyDate.toLocaleString('default',{
    weekday: "long",
})
console.log(newMyDate.toLocaleString())