//arrays

 const myArr = [0,1,2,3,4]

// const myString = ["a", "b"]

// const myArr2 = new Array(1,2,3)

// console.log(myArr[1])

// myArr.push(6);

// console.log(myArr)
// //pop is there also 
// //upshift adds at first, not so optimal, shift removes

// console.log(myArr.includes(9))

// ** important 
//so join changes the array type to string
// const newArr = myArr.join()
// console.log(newArr)

console.log("A ", myArr)

const myn1 = myArr.slice(1,3) //thirs isnt included

console.log(myn1)

console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)

console.log(myArr)

//- v.v important, splice changes original array and includes last index alsp 